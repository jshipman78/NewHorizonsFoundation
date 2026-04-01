# NHF Founders Circle — Website Update Tasks
# Client: New Horizons Foundation (thenewhorizonsfoundation.org)
# Source of truth: Live site crawled 2026-03-31
# Stack: Next.js App Router, Vercel

## BEFORE STARTING
Run the following to confirm file locations — do NOT assume paths:
```bash
find . -type f -name "*.tsx" | grep -E "(support|partners|layout|nav|header|page)" | sort
ls src/app 2>/dev/null || ls app
```
All file paths below use `app/` as the root — adjust to `src/app/` if that is what the project uses.

---

## TASK-001 — Update Founders Circle pricing on /support page
**File:** `app/support/page.tsx`
**Type:** Content replacement (find/replace exact live text)
**Risk:** Low

### Changes

Replace old tier 1:
```
Supporting Founder
$2,500 – $4,999
Foundation-level support
- Recognition as Supporting Founder
- Quarterly impact updates
- Invitation to annual gathering
[Join as Supporting Founder]  →  href="/invest"
```
With new tier 1:
```
Founding Member
$5,000
For individuals, families, and professionals who want to stand early and visibly behind the mission.
- Recognition as a Founding Member
- Name listed on the Founders Circle Recognition page
- Founding Member certificate
- Milestone and impact updates
- Early alignment with the foundation's growth
[Become a Founding Member]  →  href="/founders-circle"
```

Replace old tier 2 (currently labeled "Most Popular"):
```
Founding Partner
$5,000 – $9,999
Partnership-level commitment
- Recognition as Founding Partner
- Quarterly impact updates
- Priority invitation to events
- Direct access to leadership
[Join as Founding Partner]  →  href="/invest"
```
With new tier 2:
```
Founding Partner
$10,000–$25,000
For mission-aligned leaders, firms, and organizations seeking stronger visibility and deeper alignment.
- Everything in Founding Member, plus:
- Elevated recognition on the website
- Public recognition in selected launch and milestone communications
- Priority invitations to events and partnership opportunities
- Stronger public alignment with a values-driven mental health initiative
[Become a Founding Partner]  →  href="/founders-circle"
```

Replace old tier 3:
```
Charter Founder
$10,000+
Charter-level founding support
- Recognition as Charter Founder
- Monthly impact updates
- VIP event access
- Direct access to Executive Director
- Named recognition opportunities
[Join as Charter Founder]  →  href="/invest"
```
With new tier 3:
```
Founding Patron
$25,000+
For those who want to make a significant founding investment and help shape the long-term trajectory of New Horizons Foundation.
- Everything in Founding Partner, plus:
- Prominent recognition across key foundation materials
- Priority leadership access and stewardship
- Strategic alignment opportunities where appropriate
- Customized recognition based on contribution and scope
[Inquire About Founding Patron Recognition]  →  href="/founders-circle#patron-inquiry"
```

**Acceptance criteria:**
- Old tier names (Supporting Founder, Charter Founder) no longer appear anywhere on the page
- New pricing is correct: $5,000 / $10,000–$25,000 / $25,000+
- All Founders Circle buttons link to /founders-circle (not /invest)
- Patron button links to /founders-circle#patron-inquiry

---

## TASK-002 — Update navigation Founders Circle link
**File:** Find the navigation/header component. Look for a file named `nav.tsx`, `header.tsx`, `navigation.tsx`, or a layout component that contains the dropdown menu.
**Type:** Link href update
**Risk:** Low

### Change
In the "Get Involved" dropdown, the Founders Circle item currently links to `/support`.

Find:
```tsx
// Link that reads "Founders Circle" with href="/support" in the dropdown
// Description text: "Join our founding supporters with significant giving commitments"
```

Change `href` from `/support` to `/founders-circle`.

Also update the footer (same file or a separate footer component):
Find the Support section in the footer where "Founders Circle" links to `/support`.
Change `href` from `/support` to `/founders-circle`.

**Acceptance criteria:**
- Nav dropdown "Founders Circle" → /founders-circle
- Footer "Founders Circle" → /founders-circle
- No other nav links changed

---

## TASK-003 — Create /founders-circle page (new page)
**File:** Create `app/founders-circle/page.tsx`
**Type:** New page
**Risk:** Low (additive only)

### Page metadata
```tsx
export const metadata = {
  title: "Founders Circle | New Horizons Foundation",
  description: "Join the New Horizons Foundation Founders Circle. Early supporters helping establish ethical mental health leadership and long-term community impact.",
};
```

### Page structure and copy (use exact copy below — do not rewrite or paraphrase)

**Hero section**
- H1: `Founders Circle`
- Subheadline: `A community of early supporters helping establish New Horizons Foundation with ethical leadership, long-term vision, and meaningful public impact.`

**Intro section**
- H2: `Why the Founders Circle Matters`
- Body: `New Horizons Foundation was created to expand mental health access, strengthen communities, and develop future leaders through education, collaboration, and service. The Founders Circle brings together the individuals, families, firms, and organizations choosing to stand behind that mission at an early and meaningful stage. Founding support is not simply a transaction. It is a statement of belief in a more ethical, prevention-focused future for mental health.`

**Founding Levels section**
- H2: `Founding Levels`

Tier 1 — Founding Member card:
- Title: `Founding Member`
- Price: `$5,000`
- Description: `For individuals, families, and professionals who want to stand early and visibly behind the mission.`
- Includes list:
  - Recognition as a Founding Member
  - Name listed on the Founders Circle Recognition page
  - Founding Member certificate
  - Milestone and impact updates
  - Early alignment with the foundation's growth
- Button: `Become a Founding Member` → href="/invest" (Stripe)

Tier 2 — Founding Partner card:
- Title: `Founding Partner`
- Price: `$10,000–$25,000`
- Description: `For mission-aligned leaders, firms, and organizations seeking stronger visibility and deeper alignment with the foundation's long-term work.`
- Includes list:
  - Everything in Founding Member, plus:
  - Elevated recognition on the website
  - Public recognition in selected launch and milestone communications
  - Priority invitations to events and partnership opportunities
  - Stronger public alignment with a values-driven mental health initiative
- Anchor note: `Most early leadership supporters are aligning at this level to establish stronger visibility and long-term positioning.`
- Button: `Become a Founding Partner` → href="/invest" (Stripe)

Tier 3 — Founding Patron card:
- Title: `Founding Patron`
- Price: `$25,000+`
- Description: `For those who want to make a significant founding investment and help shape the long-term trajectory of New Horizons Foundation.`
- Includes list:
  - Everything in Founding Partner, plus:
  - Prominent recognition across key foundation materials
  - Priority leadership access and stewardship
  - Strategic alignment opportunities where appropriate
  - Potential advisory or leadership-level visibility based on fit
  - Customized recognition based on contribution and scope of support
- Note: `Founding Patron commitments are individually structured based on alignment, vision, and long-term impact.`
- Button: `Inquire About Founding Patron Recognition` → href="/contact" with id="patron-inquiry" on the section

**"Why early supporters are stepping in now" section**
- H2: `Why Early Supporters Are Stepping In Now`
- Bullet list:
  - To help build—not just support—a new model of mental health
  - To align with a values-driven, ethics-first system
  - To be publicly recognized as early leaders
  - To attach their name to something designed to scale

**Closing section**
- H2: `Build What Matters Early`
- Body: `Some people support an organization once it is established. Others help establish it. If you believe mental health should be more proactive, more ethical, and more deeply connected to community well-being, we invite you to join the Founders Circle.`
- Secondary link: `View Founders Circle Recognition` → href="/founders-circle-recognition"

**Style guidance:**
Match the visual style of `app/support/page.tsx` exactly — same card components, same section spacing, same button variants. Do not introduce new design patterns.

**Acceptance criteria:**
- Page renders at /founders-circle
- All three tiers present with correct prices and copy
- Patron section has id="patron-inquiry"
- No copy deviation from the above

---

## TASK-004 — Create /founders-circle-recognition page (new page)
**File:** Create `app/founders-circle-recognition/page.tsx`
**Type:** New page
**Risk:** Low (additive only)

### Page metadata
```tsx
export const metadata = {
  title: "Founders Circle Recognition | New Horizons Foundation",
  description: "Honoring the early supporters helping establish New Horizons Foundation with integrity, vision, and long-term commitment.",
};
```

### Page structure and copy (use exact copy below)

**Hero section**
- H1: `Founders Circle Recognition`
- Subheadline: `Honoring the early supporters helping establish New Horizons Foundation with integrity, vision, and long-term commitment.`

**Intro section**
- Body: `The Founders Circle recognizes the individuals, families, organizations, and businesses who chose to support New Horizons Foundation at an early and meaningful stage. We are grateful for those helping build a stronger future for mental health, community resilience, and ethical leadership.`

**Three recognition sections — each with a heading and placeholder:**

Section 1:
- H2: `Founding Patrons`
- Placeholder text (render elegantly, italicized or muted): `Recognition listings will be updated as founding commitments are confirmed.`

Section 2:
- H2: `Founding Partners`
- Same placeholder text

Section 3:
- H2: `Founding Members`
- Same placeholder text

**Note:** Each section should be designed so names/logos can be added later. Use a simple grid or list layout — clean, minimal, consistent with the rest of the site.

**Closing CTA**
- Link: `Join the Founders Circle` → href="/founders-circle"

**Style guidance:** Match the clean, formal tone of `app/leadership/page.tsx` or `app/about/page.tsx` if those exist. Elegant and restrained — not flashy.

**Acceptance criteria:**
- Page renders at /founders-circle-recognition
- Three sections present with correct headings
- Placeholder text visible but clearly styled as placeholder
- CTA links to /founders-circle

---

## TASK-005 — Rebuild /partners page (add strategic partners section)
**File:** `app/partners/page.tsx`
**Type:** Additive edit — keep ALL existing content, add new section below
**Risk:** Medium — do not remove or rewrite any existing sections

### DO NOT CHANGE:
- The hero section: "Partners & Collaborations"
- The "Our Partnership Philosophy" section
- The "Who We Partner With" section (6 category descriptions)
- The "Benefits of Partnership" section
- The existing "Become a Partner" CTA at the bottom

### ADD: New section between "Who We Partner With" and "Become a Partner"

Insert after the "Benefits of Partnership" section:

**New section heading:** `Featured Strategic Partners`

**Intro copy:** `New Horizons Foundation is proud to recognize mission-aligned organizations and collaborators helping advance mental health access, ethical leadership, education, and community resilience.`

**Partner groups (render as labeled grid sections with placeholder logo tiles):**

Group 1 — `Education & School Partnerships`
- McKinney ISD
- Student Family Wellness Community Center
- Arcadia Christian Academy
- Francis Educational Consulting

Group 2 — `Clinical & Mental Health Partners`
- New Horizons Center for Healing
- American Psychotherapy Institute
- Chapter and Pages Counseling *(Autism & Neurodivergent Partner Clinic)*
- The Nourishment Center *(Eating Disorders Partner Clinic)*
- Holistic Sex Therapy *(Partner Clinic)*
- Beyond Pages *(Nonprofit Partner)*

Group 3 — `Faith & Community Partners`
- Church on the Rock
- Behavioral Coalition of Collin County

Group 4 — `Medical & Wellness Partners`
- Lone Star Dental *(Supporting Founder)*
- Abbassi Surgical Associates

Group 5 — `Professional Services & Business Partners`
- Zendeh Del Law Firm
- David Kessel, CPA
- Aslinia Consulting Group

Group 6 — `Media, Design & Communications Partners`
- Luminous Productions *(Digital Branding Partner)*

**Logo handling:** Most partners do not have logos on file yet. Render each as a named tile/card showing the organization name. If a `public/logos/` directory exists and has any matching files, use them. Otherwise use text-only tiles. Do NOT fetch or import logos from external URLs.

**Updated "Become a Partner" CTA section — replace the current two buttons:**
Current:
```
[Contact Us to Partner] → /contact
[Support Our Mission] → /support
```
Replace with:
```
[Contact Us to Partner] → /contact
[View Founders Circle] → /founders-circle
```

**Acceptance criteria:**
- All existing sections still present and unchanged
- "Featured Strategic Partners" section present with all 6 groups
- All 19 named partners appear in their correct groups
- Bottom CTA second button now links to /founders-circle (not /support)

---

## TASK-006 — Add emotional hook section to homepage
**File:** `app/page.tsx`
**Type:** Additive edit — insert new section, do not modify existing sections
**Risk:** Low

### Location
Insert the new section **after** the hero section and **before** the "Our Mission" section.

The hero section ends with the two buttons: `[Support Our Mission]` and `[Explore Programs]`.
The "Our Mission" section begins with: `## Our Mission` and `To expand access to ethical mental health services...`

### New section content (use exact copy)
- H2: `Mental health should not begin at crisis`
- Body: `New Horizons Foundation exists to help communities move upstream through prevention, education, early support, and ethical collaboration. We believe healthier systems are built before preventable suffering becomes crisis.`
- Button: `Explore the Founders Circle` → href="/founders-circle"

**Style guidance:** Match the visual weight and spacing of the existing homepage sections. Use the same section wrapper, heading size, and button variant already in use on the page. Do not introduce new components.

**Acceptance criteria:**
- New section visible on homepage between hero and "Our Mission"
- Existing hero and "Our Mission" sections are unchanged
- Button links to /founders-circle

---

## TASK-007 — Add Founders Circle to main navigation
**File:** The nav/header component (same file identified in TASK-002)
**Type:** Nav item addition
**Risk:** Medium — nav changes affect every page

### Change
The top-level navigation currently has these items:
`About | Programs (dropdown) | Get Involved (dropdown) | Leadership | Contact | Donate`

Add `Founders Circle` as a top-level nav link between "Get Involved" and "Leadership":
- Label: `Founders Circle`
- href: `/founders-circle`
- Style: Match the existing top-level link style (not a dropdown)

**Note:** "Founders Circle" should also remain in the "Get Involved" dropdown as-is (already updated to /founders-circle in TASK-002). The top-level item is an additional entry for direct visibility.

**Acceptance criteria:**
- "Founders Circle" appears as a top-level nav item
- Links to /founders-circle
- All other nav items and dropdowns unchanged
- Mobile nav also includes the new item

---

## EXECUTION ORDER
Run tasks in this sequence. Verify each before proceeding:
1. TASK-001 (pricing update — lowest risk, confirms file paths for other tasks)
2. TASK-002 (nav/footer link updates)
3. TASK-003 (new /founders-circle page)
4. TASK-004 (new /founders-circle-recognition page)
5. TASK-005 (partners page rebuild)
6. TASK-006 (homepage insert)
7. TASK-007 (nav addition — last because it touches the global layout)

## THINGS TO NEVER DO
- Do not delete or rewrite existing sections unless explicitly stated above
- Do not change Stripe integration logic — only button labels and hrefs
- Do not fetch external logo images
- Do not change the EIN (41-3658405) or IRS language on any page
- Do not rename or move any existing files
- Do not change any page other than the ones listed above
