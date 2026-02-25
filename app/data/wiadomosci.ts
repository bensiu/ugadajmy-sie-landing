import type { DetailPageProps, SectionVariant } from '~/types'

interface SectionMeDetails {
  lead?: string
  title: string
  description: string
  variant?: SectionVariant
  class?: string
  items: {
    title: string
    path?: string
    content: string
    published: string
  }[]
}

export const page: DetailPageProps & {
  news: SectionMeDetails
} = {
  id: 'wiadomosci-o-mediacjach-szczecin',
  seo: {
    title: 'Wiadomości o mediacjach | Ugadajmy się',
    description: 'Najnowsze wiadomości i artykuły dotyczące mediacji w Polsce. Bądź na bieżąco z tematyką mediacyjną.'
  },
  breadCrumbsLabel: 'Wiadomości',

  title: ['Rozwiązuję konflikty.', 'Buduję porozumienie.'],
  description: 'Jestem Aleksandra Dubiel – łączę doświadczenie prawnika, mediatora i coacha, by pomagać Ci wyjść z konfliktów z poczuciem ulgi i konkretnym rozwiązaniem. Dla osób prywatnych i firm.',

  news: {
    lead: 'Aktualności',
    title: 'Wiadomości o mediacjach',
    description: 'Najnowsze artykuły i informacje ze świata mediacji – automatycznie zbierane z polskich źródeł.',
    items: []
  },
  callToAction: {
    title: 'Gotowy na pierwszy krok?',
    description: 'Pierwsza rozmowa jest po&nbsp;to, by&nbsp;zrozumieć Twoją sytuację i&nbsp;wspólnie ocenić, jak mogę Ci pomóc. Zadzwoń lub napisz – bez&nbsp;zobowiązań.'
  }
}
