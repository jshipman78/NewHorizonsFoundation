# TASKS.md — New Horizons Foundation Website
> Extracted from client emails & uploaded documents — March 2026
> Client: Dr. Dean Aslinia, Executive Director
> Stack: Next.js (existing project)

---

## ORG REFERENCE (Do not hardcode inline — use a constants file)

```ts
// lib/nhf-constants.ts
export const ORG = {
  legalName: "New Horizons Mental Health Foundation Inc.",
  displayName: "New Horizons Foundation",
  ein: "41-3658405",
  address: "4817 Medical Center Dr, Suite 3A, McKinney, TX 75069",
  phone: "(972) 607-9650",
  email: "DrDean@TheNewHorizonsFoundation.org",
  website: "https://www.thenewhorizonsfoundation.org",
  donateUrl: "https://www.thenewhorizonsfoundation.org/donate",
  nhchUrl: "https://www.mydallascounselor.com",
  irsStatus: "501(c)(3) Public Charity — Effective January 5, 2026",
  publicCharitySection: "170(b)(1)(A)(vi)",
};
```

## DESIGN SYSTEM (Apply globally — do not deviate per page)

- [ ] Set up Tailwind theme tokens:
  - `primary`: `#ffffff` (white background)
  - `accent`: `#C9A84C` (gold — use for buttons, dividers, highlights only)
  - `accent-dark`: `#A07830` (gold hover state)
  - `text-primary`: `#1a1a1a`
  - `text-muted`: `#555555`
- [ ] Install & configure fonts via `next/font`:
  - Headlines: `Playfair Display` (Google Fonts)
  - Body: `Montserrat` (Google Fonts)
- [ ] Global button style: gold background (`#C9A84C`), black text, rounded corners (`rounded-md`), medium weight
- [ ] Premium spacing standard: generous padding between sections (`py-20` minimum)
- [ ] All pages: white background, no clutter, mobile-first
- [ ] Sticky header with "Request Proposal" CTA button on all pages
- [ ] Add NHF logo to `/public/assets/` — extract from uploaded PDFs or request SVG from Dean
- [ ] Add Dr. Dean headshot to `/public/assets/dean-aslinia.jpg` (source: uploaded portrait image)

---

## GLOBAL COMPONENTS

- [ ] **`<TrustFooterStrip />`** — reusable strip used at bottom of donation/program pages:
  > "Some programs featured through New Horizons Foundation are delivered through affiliated implementation partners, including New Horizons Center for Healing."
  > Link: "Visit New Horizons Center for Healing →" → https://www.mydallascounselor.com

- [ ] **`<EcosystemBadge />`** — 3-column strip: NHF (prevention) | NHCH (clinical) | API (education)

- [ ] **`<DonationReceiptTemplate />`** — IRS-compliant email template:
  ```
  Subject: Thank You for Your Donation to New Horizons Foundation
  Body includes: Donor name, org name, EIN (41-3658405), date, amount, payment method
  Statement: "No goods or services were provided in exchange for this contribution."
  Statement: "Tax-deductible to the extent permitted by law."
  Signed: Dr. S. Dean Aslinia, Executive Director
  ```

- [ ] **`<StickyHeaderCTA />`** — "Request Proposal" button fixed to header on scroll

---

## PAGE 1: /founding-100

**Source:** Email — "FOUNDING 100 PAGE (FINAL COPY FOR JOE)"

### Content Tasks
- [ ] Page title: `The Founding 100`
- [ ] Hero H1: "Be Among the First to Shape the Future of Mental Health"
- [ ] Hero subtext: full copy from email (founding commitment statement)
- [ ] Section 1: "What Is the Founding 100?" — body copy from email
- [ ] Section 2: Founding Contribution — minimum $5,000, spots limited to 100
- [ ] Section 3: Identity bullets — "A builder / An early investor / A leader"
- [ ] Section 4: Recognition & Benefits list (4 bullet points from email)
- [ ] Section 5: "Why This Matters" — mental health stats copy + 3 NHF pillars
- [ ] Section 6: "Only 100 Founding Positions Available" — scarcity language
- [ ] Section 7: CTA block — "Become a Founding Member →" + "Schedule a Call →" (subtext)
- [ ] Section 8: Trust strip — 501(c)(3), licensed clinicians, ecosystem links, doc downloads

### Feature Tasks
- [ ] **Progress bar component** — "Founding Members Secured: 12 / 100"
  - `12` is current hardcoded value — **needs to be dynamic** (see Open Questions #1)
  - Visual: gold filled bar, updates in real time or via admin if dynamic
- [ ] **Stripe integration** — button links to Stripe pre-filled for $5,000 "Founding Member Contribution"
  - Use `stripe.com/payment-links` OR custom Stripe Checkout session at `/api/stripe/founding-100`
- [ ] Email receipt add-on: append Founding Member confirmation line to standard receipt template
  > "You have been recognized as a Founding 100 Member of the New Horizons Foundation. Additional details and recognition information will be shared with you soon."

### Design Notes
- White + gold, luxury/trust feel
- Subtle exclusivity — not loud marketing
- Slug: `/founding-100`

---

## PAGE 2: /corporate-sponsorship

**Source:** Email — "CORPORATE SPONSORSHIP PAGE (FINAL COPY FOR JOE)"

### Content Tasks
- [ ] Hero H1: "Invest in Prevention. Lead With Impact."
- [ ] Hero subtext: copy from email
- [ ] Section 1: "Why Corporate Sponsorship Matters" — 4 bullet points
- [ ] Section 2: "Our Sponsorship Model" — intro copy
- [ ] Section 3: Sponsorship tiers (3 cards):
  - **Community Impact Sponsor** — $5,000 (supports + recognition details)
  - **Community Partner** — $10,000 (supports + recognition details)
  - **Premier Community Partner** — $15,000+ (supports + recognition details)
- [ ] Section 4: "Custom Sponsorship Opportunities" — 3 examples
- [ ] Section 5: "What Your Support Makes Possible" — 4 outcomes
- [ ] Section 6: Trust strip (501(c)(3), ecosystem, download links)
- [ ] Section 7: "Start Your Partnership" CTA with intake form

### Feature Tasks
- [ ] **Intake form** (build in-page or as modal):
  - Fields: Name, Organization, Email, Phone
  - Dropdown: Sponsorship Interest (4 options including Custom)
  - Dropdown: Estimated Budget Range ($5K–$10K / $10K–$15K / $15K+)
  - Textarea: Message
  - Submit → email to DrDean@TheNewHorizonsFoundation.org (or CRM)
- [ ] **"What $10K Does" visual block** — callout with 3 bullet items showing impact
- [ ] Footer CTA pair: "Lead With Impact. Partner With Purpose." + two buttons

### Design Notes
- Tier cards: impact-based naming (NOT Gold/Silver/Bronze)
- $15K+ anchors pricing, makes $10K feel mid, $5K feels entry
- Slug: `/corporate-sponsorship`

---

## PAGE 3: /programs

**Source:** Email — "Programs page for NHF" (detailed version — this overrides the earlier shorter version)

### Content Tasks
- [ ] Page title meta: "Programs | New Horizons Foundation"
- [ ] Meta description: "Explore prevention-focused mental health programs designed for youth, families, schools, and communities through New Horizons Foundation."
- [ ] Hero H1: "Programs That Build Stronger Minds and Healthier Communities"
- [ ] Hero subtext + dual CTAs: "Request Program Information" / "Request a Partnership Proposal"
- [ ] Section 1: "From Prevention to Real-World Impact" — body copy
- [ ] Section 2: **Strong Minds Program™** (flagship — highlight visually)
  - Age groups: Elementary & Middle School
  - Format: Small group sessions, 8-week cycles
  - Focus areas: emotional awareness, self-regulation, communication, coping, resilience
  - Outcomes: 4 bullet points
  - CTA 1: "Bring Strong Minds to Your School or Organization →" (NHF proposal page)
  - CTA 2: "Interested in participation options? Visit New Horizons Center for Healing →" (https://www.mydallascounselor.com)
- [ ] Section 3: Parent & Community Education — copy + examples + dual CTAs
- [ ] Section 4: School-Based Initiatives — copy + examples + dual CTAs
- [ ] Section 5: Professional Training & Education — copy + examples + CTA
- [ ] Section 6: Custom Program Development — copy + CTA
- [ ] Section 7: **Entity Bridge section** — NHF vs NHCH distinction (CRITICAL — see strategic goal below)
- [ ] Section 8: Flexible delivery formats (in-person / virtual / hybrid / event/multi-week)
- [ ] Section 9: Final CTA — "Bring These Programs to Your Community"
- [ ] Footer trust strip: `<TrustFooterStrip />` with NHCH link

### Feature Tasks
- [ ] "Program Snapshot" icon strip — 4 icons: 🎓 Youth Programs / 👨‍👩‍👧 Parent Support / 🏫 School Partnerships / 🌎 Community Initiatives
- [ ] "Request Program Information" form → email/CRM
- [ ] "Request a Partnership Proposal" → links to proposal form (reuse /services form or standalone)

### Design Notes
- Strong Minds Program™ visually called out as flagship (card, highlight, badge)
- CTAs repeated under EVERY section
- Strategic goal: NHF = prevention/programs/funding | NHCH = implementation/participation
- Slug: `/programs`

---

## PAGE 4: /transparency

**Source:** Email — "TRANSPARENCY & FINANCIALS PAGE (FINAL COPY FOR JOE)"

### Content Tasks
- [ ] Hero H1: "Accountability. Integrity. Impact."
- [ ] Section 1: "Our Commitment to Transparency" — 4 commitment bullets
- [ ] Section 2: 501(c)(3) Status block:
  - Tax-Exempt Status: Approved
  - EIN: 41-3658405 (display publicly — confirmed on donation instructions PDF)
  - Donations: Tax-deductible
  - Download link: `[Download IRS Determination Letter →]` → `/downloads/NHF_IRS_501c3_Determination_Letter.pdf`
- [ ] Section 3: Fund allocation visual (pie chart or 3-column bar):
  - 60% — Programs & Community Impact
  - 25% — Operations & Infrastructure
  - 15% — Growth & Development
- [ ] Section 4: Program Impact Focus — 4 bullet points
- [ ] Section 5: Governance & Oversight — board mention + `[View Board of Directors →]` (see Open Questions #2)
- [ ] Section 6: Financial Documentation download block — 4 documents with icons
- [ ] Section 7: Ethical Commitment — 3 bullet points
- [ ] Section 8: Contact for inquiries — email + website
- [ ] Footer CTA pair: "Partner With Confidence. Invest With Purpose." + two buttons

### Feature Tasks
- [ ] Fund allocation chart — use Recharts or a CSS-based visual (no external chart library needed for simple 3-segment)
- [ ] Download links — wire all 4 document links to `/public/downloads/` folder (see Download Center tasks for file list)

### Design Notes
- Slug: `/transparency`

---

## PAGE 5: /downloads

**Source:** Email — "DOWNLOAD CENTER PAGE (FINAL COPY FOR JOE)"

### Content Tasks
- [ ] Hero H1: "Trusted. Transparent. Ready to Partner."
- [ ] Hero subtext: copy from email
- [ ] Section: Core Organizational Documents (4 files)
- [ ] Section: Sponsorship & Partnership Materials (3 files)
- [ ] Section: Grant & Institutional Packet (1 bundled file)
- [ ] Section: "Need Something Else?" — contact email CTA

### Feature Tasks
- [ ] File hosting: place all PDFs in `/public/downloads/` with exact naming:
  ```
  NHF_IRS_501c3_Determination_Letter.pdf       ← PROVIDED (upload from client files)
  NHF_W9_Form.pdf                              ← PROVIDED (upload from client files)
  NHF_Board_of_Directors_2026.pdf              ← MISSING (see Open Questions #2)
  NHF_Organizational_Overview_One_Page.pdf     ← MISSING (needs to be created)
  NHF_Sponsorship_Packet_2026.pdf              ← MISSING (needs to be created)
  NHF_Community_Initiative_Overview.pdf        ← PROVIDED (Community Benefit Alignment PDF)
  NHF_Letter_of_Support_Template.docx         ← MISSING (template text provided in email)
  NHF_Grant_Compliance_Packet.pdf              ← MISSING (merged bundle — see below)
  ```
- [ ] Create `NHF_Grant_Compliance_Packet.pdf` by merging in order:
  1. Cover page (NHF letterhead)
  2. IRS Determination Letter
  3. W-9
  4. Board roster (when available)
  5. Organizational Overview
- [ ] Create `NHF_Letter_of_Support_Template.docx` using template text from email (Dean provided full body copy)
- [ ] Download tracking: optionally log download events to analytics

### Design Notes
- All file cards: icon (📄), title, description, download button
- Bundle card: 📦 with file list inside
- Slug: `/downloads`

---

## PAGE 6: /sponsorship

**Source:** Email — "Sponsorship & Giving page for NHF"
*(Note: This is the individual/giving-focused version. /corporate-sponsorship is the B2B version.)*

### Content Tasks
- [ ] Page meta: "Sponsorship & Giving | New Horizons Foundation"
- [ ] Hero H1: "Invest in Mental Health. Strengthen Communities."
- [ ] CTAs: "Become a Community Partner" / "Make a Contribution"
- [ ] Section 1: "More Than a Donation—A Strategic Investment"
- [ ] Section 2: "Where Your Support Creates Impact" — 4 impact areas with brief descriptions
- [ ] Section 3: Partnership tiers (3 cards):
  - **Community Partner** — $5,000
  - **Impact Partner** — $10,000 (highlighted)
  - **Premier Community Partner** — $25,000+ (highlighted)
  - Note subtext: all levels can align with specific programs
- [ ] Section 4: Corporate and Organizational Partnerships — brief copy
- [ ] Section 5: Individual Contributions — brief copy
- [ ] Section 6: Accountability and Stewardship — brief copy
- [ ] Section 7: Final CTA block — two buttons

### Feature Tasks
- [ ] Stripe donation integration — custom amount field + pre-set tier buttons
- [ ] "Become a Community Partner" → links to intake form or Stripe with tier pre-selected
- [ ] Highlight $10K and $25K tiers visually (border, badge, or scale)

### Design Notes
- Cards/columns for tiers
- Slug: `/sponsorship`

---

## PAGE 7: /services

**Source:** Email — "Mental Health Programs, Training & Consulting page" + Proposal Template + Lead Intake Form

### Content Tasks
- [ ] Page title meta: "Mental Health Programs, Training & Consulting | New Horizons Foundation"
- [ ] Meta description from email
- [ ] Hero H1: "Transforming Mental Health Through Education, Prevention, and Scalable Systems"
- [ ] Trust bar: "Trusted by educators, clinicians, and community leaders"
- [ ] CTAs: "Request a Partnership Proposal" / "Schedule a Consultation"
- [ ] Section 1: "A New Model for Mental Health Impact" — 3-pillar columns (Education & Training / Program Development / Strategy & Consultation)
- [ ] Section 2: "Services & Investment" — pricing blocks:
  - Workshops & Trainings: $1,500–$5,000 (standard) / $5,000–$10,000 (full-day)
  - Program Development: $2,500–$7,500 (modules) / $10,000–$50,000 (full design)
  - Consultation & Strategy: $125–$225/hr (design) / $125–$275/hr (clinical/educational)
  - Institutional Partnerships: custom, $5,000–$25,000+
- [ ] Section 3: "What Sets Us Apart" — 5 differentiator bullets
- [ ] Section 4: 3-step process (Consultation → Custom Design → Implementation)
- [ ] Section 5: "Who We Partner With" — 5 partner types
- [ ] Section 6: "Focused on Measurable Outcomes" — brief copy
- [ ] Section 7: Final CTA — "Start the Conversation"

### Feature Tasks
- [ ] **Lead Intake / Proposal Request Form** (high-conversion filter):
  - Section 1: Org Name, Contact Name, Title/Role, Email, Phone (optional)
  - Section 2: Organization Type dropdown (6 options)
  - Section 3: Service Interest multi-select (5 options)
  - Section 4: Project details — "What are you trying to accomplish?" (required textarea) + target population
  - Section 5: Timeline dropdown (4 options)
  - Section 6: **Budget Qualifier** (CRITICAL) — 5 budget ranges from "<$1,500" to "$25,000+"
  - Section 7: Decision authority — Yes / Part of team / No
  - Section 8: Consultation call preference
  - Submit button: "Request Proposal"
- [ ] **Auto-response email** on form submit:
  - Subject: "Your New Horizons Consultation Request"
  - Body: thanks, confirmation, 24–48 hr response expectation
- [ ] **Internal lead tagging** (CRM or email tag): LOW / MID / HIGH / PREMIUM based on budget field
  - LOW: <$5K | MID: $5K–$10K | HIGH: $10K–$25K | PREMIUM: $25K+

### Design Notes
- Target audience: institutional decision-makers, not individuals
- Pricing displayed openly to normalize $5K–$25K+ as standard
- Slug: `/services`

---

## PAGE 8: /leadership

**Source:** Email — "Leadership & Vision page for NHF" + headshot image uploaded

### Content Tasks
- [ ] Page meta: "Leadership & Vision | New Horizons Foundation"
- [ ] Meta description from email
- [ ] Hero H1: "Leadership Driving a New Model of Mental Health"
- [ ] Section 1: "A Vision Beyond Crisis Care" — origin/mission paragraph
- [ ] Section 2: "Leadership and Expertise" — Dr. Dean Aslinia bio block:
  - Title: Executive Director, New Horizons Foundation
  - Body: clinician, educator, bridging academic knowledge with real-world application
  - **Headshot**: use uploaded portrait (`dean-aslinia.jpg`) — crop to professional square or 3:4
- [ ] Section 3: "An Integrated Approach to Mental Health" — ecosystem description (NHF / NHCH / API)
- [ ] Section 4: "Grounded in Prevention, Built for Impact" — (Dean provided title only — use copy from other pages to fill, or flag for Dean)
- [ ] Section 5: "Why This Approach Matters" — (Dean provided title only — flag for Dean or derive from mission copy)
- [ ] Section 6: CTA block — "Request a Partnership Proposal" + "Learn About Our Programs"

### Design Notes
- Professional headshot displayed prominently — half-page or above-fold placement
- Elevated, institutional feel — NOT a clinic bio page
- Slug: `/leadership`

---

## PAGE 9: /why-donate

**Source:** Email section A — "Why Donate (High-Conversion Page)"

### Content Tasks
- [ ] Hero: "Mental Health Should Not Begin in Crisis."
- [ ] Subtext: donation brings prevention/education/intervention to schools, families, communities
- [ ] Impact framing block (4 tiers):
  - $50 → one student's mental health education materials
  - $250 → sponsors a parent education session
  - $1,000 → funds a youth group cohort session
  - $5,000 → sponsors a full community initiative
- [ ] Trust anchors:
  - Backed by licensed clinicians and CACREP-aligned educators
  - 15+ years of clinical impact through NHCH
  - Community partnerships with schools and healthcare systems
- [ ] CTA: "Donate Today → Be Part of Prevention, Not Just Intervention"

### Feature Tasks
- [ ] Link CTA to Stripe donate flow or `/donations` page
- [ ] Impact amounts can be clickable → pre-fill donation amount in Stripe

### Design Notes
- Emotional conversion page — leads into Stripe
- Slug: `/why-donate`

---

## DONATION / PAYMENT INTEGRATION

- [ ] Configure Stripe account (confirm with Dean — account must be under NHF legal entity)
- [ ] Create Stripe Payment Link for **Founding 100** — pre-filled $5,000
- [ ] Create Stripe Payment Link for **general donations** — custom amount
- [ ] Pre-set donation amounts: $50 / $250 / $1,000 / $5,000 (clickable tiles)
- [ ] Stripe webhook → trigger IRS-compliant receipt email on successful payment
- [ ] Receipt email must include EIN (41-3658405) and "no goods or services" statement
- [ ] Founding 100 receipt: append special recognition confirmation line
- [ ] Confirm Stripe account display name matches legal name: "New Horizons Mental Health Foundation Inc."

---

## NAVIGATION / SITE STRUCTURE

- [ ] Primary nav: Home | Programs | Services | Sponsorship | Leadership | Transparency | Donate
- [ ] Secondary/footer nav: Corporate Sponsorship | Founding 100 | Why Donate | Downloads | Contact
- [ ] "Donate Now" button persistent in header (gold)
- [ ] Footer: legal name, EIN, address, phone, email, 501(c)(3) disclaimer
- [ ] Footer disclaimer text:
  > "New Horizons Foundation is a tax-exempt organization under Section 501(c)(3) of the Internal Revenue Code. Contributions are tax-deductible to the extent permitted by law."

---

## FILES TO UPLOAD TO /public/downloads/

| File | Status | Source |
|------|--------|--------|
| `NHF_IRS_501c3_Determination_Letter.pdf` | ✅ PROVIDED | Uploaded by client |
| `NHF_W9_Form.pdf` | ✅ PROVIDED | Uploaded by client (signed) |
| `NHF_Community_Initiative_Overview.pdf` | ✅ PROVIDED | Community Benefit Alignment PDF |
| `NHF_2026_Prevention_Program_Budget.pdf` | ✅ PROVIDED | Program Budget One Pager |
| `NHF_Board_of_Directors_2026.pdf` | ❌ MISSING | Needed from Dean |
| `NHF_Organizational_Overview_One_Page.pdf` | ❌ MISSING | Create from template in email |
| `NHF_Sponsorship_Packet_2026.pdf` | ❌ MISSING | Create from sponsorship page content |
| `NHF_Letter_of_Support_Template.docx` | ❌ MISSING | Create — template body in email |
| `NHF_Grant_Compliance_Packet.pdf` | ❌ MISSING | Merge bundle (see /downloads tasks) |

---

## OPEN QUESTIONS FOR DEAN

> Flag these before building dependent features

1. **Founding 100 progress bar** — Is "12" the real current count? How should this update — manually (admin sets it) or auto-synced from Stripe/database?
2. **Board of Directors** — Board roster PDF is referenced on multiple pages. Please provide names, titles, and any bios.
3. **Sections 4 & 5 of /leadership** — Dean provided headings only ("Grounded in Prevention" / "Why This Approach Matters") with no body copy. Provide copy or approve AI-drafted copy.
4. **Stripe account** — Is the Stripe account already created under the NHF legal entity? Provide publishable key and confirm account display name.
5. **Scheduling link** — Multiple pages say "Schedule a Call →". What platform? (Calendly, Cal.com, etc.) Provide URL.
6. **Contact email for forms** — Confirm: all form submissions go to DrDean@TheNewHorizonsFoundation.org? Or does a separate team email exist?
7. **Arizona programming office** — The AZ donation instructions reference "Arizona Programming Office — Phoenix Metro." Is there a separate /arizona page or section needed? Phone 623-296-0402 also appears in AZ docs. Scope?
8. **$2,500 "Local Supporter" tier** — Appears in the sponsorship one-pager docx but not in the Corporate Sponsorship or Sponsorship & Giving page emails. Include it on /sponsorship or /corporate-sponsorship?
9. **CRM / email automation** — Where should form leads land? (Mailchimp, HubSpot, ActiveCampaign, direct email?) Tagging by budget tier requires a CRM or email platform.
10. **"Naili" reference** — One email mentions "instant email attachments for Naili." Who is Naili? Does she need a separate login or admin access to the download center?
11. **Second site** — Joe noted two sites. All emails received so far are for NHF. What is the second site? (NHCH / mydallascounselor.com? API?) Provide emails for that project.
12. **NHF logo SVG** — Logo appears in PDFs but needs a clean SVG or high-res PNG for the website header. Please provide.

---

## NOTES FOR CLAUDE CODE

- This is an existing Next.js project — do not scaffold from scratch
- All sensitive org data (EIN, banking) is already public via official NHF PDF documents
- The banking/ACH info on the donation instructions page is public-facing — include only if a `/donate-instructions` page is requested
- Do NOT store banking routing/account numbers in code — reference the hosted PDF only
- Founding 100 progress count (`12`) should be stored in an env variable or admin-editable config, not hardcoded in JSX
- The NHF/NHCH/API entity distinction is CRITICAL — NHF never presents itself as a clinical provider
