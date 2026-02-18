import type { DetailPageProps } from '~/types'

export const page: DetailPageProps = {
  id: 'terapia-dla-par-szczecin',
  title: ['Odbuduj relację z&nbsp;partnerem. Zacznij od rozmowy.'],
  description: 'Każdy związek przechodzi kryzysy. Jako mediator i&nbsp;coach pomagam parom przywrócić komunikację, zrozumieć potrzeby partnera i&nbsp;podjąć świadome decyzje o&nbsp;przyszłości relacji.',

  whatIsIt: {
    title: 'Czym jest terapia dla par?',
    description: [
      'Terapia dla&nbsp;par to profesjonalne wsparcie dla&nbsp;związków, które przeżywają trudności. Nie musisz być na&nbsp;skraju rozstania, żeby skorzystać z&nbsp;pomocy – wręcz przeciwnie, im&nbsp;wcześniej zaczniesz pracę nad&nbsp;relacją, tym łatwiej przywrócić porozumienie.',
      'Jako mediator i&nbsp;coach łączę techniki mediacyjne z&nbsp;narzędziami coachingowymi, co daje unikalne podejście do&nbsp;pracy z&nbsp;parami. Pomagam Wam zobaczyć sytuację z&nbsp;nowej perspektywy, zrozumieć potrzeby partnera i&nbsp;wypracować konkretne rozwiązania.',
      'W Szczecinie przyjmuję pary w&nbsp;gabinecie przy ul. Kapitańskiej 3a. Oferuję również sesje online dla&nbsp;par spoza miasta lub tych, którzy preferują tę&nbsp;formę kontaktu.'
    ]
  },
  kinds: {
    title: 'Moje usługi dla par',
    description: 'Każda para jest inna. Dlatego oferuję różne formy wsparcia, dopasowane do&nbsp;Waszych potrzeb',
    items: [
      {
        icon: 'lucide-heart',
        title: 'Terapia małżeńska',
        description: 'Profesjonalna pomoc dla małżeństw w&nbsp;kryzysie. Odbudowa zaufania, poprawa komunikacji i&nbsp;wzmocnienie więzi.',
        path: '/terapia-dla-par-malzenska-szczecin'
        // items: ['Analiza potrzeb', 'Programy dedykowane', 'Szkolenia w&nbsp;siedzibie firmy']
      },
      {
        icon: 'lucide-sparkles',
        title: 'Program \'Razem czy&nbsp;osobno?\'',
        description: '13-modułowy program dla par oparty na strukturze mediacji. Konkretne ramy i&nbsp;jasny plan pracy nad relacją.',
        path: '/program-razem-czy-osobno-szczecin'
        // items: ['Komunikacja interpersonalna', 'Asertywność', 'Aktywne słuchanie']
      },
      {
        icon: 'lucide-users',
        title: 'Warsztaty dla&nbsp;par',
        description: 'Intensywne warsztaty komunikacyjne dla&nbsp;par. Praktyczne narzędzia do&nbsp;lepszego porozumienia.',
        path: '/warsztaty-dla-par-szczecin'
        // items: ['Rozwój osobisty', 'Inteligencja emocjonalna', 'Radzenie ze stresem']
      },
      {
        icon: 'lucide-message-circle',
        title: 'Konsultacje przedrozwodowe',
        description: 'Wsparcie w&nbsp;podjęciu decyzji o&nbsp;przyszłości związku. Obiektywna perspektywa i&nbsp;pomoc w&nbsp;trudnych wyborach.',
        path: '/terapia-dla-par-przedrozwodowa-szczecin'
        // items: ['Stałe wsparcie', 'Elastyczne warunki', 'Dedykowany opiekun']
      },
      {
        icon: 'lucide-shield',
        title: 'Terapia po&nbsp;zdradzie',
        description: 'Profesjonalne wsparcie w&nbsp;odbudowie relacji po&nbsp;zdradzie. Praca nad zaufaniem i&nbsp;przebaczeniem.',
        path: '/terapia-dla-par-po-zdradzie-szczecin'
        // items: ['Stałe wsparcie', 'Elastyczne warunki', 'Dedykowany opiekun']
      }
    ]
  },
  listOfBenefits: {
    title: 'Dlaczego warto wybrać moje wsparcie?',
    items: [
      'Łączę techniki mediacyjne z&nbsp;coachingowymi',
      'Pomagam parom od ponad 10&nbsp;lat',
      'Konkretne narzędzia zamiast pustych rozmów',
      'Elastyczne formy spotkań (gabinet i&nbsp;online)',
      'Bezpieczna przestrzeń bez oceniania',
      'Jasny plan pracy i&nbsp;przejrzyste zasady'
    ]
  },
  callToAction: {
    title: 'Zacznij pracę nad swoim związkiem',
    description: 'Umów się na bezpłatną konsultację, podczas której omówimy Waszą sytuację i&nbsp;zaproponuję najlepszą formę wsparcia.'
  }
}
