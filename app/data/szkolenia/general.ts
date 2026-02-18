import type { DetailPageProps } from '~/types'

export const page: DetailPageProps = {
  id: 'szkolenia-szczecin',
  title: ['Szkolenia w&nbsp;Szczecinie'],
  description: 'Rozwijaj kompetencje komunikacyjne z&nbsp;doświadczonym trenerem. Oferuję szkolenia dla&nbsp;firm, warsztaty otwarte i&nbsp;programy indywidualne. Praktyczna wiedza, która zmienia sposób budowania relacji.',

  kinds: {
    title: 'Oferta szkoleniowa',
    variant: 'default',
    description: 'Wybierz szkolenie dopasowane do Twoich potrzeb lub&nbsp;skontaktuj się, aby omówić indywidualny program',
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
  howProcess: {
    title: 'Dlaczego warto wybrać moje szkolenia?',
    variant: 'subtle',
    steps: [
      { icon: 'lucide-graduation-cap', title: 'Praktyczne podejście', description: 'Każde szkolenie opiera się na&nbsp;ćwiczeniach praktycznych i&nbsp;realnych przypadkach' },
      { icon: 'lucide-users', title: 'Małe grupy', description: 'Pracuję w&nbsp;małych grupach, co&nbsp;gwarantuje indywidualne podejście do&nbsp;każdego uczestnika' },
      { icon: 'lucide-heart', title: 'Wsparcie po&nbsp;szkoleniu', description: 'Oferuję materiały poszkoleniowe i&nbsp;możliwość konsultacji po&nbsp;zakończeniu kursu' }
    ]
  },
  callToAction: {
    title: 'Umów się na&nbsp;szkolenie w&nbsp;Szczecinie'
  }
}
