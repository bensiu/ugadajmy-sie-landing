import type { DetailPageProps, SectionContentProps } from '~/types'
import { config } from './config'

export interface ContactDetailsFooter {
  footer: {
    title: string
    description: string
  }
}

export const contact: DetailPageProps & {
  contact: SectionContentProps & ContactDetailsFooter
} = {
  id: 'ugadajmy-sie-o-mnie-szczecin',
  seo: {
    title: 'Mediacje, Terapia, Coaching Szczecin | Ugadajmy się',
    description: 'Profesjonalne mediacje, terapia dla par, coaching i szkolenia w Szczecinie. Aleksandra Dubiel - mediator, prawnik, coach. Rozwiązuję konflikty, buduję porozumienie.',
    markup: {
      serviceType: 'Mediacje',
      name: 'Mediacje Szczecin',
      description: 'Profesjonalne usługi mediacyjne w Szczecinie - mediacje rodzinne, rozwodowe, gospodarcze i cywilne.'
    }
  },
  silos: '',

  title: ['Rozwiązuję konflikty.', 'Buduję porozumienie.'],
  description: 'Jestem Aleksandra Dubiel – łączę doświadczenie prawnika, mediatora i&nbsp;coacha, by pomagać Ci wyjść z&nbsp;konfliktów z poczuciem ulgi i&nbsp;konkretnym rozwiązaniem. Dla&nbsp;osób prywatnych i&nbsp;firm.',

  contact: {
    lead: 'Kontakt',
    title: 'Porozmawiajmy',
    description: 'Masz pytania? Chcesz umówić konsultację? Napisz lub zadzwoń – pierwsza rozmowa jest zawsze bezpłatna i&nbsp;niezobowiązująca.',
    items: [
      {
        icon: 'i-lucide-phone',
        title: 'Telefon',
        description: config.phone,
        link: `tel:${config.phone.replaceAll(' ', '')}`
      },
      {
        icon: 'i-lucide-mail',
        title: 'Email',
        description: config.email || '',
        link: `mailto:${config.email}`
      },
      {
        icon: 'i-lucide-map-pin',
        title: 'Adres',
        description: 'ul. Kapitańska 3a, Szczecin'
      },
      {
        icon: 'i-lucide-clock',
        title: 'Godziny',
        description: 'Pon. – Pt.: 9:00-18:00'
      }
    ],
    footer: {
      title: 'Rozmowa wstępna',
      description: 'Pierwsza konsultacja jest po&nbsp;to, by&nbsp;zrozumieć i&nbsp;wskazać dalsze wskazówki. To 60&nbsp;minut na&nbsp;poznanie Twojej sytuacji i&nbsp;wspólne ocenienie, jak mogę Ci&nbsp;pomóc.'
    }
  }
}
