# New Horizons Foundation — Website Development Prompt

## Executive Summary

Build a professional, grant-ready, SEO-optimized website for **New Horizons Foundation (NHF)**, a national nonprofit organization advancing mental health access, education, cultural enrichment, and leadership development. The site must convey immediate credibility to grant reviewers, donors, sponsors, and community partners while maintaining warmth and accessibility for those seeking services.

---

## Project Context

### Organization Overview
- **Name:** New Horizons Foundation (NHF)
- **Type:** National 501(c)(3) nonprofit organization
- **Focus Areas:** Mental health access, veterans/first responders, cultural enrichment, youth leadership
- **Target Audiences:** Grant funders, donors, sponsors, community partners, clinicians, those seeking services

### Design Philosophy Requirements
- **Professional yet Approachable** — Convey credibility without feeling clinical or cold
- **Faith-aware without Exclusionary** — Ethical framework rooted in values accessible to all
- **Grant-Ready** — Structure and content that demonstrates organizational legitimacy
- **Evidence-Based Messaging** — Professional language that builds trust with funders

---

## Design Inspiration Analysis

Based on analysis of the provided inspiration sites (Grow Therapy, Talkspace, Talkiatry, SCCC-LA, Sentio CC), implement these design patterns:

### Visual Design Principles

1. **Clean, Modern Aesthetic**
   - Generous whitespace to reduce cognitive load
   - Soft, calming color palette (blues, teals, warm neutrals)
   - Subtle gradients or color washes for visual interest
   - Professional typography with clear hierarchy

2. **Trustworthy First Impressions**
   - Hero sections with clear value proposition
   - Professional photography (diverse, authentic, hopeful)
   - Credential/trust indicators prominently displayed
   - Clean navigation with intuitive structure

3. **Accessibility-First**
   - WCAG 2.1 AA compliance minimum
   - Mobile-responsive design (mobile-first approach)
   - Clear focus states and keyboard navigation
   - Adequate contrast ratios for all text

4. **Nonprofit/Healthcare UX Patterns**
   - Clear CTAs without aggressive sales tactics
   - Easy donation flow (minimal steps)
   - Prominent but not intrusive "Donate" button
   - Contact information easily accessible

---

## Technical Specifications

### Recommended Tech Stack: Next.js + Sanity (SELECTED)

Based on requirements for **speed, accessibility, and maintainability**, the recommended stack is:

| Component | Technology | Rationale |
|-----------|------------|-----------|
| **Framework** | Next.js 14+ (App Router) | Best-in-class performance, SEO, static generation |
| **Styling** | Tailwind CSS | Rapid development, design system consistency |
| **CMS** | Sanity.io | User-friendly editing, free tier, real-time preview |
| **Hosting** | Vercel | Optimal for Next.js, global CDN, automatic optimization |
| **Forms** | Formspree | Simple, reliable, no backend needed |
| **Donations** | Donorbox | Nonprofit-focused, low fees, embeddable |
| **Analytics** | GA4 + Plausible | Comprehensive + privacy-friendly |
| **Image Generation** | Gemini Pro 3 API | Custom illustrations available |
| **Stock Photos** | Envato Elements | Library access available |

### Why This Stack Over WordPress

| Factor | WordPress | Next.js + Sanity |
|--------|-----------|------------------|
| **Speed** | Requires heavy optimization | Fast by default (95+ Lighthouse) |
| **Security** | Frequent vulnerabilities | Minimal attack surface |
| **Hosting Cost** | $30-100/mo quality hosting | $0-20/mo on Vercel |
| **SEO** | Good with plugins | Built-in, superior Core Web Vitals |
| **Maintenance** | Constant updates needed | Minimal, auto deployments |
| **Content Editing** | Familiar but dated | Modern, visual Sanity Studio |

### Performance Requirements
- Lighthouse Performance Score: 95+
- First Contentful Paint: < 1.0s
- Largest Contentful Paint: < 2.0s
- Cumulative Layout Shift: < 0.05
- Mobile-first responsive design
- Image optimization (WebP/AVIF with fallbacks)

---

## SEO Strategy & Keywords

### Primary Keywords (High Priority)
Target these throughout the site with appropriate density:

| Keyword Category | Target Keywords |
|-----------------|-----------------|
| **Brand** | New Horizons Foundation, NHF nonprofit |
| **Mental Health Nonprofit** | mental health nonprofit, mental health foundation, community mental health services |
| **Veterans Mental Health** | veteran mental health support, first responder mental health, first responder wellness programs |
| **Youth Programs** | youth leadership programs, youth mental health education |
| **Grants/Funding** | mental health grant programs, nonprofit mental health services |

### Secondary Keywords (Supporting)
- ethical mental health care
- evidence-based mental health programs
- community mental health education
- cultural mental health programs
- trauma-informed care nonprofit
- mental health professional development
- mental health community partnerships
- faith-based mental health support
- occupational stress support
- moral injury programs

### Long-Tail Keywords (Content Strategy)
- mental health services for veterans and families
- first responder mental health support programs
- community-based mental health education
- youth leadership development programs nonprofit
- culturally responsive mental health services
- grief and life transitions support programs
- autism and neurodevelopmental programs nonprofit

### Local SEO Considerations
- Include state/regional mentions where programs operate
- Create location-specific landing pages as programs expand
- Register with Google Business Profile when physical locations exist

### Technical SEO Requirements
- Semantic HTML5 structure
- Schema.org markup (Organization, NonprofitOrganization, Article)
- XML sitemap auto-generation
- Robots.txt configuration
- Canonical URLs
- Open Graph and Twitter Card meta tags
- SSL certificate (HTTPS required)
- Mobile-friendly design (Google Mobile-First Indexing)

---

## Site Architecture

```
/                           # Homepage
├── /about
│   ├── /mission-values     # Mission, Ethics & Values
│   └── /legacy             # Legacy & Founding Story
├── /programs               # Divisions Overview
│   ├── /mental-health      # Mental Health Division
│   ├── /veterans-first-responders  # Veterans & First Responders
│   ├── /cultural-enrichment        # Cultural Enrichment
│   └── /youth-leadership           # Youth Leadership
├── /leadership             # Full Leadership Page
├── /partners               # Partners & Collaborations
├── /support
│   ├── /founders-circle    # Founders Circle
│   ├── /sponsorships       # Sponsorships & Underwriting
│   └── /donate             # General Donation Page
├── /contact                # Contact Page
├── /privacy                # Privacy Policy
└── /terms                  # Terms of Service
```

---

## Page-by-Page Specifications

### Homepage

**Hero Section**
- Full-width hero with background image/gradient
- Main headline: "New Horizons Foundation"
- Subheadline: "Advancing Mental Health Access, Education, and Community Resilience"
- Brief description (2-3 sentences)
- Primary CTA: "Support Our Mission" → /support
- Secondary CTA: "Explore Our Programs" → /programs

**Mission Preview**
- Section title with mission statement
- Visual element (icon or image)
- CTA to full about page

**Four Pillars Section**
- Grid of 4 cards (2x2 on desktop, stacked on mobile)
- Each card: Icon, title, brief description, link to division page
- Subtle hover effects

**Trust/Credibility Section**
- Key statistics or trust indicators
- Partner logos (when available)
- Credential mentions

**Support CTA Section**
- Warm, inviting language about supporting the mission
- Cards for different giving options
- Link to support page

**Footer**
- Logo
- Navigation links
- Contact information
- Social media links
- Legal links (Privacy, Terms)
- 501(c)(3) statement

---

### About Pages

**Mission & Values (/about/mission-values)**
- Hero with page title
- Mission statement (prominent)
- Aspirational Ethics section (5 principles)
- Core Values grid
- CTA to programs or support

**Legacy (/about/legacy)**
- Founding story
- In Memoriam section for Dr. Amir Abbasi
- How legacy informs current mission
- Visual timeline (optional)

---

### Programs/Divisions Pages

**Programs Overview (/programs)**
- Hero introducing the four divisions
- Grid of division cards with links
- Cross-cutting themes section

**Individual Division Pages**
Each division page should include:
- Hero with division name
- Purpose statement
- Scope of work (detailed)
- Key focus areas (bullet points or cards)
- Leadership oversight note
- Related resources (when available)
- CTA to contact or support

---

### Leadership Page

**Structure:**
- Hero with page title
- Executive Leadership section (featured)
- Directors & Senior Leadership section
- Program Leadership, Advisors & Contributors section
- Medical, Clinical & Financial Oversight section
- Research & Advisory section
- Legacy & Honorary Recognition section

**Leadership Cards:**
- Professional headshot (placeholder if needed)
- Name
- Title
- Brief bio (expandable or modal for full bio)

---

### Partners Page

**Structure:**
- Hero with partnership philosophy
- Partnership categories (with icons)
- Current partners section (logos when available)
- "Partner With Us" CTA
- Partnership inquiry form or contact info

---

### Support Pages

**Founders Circle (/support/founders-circle)**
- Explanation of Founders Circle
- Giving levels (visual cards)
- Benefits/recognition
- CTA to donate

**Sponsorships (/support/sponsorships)**
- Sponsorship opportunities
- Benefits for sponsors
- Inquiry form

**Donate (/support/donate)**
- Simple, warm introduction
- Donation form (embedded or linked)
- Alternative giving methods
- 501(c)(3) notice
- Tax deductibility statement

---

### Contact Page

**Structure:**
- Contact form (General, Partnerships, Media)
- Email addresses by department
- Physical address (when available)
- Social media links
- FAQ accordion (optional)

---

## Grant-Readiness Features

Ensure these elements are present for grant reviewers:

1. **Clear Organizational Structure**
   - Leadership page showing operations, finance, programs, ethics coverage
   - Titles calibrated for credibility

2. **Mission Clarity**
   - Mission statement prominently displayed
   - Clear division between program areas

3. **Financial Transparency Indicators**
   - 501(c)(3) status displayed
   - EIN when available
   - Financial advisor listed in leadership

4. **Partnerships Section**
   - Demonstrates community integration
   - Shows collaborative approach

5. **Programs with Clear Outcomes**
   - Each division has defined purpose and scope
   - Evidence-based language

6. **Professional Presentation**
   - Clean, modern design
   - No errors or broken elements
   - Mobile-responsive

---

## Imagery Strategy

### Available Resources
- **Gemini Pro 3 API** — Available for generating custom illustrations or imagery
- **Envato Elements** — Stock photography library access
- **Logo** — To be provided by client

### Image Requirements by Section

| Section | Image Type | Recommendations |
|---------|-----------|-----------------|
| Hero | Large background | Abstract/gradient OR diverse people + community |
| Divisions | Icons or illustrations | Consistent icon set, warm colors |
| Leadership | Headshots | Professional photos, consistent style/background |
| Programs | Supporting imagery | Authentic community photos, diverse representation |
| Support | Warm/hopeful | People connecting, community imagery |

### Photography Guidelines
- Authentic, not overly staged
- Diverse representation (age, ethnicity, background)
- Warm, natural lighting
- Hopeful and positive tone
- Avoid stereotypical "mental health" imagery (isolated, sad)
- Include veterans, first responders, youth, families, community settings

### Generated Imagery Possibilities (Gemini)
- Abstract horizon/sunrise illustrations
- Custom icons for divisions
- Background patterns/textures
- Decorative elements aligned with brand

---

## Content Tone & Copywriting Guidelines

### Voice Characteristics
- **Credible** — Professional language, evidence-based
- **Compassionate** — Person-centered, empathetic
- **Clear** — Accessible, avoiding jargon
- **Hopeful** — Solution-focused, forward-looking
- **Inclusive** — Welcoming to all backgrounds

### Do's
- Use person-first language
- Write at 8th-grade reading level for public content
- Include clear calls to action
- Acknowledge challenges while emphasizing hope
- Keep paragraphs short (2-3 sentences)

### Don'ts
- Use clinical jargon without explanation
- Make outcome promises that can't be guaranteed
- Use fear-based messaging
- Over-spiritualize (faith-aware, not faith-exclusive)
- Use stigmatizing language

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance
- Color contrast: 4.5:1 minimum for text
- Alt text for all images
- Keyboard navigation support
- Focus indicators visible
- Form labels properly associated
- Error messages clear and helpful
- Skip links for navigation
- Heading hierarchy (H1 → H2 → H3)
- No content conveyed by color alone
- Responsive design (mobile, tablet, desktop)
- Touch targets minimum 44x44px

---

## Forms & Integrations

### Contact Form
- Fields: Name, Email, Subject/Department, Message
- Validation and error handling
- Success confirmation
- Email notification to appropriate department

### Donation Integration
- Options: Stripe, PayPal, or nonprofit processor (Donorbox, Give)
- One-time and recurring options
- Secure payment processing
- Tax receipt generation

### Newsletter (Optional for Phase 2)
- Email capture with consent
- Integration with Mailchimp or similar
- Double opt-in

### Analytics
- Google Analytics 4
- Google Search Console
- Microsoft Clarity (session recordings)
- Goal tracking for donations, form submissions

---

## Development Phases

### Phase 1: Foundation (MVP)
- [ ] Homepage
- [ ] About (Mission & Values)
- [ ] Programs overview + 4 division pages
- [ ] Leadership page
- [ ] Contact page with form
- [ ] Support page with Founders Circle info
- [ ] Footer with legal content
- [ ] Basic SEO implementation
- [ ] Mobile responsiveness
- [ ] Core accessibility compliance

### Phase 2: Enhancement
- [ ] Partners page with inquiry form
- [ ] Blog/News section
- [ ] Newsletter integration
- [ ] Donation integration
- [ ] Advanced SEO (schema markup)
- [ ] Performance optimization

### Phase 3: Expansion
- [ ] Events calendar
- [ ] Resource library
- [ ] Member/partner portal
- [ ] Multi-language support (if needed)
- [ ] Advanced analytics dashboards

---

## Component Library

### Recommended Components to Build

**Layout Components**
- Header (with mobile menu)
- Footer
- Container/Section wrapper
- Page hero
- Card grid

**UI Components**
- Button (primary, secondary, text)
- Card (division, leadership, feature)
- Accordion (FAQ)
- Modal (leadership bios)
- Form elements (input, textarea, select)
- Alert/Notice

**Navigation Components**
- Main navigation
- Mobile menu
- Breadcrumbs
- Footer navigation

**Content Components**
- Section heading
- Feature grid
- Leadership card
- Testimonial (future)
- CTA block
- Partner logo grid

---

## Quality Assurance Checklist

### Pre-Launch
- [ ] All pages load without errors
- [ ] All links work (no 404s)
- [ ] Forms submit correctly
- [ ] Mobile responsive on all major breakpoints
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Accessibility audit passed
- [ ] SEO meta tags on all pages
- [ ] Favicon and social images set
- [ ] Analytics tracking working
- [ ] SSL certificate active
- [ ] Performance audit (Lighthouse 90+)
- [ ] Content proofread and approved
- [ ] Legal pages complete
- [ ] 501(c)(3) status displayed correctly

---

## Reference Links

### Design Research Sources
- [Mental Health Website Design Best Practices](https://framerbite.com/blog/best-mental-health-website-design-inspiration)
- [Nonprofit Website Best Practices 2025](https://www.slammedialab.com/post/nonprofit-website-best-practices)
- [UX Design for Mental Health](https://gapsystudio.com/blog/ux-design-for-mental-health/)
- [Talkspace Design Psychology](https://www.talkspace.com/blog/psychology-talkspaces-new-design/)
- [Grant-Ready Website Tips](https://www.foundant.com/blog/featuring-grants-on-your-nonprofit-website/)

### Mental Health Nonprofit References
- [NAMI](https://www.nami.org/)
- [Mental Health Foundation](https://mentalhealthfoundation.org/)
- [Shields & Stripes](https://news.va.gov/110954/shields-stripes-helps-improve-mental-health/)

### SEO Resources
- [Mental Health SEO Keywords](https://www.portlandseogrowth.com/keywords-for/mental-health/)
- [Nonprofit SEO Guide](https://www.zeffy.com/blog/nonprofit-web-design)

---

## Files Reference

This prompt should be used alongside:
- `/docs/BRANDING_GUIDE.md` — Visual identity and brand standards
- `/docs/WEBSITE_CONTENT.md` — All website copy and content structure
- Logo file (to be provided)

---

## Success Criteria

The website will be considered successful when it:

1. **Conveys Credibility** — Grant reviewers immediately recognize organizational legitimacy
2. **Supports Fundraising** — Clear paths to donate, sponsor, or partner
3. **Serves All Audiences** — Accessible to those seeking services, partners, and funders
4. **Ranks for Target Keywords** — SEO implementation drives organic traffic
5. **Performs Well** — Fast, responsive, accessible on all devices
6. **Reflects Values** — Design and content embody compassion, stewardship, service

---

*Document Version: 1.0*
*Prepared for website development team*
