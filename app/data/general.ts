import type { DetailPageProps, SectionVariant } from '~/types'

interface WhyMeDetails {
  whyMe: {
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
}

export const page: DetailPageProps & WhyMeDetails = {
  id: 'ugadajmy-sie-szczecin',
  seo: {
    title: 'Mediacje, Terapia dla Par, Coaching Szczecin | Ugadajmy się – Aleksandra Dubiel',
    description: 'Profesjonalne mediacje, terapia dla par, coaching i szkolenia w Szczecinie. Aleksandra Dubiel - mediator, prawnik, coach. Rozwiązuję konflikty, buduję porozumienie.'
  },
  // breadCrumbsLabel: 'Mediacje',

  title: ['Rozwiązuję konflikty.', 'Buduję porozumienie.'],
  description: 'Jestem Aleksandra Dubiel – łączę doświadczenie prawnika, mediatora i coacha, by pomagać Ci wyjść z konfliktów z poczuciem ulgi i konkretnym rozwiązaniem. Dla osób prywatnych i firm.',

  // whatIsIt: {
  //   title: 'Czym są mediacje?',
  //   description: [
  //     'Mediacja to dobrowolny i&nbsp;poufny proces rozwiązywania konfliktów z&nbsp;udziałem bezstronnego mediatora. w&nbsp;przeciwieństwie do&nbsp;postępowania sądowego, to Ty i&nbsp;druga strona macie kontrolę nad ostatecznym rozwiązaniem. w&nbsp;Szczecinie prowadzę mediacje od ponad 15 lat, pomagając setkom osób i&nbsp;firm osiągnąć trwałe porozumienie.',
  //     'Jako mediator i&nbsp;prawnik łączę znajomość prawa z&nbsp;umiejętnościami komunikacyjnymi. Dzięki temu mogę skutecznie prowadzić nawet najtrudniejsze rozmowy, dbając jednocześnie o&nbsp;to, by wypracowane rozwiązania były zgodne z&nbsp;obowiązującymi przepisami.',
  //     'Mój gabinet mieści się w&nbsp;centrum Szczecina przy ul. Kapitańskiej 3a. Oferuję również mediacje online dla&nbsp;osób, które nie mogą stawić się osobiście lub&nbsp;mieszkają poza Szczecinem.'
  //   ]
  // },
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
  // whenToUse: {
  //   title: 'Jakie sprawy cywilne nadają się do&nbsp;mediacji?',
  //   variant: 'default',
  //   situations: [
  //     'Spór o&nbsp;wykonanie lub&nbsp;niewykonanie umowy',
  //     'Roszczenia o&nbsp;odszkodowanie za szkodę',
  //     'Spór o&nbsp;nieruchomość – granice, służebności, własność',
  //     'Konflikt z&nbsp;wykonawcą remontu lub&nbsp;budowy',
  //     'Spór z&nbsp;ubezpieczycielem o&nbsp;wypłatę odszkodowania',
  //     'Roszczenia o&nbsp;zwrot pożyczki lub&nbsp;długu',
  //     'Spór konsumencki z&nbsp;przedsiębiorcą',
  //     'Konflikt o&nbsp;prawo własności lub&nbsp;współwłasność'
  //   ]
  // },
  // howProcess: {
  //   title: 'Jak przebiegają mediacje cywilne?',
  //   variant: 'subtle',
  //   steps: [
  //     { title: 'Zgłoszenie sprawy', description: 'Jedna ze stron zgłasza chęć mediacji' },
  //     { title: 'Zaproszenie drugiej strony', description: 'Kontaktuję się z&nbsp;drugą stroną sporu' },
  //     { title: 'Sesje mediacyjne', description: 'Prowadzę negocjacje między stronami' },
  //     { title: 'Ugoda cywilna', description: 'Spisujemy porozumienie z&nbsp;mocą prawną' }
  //   ]
  // },
  // listOfBenefits: {
  //   title: 'Korzyści z&nbsp;mediacji cywilnych',
  //   items: [
  //     'Szybkość – rozwiązanie w&nbsp;tygodniach, nie latach',
  //     'Oszczędność – znacznie niższe koszty niż proces sądowy',
  //     'Elastyczność – rozwiązania niemożliwe w&nbsp;sądzie',
  //     'Poufność – brak publicznego procesu',
  //     'Ugoda z&nbsp;mocą wyroku sądowego'
  //   ]
  // },
  // frequentlyAskedQuestions: {
  //   title: 'Pytania o&nbsp;mediacje cywilne',
  //   questions: [
  //     {
  //       label: 'Czy każda sprawa cywilna nadaje się do mediacji?',
  //       content: 'Większość tak. Nie nadają się sprawy, gdzie jedna strona całkowicie odmawia dialogu, lub&nbsp;gdzie rozstrzygnięcie wymaga interpretacji prawa przez sąd. Podczas konsultacji oceniam szanse powodzenia mediacji.'
  //     },
  //     {
  //       label: 'Ile kosztuje mediacja cywilna w Szczecinie?',
  //       content: 'Koszt zależy od wartości przedmiotu sporu i&nbsp;złożoności sprawy. Zazwyczaj jest to ułamek kosztów procesu sądowego. Konkretny cennik omawiam podczas pierwszej konsultacji.'
  //     },
  //     {
  //       label: 'Czy mogę przerwać mediację, jeśli nie przynosi efektów?',
  //       content: 'Oczywiście. Mediacja jest dobrowolna na&nbsp;każdym etapie. Możesz zrezygnować w&nbsp;dowolnym momencie i&nbsp;skierować sprawę do&nbsp;sądu.'
  //     },
  //     {
  //       label: 'Czy potrzebuję prawnika na mediacji cywilnej?',
  //       content: 'Nie jest to wymagane, ale możesz przyjść z&nbsp;prawnikiem jeśli czujesz taką potrzebę. Jako mediator jestem bezstronny i&nbsp;nie reprezentuję żadnej ze stron.'
  //     },
  //     {
  //       label: 'Co jeśli druga strona nie zgodzi się na mediację?',
  //       content: 'Mediacja wymaga zgody obu stron. Jednak często osoby początkowo sceptyczne zmieniają zdanie, gdy wyjaśnię im korzyści. Pomagam w&nbsp;pierwszym kontakcie z&nbsp;drugą stroną.'
  //     }
  //   ]
  // },
  callToAction: {
    title: 'Umów się na&nbsp;!!!! w&nbsp;Szczecinie'
  }
}
