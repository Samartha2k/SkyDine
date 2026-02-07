import { RESTAURANT_INFO } from '../constants';

/**
 * Generates JSON-LD structured data for the restaurant
 * This helps search engines understand the content better
 */
export const generateRestaurantStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: RESTAURANT_INFO.name,
    description: RESTAURANT_INFO.description,
    url: 'https://skydine.com',
    telephone: RESTAURANT_INFO.phone[0].replace(/\s/g, ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6th Floor, Florence Excellence, Vasna-Bhayli Main Road, Beside Decathlon',
      addressLocality: 'Vadodara',
      addressRegion: 'Gujarat',
      postalCode: '391410',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.3135,
      longitude: 73.1368,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '11:00',
        closes: '23:00',
      },
    ],
    priceRange: '₹₹₹',
    servesCuisine: ['North Indian', 'Chinese', 'Continental', 'Pan-Asian'],
    image: 'https://skydine.com/images/og-image.jpg',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '150',
    },
  };
};

/**
 * Generates JSON-LD for a specific menu item
 */
export const generateMenuItemStructuredData = (
  name: string,
  description: string,
  price: string,
  category: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MenuItem',
    name,
    description,
    offers: {
      '@type': 'Offer',
      price: price.replace(/[^0-9]/g, ''),
      priceCurrency: 'INR',
    },
    menuAddOn: {
      '@type': 'Offer',
      name: category,
    },
  };
};

/**
 * Generates breadcrumb structured data
 */
export const generateBreadcrumbStructuredData = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

/**
 * Generates website structured data
 */
export const generateWebsiteStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: RESTAURANT_INFO.name,
    url: 'https://skydine.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://skydine.com/menu?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
};
