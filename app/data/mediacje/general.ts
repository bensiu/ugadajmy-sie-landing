import type { DetailPageProps } from '~/types'

export const page: DetailPageProps = {
  id: 'mediacje-szczecin',
  seo: {
    title: 'Mediacje Szczecin – Rodzinne, Rozwodowe | Ugadajmy się',
    description: 'Profesjonalne mediacje w Szczecinie. Mediator z 15-letnim doświadczeniem. Mediacje rodzinne, rozwodowe, gospodarcze i cywilne. Skuteczne rozwiązywanie konfliktów.',
    markup: {
      serviceType: 'Mediacje',
      name: 'Mediacje Szczecin',
      description: 'Profesjonalne usługi mediacyjne w Szczecinie - mediacje rodzinne, rozwodowe, gospodarcze i cywilne.'
    }
  },
  breadCrumbsLabel: 'Mediacje',
  silos: 'mediacje',

  title: ['Mediacje Szczecin – Skuteczne Rozwiązywanie Konfliktów'],
  description: 'Profesjonalne mediacje prowadzone przez doświadczonego mediatora z&nbsp;15-letnim stażem. Pomagam mieszkańcom Szczecina osiągnąć porozumienie bez kosztownych i&nbsp;długotrwałych procesów sądowych.',

  whatIsIt: {
    title: 'Czym są mediacje?',
    content: [
      'Mediacja to dobrowolny i&nbsp;poufny proces rozwiązywania konfliktów z&nbsp;udziałem bezstronnego mediatora. w&nbsp;przeciwieństwie do&nbsp;postępowania sądowego, to Ty i&nbsp;druga strona macie kontrolę nad ostatecznym rozwiązaniem. w&nbsp;Szczecinie prowadzę mediacje od ponad 15 lat, pomagając setkom osób i&nbsp;firm osiągnąć trwałe porozumienie.',
      'Jako mediator i&nbsp;prawnik łączę znajomość prawa z&nbsp;umiejętnościami komunikacyjnymi. Dzięki temu mogę skutecznie prowadzić nawet najtrudniejsze rozmowy, dbając jednocześnie o&nbsp;to, by wypracowane rozwiązania były zgodne z&nbsp;obowiązującymi przepisami.',
      'Mój gabinet mieści się w&nbsp;centrum Szczecina przy ul. Kapitańskiej 3a. Oferuję również mediacje online dla&nbsp;osób, które nie mogą stawić się osobiście lub&nbsp;mieszkają poza Szczecinem.'
    ]
  },
  kinds: {
    title: 'Rodzaje mediacji w&nbsp;Szczecinie',
    description: 'Specjalizuję się w&nbsp;różnych typach mediacji. Wybierz obszar, który Cię interesuje.',
    items: [
      {
        title: 'Mediacje rodzinne',
        link: '/mediacje-rodzinne-szczecin',
        description: 'Konflikty rodzinne, podział majątku, opieka nad&nbsp;dziećmi',
        icon: 'lucide-users'
      },
      {
        title: 'Mediacje okołorozwodowe',
        link: '/mediacje-okolorozwodowe-szczecin',
        description: 'Przygotowanie do&nbsp;rozwodu, ustalenia przedrozwodowe',
        icon: 'lucide-heart'
      },
      {
        title: 'Mediacje rozwodowe',
        link: '/mediacje-rozwodowe-szczecin',
        description: 'Negocjacje warunków rozwodu, alimenty, kontakty z&nbsp;dziećmi',
        icon: 'lucide-scale'
      },
      {
        title: 'Mediacje gospodarcze',
        link: '/mediacje-gospodarcze-szczecin',
        description: 'Spory między przedsiębiorcami, kontrakty, windykacja',
        icon: 'lucide-briefcase'
      },
      {
        title: 'Mediacje cywilne',
        link: '/mediacje-cywilne-szczecin',
        description: 'Sprawy majątkowe, umowy, odszkodowania',
        icon: 'lucide-scale'
      },
      {
        title: 'Mediacje spadkowe',
        link: '/mediacje-spadkowe-szczecin',
        description: 'Dziedziczenie, podział spadku, zachowek',
        icon: 'lucide-home'
      },
      {
        title: 'Mediacje sąsiedzkie',
        link: '/mediacje-sasiedzkie-szczecin',
        description: 'Konflikty sąsiedzkie, immisje, granice działek',
        icon: 'lucide-building-2'
      },
      {
        title: 'Mediacje dla&nbsp;firm',
        link: '/mediacje-dla-firm-szczecin',
        description: 'Konflikty w&nbsp;zespołach, spory pracownicze, negocjacje',
        icon: 'lucide-users'
      },
      {
        title: 'Mediacje z&nbsp;udziałem dzieci',
        link: '/mediacje-z-udzialem-dzieci-szczecin',
        description: 'Głos dziecka w&nbsp;mediacjach, wsparcie dla&nbsp;najmłodszych',
        icon: 'lucide-baby'
      },
      {
        title: 'Mediacje online',
        link: '/mediacje-online-szczecin',
        description: 'Zdalne sesje mediacyjne dla&nbsp;osób spoza Szczecina',
        icon: 'lucide-monitor'
      }
    ]
  },
  whenToUse: {
    title: 'Dla kogo są mediacje?',
    variant: 'default',
    situations: [
      'Rozwodzisz się i chcesz ustalić opiekę nad dziećmi bez&nbsp;sądu',
      'Masz konflikt rodzinny dotyczący majątku lub&nbsp;spadku',
      'Prowadzisz firmę i masz spór z kontrahentem',
      'Twój sąsiad narusza Twoje prawa i nie możecie się dogadać',
      'Chcesz uniknąć długotrwałego i kosztownego procesu sądowego',
      'Zależy Ci na zachowaniu relacji mimo istniejącego konfliktu',
      'Sąd skierował Twoją sprawę do&nbsp;mediacji',
      'Potrzebujesz szybkiego rozwiązania sporu biznesowego'
    ]
  },
  howProcess: {
    title: 'Jak przebiega mediacja?',
    variant: 'subtle',
    steps: [
      { title: 'Kontakt', description: 'Zadzwoń lub napisz, by&nbsp;umówić się na&nbsp;pierwszą konsultację' },
      { title: 'Konsultacja', description: 'Poznajemy Twoją sytuację i&nbsp;ustalamy plan działania' },
      { title: 'Sesje mediacyjne', description: 'Prowadzę rozmowy ze&nbsp;stronami, szukamy rozwiązań' },
      { title: 'Ugoda', description: 'Spisujemy porozumienie z&nbsp;mocą prawną' }
    ]
  },
  listOfBenefits: {
    title: 'Korzyści z&nbsp;mediacji cywilnych',
    items: [
      'Oszczędność czasu – mediacja trwa kilka tygodni, nie lat',
      'Oszczędność pieniędzy – koszty wielokrotnie niższe niż proces sądowy',
      'Pełna poufność – to, co powiedziane na mediacji, zostaje na mediacji',
      'Kontrola nad rozwiązaniem – to Wy decydujecie, nie sędzia',
      'Zachowanie relacji – mediacja nie niszczy, lecz odbudowuje więzi'
    ]
  },
  frequentlyAskedQuestions: {
    title: 'Pytania o&nbsp;mediacje',
    questions: '/api/faqs/'
  },
  callToAction: {
    title: 'Umów się na&nbsp;mediację w&nbsp;Szczecinie'
  },
  listOfBlogs: {
    title: 'Artykuły o mediacjach',
    articles: '/api/blogs/'
    // [
    //   {
    //     silos: 'mediacje',
    //     title: 'Jak przygotować się do mediacji rozwodowej?',
    //     slug: 'jak-przygotowac-sie-do-mediacji-rozwodowej',
    //     description: 'Praktyczny przewodnik, który pomoże Ci wejść w&nbsp;proces mediacji z&nbsp;jasną głową i&nbsp;realistycznymi oczekiwaniami.',
    //     readTime: '5 min',
    //     counter: 0,
    //     active: true
    //   },
    //   {
    //     silos: 'mediacje',
    //     title: '5 mitów o mediacji, w które wciąż wierzymy',
    //     slug: '5-mitow-o-mediacji-w-ktore-wciaz-wierzymy',
    //     description: 'Obalamy najpopularniejsze mity dotyczące mediacji. Sprawdź, ile z nich Cię dotyczy.',
    //     readTime: '4 min',
    //     counter: 0,
    //     active: true
    //   }
    // ]
  }
}
