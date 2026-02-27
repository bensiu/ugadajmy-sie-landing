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
    description: string
    icon: string
  }[]
}

interface ContactDetails {
  footer: {
    title: string
    description: string
  }
}

export const page: DetailPageProps & {
  whyMe: SectionMeDetails
  aboutMe: SectionMeDetails
  contact: SectionMeDetails & ContactDetails
} = {
  id: 'ugadajmy-sie-szczecin',
  seo: {
    title: 'Mediacje, Terapia dla Par, Coaching Szczecin | Ugadajmy się – Aleksandra Dubiel',
    description: 'Profesjonalne mediacje, terapia dla par, coaching i szkolenia w Szczecinie. Aleksandra Dubiel - mediator, prawnik, coach. Rozwiązuję konflikty, buduję porozumienie.'
  },
  // breadCrumbsLabel: 'Mediacje',

  title: ['Rozwiązuję konflikty.', 'Buduję porozumienie.'],
  description: 'Jestem Aleksandra Dubiel – łączę doświadczenie prawnika, mediatora i coacha, by pomagać Ci wyjść z konfliktów z poczuciem ulgi i konkretnym rozwiązaniem. Dla osób prywatnych i firm.',

  kinds: {
    lead: 'Moje usługi',
    title: 'Jak mogę Ci pomóc?',
    description: 'Oferuję kompleksowe wsparcie w&nbsp;rozwiązywaniu konfliktów, budowaniu relacji i&nbsp;rozwoju osobistym. Każda usługa dostosowana do&nbsp;Twoich potrzeb.',
    items: [
      {
        title: 'Mediacje',
        path: '/mediacje-szczecin',
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
        path: '/terapia-dla-par-szczecin',
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
        path: '/coaching-szczecin',
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
        path: '/szkolenia-szczecin',
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
  aboutMe: {
    lead: 'Kim jestem',
    title: 'Aleksandra Dubiel',
    description: [
      'Witaj! Jestem certyfikowanym mediatorem, coachem i&nbsp;prawnikiem. To&nbsp;unikalne połączenie kompetencji pozwala mi patrzeć na&nbsp;konflikty z&nbsp;wielu perspektyw i&nbsp;znajdować rozwiązania, które naprawdę działają.',
      'Wierzę, że każdy konflikt można rozwiązać - potrzeba do&nbsp;tego bezpiecznej przestrzeni, profesjonalnego wsparcia i&nbsp;gotowości do&nbsp;dialogu. Moją rolą jest być Twoim przewodnikiem na&nbsp;drodze do&nbsp;porozumienia.'
    ].join('<br><br>'),
    items: [
      {
        icon: 'lucide-scale',
        title: 'Prawnik',
        description: 'Wieloletnie doświadczenie w&nbsp;prawie rodzinnym i&nbsp;gospodarczym'
      },
      {
        icon: 'lucide-heart',
        title: 'Mediator',
        description: 'Certyfikowany mediator wpisany na listę stałych mediatorów'
      },
      {
        icon: 'lucide-target',
        title: 'Coach',
        description: 'Akredytowany coach wspierający rozwój osobisty i&nbsp;zawodowy'
      },
      {
        icon: 'lucide-award',
        title: 'Trener',
        description: 'Prowadzę szkolenia z&nbsp;komunikacji i&nbsp;rozwiązywania konfliktów'
      }
    ]
  },
  callToAction: {
    title: 'Gotowy na pierwszy krok?',
    description: 'Pierwsza rozmowa jest po&nbsp;to, by&nbsp;zrozumieć Twoją sytuację i&nbsp;wspólnie ocenić, jak mogę Ci pomóc. Zadzwoń lub napisz – bez&nbsp;zobowiązań.'
  },
  contact: {
    lead: 'Kontakt',
    title: 'Porozmawiajmy',
    description: 'Masz pytania? Chcesz umówić konsultację? Napisz lub zadzwoń – pierwsza rozmowa jest zawsze bezpłatna i&nbsp;niezobowiązująca.',
    items: [
      {
        icon: 'i-lucide-phone',
        title: 'Telefon',
        description: '+48 796 245 605',
        path: 'tel:+48796245605'
      },
      {
        icon: 'i-lucide-mail',
        title: 'Email',
        description: 'Aleksandra_Dubiel@wp.pl',
        path: 'mailto:Aleksandra_Dubiel@wp.pl'
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
