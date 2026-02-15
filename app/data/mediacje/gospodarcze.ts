import type { DetailPageProps } from '~/types'

export const page: DetailPageProps = {
  id: 'mediacje-gospodarcze-szczecin',
  title: ['Mediacje Gospodarcze Szczecin – Rozwiązuj Spory Biznesowe Bez Sądu'],
  description: 'Spory biznesowe kosztują czas i pieniądze. Jako mediator z doświadczeniem prawniczym pomagam szczecińskim firmom rozwiązywać konflikty szybko, dyskretnie i bez strat reputacyjnych.',

  whatIsIt: {
    title: 'Czym są mediacje gospodarcze?',
    description: [
      'Mediacje gospodarcze to sposób rozwiązywania sporów między przedsiębiorcami poza sądem. W Szczecinie pomagam firmom negocjować porozumienia w sprawach kontraktowych, windykacyjnych czy konfliktów wspólników – szybciej i taniej niż na drodze sądowej.',
      'Jako prawnik z wieloletnim doświadczeniem rozumiem specyfikę biznesu. Wiem, że w świecie przedsiębiorców liczy się czas, dyskrecja i konkretne rozwiązania. Spory sądowe ciągną się latami, blokują kapitał i niszczą relacje biznesowe.',
      'Mój gabinet przy ul. Kapitańskiej 3a w Szczecinie to neutralne miejsce dla negocjacji. Oferuję również mediacje online dla firm spoza regionu. Wszystkie rozmowy są objęte pełną poufnością.'
    ]
  },
  whenToUse: {
    title: 'Kiedy skorzystać z mediacji gospodarczej?',
    situations: [
      'Masz spór z kontrahentem o realizację umowy',
      'Klient nie płaci faktur i nie reagujesz na wezwania do zapłaty',
      'Masz konflikt ze wspólnikiem w spółce',
      'Negocjujesz warunki rozwiązania współpracy biznesowej',
      'Masz spór z podwykonawcą lub dostawcą',
      'Chcesz uniknąć kosztów i rozgłosu procesu sądowego',
      'Zależy Ci na zachowaniu relacji biznesowych mimo konfliktu',
      'Masz konflikt pracowniczy wymagający interwencji'
    ]
  },
  howProcess: {
    title: 'Jak przebiegają mediacje gospodarcze?',
    steps: [
      { title: 'Analiza sprawy', description: 'Poznaję istotę sporu i stanowiska stron' },
      { title: 'Sesje indywidualne', description: 'Rozmawiam osobno z każdą stroną' },
      { title: 'Negocjacje', description: 'Prowadzę rozmowy, szukamy rozwiązań win-win' },
      { title: 'Ugoda', description: 'Spisujemy porozumienie biznesowe z mocą prawną' }
    ]
  },
  listOfBenefits: {
    title: 'Korzyści dla Twojej firmy',
    items: [
      'Szybkie rozwiązanie – dni/tygodnie zamiast lat w sądzie',
      'Pełna poufność – ochrona reputacji firmy',
      'Niższe koszty – oszczędność na prawnikach i opłatach sądowych',
      'Zachowanie relacji biznesowych mimo sporu',
      'Elastyczne rozwiązania niemożliwe w sądzie'
    ]
  },
  frequentlyAskedQuestions: {
    title: 'Pytania o mediacje gospodarcze',
    questions: [
      {
        label: 'Ile kosztują mediacje gospodarcze w Szczecinie?',
        content: 'Koszt zależy od wartości sporu i złożoności sprawy. Pierwsze spotkanie organizacyjne jest wliczone w koszt mediacji. Łączny koszt jest znacznie niższy niż proces sądowy, a czas rozwiązania liczony w tygodniach, nie latach.'
      },
      {
        label: 'Czy ugoda z mediacji jest wiążąca dla firm?',
        content: 'Tak! Ugoda zawarta przed mediatorem, po zatwierdzeniu przez sąd, ma moc prawną wyroku sądowego. Można ją egzekwować przez komornika w razie niewykonania zobowiązań.'
      },
      {
        label: 'Czy mediacje gospodarcze są poufne?',
        content: 'Absolutnie. Wszystko, co powiedziane na mediacji, jest objęte tajemnicą. Mediator nie może zeznawać w sądzie na temat przebiegu mediacji. To chroni reputację firm.'
      },
      {
        label: 'Czy konkurencja dowie się o naszym sporze?',
        content: 'Nie. W przeciwieństwie do procesu sądowego, który jest jawny, mediacje są całkowicie poufne. Żadna informacja nie wychodzi poza pokój mediacyjny.'
      },
      {
        label: 'Czy mogę prowadzić mediacje zamiast iść do sądu w sprawie windykacyjnej?',
        content: 'Tak. Mediacja często jest skuteczniejsza niż sąd w sprawach o zapłatę. Dłużnik chętniej negocjuje warunki spłaty niż czeka na wyrok. Można ustalić raty, odroczenia, częściowe umorzenie.'
      }
    ]
  },
  callToAction: {
    title: 'Umów się na mediację gospodarczą w&nbsp;Szczecinie'
  }
}
