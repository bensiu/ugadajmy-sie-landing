import type { DetailPageProps, SectionContentProps } from '~/types'
import type { ContactDetailsFooter } from './contact'

import { aboutMe } from './about-me'
import { contact } from './contact'

export const page: DetailPageProps & {
  whyMe: SectionContentProps
  aboutMe: SectionContentProps
  contact: SectionContentProps & ContactDetailsFooter
} = {
  id: 'ugadajmy-sie-szczecin',
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

  kinds: {
    lead: 'Moje usługi',
    title: 'Jak mogę Ci pomóc?',
    description: 'Oferuję kompleksowe wsparcie w&nbsp;rozwiązywaniu konfliktów, budowaniu relacji i&nbsp;rozwoju osobistym. Każda usługa dostosowana do&nbsp;Twoich potrzeb.',
    items: [
      {
        title: 'Mediacje',
        link: '/mediacje-szczecin',
        description: 'Skuteczne rozwiązywanie konfliktów rodzinnych, rozwodowych, gospodarczych i&nbsp;cywilnych. Bez&nbsp;sądu, szybciej i&nbsp;taniej.',
        icon: 'lucide-scale',
        items: [
          'Mediacje rodzinne',
          'Mediacje rozwodowe',
          'Mediacje gospodarcze',
          'Mediacje spadkowe',
          'Mediacje online'
        ]
      },
      {
        title: 'Terapia dla par',
        link: '/terapia-dla-par-szczecin',
        description: 'Profesjonalne wsparcie relacji. Poprawa komunikacji, rozwiązywanie kryzysów, program \'Razem czy&nbsp;osobno?\'.',
        icon: 'lucide-heart',
        items: [
          'Terapia małżeńska',
          'Program dla par',
          'Warsztaty dla par',
          'Konsultacje przedrozwodowe'
        ]
      },
      {
        title: 'Coaching',
        link: '/coaching-szczecin',
        description: 'Rozwój osobisty i&nbsp;zawodowy z&nbsp;profesjonalnym wsparciem. Coaching dla&nbsp;kobiet, biznesowy i&nbsp;decyzyjny.',
        icon: 'lucide-target',
        items: [
          'Coaching dla kobiet',
          'Coaching biznesowy',
          'Coaching rozwoju osobistego',
          'Coaching karierowy'
        ]
      },
      {
        title: 'Szkolenia',
        link: '/szkolenia-szczecin',
        description: 'Szkolenia z&nbsp;komunikacji i&nbsp;rozwiązywania konfliktów dla&nbsp;firm i&nbsp;osób prywatnych w&nbsp;Szczecinie.',
        icon: 'lucide-graduation-cap',
        items: [
          'Szkolenia z komunikacji',
          'Rozwiązywanie konfliktów',
          'Szkolenia dla firm'
        ]
      }
    ]
  },
  whyMe: {
    lead: 'Dlaczego ja',
    title: 'Unikalne połączenie kompetencji',
    description: 'Łączę wiedzę prawniczą z&nbsp;umiejętnościami mediatora i&nbsp;coacha. To pozwala mi&nbsp;patrzeć na&nbsp;problemy z&nbsp;wielu perspektyw.',
    items: [
      {
        icon: 'lucide-scale',
        title: 'Doświadczenie prawnicze',
        description: 'Wieloletnia praktyka w&nbsp;prawie rodzinnym i&nbsp;gospodarczym gwarantuje, że&nbsp;rozwiązania są&nbsp;zgodne z&nbsp;prawem'
      },
      {
        icon: 'lucide-heart',
        title: 'Certyfikowany mediator',
        description: 'Wpisana na listę stałych mediatorów sądowych. Ugody mają moc wyroku sądowego'
      },
      {
        icon: 'lucide-target',
        title: 'Akredytowany coach',
        description: 'Wspieram rozwój osobisty i zawodowy metodami sprawdzonymi naukowo'
      },
      {
        icon: 'lucide-award',
        title: '15+ lat doświadczenia',
        description: 'Setki zakończonych mediacji i&nbsp;przeszkolonych osób w&nbsp;Szczecinie i&nbsp;całej Polsce'
      },
      {
        icon: 'lucide-map-pin',
        title: 'Lokalnie w Szczecinie',
        description: 'Gabinet w centrum miasta. Znam lokalne realia i specyfikę spraw mieszkańców Szczecina'
      },
      {
        icon: 'lucide-shield',
        title: '100% poufności',
        description: 'Wszystko, co powiesz, zostaje między nami. Gwarantuję pełną dyskrecję'
      }
    ]
  },
  aboutMe: aboutMe.aboutMe,
  callToAction: {
    title: 'Gotowy na pierwszy krok?',
    description: 'Pierwsza rozmowa jest po&nbsp;to, by&nbsp;zrozumieć Twoją sytuację i&nbsp;wspólnie ocenić, jak mogę Ci pomóc. Zadzwoń lub napisz – bez&nbsp;zobowiązań.'
  },
  contact: contact.contact
}
