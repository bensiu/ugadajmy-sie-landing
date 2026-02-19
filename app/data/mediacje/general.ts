import type { DetailPageProps } from '~/types'

export const page: DetailPageProps = {
  id: 'mediacje-szczecin',
  seo: {
    title: 'Mediacje Szczecin – Rodzinne, Rozwodowe, Gospodarcze | Ugadajmy się',
    description: 'Profesjonalne mediacje w Szczecinie. Mediator z 15-letnim doświadczeniem. Mediacje rodzinne, rozwodowe, gospodarcze i cywilne. Skuteczne rozwiązywanie konfliktów.'
  },
  breadCrumbsLabel: 'Mediacje',

  title: ['Mediacje Szczecin – Skuteczne Rozwiązywanie Konfliktów'],
  description: 'Profesjonalne mediacje prowadzone przez doświadczonego mediatora z&nbsp;15-letnim stażem. Pomagam mieszkańcom Szczecina osiągnąć porozumienie bez kosztownych i&nbsp;długotrwałych procesów sądowych.',

  whatIsIt: {
    title: 'Czym są mediacje?',
    description: [
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
        path: '/mediacje-sasiedzkie-szczecin',
        description: 'Konflikty sąsiedzkie, immisje, granice działek',
        icon: 'lucide-building-2'
      },
      {
        title: 'Mediacje dla&nbsp;firm',
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
        description: 'Zdalne sesje mediacyjne dla&nbsp;osób spoza Szczecina',
        icon: 'lucide-monitor'
      }
    ]
  },
  whenToUse: {
    title: 'Jakie sprawy cywilne nadają się do&nbsp;mediacji?',
    variant: 'default',
    situations: [
      'Spór o&nbsp;wykonanie lub&nbsp;niewykonanie umowy',
      'Roszczenia o&nbsp;odszkodowanie za szkodę',
      'Spór o&nbsp;nieruchomość – granice, służebności, własność',
      'Konflikt z&nbsp;wykonawcą remontu lub&nbsp;budowy',
      'Spór z&nbsp;ubezpieczycielem o&nbsp;wypłatę odszkodowania',
      'Roszczenia o&nbsp;zwrot pożyczki lub&nbsp;długu',
      'Spór konsumencki z&nbsp;przedsiębiorcą',
      'Konflikt o&nbsp;prawo własności lub&nbsp;współwłasność'
    ]
  },
  howProcess: {
    title: 'Jak przebiegają mediacje cywilne?',
    variant: 'subtle',
    steps: [
      { title: 'Zgłoszenie sprawy', description: 'Jedna ze stron zgłasza chęć mediacji' },
      { title: 'Zaproszenie drugiej strony', description: 'Kontaktuję się z&nbsp;drugą stroną sporu' },
      { title: 'Sesje mediacyjne', description: 'Prowadzę negocjacje między stronami' },
      { title: 'Ugoda cywilna', description: 'Spisujemy porozumienie z&nbsp;mocą prawną' }
    ]
  },
  listOfBenefits: {
    title: 'Korzyści z&nbsp;mediacji cywilnych',
    items: [
      'Szybkość – rozwiązanie w&nbsp;tygodniach, nie latach',
      'Oszczędność – znacznie niższe koszty niż proces sądowy',
      'Elastyczność – rozwiązania niemożliwe w&nbsp;sądzie',
      'Poufność – brak publicznego procesu',
      'Ugoda z&nbsp;mocą wyroku sądowego'
    ]
  },
  frequentlyAskedQuestions: {
    title: 'Pytania o&nbsp;mediacje cywilne',
    questions: [
      {
        label: 'Czy każda sprawa cywilna nadaje się do mediacji?',
        content: 'Większość tak. Nie nadają się sprawy, gdzie jedna strona całkowicie odmawia dialogu, lub&nbsp;gdzie rozstrzygnięcie wymaga interpretacji prawa przez sąd. Podczas konsultacji oceniam szanse powodzenia mediacji.'
      },
      {
        label: 'Ile kosztuje mediacja cywilna w Szczecinie?',
        content: 'Koszt zależy od wartości przedmiotu sporu i&nbsp;złożoności sprawy. Zazwyczaj jest to ułamek kosztów procesu sądowego. Konkretny cennik omawiam podczas pierwszej konsultacji.'
      },
      {
        label: 'Czy mogę przerwać mediację, jeśli nie przynosi efektów?',
        content: 'Oczywiście. Mediacja jest dobrowolna na&nbsp;każdym etapie. Możesz zrezygnować w&nbsp;dowolnym momencie i&nbsp;skierować sprawę do&nbsp;sądu.'
      },
      {
        label: 'Czy potrzebuję prawnika na&nbsp;mediacji cywilnej?',
        content: 'Nie jest to wymagane, ale możesz przyjść z&nbsp;prawnikiem jeśli czujesz taką potrzebę. Jako mediator jestem bezstronny i&nbsp;nie reprezentuję żadnej ze stron.'
      },
      {
        label: 'Co jeśli druga strona nie zgodzi się na&nbsp;mediację?',
        content: 'Mediacja wymaga zgody obu stron. Jednak często osoby początkowo sceptyczne zmieniają zdanie, gdy wyjaśnię im korzyści. Pomagam w&nbsp;pierwszym kontakcie z&nbsp;drugą stroną.'
      }
    ]
  },
  callToAction: {
    title: 'Umów się na&nbsp;mediację cywilną w&nbsp;Szczecinie'
  }
}
