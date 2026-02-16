# Company Theatre - Rebuilt with Real Content

## Completed Updates

### Homepage
- ✅ Replaced placeholder productions with real shows from manifest.json
- ✅ Using actual production photos from scraped-content/images/
- ✅ Real about text, contact info, dates from the manifest
- ✅ Current production: Jackpot Twins (March 2027 placeholder)
- ✅ Past productions: 7 scraped shows with real photos and information
  - Things I Know to be True (2023)
  - Jerusalem (2018)
  - John (2017)
  - Domesticated (2015)
  - The Seagull (2015)
  - Belleville (2014)
  - Speaking in Tongues (2012)

### Individual Show Pages (Almeida-Style)
Each show page now includes:
- ✅ Show info section: Title, dates, venue, description, status banner
- ✅ Production photos gallery with lightbox
- ✅ Dual CTAs: "Event Information" + "Book Tickets"
- ✅ Cast & Creatives section with tabs
  - Cast tab: Grid with headshot placeholders + character names
  - Creatives tab: Grid showing director, designers, stage manager, etc.
- ✅ Bio modals: Click any name → modal popup with bio information
- ✅ Awards & Recognition section
- ✅ Reviews/Quotes section
- ✅ Press coverage section (where available)
- ✅ Production advisory (where applicable)

### Design Match (Almeida Theatre Style)
- ✅ Bold typography with uppercase headings
- ✅ Black/white aesthetic with red accent color
- ✅ Production card layouts matching reference screenshots
- ✅ Dual CTAs pattern (ghost button + filled button)
- ✅ Cast/creatives grid with info icons
- ✅ Modal popups for detailed bios
- ✅ Responsive design for mobile and desktop

### Technical Implementation
- ✅ Next.js 16 with App Router
- ✅ Static export for deployment
- ✅ Dynamic routing for individual show pages (/show/[id])
- ✅ Image optimization with Next.js Image component
- ✅ TypeScript with type-safe data structure
- ✅ All 8 pages pre-rendered at build time

## File Structure
```
app/
├── page.tsx                    # Homepage with real content
├── layout.tsx                  # Root layout with metadata
├── globals.css                 # Global styles + Almeida-inspired design
├── show/[id]/
│   └── page.tsx               # Dynamic show page template
components/
├── Navigation.tsx              # Fixed header navigation
├── Footer.tsx                  # Site footer
├── Modal.tsx                   # Reusable modal component
├── CastCreativesTabs.tsx       # Cast/Creatives tabbed section
└── ImageGallery.tsx            # Photo gallery with lightbox
lib/
└── data.ts                     # All production data from manifest
public/
└── images/                     # Production photos
```

## Deployment
Build output: `dist/` folder
Archive: `company-theatre-v3.tar.gz` (7MB with all images)

To deploy:
1. Extract `company-theatre-v3.tar.gz`
2. Upload `dist/` contents to your hosting provider
3. Or run locally: `npx serve dist`

## Data Source
All content sourced from `/data/.openclaw/workspace/company-theatre/scraped-content/manifest.json`

Design inspired by Almeida Theatre screenshots (file_99 through file_110)
