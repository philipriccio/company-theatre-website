#!/usr/bin/env python3
"""
Company Theatre Website Modifications Script
"""

import re
import os

# Read the original HTML file
with open('/data/.openclaw/workspace/company-theatre/website/dist/index.html', 'r') as f:
    html = f.read()

# Store original length for comparison
original_len = len(html)

# ============================================
# 1. Replace "Company Theatre" text in nav with B&W logo
# ============================================
# Original: <a class="flex flex-col items-center" href="/"><span class="text-white font-bold text-lg tracking-tight leading-none">COMPANY</span><span class="text-white/60 text-xs tracking-[0.3em] uppercase leading-none">Theatre</span></a>
# Replace with: <a class="flex items-center" href="/"><img src="/images/logo.png" alt="Company Theatre" class="h-8 w-auto brightness-0 invert" /></a>

nav_logo_pattern = r'<a class="flex flex-col items-center" href="/">\s*<span class="text-white font-bold text-lg tracking-tight leading-none">COMPANY</span>\s*<span class="text-white/60 text-xs tracking-\[0\.3em\] uppercase leading-none">Theatre</span>\s*</a>'
nav_logo_replacement = '<a class="flex items-center" href="/"><img src="/images/logo.png" alt="Company Theatre" class="h-8 w-auto brightness-0 invert" /></a>'
html = re.sub(nav_logo_pattern, nav_logo_replacement, html)

# ============================================
# 2. Remove "Book Tickets" button from nav
# ============================================
# Remove: <a class="hidden md:inline-flex btn-primary text-sm py-3 px-5" href="/#current">Book Tickets</a>

book_tickets_pattern = r'<a class="hidden md:inline-flex btn-primary text-sm py-3 px-5" href="/#current">Book Tickets</a>'
html = re.sub(book_tickets_pattern, '', html)

# ============================================
# 3. Replace "THE COMPANY THEATRE" heading with color logo
# ============================================
# Find and replace the h1 heading in the Radically Live section
# Original: <h1 class="heading-xl text-white mb-6">THE COMPANY THEATRE</h1>
# Replace with: <div class="mb-6 flex justify-center"><img src="/images/logo-color-large.png" alt="The Company Theatre" class="h-24 md:h-32 w-auto" id="color-logo" /></div>

company_theatre_pattern = r'<h1 class="heading-xl text-white mb-6">THE COMPANY THEATRE</h1>'
company_theatre_replacement = '<div class="mb-6 flex justify-center"><img src="/images/logo-color-large.png" alt="The Company Theatre" class="h-24 md:h-32 w-auto transition-all duration-1000" id="color-logo" style="transform: scale(0.9); opacity: 0.7;" /></div>'
html = re.sub(company_theatre_pattern, company_theatre_replacement, html)

# ============================================
# 4. Remove the "Visit" section
# ============================================
# Find and remove the entire Visit section (<section id="visit" ...> ... </section>)
# This is more complex, need to find the section and remove it

visit_pattern = r'<section id="visit" class="section-padding bg-gray-100">.*?</section>'
# Need to handle nested sections - this is tricky with regex
# Let's use a different approach - find start and end

# Find the section start
visit_start = html.find('<section id="visit"')
if visit_start != -1:
    # Find the closing </section> tag by counting nested sections
    pos = visit_start
    depth = 0
    while pos < len(html):
        if html[pos:pos+9] == '<section ':
            depth += 1
        elif html[pos:pos+10] == '</section>':
            depth -= 1
            if depth == 0:
                # Found the end
                visit_end = pos + 10
                html = html[:visit_start] + html[visit_end:]
                break
        pos += 1

# ============================================
# 5. Remove "Awards & Recognition" section
# ============================================
# Find and remove the entire Awards section

awards_pattern = r'<section class="section-padding bg-white">\s*<div class="container-main">\s*<h2 class="heading-lg mb-12 text-center">Awards &amp; Recognition</h2>'
awards_start = html.find('<h2 class="heading-lg mb-12 text-center">Awards &amp; Recognition</h2>')
if awards_start != -1:
    # Go back to find the section start
    section_start = html.rfind('<section', max(0, awards_start - 200), awards_start)
    if section_start != -1:
        # Find the end of this section
        pos = section_start
        depth = 0
        while pos < len(html):
            if html[pos:pos+9] == '<section ':
                depth += 1
            elif html[pos:pos+10] == '</section>':
                depth -= 1
                if depth == 0:
                    awards_end = pos + 10
                    html = html[:section_start] + html[awards_end:]
                    break
            pos += 1

# ============================================
# 6. Update footer nav to remove "Plan Your Visit"
# ============================================
# Remove the "Plan Your Visit" link from footer
footer_visit_pattern = r'<li>\s*<a class="footer-link text-white/70 hover:text-white" href="/#visit">Plan Your Visit</a>\s*</li>'
html = re.sub(footer_visit_pattern, '', html)

# ============================================
# 7. Update main nav to remove "Visit" link
# ============================================
# Remove: <a class="nav-link text-white/80 hover:text-white" href="/#visit">Visit</a>
nav_visit_pattern = r'<a class="nav-link text-white/80 hover:text-white" href="/#visit">Visit</a>'
html = re.sub(nav_visit_pattern, '', html)

# ============================================
# 8. Split Productions section into "Upcoming Production" and "Past Productions"
# ============================================
# The current section has "Past Productions" - need to add "Upcoming Production" before it

# First, let's update the Past Productions heading
past_prod_pattern = r'<h2 class="heading-lg">Past Productions</h2>'
past_prod_replacement = '<h2 class="heading-lg">Past Productions</h2>'
html = re.sub(past_prod_pattern, past_prod_replacement, html)

# ============================================
# 9. Modify Jackpot Twins section to show pre-announcement tease
# ============================================
# Replace the full content with a tease message

jackpot_full_pattern = r'<section id="current" class="section-padding bg-white">.*?</section>'
jackpot_start = html.find('<section id="current"')
if jackpot_start != -1:
    pos = jackpot_start
    depth = 0
    while pos < len(html):
        if html[pos:pos+9] == '<section ':
            depth += 1
        elif html[pos:pos+10] == '</section>':
            depth -= 1
            if depth == 0:
                jackpot_end = pos + 10
                # Create the new tease section
                new_jackpot = '''<section id="current" class="section-padding bg-white">
    <div class="container-main">
        <div class="max-w-3xl mx-auto text-center py-16">
            <span class="status-badge">Coming Soon</span>
            <h2 class="heading-xl mb-6 mt-8">Our Next Production</h2>
            <p class="body-lg text-gray-700 mb-8">Something extraordinary is in the works. We\'re preparing our next provocative international production with Canada\'s best actors.</p>
            <p class="body-md text-gray-600 mb-8">Stay tuned for the announcement. Sign up for our newsletter to be the first to know.</p>
            <div class="flex flex-wrap gap-4 justify-center">
                <a class="btn-primary" href="#contact">Stay Updated</a>
            </div>
        </div>
    </div>
</section>'''
                html = html[:jackpot_start] + new_jackpot + html[jackpot_end:]
                break
        pos += 1

# ============================================
# 10. Add scroll animation JavaScript for the color logo
# ============================================
# Add script before closing body tag

scroll_script = '''<script>
(function() {
    const logo = document.getElementById('color-logo');
    if (logo) {
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            const maxScroll = 400;
            const progress = Math.min(scrollY / maxScroll, 1);
            
            // Animate from closed/compact to fully open
            // Start: scale(0.9), opacity(0.7)
            // End: scale(1), opacity(1)
            const scale = 0.9 + (progress * 0.1);
            const opacity = 0.7 + (progress * 0.3);
            
            logo.style.transform = 'scale(' + scale + ')';
            logo.style.opacity = opacity;
        });
    }
})();
</script>'''

# Insert before </body>
html = html.replace('</body>', scroll_script + '</body>')

# ============================================
# 11. Remove "Current Season" button from hero section
# ============================================
# Remove the Current Season button

current_season_pattern = r'<a class="btn-primary" href="#current">\s*<svg[^>]*>.*?</svg>\s*Current Season\s*</a>'
html = re.sub(current_season_pattern, '', html)

# ============================================
# 12. Update footer to remove "Plan Your Visit" from explore
# ============================================
# Already done above

# Write the modified HTML
with open('/data/.openclaw/workspace/company-theatre/website/dist/index.html', 'w') as f:
    f.write(html)

print(f"Original length: {original_len}")
print(f"Modified length: {len(html)}")
print("Changes applied successfully!")
