import { theatreInfo } from '@/lib/data';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TheaterGroup',
    name: theatreInfo.name,
    description: theatreInfo.about.whoWeAre,
    foundingDate: theatreInfo.founded.toString(),
    url: 'https://companytheatre.ca',
    logo: 'https://companytheatre.ca/images/logo-main.png',
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

interface ProductionSchemaProps {
  production: {
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
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TheaterEvent',
    name: production.title,
    description: production.synopsis,
    url: `https://companytheatre.ca/show/${production.title.toLowerCase().replace(/\s+/g, '-')}`,
    image: production.images[0] ? `https://companytheatre.ca${production.images[0]}` : undefined,
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
      url: 'https://companytheatre.ca',
    },
    performer: production.cast.map((member) => ({
      '@type': 'Person',
      name: member.actor,
    })),
    director: production.director ? {
      '@type': 'Person',
      name: production.director,
    } : undefined,
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
