# Personal Website Design Specification

## Overview
Single-page landing site for Tuomo Kankaanpää - software developer and ghostwriter for dev tool companies.

## Technical notes
Use next.js.
Use tailwind for styles. If e.g. some color required is not found in tailwind classes, create class for it instead of using it inline.

## Brand Colors
- **Primary Green**: `#00D966` (Spotify green - for CTAs in developer section)
- **Primary Purple**: `#9333EA` (Royal purple - for CTAs in dev tools section)
- **Text Black**: `#1a1a1a`
- **Text Gray**: `#6B7280`
- **Background White**: `#FFFFFF`
- **Background Light Gray**: `#F9FAFB`

## Design Principles
- Clean, minimalist, professional
- Generous white space
- Single column layout, max content width 800px centered
- Sans-serif typography (use Inter or similar modern font)
- Readable body text size (18px)
- Clear visual hierarchy

## Page Structure

### 1. Hero Section
**Background**: White

**Content**:
- Professional headshot photo (circular or square with rounded corners). File is in root tk.jpg.
- Name: "Tuomo Kankaanpää" (large, bold, black text)
- Titles underneath (gray text, slightly smaller):
  - "Software Developer | Ghostwriter for Dev Tool Companies | Youtuber"

**Layout**: Centered, vertically and horizontally

---

### 2. For Developers Section
**Background**: Light gray (`#F9FAFB`)

**Content**:
- Heading: "For Developers" (black, large)
- Body text: "I teach modern web development on YouTube—Next.js, React Server Components, and building production apps with AI."
- CTA Button: "Watch on YouTube" (green `#00D966` background, white text, links to YouTube channel)
- CTA Button: "How to Build Profitable SaaS" - links to buildprofitablesaas.com

**Layout**: Centered text, button centered below text

---

### 3. For Developer Tool Companies Section
**Background**: White

**Content**:
- Heading: "For Developer Tool Companies" (black, large)
- Body text: "I help you turn technical concepts into Educational Email Courses and LinkedIn content that builds trust and captures leads."
- CTA Button: "5 Mistakes Dev Tool Companies Make With Lead Capture & Onboarding" (purple `#9333EA` background, white text, inactive link, hover shows text: "Coming soon...")

**Layout**: Centered text, button centered below text

---

### 4. About Me Section
**Background**: Light gray (`#F9FAFB`)

**Content**:
- Heading: "About Me" (black, large)
- Body text (gray, readable size):
  - "I've spent 13 years building B2B SaaS for manufacturing and supply chains. My YouTube videos teaching modern web development have been viewed over 1 million times by 10,000 subscribers."
  - "I've ghostwritten Educational Email Courses and LinkedIn content for developer advocates and tech companies, helping them improve user adoption and capture leads they would've otherwise lost."

**Layout**: Centered text, paragraphs with good line spacing

---

### 5. Contact Section
**Background**: White

**Content**:
- Heading: "Contact" (black, large)
- Body text: "Shoot me an email"
- Email link: tuomo@tuomokankaanpaa.com (green `#00D966` text, underlined on hover)

**Layout**: Centered text

---

## Typography Guidelines
- **Headings**: Bold, 32-40px, black (`#1a1a1a`)
- **Subheadings/Titles**: 18-20px, gray (`#6B7280`)
- **Body text**: 18px, gray (`#6B7280`), line height 1.6-1.8
- **Font**: Inter, system-ui, or similar modern sans-serif

## Button Styling
- Padding: 16px 32px
- Border radius: 10px
- Font size: 16-18px
- Font weight: 600 (semi-bold)
- No border
- Cursor pointer
- Hover state: Darken by 10-15% or add subtle shadow
- Green button: `#00D966` background, white text
- Purple button: `#9333EA` background, white text

## Spacing
- Section padding: 80px top and bottom
- Content max-width: 800px
- Generous margins between elements (24-32px)
- Mobile responsive: Stack vertically, maintain readability

## Image
- Headshot in hero section
- Size: 200-250px (square or circular)
- Centered above name

## Links
- YouTube channel: www.youtube.com/tuomokankaanpaa
- Free course: https://buildprofitablesaas.com/
- Email: tuomo@tuomokankaanpaa.com

## Notes
- Fully responsive design
- Smooth scroll between sections (optional)
- Clean, fast loading
- Accessibility: proper heading hierarchy, alt text for images, good color contrast