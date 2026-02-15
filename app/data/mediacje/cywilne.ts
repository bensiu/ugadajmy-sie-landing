import type { DetailPageProps } from '~/types'

export const page: DetailPageProps = {
  id: 'mediacje-cywilne-szczecin',
  title: ['Mediacje Cywilne Szczecin', 'Rozwiązuj Spory Majątkowe Polubownie'],
  description: 'Spór cywilny nie musi kończyć się w sądzie. Jako mediator sądowy w Szczecinie pomagam stronom osiągnąć porozumienie w sprawach majątkowych, umownych i odszkodowawczych.',

  whatIsIt: {
    title: 'Czym są mediacje cywilne?',
    description: [
      'Mediacje cywilne obejmują szeroką gamę sporów między osobami fizycznymi lub podmiotami prawnymi. W Szczecinie pomagam rozwiązywać konflikty dotyczące umów, nieruchomości, odszkodowań, roszczeń majątkowych i wielu innych spraw cywilnych.',
      'Procesy cywilne w polskich sądach potrafią ciągnąć się latami. Koszty rosną, a wynik pozostaje niepewny. Mediacja oferuje szybszą ścieżkę – większość spraw rozwiązuję w ciągu kilku tygodni, a&nbsp;strony mają pełną kontrolę nad ostatecznym porozumieniem.',
      'Jako prawnik i mediator sądowy łączę znajomość prawa z umiejętnością prowadzenia trudnych negocjacji. W gabinecie przy ul. Kapitańskiej 3a w Szczecinie pomagam stronom znaleźć rozwiązania satysfakcjonujące dla wszystkich.'
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
