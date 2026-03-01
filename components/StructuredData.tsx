import { currentProduction, theatreInfo } from '@/lib/data';

const baseUrl = 'https://companytheatre.ca';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TheaterGroup',
    name: theatreInfo.name,
    description: theatreInfo.about.whoWeAre,
    foundingDate: theatreInfo.founded.toString(),
    url: baseUrl,
    logo: `${baseUrl}/images/logo-main.png`,
    sameAs: [
      theatreInfo.contact.social.facebook,
      theatreInfo.contact.social.twitter,
      theatreInfo.contact.social.instagram,
      theatreInfo.contact.social.youtube,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: theatreInfo.contact.email,
      contactType: 'artistic director',
    },
    knowsAbout: ['Theatre', 'Drama', 'Live Performance', 'Stage Production'],
    areaServed: {
      '@type': 'City',
      name: 'Toronto',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function HomePageSchema() {
  const upcomingProductionSchema = {
    '@context': 'https://schema.org',
    '@type': 'TheaterEvent',
    name: currentProduction.title,
    description: currentProduction.synopsis,
    eventStatus: 'https://schema.org/EventScheduled',
    startDate: '2027-03-12',
    endDate: '2027-04-18',
    location: {
      '@type': 'PerformingArtsTheater',
      name: currentProduction.venue,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Toronto',
        addressRegion: 'ON',
        addressCountry: 'CA',
      },
    },
    organizer: {
      '@type': 'TheaterGroup',
      name: theatreInfo.name,
      url: baseUrl,
    },
    workPerformed: {
      '@type': 'CreativeWork',
      name: currentProduction.title,
      author: {
        '@type': 'Person',
        name: currentProduction.playwright,
      },
    },
    url: `${baseUrl}/show/${currentProduction.id}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(upcomingProductionSchema) }}
    />
  );
}

interface ProductionSchemaProps {
  production: {
    id?: string;
    title: string;
    playwright: string;
    director?: string;
    synopsis: string;
    dates?: string;
    venue: string;
    images: string[];
    cast: { actor: string; role?: string }[];
  };
}

export function ProductionSchema({ production }: ProductionSchemaProps) {
  const productionSlug = production.id || production.title.toLowerCase().replace(/\s+/g, '-');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TheaterEvent',
    name: production.title,
    description: production.synopsis,
    url: `${baseUrl}/show/${productionSlug}`,
    image: production.images[0] ? `${baseUrl}${production.images[0]}` : undefined,
    location: {
      '@type': 'PerformingArtsTheater',
      name: production.venue,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Toronto',
        addressRegion: 'ON',
        addressCountry: 'CA',
      },
    },
    organizer: {
      '@type': 'TheaterGroup',
      name: 'The Company Theatre',
      url: baseUrl,
    },
    performer: production.cast.map((member) => ({
      '@type': 'Person',
      name: member.actor,
    })),
    director: production.director
      ? {
          '@type': 'Person',
          name: production.director,
        }
      : undefined,
    workPerformed: {
      '@type': 'Play',
      name: production.title,
      author: {
        '@type': 'Person',
        name: production.playwright,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
