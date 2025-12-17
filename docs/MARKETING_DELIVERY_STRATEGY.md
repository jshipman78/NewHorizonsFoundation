# New Horizons Foundation — Marketing & Delivery Strategy

## Executive Summary

This document outlines the comprehensive marketing and website delivery strategy for New Horizons Foundation. The goal is to create a fast, accessible, trustworthy web presence that effectively markets NHF's services and programs to grant funders, donors, partners, and those seeking mental health support.

---

## Part 1: Technology Stack Recommendation

### Recommendation: **Next.js + Headless CMS**

After evaluating your priorities (speed, accessibility, maintainability, marketing effectiveness), I recommend:

| Component | Technology | Rationale |
|-----------|------------|-----------|
| **Framework** | Next.js 14+ (App Router) | Best-in-class performance, SEO, accessibility |
| **Styling** | Tailwind CSS | Rapid development, consistent design system |
| **CMS** | Sanity.io | User-friendly editing, real-time preview, free tier |
| **Hosting** | Vercel | Optimal for Next.js, global CDN, automatic optimization |
| **Forms** | Formspree or Tally | Simple, reliable, no backend needed |
| **Donations** | Donorbox | Nonprofit-focused, low fees, embeddable |
| **Analytics** | GA4 + Plausible | Privacy-friendly + comprehensive |

### Why Not WordPress?

| Factor | WordPress | Next.js + Sanity |
|--------|-----------|------------------|
| **Speed** | Requires heavy optimization, plugins, caching | Fast by default, static generation |
| **Security** | Frequent vulnerabilities, plugin risks | Minimal attack surface, no database |
| **Hosting Cost** | $30-100/mo for quality managed hosting | $0-20/mo on Vercel |
| **SEO** | Good with plugins (Yoast) | Built-in, better Core Web Vitals |
| **Maintenance** | Constant updates, plugin conflicts | Minimal, automatic deployments |
| **Accessibility** | Depends on theme quality | Full control, WCAG compliance |
| **Content Editing** | Familiar interface | Modern, visual (Sanity Studio) |

### Performance Targets

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| **Lighthouse Performance** | 95+ | Google ranking factor, user experience |
| **First Contentful Paint** | < 1.0s | Users see content immediately |
| **Largest Contentful Paint** | < 2.0s | Main content loads fast |
| **Cumulative Layout Shift** | < 0.05 | No jarring layout jumps |
| **Time to Interactive** | < 3.0s | Users can interact quickly |
| **Mobile PageSpeed** | 90+ | Mobile-first audience |

---

## Part 2: Website Delivery Plan

### Phase 1: Foundation (Weeks 1-3)

**Deliverables:**
- [ ] Project setup (Next.js, Tailwind, Sanity)
- [ ] Design system implementation (colors, typography, components)
- [ ] Homepage
- [ ] About section (Mission & Values)
- [ ] Contact page with form
- [ ] Footer with legal content
- [ ] Mobile responsive design
- [ ] Basic SEO (meta tags, sitemap)

**Launch:** Soft launch to stakeholders for feedback

### Phase 2: Core Content (Weeks 4-5)

**Deliverables:**
- [ ] Programs overview page
- [ ] Four division pages (Mental Health, Veterans, Cultural, Youth)
- [ ] Leadership page with bios
- [ ] Partners page
- [ ] Support/Donate page structure
- [ ] Image optimization and implementation
- [ ] Accessibility audit and fixes

**Launch:** Public launch of informational site

### Phase 3: Engagement Features (Weeks 6-7)

**Deliverables:**
- [ ] Donation integration (Donorbox)
- [ ] Newsletter signup
- [ ] Contact form enhancements
- [ ] Social sharing integration
- [ ] Schema markup (structured data)
- [ ] Performance optimization
- [ ] Analytics setup (GA4, goals)

### Phase 4: Marketing Amplification (Ongoing)

**Deliverables:**
- [ ] Blog/News section (if desired)
- [ ] Resource library
- [ ] Event listings
- [ ] Partner portal
- [ ] A/B testing setup

---

## Part 3: Marketing Strategy

### 3.1 Target Audience Segmentation

| Segment | Primary Needs | Key Messages | Channels |
|---------|---------------|--------------|----------|
| **Grant Funders** | Credibility, impact, financial transparency | Professional leadership, evidence-based programs, measurable outcomes | Website, LinkedIn, grant databases |
| **Individual Donors** | Emotional connection, trust, impact visibility | Stories of hope, clear mission, easy giving | Website, email, social media |
| **Corporate Sponsors** | Brand alignment, recognition, CSR value | Partnership benefits, visibility, shared values | Website, LinkedIn, direct outreach |
| **Community Partners** | Shared mission, collaboration opportunity | Collaborative approach, local impact | Website, community events, networks |
| **Service Seekers** | Help finding services, trust, accessibility | Compassionate tone, clear resources, easy contact | Website, Google Search, referrals |
| **Clinicians/Educators** | Professional development, networking | Educational resources, collaboration opportunities | Website, LinkedIn, professional associations |

### 3.2 Content Marketing Strategy

#### Content Pillars

1. **Mental Health Education**
   - Stigma reduction content
   - Awareness campaigns
   - Resource guides

2. **Community Impact Stories**
   - Program success stories (anonymized)
   - Partner spotlights
   - Community event coverage

3. **Professional Resources**
   - Clinical best practices
   - Training announcements
   - Research highlights

4. **Leadership Thought Leadership**
   - Executive perspectives on mental health policy
   - Industry trends and commentary
   - Values-based leadership insights

#### Content Calendar Framework

| Week | Theme | Content Types |
|------|-------|---------------|
| Week 1 | Mental Health Awareness | Blog post, social graphics |
| Week 2 | Program Spotlight | Video/photo story, newsletter |
| Week 3 | Community Partner | Partner feature, joint content |
| Week 4 | Resource/Educational | Guide, infographic, webinar |

### 3.3 SEO Marketing Strategy

#### On-Page Optimization

**Every page must have:**
- Unique, keyword-rich title tag (< 60 characters)
- Compelling meta description (< 160 characters)
- Proper H1 → H2 → H3 hierarchy
- Internal links to related content
- External links to authoritative sources
- Image alt text with keywords
- Schema.org markup

#### Content Strategy for Organic Growth

**Informational Content (Attract):**
- "What is mental health stigma and how do we address it?"
- "Supporting first responders' mental health: A guide for families"
- "Building emotional intelligence in youth: Evidence-based approaches"

**Transactional Content (Convert):**
- Program landing pages with clear CTAs
- Donation pages with impact messaging
- Partnership inquiry pages

**Local SEO (When Applicable):**
- Google Business Profile
- Local directory listings
- State-specific landing pages

### 3.4 Email Marketing Strategy

#### Email List Segments

1. **General Newsletter** — Monthly updates, stories, events
2. **Donors** — Impact reports, giving opportunities
3. **Partners** — Collaboration news, joint initiatives
4. **Professional Network** — Training, conferences, resources

#### Email Types

| Email Type | Frequency | Purpose |
|------------|-----------|---------|
| Monthly Newsletter | Monthly | Engagement, awareness |
| Impact Report | Quarterly | Donor retention |
| Event Announcements | As needed | Participation |
| Welcome Series | Automated | Onboarding new subscribers |
| Donation Thank You | Automated | Gratitude, retention |

### 3.5 Social Media Strategy

#### Platform Priority

| Platform | Priority | Audience | Content Focus |
|----------|----------|----------|---------------|
| **LinkedIn** | High | Funders, partners, professionals | Thought leadership, programs, credibility |
| **Facebook** | High | Community, donors, families | Stories, events, community building |
| **Instagram** | Medium | General public, youth audience | Visual stories, awareness, inspiration |
| **Twitter/X** | Low | Media, policy conversations | News, advocacy, quick updates |

#### Content Mix (Per Platform)

**LinkedIn (3-4 posts/week):**
- Leadership insights
- Program announcements
- Partner features
- Industry news commentary
- Job/volunteer opportunities

**Facebook (4-5 posts/week):**
- Community stories
- Event promotions
- Donation campaigns
- Awareness content
- Engagement posts (questions, polls)

**Instagram (3-4 posts/week):**
- Visual stories
- Behind-the-scenes
- Quote graphics
- Reels (awareness content)
- Stories (daily engagement)

### 3.6 Paid Advertising Strategy (Future)

#### Google Ad Grants

**NHF qualifies for the $10,000/month Google Ad Grant for nonprofits.**

**Target Campaigns:**
1. **Brand Awareness** — "mental health nonprofit" queries
2. **Veteran/First Responder** — "veteran mental health support" queries
3. **Donation** — "donate to mental health nonprofit" queries
4. **Local** — State-specific service queries

#### Social Media Ads (When Budget Allows)

- Facebook/Instagram for donor acquisition
- LinkedIn for sponsor/partner outreach
- Retargeting for website visitors

---

## Part 4: Trust & Credibility Building

### 4.1 Website Trust Signals

**Must-Have Elements:**

| Element | Location | Purpose |
|---------|----------|---------|
| **501(c)(3) Status** | Footer, Donate page | Legal credibility |
| **Leadership Photos** | Leadership page | Human connection |
| **Contact Information** | Header, footer, contact page | Accessibility |
| **Physical Address** | Footer (when available) | Legitimacy |
| **Partner Logos** | Homepage, Partners page | Social proof |
| **Privacy Policy** | Footer | Legal compliance |
| **Secure Donation Badge** | Donate page | Payment trust |

### 4.2 Content Trust Markers

**Every program/service page should include:**
- Clear scope and objectives
- Leadership/expertise backing
- Evidence-based approach mention
- Partnership context
- Contact pathway

### 4.3 Third-Party Credibility

**Register with:**
- GuideStar/Candid (nonprofit transparency)
- Charity Navigator (when eligible)
- Better Business Bureau Wise Giving Alliance
- State charity registrations

---

## Part 5: Conversion Optimization

### 5.1 Donation Funnel

```
Awareness → Interest → Consideration → Donation → Retention

Homepage    Programs    Impact         Donate      Thank You
Blog        About       Stories        Form        Email
Social      Leaders     Testimonials   Payment     Updates
```

### 5.2 Key Conversion Points

| Page | Primary CTA | Secondary CTA |
|------|-------------|---------------|
| Homepage | Support Our Mission | Explore Programs |
| About | Join Founders Circle | Contact Us |
| Programs | Get Involved | Learn More |
| Leadership | Partner With Us | Contact |
| Donate | Donate Now | Join Founders Circle |

### 5.3 Donation Page Best Practices

- **Headline**: Focus on impact, not need
- **Amount Options**: $25, $50, $100, $250, Other
- **Recurring Option**: Prominent but not required
- **Form Fields**: Minimal (name, email, payment only)
- **Trust Badges**: SSL, payment processor logos
- **Impact Statements**: "Your $50 supports..."
- **Thank You Page**: Immediate gratitude + sharing options

### 5.4 Contact Form Optimization

- **Minimal Fields**: Name, Email, Message, Category (dropdown)
- **Clear Expectations**: "We respond within 2 business days"
- **Confirmation**: Immediate thank you + email confirmation
- **Routing**: By category to appropriate team member

---

## Part 6: Analytics & Measurement

### 6.1 Key Performance Indicators (KPIs)

#### Website Health
| Metric | Target | Measurement |
|--------|--------|-------------|
| Monthly Sessions | 1,000+ (Year 1) | GA4 |
| Bounce Rate | < 50% | GA4 |
| Average Session Duration | > 2 minutes | GA4 |
| Pages per Session | > 2 | GA4 |
| Mobile Traffic | Track % | GA4 |

#### SEO Performance
| Metric | Target | Measurement |
|--------|--------|-------------|
| Organic Traffic | 30%+ of total | GA4 |
| Keyword Rankings | Top 20 for targets | Search Console |
| Domain Authority | Grow quarterly | Moz/Ahrefs |
| Backlinks | Grow monthly | Search Console |

#### Conversions
| Metric | Target | Measurement |
|--------|--------|-------------|
| Contact Form Submissions | Track and grow | Form analytics |
| Newsletter Signups | Track and grow | Email platform |
| Donation Conversions | Track rate and value | Donorbox + GA4 |
| Download/Resource Access | Track engagement | GA4 events |

### 6.2 Reporting Cadence

| Report | Frequency | Audience |
|--------|-----------|----------|
| Weekly Dashboard | Weekly | Marketing team |
| Monthly Summary | Monthly | Leadership |
| Quarterly Review | Quarterly | Board/Stakeholders |
| Annual Report | Annually | Public/Donors |

---

## Part 7: Accessibility & Compliance

### 7.1 WCAG 2.1 AA Compliance

**Non-Negotiable Requirements:**

- [ ] Color contrast ratios (4.5:1 text, 3:1 large text)
- [ ] Keyboard navigation for all interactive elements
- [ ] Alt text for all images
- [ ] Form labels and error handling
- [ ] Skip navigation links
- [ ] Focus indicators
- [ ] Semantic HTML structure
- [ ] ARIA labels where needed
- [ ] Video captions (when applicable)
- [ ] Responsive design (320px - 1920px+)

### 7.2 Legal Compliance

- **Privacy Policy**: Clear data collection and use disclosure
- **Terms of Service**: Website usage terms
- **Cookie Consent**: GDPR/CCPA compliance (if applicable)
- **Donation Disclosures**: 501(c)(3) status, tax deductibility
- **Accessibility Statement**: Commitment to accessibility

---

## Part 8: Launch Checklist

### Pre-Launch

- [ ] All pages complete and reviewed
- [ ] Mobile responsive testing
- [ ] Cross-browser testing
- [ ] Accessibility audit
- [ ] SEO audit (titles, descriptions, schema)
- [ ] Forms tested and notifications working
- [ ] Analytics tracking verified
- [ ] SSL certificate active
- [ ] Favicon and social images set
- [ ] Legal pages complete
- [ ] 404 page designed
- [ ] Redirects configured (if migrating)

### Launch Day

- [ ] DNS configured
- [ ] Cache cleared
- [ ] Final link check
- [ ] Submit sitemap to Google
- [ ] Verify Search Console
- [ ] Test donation flow
- [ ] Social media announcement ready
- [ ] Email announcement ready

### Post-Launch (Week 1)

- [ ] Monitor for errors
- [ ] Check form submissions
- [ ] Review analytics
- [ ] Gather stakeholder feedback
- [ ] Address any issues
- [ ] Begin content marketing

---

## Part 9: Ongoing Optimization

### Monthly Tasks

- [ ] Review analytics and KPIs
- [ ] Publish 2-4 pieces of content
- [ ] Send newsletter
- [ ] Check for broken links
- [ ] Update any time-sensitive content
- [ ] Review and respond to form submissions

### Quarterly Tasks

- [ ] SEO audit and keyword review
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility audit
- [ ] Content audit (outdated content)
- [ ] A/B testing review
- [ ] Strategy review with leadership

### Annual Tasks

- [ ] Full website audit
- [ ] Design refresh assessment
- [ ] Technology review
- [ ] Strategy planning for next year
- [ ] Annual report publication

---

## Appendix A: Content Templates

### Blog Post Template

```markdown
# [Title with Primary Keyword]

**Meta Description:** [160 characters with keyword]

## Introduction (100-150 words)
Hook the reader, establish relevance, preview content.

## [Section H2] (200-300 words)
Main content with supporting points.

### [Subsection H3] (if needed)

## [Section H2] (200-300 words)

## Conclusion/Call to Action
Summarize key points, include CTA to related content or action.

---
**Author:** [Name, Title]
**Published:** [Date]
**Tags:** [Relevant tags]
```

### Program Page Template

```markdown
# [Program Name]

**Purpose Statement:** One sentence describing the "why"

## What We Do
Clear description of program activities and scope.

## Who We Serve
Target audience for this program.

## Our Approach
- Key methodology point 1
- Key methodology point 2
- Key methodology point 3

## Leadership
Brief mention of expertise behind the program.

## Get Involved
- Contact information
- CTA button

## Related Programs
Links to other relevant programs.
```

---

## Appendix B: Image Guidelines for Marketing

### Image Specifications

| Use Case | Size | Format | Notes |
|----------|------|--------|-------|
| Hero Background | 1920x1080 | WebP/JPG | Optimize < 200KB |
| Program Cards | 600x400 | WebP/JPG | Consistent framing |
| Leadership Headshots | 400x400 | WebP/JPG | Square, consistent style |
| Blog Featured | 1200x630 | WebP/JPG | OG image size |
| Social (Facebook) | 1200x630 | JPG/PNG | |
| Social (Instagram) | 1080x1080 | JPG/PNG | |
| Social (LinkedIn) | 1200x627 | JPG/PNG | |

### Photography Direction

**Do:**
- Natural lighting
- Authentic moments
- Diverse representation
- Hopeful expressions
- Community settings
- Professional environments

**Don't:**
- Staged stock photos
- Isolated individuals in distress
- Clinical/sterile environments
- Clichéd mental health imagery
- Low-resolution images

---

*Document Version: 1.0*
*Last Updated: [Current Date]*
*New Horizons Foundation Marketing & Delivery Strategy*
