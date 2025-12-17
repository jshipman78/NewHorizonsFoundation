// JSON-LD Structured Data Components for SEO

// Base organization data
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://newhorizonsfoundation.org/#organization",
  name: "New Horizons Foundation",
  alternateName: "NHF",
  url: "https://newhorizonsfoundation.org",
  logo: {
    "@type": "ImageObject",
    url: "https://newhorizonsfoundation.org/logo.png",
    width: "512",
    height: "512",
  },
  description:
    "New Horizons Foundation is a national nonprofit advancing mental health access, supporting veterans and first responders, and developing future leaders through ethical, evidence-based programs.",
  foundingDate: "2024",
  sameAs: [
    "https://facebook.com/newhorizonsfoundation",
    "https://twitter.com/newhorizonsorg",
    "https://linkedin.com/company/new-horizons-foundation",
    "https://instagram.com/newhorizonsfoundation",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "general inquiries",
      email: "info@newhorizonsfoundation.org",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      contactType: "partnerships",
      email: "partnerships@newhorizonsfoundation.org",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      contactType: "media inquiries",
      email: "media@newhorizonsfoundation.org",
      availableLanguage: "English",
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  knowsAbout: [
    "Mental Health",
    "Veterans Support",
    "First Responder Wellness",
    "Youth Leadership",
    "Community Programs",
  ],
};

// Website schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://newhorizonsfoundation.org/#website",
  name: "New Horizons Foundation",
  url: "https://newhorizonsfoundation.org",
  publisher: {
    "@id": "https://newhorizonsfoundation.org/#organization",
  },
};

// Service schemas for programs
export const mentalHealthServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://newhorizonsfoundation.org/programs/mental-health#service",
  name: "Mental Health Access Program",
  description:
    "Connecting underserved communities with licensed mental health professionals through subsidized therapy sessions, crisis support, and ongoing care coordination.",
  provider: {
    "@id": "https://newhorizonsfoundation.org/#organization",
  },
  serviceType: "Mental Health Services",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Underserved communities seeking mental health support",
  },
};

export const veteransServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://newhorizonsfoundation.org/programs/veterans-first-responders#service",
  name: "Veterans & First Responders Program",
  description:
    "Specialized mental health and wellness programs designed specifically for veterans, active military, firefighters, EMTs, and law enforcement personnel.",
  provider: {
    "@id": "https://newhorizonsfoundation.org/#organization",
  },
  serviceType: "Veterans Mental Health Services",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Veterans, active military, and first responders",
  },
};

export const youthLeadershipServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://newhorizonsfoundation.org/programs/youth-leadership#service",
  name: "Youth Leadership Program",
  description:
    "Building the next generation of ethical leaders through mentorship, emotional intelligence training, and community engagement opportunities.",
  provider: {
    "@id": "https://newhorizonsfoundation.org/#organization",
  },
  serviceType: "Youth Development Programs",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Young people ages 14-24",
  },
};

export const culturalEnrichmentServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://newhorizonsfoundation.org/programs/cultural-enrichment#service",
  name: "Cultural Enrichment Program",
  description:
    "Celebrating diversity and building inclusive communities through cultural events, educational workshops, and heritage preservation initiatives.",
  provider: {
    "@id": "https://newhorizonsfoundation.org/#organization",
  },
  serviceType: "Cultural Programs",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Communities seeking cultural connection and enrichment",
  },
};

// Component to render JSON-LD script tags
interface JsonLdProps {
  data: object | object[];
}

export function JsonLd({ data }: JsonLdProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

// Breadcrumb schema helper
export function createBreadcrumbSchema(
  items: { name: string; url: string }[]
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Person schema for leadership
export function createPersonSchema(person: {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  url?: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    image: person.image,
    url: person.url,
    worksFor: {
      "@id": "https://newhorizonsfoundation.org/#organization",
    },
  };
}

export default JsonLd;
