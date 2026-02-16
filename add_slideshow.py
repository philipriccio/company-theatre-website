#!/usr/bin/env python3
"""
Company Theatre Website - Additional Modifications
"""

import re

# Read the modified HTML file
with open('/data/.openclaw/workspace/company-theatre/website/dist/index.html', 'r') as f:
    html = f.read()

# ============================================
# 1. Replace the Radically Live static section with photo slideshow
# ============================================
# Find the section with "Radically Live Theatre" that has the static content
# and replace it with a slideshow

# Find the section that contains the color logo (the one after quotes)
radically_pattern = r'<section class="relative bg-black py-16 md:py-24">\s*<div class="container-main">\s*<div class="max-w-3xl mx-auto text-center">\s*<p class="text-accent font-bold uppercase tracking-\[0\.2em\] text-sm mb-4">Radically Live Theatre</p>.*?<div class="flex flex-wrap gap-4 justify-center">.*?</div>\s*</div>\s*</div>\s*</section>'

# Create the new slideshow section
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
    <script>
    (function() {
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;
        const slideInterval = 4000; // 4 seconds per slide (2s transition + 2s display)
        
        function nextSlide() {
            slides[currentSlide].style.opacity = '0';
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.opacity = '1';
            
            // Reset zoom animation
            const img = slides[currentSlide].querySelector('img');
            img.style.animation = 'none';
            setTimeout(() => {
                img.style.animation = 'zoom 8s ease-out forwards';
            }, 50);
        }
        
        setInterval(nextSlide, slideInterval);
    })();
    </script>
</section>'''

# Find the section with "Radically Live Theatre" text and the color logo
# This is the section after the quotes
start_marker = '<p class="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">Radically Live Theatre</p>'
start_pos = html.find(start_marker)

if start_pos != -1:
    # Find the section start
    section_start = html.rfind('<section', max(0, start_pos - 200), start_pos)
    if section_start != -1:
        # Find the section end
        pos = section_start
        depth = 0
        while pos < len(html):
            if html[pos:pos+9] == '<section ':
                depth += 1
            elif html[pos:pos+10] == '</section>':
                depth -= 1
                if depth == 0:
                    section_end = pos + 10
                    html = html[:section_start] + slideshow_section + html[section_end:]
                    break
            pos += 1

# Write the modified HTML
with open('/data/.openclaw/workspace/company-theatre/website/dist/index.html', 'w') as f:
    f.write(html)

print(f"Modified length: {len(html)}")
print("Slideshow added successfully!")
