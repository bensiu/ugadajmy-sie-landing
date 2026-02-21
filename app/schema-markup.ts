import type { MarkupSEO } from './types'

export const schemaMarkup = (markup: MarkupSEO) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': markup.serviceType,
    'name': markup.name || markup.serviceType,
    'description': markup.description || '',
    'provider': {
      '@type': 'ProfessionalService',
      'name': 'Ugadajmy się - Aleksandra Dubiel',
      'image': 'https://ugadajmysie.pl/logo.png',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'ul. Kapitańska 3a',
        'addressLocality': 'Szczecin',
        'postalCode': '70-001',
        'addressCountry': 'PL'
      },
      'telephone': '+48796245605',
      'email': 'kontakt@ugadajmysie.pl',
      'areaServed': 'Szczecin',
      'priceRange': '$$'
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Szczecin'
    }
  }

  return schema
}
