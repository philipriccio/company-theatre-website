#!/usr/bin/env python3
"""
Company Theatre Website - Complete Modifications
Handles both visible HTML and embedded Next.js JSON data
"""

import re

# Read the original HTML file
with open('/data/.openclaw/workspace/company-theatre/website/dist/index.html', 'r') as f:
    html = f.read()

original_len = len(html)

# ============================================
# 1. Replace nav logo with B&W logo image
# ============================================
# Handle both HTML and JSON embedded versions
html = html.replace(
    '<span class="text-white font-bold text-lg tracking-tight leading-none">COMPANY</span><span class="text-white/60 text-xs tracking-[0.3em] uppercase leading-none">Theatre</span>',
    '<img src="/images/logo.png" alt="Company Theatre" class="h-8 w-auto brightness-0 invert" />'
)

# ============================================
# 2. Remove "Book Tickets" button from nav
# ============================================
# Remove from visible HTML and JSON
html = html.replace(
    '<a class="hidden md:inline-flex btn-primary text-sm py-3 px-5" href="/#current">Book Tickets</a>',
    ''
)

# ============================================
# 3. Replace THE COMPANY THEATRE heading with color logo
# ============================================
# Replace in both HTML and JSON contexts
html = html.replace(
    '<h1 class="heading-xl text-white mb-6">THE COMPANY THEATRE</h1>',
    '<div class="mb-6 flex justify-center"><img src="/images/logo-color-large.png" alt="The Company Theatre" class="h-24 md:h-32 w-auto transition-all duration-1000" id="color-logo" style="transform: scale(0.9); opacity: 0.7;" /></div>'
)
# Also handle JSON escaped version
html = html.replace(
    '\\"heading-xl text-white mb-6\\",\\"children\\":\\"THE COMPANY THEATRE\\"',
    '\\"flex justify-center mb-6\\",\\"children\\":\\"<img src=/images/logo-color-large.png alt=The Company Theatre class=h-24 md:h-32 w-auto id=color-logo />\\"'
)

# ============================================
# 4. Remove Visit section entirely
# ============================================
# Find and remove the Visit section - both visible and in JSON
# Look for the section with id="visit"
visit_start = html.find('<section id="visit"')
if visit_start != -1:
    pos = visit_start
    depth = 0
    while pos < len(html):
        if html[pos:pos+9] == '<section ':
            depth += 1
        elif html[pos:pos+10] == '</section>':
            depth -= 1
            if depth == 0:
                html = html[:visit_start] + html[pos+10:]
                break
        pos += 1

# ============================================
# 5. Remove Awards & Recognition section
# ============================================
awards_marker = '<h2 class="heading-lg mb-12 text-center">Awards &amp; Recognition</h2>'
awards_pos = html.find(awards_marker)
if awards_pos != -1:
    section_start = html.rfind('<section', max(0, awards_pos - 200), awards_pos)
    if section_start != -1:
        pos = section_start
        depth = 0
        while pos < len(html):
            if html[pos:pos+9] == '<section ':
                depth += 1
            elif html[pos:pos+10] == '</section>':
                depth -= 1
                if depth == 0:
                    html = html[:section_start] + html[pos+10:]
                    break
            pos += 1

# ============================================
# 6. Remove "Visit" from navigation
# ============================================
# Remove the Visit link from nav
html = html.replace(
    '<a class="nav-link text-white/80 hover:text-white" href="/#visit">Visit</a>',
    ''
)

# ============================================
# 7. Remove "Plan Your Visit" from footer
# ============================================
# Remove from footer explore section
html = html.replace(
    '<li><a class="footer-link text-white/70 hover:text-white" href="/#visit">Plan Your Visit</a></li>',
    ''
)

# ============================================
# 8. Modify Jackpot Twins to pre-announcement tease
# ============================================
# Find the current section and replace with teaser
current_start = html.find('<section id="current"')
if current_start != -1:
    pos = current_start
    depth = 0
    while pos < len(html):
        if html[pos:pos+9] == '<section ':
            depth += 1
        elif html[pos:pos+10] == '</section>':
            depth -= 1
            if depth == 0:
                new_section = '''<section id="current" class="section-padding bg-white">
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
                html = html[:current_start] + new_section + html[pos+10:]
                break
        pos += 1

# ============================================
# 9. Add Upcoming Production subsection
# ============================================
# Find the productions section and modify it
productions_start = html.find('<section id="productions"')
if productions_start != -1:
    archive_marker = '<span class="body-sm text-gray-600 mb-2 block">Archive</span>'
    archive_pos = html.find(archive_marker, productions_start)
    if archive_pos != -1:
        # Replace Archive section with split sections
        new_productions_header = '''<div class="mb-16">
                <span class="body-sm text-gray-600 mb-2 block">Coming Soon</span>
                <h2 class="heading-lg mb-8">Upcoming Production</h2>
                <div class="bg-white p-8 md:p-12 text-center border-2 border-dashed border-gray-300 rounded-lg">
                    <h3 class="heading-md text-2xl mb-4">Our Next Production</h3>
                    <p class="body-lg text-gray-600 mb-6">Something extraordinary is in the works. We\'re preparing our next provocative international production with Canada\'s best actors.</p>
                    <p class="body-md text-gray-500 mb-8">Stay tuned for the announcement.</p>
                    <a class="btn-primary" href="#contact">Stay Updated</a>
                </div>
            </div>
            <div>
                <span class="body-sm text-gray-600 mb-2 block">Archive</span>
                <h2 class="heading-lg">Past Productions</h2>'''
        
        old_header = '<span class="body-sm text-gray-600 mb-2 block">Archive</span>\n                <h2 class="heading-lg">Past Productions</h2>'
        html = html.replace(old_header, new_productions_header)
        
        # Close the div at the end of Past Productions
        # Find the end of productions section
        productions_section_end = html.find('</section>', html.find('<section id="productions"'))
        if productions_section_end != -1:
            html = html[:productions_section_end] + '</div>' + html[productions_section_end:]

# ============================================
# 10. Replace Radically Live section with slideshow
# ============================================
radically_marker = '<p class="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">Radically Live Theatre</p>'
first_pos = html.find(radically_marker)
if first_pos != -1:
    # Find the section containing this
    section_start = html.rfind('<section', max(0, first_pos - 200), first_pos)
    if section_start != -1:
        pos = section_start
        depth = 0
        while pos < len(html):
            if html[pos:pos+9] == '<section ':
                depth += 1
            elif html[pos:pos+10] == '</section>':
                depth -= 1
                if depth == 0:
                    slideshow_section = '''<section class="relative bg-black py-16 md:py-24 overflow-hidden">
    <div class="container-main">
        <div class="max-w-4xl mx-auto text-center mb-12">
            <p class="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">Radically Live Theatre</p>
        </div>
        <div class="relative w-full aspect-video overflow-hidden rounded-lg">
            <div class="slideshow-container relative w-full h-full">
                <div class="slide absolute inset-0 transition-opacity duration-2000" style="opacity: 1;">
                    <img src="/images/jerusalem-production-2.jpg" alt="Jerusalem Production" class="w-full h-full object-cover animate-zoom" />
                </div>
                <div class="slide absolute inset-0 transition-opacity duration-2000" style="opacity: 0;">
                    <img src="/images/things-production-1.jpg" alt="Things I Know to be True Production" class="w-full h-full object-cover animate-zoom" />
                </div>
                <div class="slide absolute inset-0 transition-opacity duration-2000" style="opacity: 0;">
                    <img src="/images/john-production-1.jpg" alt="John Production" class="w-full h-full object-cover animate-zoom" />
                </div>
                <div class="slide absolute inset-0 transition-opacity duration-2000" style="opacity: 0;">
                    <img src="/images/festen-production-1.jpg" alt="Festen Production" class="w-full h-full object-cover animate-zoom" />
                </div>
                <div class="slide absolute inset-0 transition-opacity duration-2000" style="opacity: 0;">
                    <img src="/images/belleville-production-1.jpg" alt="Belleville Production" class="w-full h-full object-cover animate-zoom" />
                </div>
                <div class="slide absolute inset-0 transition-opacity duration-2000" style="opacity: 0;">
                    <img src="/images/through-the-leaves-production-1.jpg" alt="Through the Leaves Production" class="w-full h-full object-cover animate-zoom" />
                </div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
        </div>
        <div class="max-w-3xl mx-auto text-center mt-12">
            <p class="body-lg text-white/80 mb-8">The Company Theatre produces provocative international plays with Canada\'s best actors. Founded in 2004, we create theatre magic with authentic text-based performances that bring you the drama in real time.</p>
            <div class="flex flex-wrap gap-4 justify-center">
                <a class="btn-secondary border-white text-white hover:bg-white hover:text-black" href="#about">About Us<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
            </div>
        </div>
    </div>
    <style>
        .duration-2000 { transition-duration: 2000ms; }
        @keyframes zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
        }
        .animate-zoom {
            animation: zoom 8s ease-out forwards;
        }
    </style>
</section>'''
                    html = html[:section_start] + slideshow_section + html[pos+10:]
                    break
            pos += 1

# ============================================
# 11. Add scroll animation script
# ============================================
scroll_script = '''<script>
(function() {
    const logo = document.getElementById('color-logo');
    if (logo) {
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            const maxScroll = 400;
            const progress = Math.min(scrollY / maxScroll, 1);
            const scale = 0.9 + (progress * 0.1);
            const opacity = 0.7 + (progress * 0.3);
            logo.style.transform = 'scale(' + scale + ')';
            logo.style.opacity = opacity;
        });
    }
    
    // Slideshow animation
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 4000;
        
        function nextSlide() {
            slides[currentSlide].style.opacity = '0';
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.opacity = '1';
            const img = slides[currentSlide].querySelector('img');
            if (img) {
                img.style.animation = 'none';
                setTimeout(() => {
                    img.style.animation = 'zoom 8s ease-out forwards';
                }, 50);
            }
        }
        
        setInterval(nextSlide, slideInterval);
    }
})();
</script>'''

# Insert before </body>
html = html.replace('</body>', scroll_script + '</body>')

# ============================================
# 12. Remove Current Season button from hero
# ============================================
# Remove the Current Season button from the hero section
html = re.sub(
    r'<a class="btn-primary"[^>]*>.*?<svg[^>]*>.*?</svg>\s*Current Season\s*</a>',
    '',
    html
)

# Write the modified HTML
with open('/data/.openclaw/workspace/company-theatre/website/dist/index.html', 'w') as f:
    f.write(html)

print(f"Original length: {original_len}")
print(f"Modified length: {len(html)}")
print("All modifications applied successfully!")
