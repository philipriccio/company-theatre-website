# Company Theatre Website - Final Specification

## ✅ Complete Build Delivered

Based on Philip's final reference screenshots and specifications.

---

## 🎨 Design Implementation

### 1. Navigation Bar
**Almeida Reference:** Black header with mirrored logo

**Implemented:**
- Black background navigation
- **Mirrored logo:** "COMPANY" text with scale-y-[-1] inverted duplicate below
- Left: Hamburger menu + Search icons
- Right: User + Shopping cart icons
- **Gold accent line** (4px) below navigation

### 2. Hero Section
**Layout:** Full-screen atmospheric image with bottom-aligned content

**Features:**
- Giant serif "WELCOME" text (18vw mobile, 12vw desktop)
- Playfair Display font (high-contrast editorial serif)
- Gradient overlay: black to transparent
- CTA: "See What's On" primary button

### 3. Current Production (Jackpot Twins)
**Layout:** Full-width card with horizontal rule separator

**Structure:**
- Section header: "WHAT'S ON" with "View All→" link
- **Gold line** separator
- Full-width image (21:9 aspect ratio)
- Show title: Large serif uppercase
- Date/time below title
- **Two CTAs:**
  - "Event Information" (outlined/ghost button)
  - "Book Tickets" (solid black button)
- **Thick border-bottom** separator (2px black)

### 4. Past Productions Section
**Philip's Exact Specification:**

**Header:**
- Full-width **black background**
- Massive white serif text: "PAST PRODUCTIONS"
- Text breaks dramatically across lines on mobile
- Border-bottom separator

**Production Cards (Vertical Stack):**
- Full-width dramatic images (21:9 aspect)
- **Duotone color treatments:**
  - Purple/violet tones
  - Orange/burnt sienna tones
  - Cyan/teal tones
- White content area below each image
- Show title: Bold serif uppercase
- Date/time in lighter weight
- Single CTA: "Event Information" (outlined button)
- Border separators between cards

### 5. Membership Section (About)
**Almeida Reference:** Cyan/turquoise background with editorial typography

**Implemented:**
- **Cyan background** (#00c8d4)
- "BECOME A MEMBER" in huge serif display
- Body text + CTA button
- Theatrical interior image

### 6. Contact / Stay in Touch
**Almeida Reference:** Black background, coral accents, elegant serif

**Implemented:**
- Black background
- "Stay in touch" in italic serif
- Address in bold serif
- **Coral accent color** (#ff5a5a) for phone/CTA
- Social icons in bordered squares
- Newsletter signup form
- Footer links row

### 7. Footer
**Features:**
- Mirrored logo
- Copyright
- Domain pill button

---

## 📐 Technical Specifications

### Fonts
```css
--font-display: 'Bebas Neue', sans-serif;    /* Logo, nav */
--font-serif: 'Playfair Display', serif;      /* Headlines */
--font-sans: 'Inter', sans-serif;             /* Body text */
```

### Colors
```css
--color-black: #000000;
--color-white: #ffffff;
--color-cream: #f5f0ea;
--color-gold: #d4af37;        /* Accent lines */
--color-coral: #ff5a5a;       /* CTAs, accents */
--color-cyan: #00c8d4;        /* Membership section */
```

### Image Treatments
```css
.duotone-orange {  /* Sepia + orange shift */
  filter: sepia(0.4) hue-rotate(-30deg) saturate(1.5);
}

.duotone-purple {  /* Sepia + purple shift */
  filter: sepia(0.3) hue-rotate(220deg) saturate(1.3);
}

.duotone-cyan {    /* Sepia + cyan shift */
  filter: sepia(0.2) hue-rotate(140deg) saturate(1.4);
}
```

---

## 📱 Sections Structure (Philip's Order)

1. **Welcome/Hero** - Full-screen with giant serif WELCOME
2. **Current Production** - Jackpot Twins featured with outlined CTA
3. **Past Productions** - Black header + full-width vertical cards
4. **About/Membership** - Cyan background
5. **Contact/Footer** - Black with coral accents

---

## 🎯 Almeida Design Elements Replicated

| Element | Implementation |
|---------|---------------|
| **Mirrored Logo** | CSS scale-y-[-1] on duplicate text |
| **Gold Accent Lines** | 4px gold horizontal rules |
| **Giant Serif Headers** | Playfair Display, 10-18vw sizing |
| **Full-width Cards** | 21:9 aspect ratio images |
| **Outlined CTAs** | 2px border ghost buttons |
| **Duotone Images** | CSS filter combinations |
| **Dramatic Text Breaks** | Natural word breaking allowed |
| **Thick Separators** | 2px borders between sections |
| **High-contrast Sections** | Alternating black/white/cyan |

---

## 📦 Files

**Project Location:** `/data/.openclaw/workspace/company-theatre/`

**Key Files:**
- `src/app/page.tsx` - Main page with all sections
- `src/app/globals.css` - Styles, fonts, image treatments
- `dist/` - Static build output
- `company-theatre-v2.tar.gz` - Deployment archive (225KB)

---

## 🚀 Deployment

### Option 1: Static Hosting
```bash
cd /data/.openclaw/workspace/company-theatre/dist
# Upload all files to web host
```

### Option 2: Vercel
```bash
cd /data/.openclaw/workspace/company-theatre
git push to GitHub
# Import on vercel.com
```

### Option 3: Preview Now
Site is built and ready at:
`file:///data/.openclaw/workspace/company-theatre/dist/index.html`

Or serve locally:
```bash
cd /data/.openclaw/workspace/company-theatre/dist
python3 -m http.server 3456
# Visit http://localhost:3456
```

---

## ✨ Key Features

✅ Mirrored logo treatment (signature Almeida element)  
✅ Gold accent lines  
✅ Giant serif display typography  
✅ Full-width production cards with duotone effects  
✅ Outlined "Event Information" CTAs  
✅ Black Past Productions header with dramatic text breaks  
✅ Cyan membership section  
✅ Coral contact accents  
✅ Fully responsive (mobile-first)  
✅ Smooth scroll navigation  
✅ Hover animations on cards and buttons  

---

**Status:** ✅ COMPLETE - Ready for deployment  
**Built for:** Philip / Company Theatre  
**Design Reference:** Almeida Theatre (almeida.co.uk)
