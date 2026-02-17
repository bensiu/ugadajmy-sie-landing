import type { DetailPageProps } from '~/types'

export const page: DetailPageProps = {
  id: 'szkolenia-szczecin',
  title: ['Szkolenia w&nbsp;Szczecinie'],
  description: 'Rozwijaj kompetencje komunikacyjne z&nbsp;doświadczonym trenerem. Oferuję szkolenia dla&nbsp;firm, warsztaty otwarte i&nbsp;programy indywidualne. Praktyczna wiedza, która zmienia sposób budowania relacji.',

  // whatIsIt: {
  //   title: 'Oferta szkoleniowa',
  //   description: [
  //     'Coaching to partnerska relacja, która pomaga Ci odkryć własne odpowiedzi na&nbsp;ważne pytania życiowe i&nbsp;zawodowe. Nie daję gotowych rad – pomagam Ci myśleć jaśniej, działać skuteczniej i&nbsp;osiągać cele, które naprawdę mają dla&nbsp;Ciebie znaczenie.',
  //     'Jako certyfikowany coach z&nbsp;doświadczeniem w&nbsp;mediacji i&nbsp;prawie, oferuję unikalne połączenie kompetencji. Rozumiem złożoność relacji międzyludzkich i&nbsp;wyzwań zawodowych. Pomagam Ci nie tylko określić, czego chcesz, ale też jak to osiągnąć w&nbsp;sposób zgodny z&nbsp;Twoimi wartościami.'
  //   ]
  // },
  kinds: {
    title: 'Oferta szkoleniowa',
    description: 'Wybierz szkolenie dopasowane do Twoich potrzeb lub&nbsp;skontaktuj się, aby omówić indywidualny program',
    // class: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    items: [
      {
        icon: 'lucide-building-2',
        title: 'Szkolenia dla&nbsp;firm',
        description: 'Kompleksowe programy szkoleniowe dopasowane do&nbsp;potrzeb organizacji. Rozwijamy kompetencje komunikacyjne całych zespołów.',
        path: '/szkolenia-dla-firm-szczecin',
        items: ['Analiza potrzeb', 'Programy dedykowane', 'Szkolenia w&nbsp;siedzibie firmy']
      },
      {
        icon: 'lucide-message-square',
        title: 'Szkolenia z&nbsp;komunikacji',
        description: 'Warsztaty doskonalące umiejętności skutecznej komunikacji interpersonalnej i&nbsp;asertywności.',
        path: '/szkolenia-z-komunikacji-szczecin',
        items: ['Komunikacja interpersonalna', 'Asertywność', 'Aktywne słuchanie']
      },
      {
        icon: 'lucide-handshake',
        title: 'Szkolenia z&nbsp;mediacji',
        description: 'Profesjonalne szkolenia dla&nbsp;osób chcących zostać mediatorami lub&nbsp;rozwijać umiejętności mediacyjne.',
        path: '/szkolenia-z-mediacji-szczecin',
        items: ['Techniki mediacyjne', 'Certyfikacja', 'Praktyczne ćwiczenia']
      },
      {
        icon: 'lucide-heart',
        title: 'Warsztaty rozwojowe',
        description: 'Intensywne warsztaty wspierające rozwój osobisty i&nbsp;budowanie lepszych relacji.',
        path: '/szkolenia-warsztaty-rozwojowe-szczecin',
        items: ['Rozwój osobisty', 'Inteligencja emocjonalna', 'Radzenie ze stresem']
      },
      {
        icon: 'lucide-users',
        title: 'Program współpracy dla&nbsp;firm',
        description: 'Długofalowe wsparcie w&nbsp;zakresie rozwoju kompetencji komunikacyjnych dla&nbsp;organizacji.',
        path: '/szkolenia-program-wspolpracy-dla-firm-szczecin',
        items: ['Stałe wsparcie', 'Elastyczne warunki', 'Dedykowany opiekun']
      }
    ]
  },
  // listOfBenefits: {
  //   title: 'Dlaczego warto wybrać coaching?',
  //   items: [
  //     'Klarowność w&nbsp;podejmowaniu decyzji',
  //     'Skuteczniejsze osiąganie celów',
  //     'Lepsze zarządzanie czasem i&nbsp;priorytetami',
  //     'Rozwój kompetencji przywódczych',
  //     'Poprawa komunikacji i&nbsp;relacji',
  //     'Większa pewność siebie i&nbsp;motywacja',
  //     'Lepsze radzenie sobie ze stresem',
  //     'Odkrycie własnego potencjału'
  //   ]
  // },
  callToAction: {
    title: 'Umów się na&nbsp;szkolenie w&nbsp;Szczecinie'
  }
}
