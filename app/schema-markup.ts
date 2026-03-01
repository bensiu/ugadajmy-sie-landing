import type { MarkupSEO } from './types'
import { config } from './data/config'

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
        'streetAddress': config.address,
        'addressLocality': 'Szczecin',
        'postalCode': '70-001',
        'addressCountry': 'PL'
      },
      'telephone': config.phone.replaceAll(' ', ''),
      'email': config.email,
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
