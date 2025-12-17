# New Horizons Foundation Website

This is the official website for **New Horizons Foundation (NHF)**, a national nonprofit organization dedicated to advancing mental health access, education, cultural enrichment, and leadership development.

## Technology Stack

| Component | Technology |
|-----------|------------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Hosting | Vercel (recommended) |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── programs/          # Programs pages
│   ├── leadership/        # Leadership page
│   ├── partners/          # Partners page
│   ├── support/           # Support/Donate pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles & brand colors
├── components/
│   ├── layout/            # Layout components (Header, Footer, Container)
│   └── ui/                # UI components (Button, Card, Section)
└── ...
```

## Brand Colors

Extracted from the official NHF logo:

| Color | Hex | Usage |
|-------|-----|-------|
| Horizons Green | `#1A5336` | Primary brand color, CTAs |
| Foundation Blue | `#1565C0` | Secondary color, links |
| Hope Gold | `#E8A730` | Accent highlights |
| Growth Green | `#5D9A41` | Secondary buttons |
| Leaf Green | `#7AB648` | Hover states |

## Documentation

See the `/docs` folder for detailed planning documentation:

- `WEBSITE_DEVELOPMENT_PROMPT.md` - Full specifications
- `BRANDING_GUIDE.md` - Visual identity standards
- `WEBSITE_CONTENT.md` - All website copy
- `SEO_KEYWORDS.md` - SEO strategy
- `MARKETING_DELIVERY_STRATEGY.md` - Marketing plan

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Pages

1. Create a new folder in `src/app/` with the route name
2. Add a `page.tsx` file with the page component
3. Import and use layout components from `@/components/layout`
4. Import UI components from `@/components/ui`

## Deployment

The recommended deployment platform is Vercel:

1. Connect your repository to Vercel
2. Configure environment variables (if any)
3. Deploy automatically on push to main branch

## License

Copyright New Horizons Foundation. All rights reserved.

---

*New Horizons Foundation is a 501(c)(3) nonprofit organization.*
