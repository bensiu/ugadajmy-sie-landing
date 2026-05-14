import type { FAQPage, Service, Graph } from 'schema-dts'
import type { FaqItemBase, MarkupSEO } from './types'
import { config } from './data/config'

export const schemaMarkup = (markup: MarkupSEO, faqs: FaqItemBase[] = []) => {
  const ifFaqs: FAQPage[] = faqs.length > 0
    ? [
        {
          '@type': 'FAQPage',
          'mainEntity': faqs.map(
            faq => ({
              '@type': 'Question',
              'name': faq.title,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.content
              }
            })
          )
        }
      ]
    : []

  const schema: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'serviceType': markup.serviceType,
        'name': markup.name || markup.serviceType,
        'description': markup.description || '',
        'provider': {
          '@type': 'ProfessionalService',
          'name': 'Ugadajmy się - Aleksandra Dubiel',
          'image': 'https://ugadajmysie.pl/images/logo.png',
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
        'areaServed': [
          {
            '@type': 'AdministrativeArea',
            'name': 'Zachodniopomorskie',
            'alternateName': 'West Pomeranian Voivodeship',
            'address': {
              '@type': 'PostalAddress',
              'addressCountry': 'PL'
            },
            'sameAs': 'https://www.wikidata.org/wiki/Q54188'
          },
          ...['Szczecin', 'Goleniów', 'Police'].map(
            city => ({
              '@type': 'City',
              '@language': 'pl',
              'name': city,
              'address': {
                '@type': 'PostalAddress',
                'addressCountry': 'PL'
              },
              'sameAs': 'https://wikidata.org'
            })
          )
        ]
      } as Service,
      ...ifFaqs
    ]
  }

  return schema
}
