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
    modules: {
      title: string
      items: {
        number: string | number
        title: string
        description: string
        videoUrl?: string
      }[]
    }
  }
}

export const page: DetailPageProps & ProgramRazemCzyOsobnoDetails = {
  id: 'program-razem-czy-osobno-szczecin',
  seo: {
    title: 'Program „Razem czy osobno?" Szczecin | Dla Par',
    description: 'Program „Razem czy osobno?" - 13-modułowy program dla par oparty na strukturze mediacji. Konkretne ramy, jasny plan pracy i moduły dostosowane do Waszych potrzeb.',
    markup: {
      serviceType: 'Program terapeutyczny dla par',
      name: 'Program terapeutyczny dla par Szczecin',
      description: '13-modułowy program dla par oparty na strukturze mediacji. Przywraca komunikację i pomaga podjąć decyzję o przyszłości związku.'
    }
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
    discount: '💡 Przy płatności jednorazowej za wszystkie spotkania otrzymacie rabat 10%',
    modules: {
      title: 'Moduły Programu',
      items: [
        {
          number: 1,
          title: 'On łowi, a ona smaży',
          description: 'Podział ról, obowiązków i czasu. Rozmowa o tym, kto czuje się niedoceniony i skąd biorą się frustracje.',
          videoUrl: 'https://youtube.com/shorts/4QFOt5GVEzk'
        },
        {
          number: 2,
          title: 'Mam tego dość',
          description: 'Czas powiedzieć o tym, co boli i co musi się zmienić. Czyścimy emocje i sprzątamy raz a dobrze.',
          videoUrl: 'https://youtube.com/shorts/welociI8Pxc'
        },
        {
          number: 3,
          title: 'Związek marzeń',
          description: 'Rozmowa o potrzebach i oczekiwaniach. Zaktualizowana wersja Ciebie wychodzi po to, czego potrzebuje.',
          videoUrl: 'https://youtube.com/shorts/Ct5RRyyiIiI'
        },
        {
          number: 4,
          title: 'Sex – co nas kręci',
          description: 'Większość problemów w seksie bierze się z braku rozmowy. Czas odkryć kim jesteście teraz.',
          videoUrl: 'https://youtube.com/shorts/sJa3AT3DmVo'
        },
        {
          number: 5,
          title: 'Dzieci',
          description: 'Uświadomienie wzorców z domu pochodzenia i zbudowanie własnej wizji bycia rodzicem.',
          videoUrl: 'https://youtube.com/shorts/BaTSXKJeXwA'
        },
        {
          number: 6,
          title: 'BHP obsługi konfliktu',
          description: 'Jako mediator dzielę się wiedzą o tym, co zasila konflikt i jak na niego reagować.',
          videoUrl: 'https://youtube.com/shorts/iBUAZ0BTF7g'
        },
        {
          number: 7,
          title: 'Ugoda miłości',
          description: 'Podsumowanie wszystkiego, co było wypowiedziane. Czas na aktywne słuchanie i komunikowanie potrzeb.',
          videoUrl: 'https://youtube.com/shorts/wTGyvi2RmP8'
        },
        {
          number: 8,
          title: 'Cash, money, dolary',
          description: 'Kłótnie o pieniądze często wynikają z historii rodowych. Warto to zobaczyć z lotu ptaka.',
          videoUrl: 'https://youtube.com/shorts/I0rH6Zim2EU'
        },
        {
          number: 9,
          title: 'Akcja komunikacja',
          description: 'Dla tych, którzy potrzebują więcej pracy nad schodzeniem ze ścieżki wojennej.',
          videoUrl: 'https://youtube.com/shorts/3Nswo9-33jc'
        },
        {
          number: 10,
          title: 'Uzależnienia',
          description: 'Od gier, telefonu, social media, alkoholu. Działamy warsztatowo nad nowymi nawykami.'
        },
        {
          number: 11,
          title: 'Zdrada',
          description: 'Poznanie powodów zdrady i szczera rozmowa o tym, czy można być dalej razem.'
        },
        {
          number: 12,
          title: 'Jak to teraz ułożyć na nowo',
          description: 'Dla rozstających się – przejście z relacji partnerskiej na rodzicielską.'
        },
        {
          number: 13,
          title: 'Patchwork – kochana rodzinka',
          description: 'Jak poukładać rodzinę patchworkową, by każdy miał przestrzeń na swoje potrzeby.'
        }
      ]
    }
  }
}
