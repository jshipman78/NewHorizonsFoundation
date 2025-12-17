# New Horizons Foundation — Brand Guidelines

## Overview

This branding guide establishes the visual identity and voice for New Horizons Foundation (NHF), a national nonprofit organization dedicated to advancing mental health access, education, cultural enrichment, and leadership development.

---

## 1. Brand Essence

### Mission Statement
To expand access to ethical mental health services, support those who serve our communities, foster cultural and relational resilience, and develop future leaders through education, collaboration, and service.

### Core Values
- **Compassion** — Meeting people where they are with empathy and understanding
- **Stewardship** — Responsible management of resources and trust
- **Service** — Commitment to community well-being above self-interest
- **Accountability** — Transparency in operations and measurable outcomes
- **Integrity** — Ethical practice in all programs and partnerships
- **Hope** — Belief in restoration and growth for individuals and communities

### Brand Personality
- **Professional** yet approachable
- **Trustworthy** and credible
- **Compassionate** without being overly emotional
- **Faith-aware** without being exclusionary
- **Forward-looking** with respect for legacy

---

## 2. Color Palette

*Extracted from official New Horizons Foundation logo*

### Primary Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Horizons Green** | `#1A5336` | 26, 83, 54 | Primary brand color, "NEW HORIZONS" text, headings, primary CTAs |
| **Foundation Blue** | `#1565C0` | 21, 101, 192 | "FOUNDATION" text, links, secondary CTAs, trust elements |
| **Hope Gold** | `#E8A730` | 232, 167, 48 | Accent highlights, hope/warmth elements, featured callouts |

### Secondary Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Growth Green** | `#5D9A41` | 93, 154, 65 | Secondary buttons, success states, growth themes |
| **Leaf Green** | `#7AB648` | 122, 182, 72 | Subtle accents, hover states, icons |
| **Sky Blue** | `#2B7CB0` | 43, 124, 176 | Horizon arc element, light accents |

### Extended Palette (UI Support)

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Dark Text** | `#1A202C` | Body text, headings |
| **Body Text** | `#2D3748` | Paragraph text |
| **Muted Text** | `#718096` | Captions, secondary text |
| **Light Background** | `#F7FAFC` | Page backgrounds, sections |
| **Card Background** | `#FFFFFF` | Cards, elevated surfaces |
| **Border Light** | `#E2E8F0` | Dividers, card borders |
| **Success** | `#38A169` | Success messages, positive states |
| **Warning** | `#D69E2E` | Warning messages |
| **Error** | `#C53030` | Error messages, alerts |

### Color Psychology in Our Palette

| Color | Psychological Association | NHF Application |
|-------|--------------------------|-----------------|
| **Horizons Green** | Growth, healing, nature, stability | Core brand identity, trust, grounding |
| **Foundation Blue** | Trust, professionalism, calm, reliability | Credibility, formal elements, stability |
| **Hope Gold** | Optimism, warmth, energy, hope | Accent for inspiration, highlighting hope |
| **Growth Greens** | Renewal, balance, health, harmony | Program sections, wellness content |

### CSS Custom Properties

```css
:root {
  /* Primary */
  --color-horizons-green: #1A5336;
  --color-foundation-blue: #1565C0;
  --color-hope-gold: #E8A730;

  /* Secondary */
  --color-growth-green: #5D9A41;
  --color-leaf-green: #7AB648;
  --color-sky-blue: #2B7CB0;

  /* Neutrals */
  --color-text-dark: #1A202C;
  --color-text-body: #2D3748;
  --color-text-muted: #718096;
  --color-bg-light: #F7FAFC;
  --color-bg-white: #FFFFFF;
  --color-border: #E2E8F0;

  /* States */
  --color-success: #38A169;
  --color-warning: #D69E2E;
  --color-error: #C53030;
}
```

### Tailwind CSS Configuration

```javascript
// tailwind.config.js colors extension
colors: {
  'horizons-green': '#1A5336',
  'foundation-blue': '#1565C0',
  'hope-gold': '#E8A730',
  'growth-green': '#5D9A41',
  'leaf-green': '#7AB648',
  'sky-blue': '#2B7CB0',
}
```

### Color Usage Guidelines

**Primary CTAs (Donate, Get Involved):**
- Background: `Horizons Green (#1A5336)`
- Text: White
- Hover: Darken 10%

**Secondary CTAs (Learn More, Contact):**
- Background: `Foundation Blue (#1565C0)`
- Text: White
- Hover: Darken 10%

**Accent/Highlight CTAs:**
- Background: `Hope Gold (#E8A730)`
- Text: `Dark Text (#1A202C)`
- Use sparingly for emphasis

**Links:**
- Default: `Foundation Blue (#1565C0)`
- Hover: Darken 15%
- Visited: `Horizons Green (#1A5336)`

### Accessibility Requirements
- All color combinations must meet WCAG 2.1 AA contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Never rely on color alone to convey information
- Test all palette combinations for color blindness accessibility

---

## 3. Typography

### Primary Font Family
**Recommended**: Modern, clean sans-serif for readability and professionalism

**Heading Font**:
- Primary: Inter, Montserrat, or similar geometric sans-serif
- Weight: 600-700 for headings

**Body Font**:
- Primary: Inter, Open Sans, or Source Sans Pro
- Weight: 400 for body, 500-600 for emphasis

### Font Hierarchy
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Page Title) | 48-56px | 700 | 1.2 |
| H2 (Section) | 36-40px | 600 | 1.25 |
| H3 (Subsection) | 28-32px | 600 | 1.3 |
| H4 (Card Title) | 20-24px | 600 | 1.35 |
| Body Large | 18px | 400 | 1.6 |
| Body Regular | 16px | 400 | 1.6 |
| Body Small | 14px | 400 | 1.5 |
| Caption | 12px | 400 | 1.4 |

### Typography Guidelines
- Use sentence case for headings (not ALL CAPS)
- Limit line length to 65-75 characters for readability
- Use generous line spacing for accessibility
- Reserve bold for emphasis, not decoration

---

## 4. Logo Usage

### Primary Logo

The New Horizons Foundation logo consists of:
- **Icon Mark**: A stylized lotus/flower with five rising petals symbolizing growth, hope, and renewal
  - Center petal in **Hope Gold** representing optimism and new beginnings
  - Four surrounding leaves in graduating **Greens** representing growth and healing
  - A curved **Blue** horizon arc representing stability and the foundation's grounding presence
- **Wordmark**: "NEW HORIZONS" in **Horizons Green** with "FOUNDATION" in **Foundation Blue**

### Logo Symbolism
- **Rising petals/leaves**: Growth, renewal, upward trajectory, hope
- **Golden center**: The light of hope, warmth, new horizons
- **Green leaves**: Healing, nature, organic growth, life
- **Horizon arc**: Stability, foundation, the line between present and future
- **Overall composition**: Balance, harmony, forward movement

### Logo Variations
- **Full color** — Primary use on white/light backgrounds
- **Reversed** — White logo for dark backgrounds
- **Monochrome** — Single color for limited color applications

### Clear Space
Maintain minimum clear space equal to the height of the "H" in "Horizons" on all sides of the logo.

### Minimum Size
- Print: 1.5 inches wide minimum
- Digital: 120px wide minimum

### Logo Don'ts
- Do not stretch or distort
- Do not change colors outside brand palette
- Do not add effects (shadows, outlines, gradients)
- Do not place on busy backgrounds without proper contrast
- Do not rotate or tilt

---

## 5. Imagery Guidelines

### Photography Style
- **Authentic** — Real people, genuine moments (avoid stock photo clichés)
- **Diverse** — Represent the communities NHF serves
- **Warm** — Natural lighting, approachable settings
- **Hopeful** — Forward-looking, positive without minimizing challenges
- **Professional** — High quality, well-composed

### Subject Matter
**Do Use:**
- Diverse individuals and families
- Community gatherings and support groups
- Professional settings (clinical, educational)
- Nature elements (horizons, pathways, light)
- Veterans, first responders, youth in positive contexts

**Avoid:**
- Stereotypical "sad" mental health imagery
- Isolated individuals in distress
- Clinical/institutional feeling environments
- Stock photos with obvious staging

### Image Treatment
- Use consistent color grading aligned with brand palette
- Slight warmth in tone to convey approachability
- Adequate brightness to suggest hope and openness

---

## 6. Voice & Tone

### Brand Voice Attributes
| Attribute | Description |
|-----------|-------------|
| **Credible** | Evidence-based, professionally grounded |
| **Compassionate** | Empathetic, person-centered language |
| **Clear** | Accessible language, avoiding jargon |
| **Hopeful** | Solution-focused, forward-looking |
| **Inclusive** | Welcoming to all backgrounds and beliefs |

### Writing Guidelines

**Do:**
- Use person-first language ("individuals experiencing..." not "the mentally ill")
- Write at an 8th-grade reading level for general audiences
- Be direct and clear about services and impact
- Include calls to action that feel inviting, not pushy
- Acknowledge challenges while emphasizing pathways forward

**Don't:**
- Use clinical jargon without explanation
- Make promises about outcomes that can't be guaranteed
- Use fear-based messaging
- Over-spiritualize in public-facing content (faith-aware, not faith-exclusive)
- Use stigmatizing language

### Tone by Context
| Context | Tone |
|---------|------|
| Homepage/About | Warm, welcoming, professional |
| Programs/Services | Clear, informative, empowering |
| Donation Appeals | Grateful, hopeful, mission-focused |
| Grant Materials | Professional, data-driven, credible |
| Crisis Resources | Calm, clear, action-oriented |

---

## 7. Iconography & Graphics

### Icon Style
- Simple, line-based icons with consistent stroke weight
- Rounded corners for approachability
- Single color (primary or secondary brand colors)
- Consistent sizing within contexts

### Graphic Elements
- Use subtle curves and organic shapes (reflecting "horizons" theme)
- Avoid harsh geometric patterns
- Consider sunrise/horizon motifs for backgrounds
- Use white space generously

---

## 8. Web-Specific Guidelines

### Button Styles
- **Primary CTA**: Solid brand color, white text, rounded corners
- **Secondary CTA**: Outlined, brand color border and text
- **Text Links**: Brand color, underline on hover

### Card Design
- Subtle shadows (box-shadow for depth)
- Rounded corners (8-12px radius)
- Adequate padding (24-32px)
- White or light neutral background

### Navigation
- Clear, simple navigation structure
- Mobile-first responsive design
- Sticky header for easy access to key CTAs
- "Donate" button prominent but not aggressive

### Accessibility
- Minimum touch targets of 44x44px
- Focus states for keyboard navigation
- Alt text for all images
- Proper heading hierarchy (H1 → H2 → H3)
- Form labels and error messages clearly visible

---

## 9. Application Examples

### Business Cards
- Logo on front, contact information on back
- Use primary brand colors
- Include website URL and key contact email

### Email Signatures
```
[Name]
[Title]
New Horizons Foundation
[email] | [phone]
www.newhorizonsfoundation.org
```

### Social Media
- Consistent profile image (logo mark or abbreviated logo)
- Cover images using brand photography and colors
- Post templates maintaining brand typography and colors

### Presentation Templates
- Title slides with logo and brand colors
- Content slides with clean typography
- Consistent footer with logo and website

---

## 10. Brand Assets Checklist

### Required Assets to Create
- [ ] Logo files (SVG, PNG, various sizes)
- [ ] Favicon and social media icons
- [ ] Color palette swatches (digital and print)
- [ ] Typography specimens
- [ ] Icon set for website
- [ ] Photography library
- [ ] Social media templates
- [ ] Email signature template
- [ ] Presentation template
- [ ] Letterhead template

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [Current Date] | Initial brand guide draft |

---

*This document will be updated once the logo file is provided to finalize the color palette and logo usage guidelines.*
