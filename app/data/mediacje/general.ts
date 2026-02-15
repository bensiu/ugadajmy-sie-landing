import type { DetailPageProps } from '~/types'

export const page: DetailPageProps = {
  id: 'mediacje-szczecin',
  title: ['Mediacje Szczecin – Skuteczne Rozwiązywanie Konfliktów'],
  description: 'Profesjonalne mediacje prowadzone przez doświadczonego mediatora z 15-letnim stażem. Pomagam mieszkańcom Szczecina osiągnąć porozumienie bez kosztownych i długotrwałych procesów sądowych.',

  whatIsIt: {
    title: 'Czym są mediacje?',
    description: [
      'Mediacja to dobrowolny i poufny proces rozwiązywania konfliktów z udziałem bezstronnego mediatora. W przeciwieństwie do postępowania sądowego, to Ty i druga strona macie kontrolę nad ostatecznym rozwiązaniem. W Szczecinie prowadzę mediacje od ponad 15 lat, pomagając setkom osób i firm osiągnąć trwałe porozumienie.',
      'Jako mediator i prawnik łączę znajomość prawa z umiejętnościami komunikacyjnymi. Dzięki temu mogę skutecznie prowadzić nawet najtrudniejsze rozmowy, dbając jednocześnie o to, by wypracowane rozwiązania były zgodne z obowiązującymi przepisami.',
      'Mój gabinet mieści się w centrum Szczecina przy ul. Kapitańskiej 3a. Oferuję również mediacje online dla osób, które nie mogą stawić się osobiście lub mieszkają poza Szczecinem.'
    ]
  },
  kinds: {
    title: 'Rodzaje mediacji w Szczecinie',
    description: 'Specjalizuję się w różnych typach mediacji. Wybierz obszar, który Cię interesuje.',
    items: [
      {
        title: 'Mediacje rodzinne',
        path: '/mediacje-rodzinne-szczecin',
        description: 'Konflikty rodzinne, podział majątku, opieka nad&nbsp;dziećmi',
        icon: 'lucide-users'
      },
      {
        title: 'Mediacje okołorozwodowe',
        path: '/mediacje-okolorozwodowe-szczecin',
        description: 'Przygotowanie do&nbsp;rozwodu, ustalenia przedrozwodowe',
        icon: 'lucide-heart'
      },
      {
        title: 'Mediacje rozwodowe',
        path: '/mediacje-rozwodowe-szczecin',
        description: 'Negocjacje warunków rozwodu, alimenty, kontakty z&nbsp;dziećmi',
        icon: 'lucide-scale'
      },
      {
        title: 'Mediacje gospodarcze',
        path: '/mediacje-gospodarcze-szczecin',
        description: 'Spory między przedsiębiorcami, kontrakty, windykacja',
        icon: 'lucide-briefcase'
      },
      {
        title: 'Mediacje cywilne',
        path: '/mediacje-cywilne-szczecin',
        description: 'Sprawy majątkowe, umowy, odszkodowania',
        icon: 'lucide-scale'
      },
      {
        title: 'Mediacje spadkowe',
        path: '/mediacje-spadkowe-szczecin',
        description: 'Dziedziczenie, podział spadku, zachowek',
        icon: 'lucide-home'
      },
      {
        title: 'Mediacje sąsiedzkie',
        path: '/mediacje-sassiedzkie-szczecin',
        description: 'Konflikty sąsiedzkie, immisje, granice działek',
        icon: 'lucide-building-2'
      },
      {
        title: 'Mediacje dla firm',
        path: '/mediacje-dla-firm-szczecin',
        description: 'Konflikty w&nbsp;zespołach, spory pracownicze, negocjacje',
        icon: 'lucide-users'
      },
      {
        title: 'Mediacje z&nbsp;udziałem dzieci',
        path: '/mediacje-z-udzialem-dzieci-szczecin',
        description: 'Głos dziecka w&nbsp;mediacjach, wsparcie dla&nbsp;najmłodszych',
        icon: 'lucide-baby'
      },
      {
        title: 'Mediacje online',
        path: '/mediacje-online-szczecin',
        description: 'Zdalne sesje mediacyjne dla osób spoza Szczecina',
        icon: 'lucide-monitor'
      }
    ]
  },
  whenToUse: {
    title: 'Jakie sprawy cywilne nadają się do mediacji?',
    situations: [
      'Spór o wykonanie lub niewykonanie umowy',
      'Roszczenia o odszkodowanie za szkodę',
      'Spór o nieruchomość – granice, służebności, własność',
      'Konflikt z wykonawcą remontu lub budowy',
      'Spór z ubezpieczycielem o wypłatę odszkodowania',
      'Roszczenia o zwrot pożyczki lub długu',
      'Spór konsumencki z przedsiębiorcą',
      'Konflikt o prawo własności lub współwłasność'
    ]
  },
  howProcess: {
    title: 'Jak przebiegają mediacje cywilne?',
    steps: [
      { title: 'Zgłoszenie sprawy', description: 'Jedna ze stron zgłasza chęć mediacji' },
      { title: 'Zaproszenie drugiej strony', description: 'Kontaktuję się z drugą stroną sporu' },
      { title: 'Sesje mediacyjne', description: 'Prowadzę negocjacje między stronami' },
      { title: 'Ugoda cywilna', description: 'Spisujemy porozumienie z mocą prawną' }
    ]
  },
  listOfBenefits: {
    title: 'Korzyści z mediacji cywilnych',
    items: [
      'Szybkość – rozwiązanie w tygodniach, nie latach',
      'Oszczędność – znacznie niższe koszty niż proces sądowy',
      'Elastyczność – rozwiązania niemożliwe w sądzie',
      'Poufność – brak publicznego procesu',
      'Ugoda z mocą wyroku sądowego'
    ]
  },
  frequentlyAskedQuestions: {
    title: 'Pytania o mediacje cywilne',
    questions: [
      {
        label: 'Czy każda sprawa cywilna nadaje się do mediacji?',
        content: 'Większość tak. Nie nadają się sprawy, gdzie jedna strona całkowicie odmawia dialogu, lub gdzie rozstrzygnięcie wymaga interpretacji prawa przez sąd. Podczas konsultacji oceniam szanse powodzenia mediacji.'
      },
      {
        label: 'Ile kosztuje mediacja cywilna w Szczecinie?',
        content: 'Koszt zależy od wartości przedmiotu sporu i złożoności sprawy. Zazwyczaj jest to ułamek kosztów procesu sądowego. Konkretny cennik omawiam podczas pierwszej konsultacji.'
      },
      {
        label: 'Czy mogę przerwać mediację, jeśli nie przynosi efektów?',
        content: 'Oczywiście. Mediacja jest dobrowolna na każdym etapie. Możesz zrezygnować w dowolnym momencie i skierować sprawę do sądu.'
      },
      {
        label: 'Czy potrzebuję prawnika na mediacji cywilnej?',
        content: 'Nie jest to wymagane, ale możesz przyjść z prawnikiem jeśli czujesz taką potrzebę. Jako mediator jestem bezstronny i nie reprezentuję żadnej ze stron.'
      },
      {
        label: 'Co jeśli druga strona nie zgodzi się na mediację?',
        content: 'Mediacja wymaga zgody obu stron. Jednak często osoby początkowo sceptyczne zmieniają zdanie, gdy wyjaśnię im korzyści. Pomagam w pierwszym kontakcie z drugą stroną.'
      }
    ]
  },
  callToAction: {
    title: 'Umów się na mediację cywilną w&nbsp;Szczecinie'
  }
}
