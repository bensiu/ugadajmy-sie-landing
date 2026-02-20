import type { DetailPageProps } from '~/types'

interface ProgramRazemCzyOsobnoDetails {
  programDlaPar: {
    lead: string
    title: string
    description: string
    features: string[]
    why: {
      title: string
      items: string[]
    }
    what: {
      icon: string
      title: string
      description: string
      price: string
      duration: string
    }[]
    discount?: string
  }
}

export const page: DetailPageProps & ProgramRazemCzyOsobnoDetails = {
  id: 'program-razem-czy-osobno-szczecin',
  seo: {
    title: 'Program dla Par „Razem czy osobno?" Szczecin | 13-modułowy program terapeutyczny',
    description: 'Program „Razem czy osobno?" - 13-modułowy program dla par oparty na strukturze mediacji. Konkretne ramy, jasny plan pracy i moduły dostosowane do Waszych potrzeb.'
  },
  breadCrumbsLabel: '„Razem czy osobno?"',

  title: ['Program „Razem czy osobno?" w&nbsp;Szczecinie'],
  description: 'Autorski 13-modułowy program dla par, który łączy strukturę mediacji z&nbsp;narzędziami coachingowymi. Konkretne ramy, jasny plan i&nbsp;moduły dostosowane do&nbsp;Waszych potrzeb.',

  whatIsIt: {
    title: 'Dla kogo jest program „Razem czy osobno?"',
    description: [
      'Program stworzyłam z&nbsp;myślą o&nbsp;parach, które potrzebują konkretnych ram i&nbsp;jasnego planu pracy. Wiele par przychodzi do&nbsp;terapeutów i&nbsp;nie wie, czego się spodziewać, ile potrwa proces i&nbsp;o&nbsp;czym będą rozmawiać. Program „Razem czy osobno?" daje Wam tę jasność.',
      'Nie musicie przechodzić wszystkich 13 modułów. Na konsultacji wstępnej wspólnie wybierzemy te, które są najbardziej istotne dla Waszej sytuacji. Możecie też zacząć od podstawowych modułów i&nbsp;dodawać kolejne w&nbsp;trakcie.',
      'Program sprawdza się zarówno dla par, które chcą uratować związek, jak i&nbsp;dla tych, którzy rozważają rozstanie, ale chcą podjąć świadomą decyzję i&nbsp;rozstać się w&nbsp;sposób cywilizowany, szczególnie jeśli mają dzieci.'
    ]
  },
  frequentlyAskedQuestions: {
    title: 'Najczęściej zadawane pytania o&nbsp;program',
    questions: [
      {
        label: 'Czy musimy przejść wszystkie 13 modułów?',
        content: 'Nie, program jest elastyczny. Na konsultacji wstępnej wspólnie wybierzemy moduły, które są najważniejsze dla Waszej sytuacji. Możecie zacząć od kilku i&nbsp;ewentualnie dodać kolejne.'
      },
      {
        label: 'Czym różni się program od zwykłej terapii par?',
        content: 'Program ma konkretną strukturę opartą na mediacji. Przed każdym spotkaniem wiecie, o&nbsp;czym będziecie rozmawiać, i&nbsp;możecie się przygotować. Dostajecie też zadania domowe między sesjami.'
      },
      {
        label: 'Ile trwa cały program?',
        content: 'Zależy od liczby wybranych modułów. Minimum to konsultacja + 2 spotkania indywidualne + 3-4 moduły wspólne, czyli około 6-8 tygodni. Pełny program (wszystkie moduły) trwa 4-6 miesięcy.'
      },
      {
        label: 'Co jeśli w trakcie zdecydujemy się rozstać?',
        content: 'To też jest wartościowy wynik programu. Pomagam wówczas przejść z&nbsp;relacji partnerskiej na rodzicielską (jeśli macie dzieci) w&nbsp;sposób cywilizowany. Jest na to dedykowany moduł 12.'
      },
      {
        label: 'Czy program jest dostępny online?',
        content: 'Tak, prowadzę program online dla par spoza Szczecina. Sesje są równie skuteczne jak spotkania w&nbsp;gabinecie. Część par wybiera formę hybrydową.'
      },
      {
        label: 'Jak wygląda płatność za program?',
        content: 'Możecie płacić za każde spotkanie osobno lub jednorazowo za cały wybrany pakiet modułów. Przy płatności z&nbsp;góry otrzymujecie 10% rabatu.'
      }
    ]
  },
  callToAction: {
    title: 'Umów się na program „Razem czy osobno?" w&nbsp;Szczecinie'
  },

  programDlaPar: {
    lead: 'Program dla par',
    title: '„Razem czy osobno?"',
    description: 'Program zbudowany na strukturze mediacji, który przywraca komunikację w relacji, pozwala dostrzec różne role w związku i uświadamia potrzeby emocjonalne partnerów',
    features: [
      'Przywraca komunikację w relacji',
      'Pozwala dostrzec różne role w związku',
      'Uświadamia potrzeby emocjonalne partnerów'
    ],
    why: {
      title: 'Dlaczego stworzyłam Program „Razem czy osobno?"',
      items: [
        'Aby ubrać proces terapeutyczny w konkretne ramy',
        'Abyście wiedzieli o czym będzie spotkanie i ile ich będzie',
        'Abyście mogli przygotować się do każdego spotkania',
        'Abyście mogli wybrać tematy, które Was dotyczą'
      ]
    },
    what: [
      {
        icon: 'lucide-message-circle',
        title: 'Konsultacja',
        description: 'Poznajemy się i sprawdzamy, czy jesteśmy dla siebie. Możemy stworzyć plan spotkań dopasowany do Waszych potrzeb.',
        price: '220 zł',
        duration: '60 minut'
      },
      {
        icon: 'lucide-users',
        title: 'Spotkania indywidualne',
        description: 'Każdy partner przychodzi na osobne, poufne spotkanie. Poznaję perspektywę każdej strony z osobna.',
        price: '390 zł',
        duration: '2 godziny'
      },
      {
        icon: 'lucide-heart',
        title: 'Spotkania wspólne',
        description: 'Tematycznie uporządkowane sesje. Przed każdym spotkaniem otrzymujecie zadania domowe do przygotowania.',
        price: '490 zł',
        duration: '2 godziny'
      }
    ],
    discount: '💡 Przy płatności jednorazowej za wszystkie spotkania otrzymacie rabat 10%'
  }
}
