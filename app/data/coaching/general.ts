import type { DetailPageProps } from '~/types'

export const page: DetailPageProps = {
  id: 'coaching-szczecin',
  title: ['Coaching w&nbsp;Szczecinie'],
  description: 'Odkryj swój potencjał i&nbsp;osiągnij więcej. Profesjonalne sesje coachingowe, które pomogą Ci zdefiniować cele i&nbsp;skutecznie je realizować.',

  whatIsIt: {
    title: 'Czym jest coaching?',
    description: [
      'Coaching to partnerska relacja, która pomaga Ci odkryć własne odpowiedzi na&nbsp;ważne pytania życiowe i&nbsp;zawodowe. Nie daję gotowych rad – pomagam Ci myśleć jaśniej, działać skuteczniej i&nbsp;osiągać cele, które naprawdę mają dla&nbsp;Ciebie znaczenie.',
      'Jako certyfikowany coach z&nbsp;doświadczeniem w&nbsp;mediacji i&nbsp;prawie, oferuję unikalne połączenie kompetencji. Rozumiem złożoność relacji międzyludzkich i&nbsp;wyzwań zawodowych. Pomagam Ci nie tylko określić, czego chcesz, ale też jak to osiągnąć w&nbsp;sposób zgodny z&nbsp;Twoimi wartościami.'
    ]
  },
  kinds: {
    title: 'Rodzaje coachingu',
    description: 'Wybierz obszar, w&nbsp;którym potrzebujesz wsparcia',
    class: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    items: [
      {
        icon: 'lucide-trending-up',
        title: 'Coaching kariery',
        description: 'Awans, zmiana ścieżki zawodowej, trudne decyzje w&nbsp;pracy – razem znajdziemy drogę do Twoich celów zawodowych.',
        path: '/coaching-kariery-szczecin'
      },
      {
        icon: 'lucide-target',
        title: 'Coaching biznesowy',
        description: 'Strategia, przywództwo, zarządzanie zespołem. Wspieram przedsiębiorców w&nbsp;budowaniu sukcesu.',
        path: '/coaching-biznesowy-szczecin'
      },
      {
        icon: 'lucide-users',
        title: 'Coaching konfliktów',
        description: 'Nauczysz się radzić sobie z&nbsp;napięciami i&nbsp;budować zdrowe relacje – w&nbsp;pracy i&nbsp;w życiu prywatnym.',
        path: '/coaching-konfliktow-szczecin'
      },
      {
        icon: 'lucide-compass',
        title: 'Coaching życiowy',
        description: 'Odkryj swoje wartości, zdefiniuj cele i&nbsp;stwórz plan życia zgodnego z&nbsp;Twoimi marzeniami.',
        path: '/coaching-life-szczecin'
      },
      {
        icon: 'lucide-heart',
        title: 'Coaching indywidualny',
        description: 'Każdy ma inne potrzeby. Sesje dopasowane do Twojej unikalnej sytuacji i&nbsp;celów.',
        path: '/coaching-indywidualny-szczecin'
      }
    ]
  },
  listOfBenefits: {
    title: 'Dlaczego warto wybrać coaching?',
    items: [
      'Klarowność w&nbsp;podejmowaniu decyzji',
      'Skuteczniejsze osiąganie celów',
      'Lepsze zarządzanie czasem i&nbsp;priorytetami',
      'Rozwój kompetencji przywódczych',
      'Poprawa komunikacji i&nbsp;relacji',
      'Większa pewność siebie i&nbsp;motywacja',
      'Lepsze radzenie sobie ze stresem',
      'Odkrycie własnego potencjału'
    ]
  },
  callToAction: {
    title: 'Umów się na&nbsp;coaching w&nbsp;Szczecinie'
  }
}
