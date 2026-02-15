import type { DetailPageProps } from '~/types'

export const page: DetailPageProps = {
  id: 'coaching-szczecin',
  title: ['Coaching w Szczecinie'],
  description: 'Odkryj swój potencjał i osiągnij więcej. Profesjonalne sesje coachingowe, które pomogą Ci zdefiniować cele i skutecznie je realizować.',

  whatIsIt: {
    title: 'Czym jest coaching?',
    description: [
      'Coaching to partnerska relacja, która pomaga Ci odkryć własne odpowiedzi na ważne pytania życiowe i zawodowe. Nie daję gotowych rad – pomagam Ci myśleć jaśniej, działać skuteczniej i osiągać cele, które naprawdę mają dla Ciebie znaczenie.',
      'Jako certyfikowany coach z doświadczeniem w mediacji i prawie, oferuję unikalne połączenie kompetencji. Rozumiem złożoność relacji międzyludzkich i wyzwań zawodowych. Pomagam Ci nie tylko określić, czego chcesz, ale też jak to osiągnąć w sposób zgodny z Twoimi wartościami.'
    ]
  },
  kinds: {
    title: 'Rodzaje coachingu',
    description: 'Wybierz obszar, w którym potrzebujesz wsparcia',
    class: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    items: [
      {
        icon: 'lucide-trending-up',
        title: 'Coaching kariery',
        description: 'Awans, zmiana ścieżki zawodowej, trudne decyzje w pracy – razem znajdziemy drogę do Twoich celów zawodowych.',
        path: '/coaching-kariery-szczecin'
      },
      {
        icon: 'lucide-target',
        title: 'Coaching biznesowy',
        description: 'Strategia, przywództwo, zarządzanie zespołem. Wspieram przedsiębiorców w budowaniu sukcesu.',
        path: '/coaching-biznesowy-szczecin'
      },
      {
        icon: 'lucide-users',
        title: 'Coaching konfliktów',
        description: 'Nauczysz się radzić sobie z napięciami i budować zdrowe relacje – w pracy i w życiu prywatnym.',
        path: '/coaching-konfliktow-szczecin'
      },
      {
        icon: 'lucide-compass',
        title: 'Coaching życiowy',
        description: 'Odkryj swoje wartości, zdefiniuj cele i stwórz plan życia zgodnego z Twoimi marzeniami.',
        path: '/coaching-life-szczecin'
      },
      {
        icon: 'lucide-heart',
        title: 'Coaching indywidualny',
        description: 'Każdy ma inne potrzeby. Sesje dopasowane do Twojej unikalnej sytuacji i celów.',
        path: '/coaching-indywidualny-szczecin'
      }
    ]
  },
  listOfBenefits: {
    title: 'Dlaczego warto wybrać coaching?',
    items: [
      'Klarowność w podejmowaniu decyzji',
      'Skuteczniejsze osiąganie celów',
      'Lepsze zarządzanie czasem i priorytetami',
      'Rozwój kompetencji przywódczych',
      'Poprawa komunikacji i relacji',
      'Większa pewność siebie i motywacja',
      'Lepsze radzenie sobie ze stresem',
      'Odkrycie własnego potencjału'
    ]
  },
  callToAction: {
    title: 'Umów się na coaching w&nbsp;Szczecinie'
  }
}
