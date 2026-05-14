import type { DetailPageProps, SectionContentProps } from '~/types'
import type { ContactDetailsFooter } from './contact'
import { contact } from './contact'

export const aboutMe: DetailPageProps & {
  aboutMe: SectionContentProps
  contact: SectionContentProps & ContactDetailsFooter
} = {
  id: 'ugadajmy-sie-o-mnie-szczecin',
  seo: {
    title: 'Mediacje, Terapia, Coaching Szczecin | Ugadajmy się',
    description: 'Profesjonalne mediacje, terapia dla par, coaching i szkolenia w Szczecinie. Aleksandra Dubiel - mediator, prawnik, coach. Rozwiązuję konflikty, buduję porozumienie.',
    markup: {
      serviceType: 'Mediacje',
      name: 'Mediacje Szczecin',
      description: 'Profesjonalne usługi mediacyjne w Szczecinie - mediacje rodzinne, rozwodowe, gospodarcze i cywilne.'
    }
  },
  silos: '',

  title: ['Rozwiązuję konflikty.', 'Buduję porozumienie.'],
  description: 'Jestem Aleksandra Dubiel – łączę doświadczenie prawnika, mediatora i&nbsp;coacha, by pomagać Ci wyjść z&nbsp;konfliktów z poczuciem ulgi i&nbsp;konkretnym rozwiązaniem. Dla&nbsp;osób prywatnych i&nbsp;firm.',

  aboutMe: {
    lead: 'Kim jestem',
    title: 'Aleksandra Dubiel',
    description: [
      'Witaj! Jestem certyfikowanym mediatorem, coachem i&nbsp;prawnikiem. To&nbsp;unikalne połączenie kompetencji pozwala mi patrzeć na&nbsp;konflikty z&nbsp;wielu perspektyw i&nbsp;znajdować rozwiązania, które naprawdę działają.',
      'Wierzę, że każdy konflikt można rozwiązać - potrzeba do&nbsp;tego bezpiecznej przestrzeni, profesjonalnego wsparcia i&nbsp;gotowości do&nbsp;dialogu. Moją rolą jest być Twoim przewodnikiem na&nbsp;drodze do&nbsp;porozumienia.'
    ].join('<br><br>'),
    items: [
      {
        icon: 'lucide-scale',
        title: 'Prawnik',
        description: 'Wieloletnie doświadczenie w&nbsp;prawie rodzinnym i&nbsp;gospodarczym'
      },
      {
        icon: 'lucide-heart',
        title: 'Mediator',
        description: 'Certyfikowany mediator wpisany na listę stałych mediatorów'
      },
      {
        icon: 'lucide-target',
        title: 'Coach',
        description: 'Akredytowany coach wspierający rozwój osobisty i&nbsp;zawodowy'
      },
      {
        icon: 'lucide-award',
        title: 'Trener',
        description: 'Prowadzę szkolenia z&nbsp;komunikacji i&nbsp;rozwiązywania konfliktów'
      }
    ]
  },
  contact: contact.contact
}
