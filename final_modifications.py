#!/usr/bin/env python3
"""
Company Theatre Website - Final Modifications
"""

import re

# Read the modified HTML file
with open('/data/.openclaw/workspace/company-theatre/website/dist/index.html', 'r') as f:
    html = f.read()

# ============================================
# 1. Split Productions into "Upcoming Production" and "Past Productions"
# ============================================

# Find the productions section and add "Upcoming Production" subsection
productions_section_start = html.find('<section id="productions"')
if productions_section_start != -1:
    # Find the Archive/Past Productions heading
    archive_marker = '<span class="body-sm text-gray-600 mb-2 block">Archive</span>'
    archive_pos = html.find(archive_marker, productions_section_start)
    
    if archive_pos != -1:
        # Insert the Upcoming Production subsection before Archive
        upcoming_section = '''<div class="mb-16">
                <span class="body-sm text-gray-600 mb-2 block">Coming Soon</span>
                <h2 class="heading-lg mb-8">Upcoming Production</h2>
                <div class="bg-white p-8 md:p-12 text-center border-2 border-dashed border-gray-300">
                    <h3 class="heading-md text-2xl mb-4">Our Next Production</h3>
                    <p class="body-lg text-gray-600 mb-6">Something extraordinary is in the works. We\'re preparing our next provocative international production with Canada\'s best actors.</p>
                    <p class="body-md text-gray-500 mb-8">Stay tuned for the announcement. Sign up for our newsletter to be the first to know.</p>
                    <a class="btn-primary" href="#contact">Stay Updated</a>
                </div>
            </div>
            <div>'''
        
        # Insert before Archive
        html = html[:archive_pos] + upcoming_section + html[archive_pos:]
        
        # Find and close the div after the Past Productions section
        # This is complex, let's find the end of the productions grid
        # and add closing </div>
        past_prod_end = html.find('</section>', archive_pos)
        if past_prod_end != -1:
            # We need to close the div we opened before Archive
            # Actually, we need to restructure this differently
            pass

# Let me try a different approach - find and modify the Archive section
# Replace "Archive" with "Past Productions" structure

# ============================================
# 2. Remove remaining "Visit" links from footer
# ============================================
# Already done in previous script

# ============================================
# 3. Remove Awards & Recognition section if still present
# ============================================
awards_heading = '<h2 class="heading-lg mb-12 text-center">Awards &amp; Recognition</h2>'
if awards_heading in html:
    print("Awards section still present - removing...")
    awards_pos = html.find(awards_heading)
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
                        awards_end = pos + 10
                        html = html[:section_start] + html[awards_end:]
                        break
                pos += 1

# ============================================
# 4. Remove footer "Plan Your Visit" link if still present
# ============================================
footer_visit = '<a class="footer-link text-white/70 hover:text-white" href="/#visit">Plan Your Visit</a>'
if footer_visit in html:
    html = html.replace('<li>' + footer_visit + '</li>', '')
    html = html.replace(footer_visit, '')

# ============================================
# 5. Update the productions section header
# ============================================
# Change from "Archive" to proper structure
archive_span = '<span class="body-sm text-gray-600 mb-2 block">Archive</span>'
if archive_span in html:
    new_header = '''<div class="mb-16">
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
    html = html.replace(old_header, new_header)
    
    # Close the div after Past Productions grid
    # Find the closing of the productions section
    productions_end = html.find('</section>', html.find('<section id="productions"'))
    if productions_end != -1:
        # Insert closing div before </section>
        html = html[:productions_end] + '</div>' + html[productions_end:]

# Write the modified HTML
with open('/data/.openclaw/workspace/company-theatre/website/dist/index.html', 'w') as f:
    f.write(html)

print(f"Final length: {len(html)}")
print("Final modifications applied!")
