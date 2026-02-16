#!/usr/bin/env python3
"""
Final fixes for Company Theatre Website
"""

import re

with open('/data/.openclaw/workspace/company-theatre/website/dist/index.html', 'r') as f:
    html = f.read()

# Add Upcoming Production section before Past Productions
archive_section = '<span class="body-sm text-gray-600 mb-2 block">Archive</span><h2 class="heading-lg">Past Productions</h2>'
if archive_section in html:
    new_section = '''<div class="mb-16">
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
    html = html.replace(archive_section, new_section)
    
    # Close the div after Past Productions
    # Find the end of productions grid and close the div
    productions_section_end = html.find('</section>', html.find('<section id="productions"'))
    if productions_section_end != -1:
        # Insert closing div before </section>
        html = html[:productions_section_end] + '</div>' + html[productions_section_end:]

# Write changes
with open('/data/.openclaw/workspace/company-theatre/website/dist/index.html', 'w') as f:
    f.write(html)

print(f"Final length: {len(html)}")
print("Upcoming Production section added!")
