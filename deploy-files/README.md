# Company Theatre Website

A bold, Almeida Theatre-inspired website featuring mirrored logos, gold accents, giant serif typography, and full-width production cards with duotone image treatments.

---

## 🎭 Live Preview

**Local:** `file:///data/.openclaw/workspace/company-theatre/dist/index.html`

**Or serve locally:**
```bash
cd /data/.openclaw/workspace/company-theatre/dist
python3 -m http.server 3456
# Open http://localhost:3456
```

---

## ✨ Design Highlights

### Signature Almeida Elements

**1. Mirrored Logo**
- "COMPANY" text with inverted duplicate below
- Creates the distinctive Almeida reflection effect

**2. Gold Accent Lines**
- 4px horizontal gold (#d4af37) rules
- Separate navigation and content sections

**3. Giant Serif Typography**
- Playfair Display for headlines
- 10-18vw responsive sizing
- Dramatic text breaking allowed

**4. Full-Width Production Cards**
- 21:9 cinematic aspect ratio
- Duotone image treatments (orange, purple, cyan)
- "Event Information" outlined CTAs

**5. High-Contrast Sections**
- Black headers with white text
- White content areas
- Cyan (#00c8d4) membership section
- Coral (#ff5a5a) contact accents

---

## 📐 Site Structure

```
1. Navigation
   └── Mirrored logo | Menu | Search | User | Cart
   └── Gold accent line

2. Hero
   └── Full-screen atmospheric image
   └── Giant "WELCOME" serif text
   └── CTA button

3. Current Production (Jackpot Twins)
   └── "WHAT'S ON" header
   └── Full-width feature card
   └── Outlined + solid CTAs

4. Past Productions
   └── Black section header
   └── Giant "PAST PRODUCTIONS" text
   └── 4 full-width vertical cards
   └── Duotone image treatments

5. Membership/About
   └── Cyan background
   └── "BECOME A MEMBER" header
   └── Benefits + CTA

6. Contact/Footer
   └── Black background
   └── "Stay in touch" italic serif
   └── Coral accent CTAs
   └── Social links
   └── Mirrored logo footer
```

---

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** 
  - Playfair Display (serif headlines)
  - Bebas Neue (display/logo)
  - Inter (body text)
- **Icons:** Lucide React

---

## 📦 Deployment

### Quick Deploy
```bash
# Upload dist/ folder to any static host
cd /data/.openclaw/workspace/company-theatre/dist
```

### Vercel
```bash
cd /data/.openclaw/workspace/company-theatre
git remote add origin https://github.com/YOUR_USERNAME/company-theatre.git
git push -u origin master
# Import on vercel.com
```

### Archive
Pre-built archive available:
- `company-theatre-v2.tar.gz` (225KB)

---

## 🎨 Customization

### Change Production Content
Edit `src/app/page.tsx`:
```typescript
const currentProduction = {
  title: "Your Show Name",
  dates: "Your Dates",
  // ...
};

const pastProductions = [
  // Add/remove productions here
];
```

### Change Colors
Edit `src/app/globals.css`:
```css
:root {
  --color-gold: #d4af37;     /* Accent lines */
  --color-coral: #ff5a5a;    /* CTAs */
  --color-cyan: #00c8d4;     /* Membership bg */
}
```

### Change Images
Replace Unsplash URLs in `page.tsx` with your production photos.

---

## 📁 Project Files

```
company-theatre/
├── src/
│   └── app/
│       ├── page.tsx          # Main page (all sections)
│       ├── globals.css       # Styles & fonts
│       └── layout.tsx        # Root layout
├── dist/                     # Static build output
├── SPECIFICATION.md          # Full design spec
├── README.md                 # This file
└── company-theatre-v2.tar.gz # Deployable archive
```

---

## 📝 Requirements Met

✅ Bold, professional Almeida aesthetic  
✅ Mirrored logo treatment  
✅ Gold accent lines  
✅ Giant serif typography  
✅ Full-width production cards  
✅ Duotone image effects  
✅ Outlined "Event Information" CTAs  
✅ Black Past Productions header  
✅ 5 sections (Welcome, Current, Past, About, Contact)  
✅ Mobile-responsive  
✅ Custom-built (no WordPress)  
✅ Memorable and unique  

---

**Built for:** Philip / Company Theatre  
**Design Reference:** Almeida Theatre (almeida.co.uk)  
**Status:** ✅ Production Ready
