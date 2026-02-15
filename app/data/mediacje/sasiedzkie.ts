import type { DetailPageProps } from '~/types'

export const page: DetailPageProps = {
  id: 'mediacje-sasiedzkie-szczecin',
  title: ['Mediacje Sąsiedzkie Szczecin – Spokój w Sąsiedztwie'],
  description: 'Konflikty z sąsiadami potrafią zamienić życie w koszmar. W Szczecinie pomagam sąsiadom dojść do porozumienia i odbudować dobre relacje, bez kosztownych procesów i eskalacji konfliktu.',

  whatIsIt: {
    title: 'Czym są mediacje sąsiedzkie?',
    description: [
      'Mediacja sąsiedzka to skuteczny sposób na rozwiązanie sporów między sąsiadami bez angażowania sądu. Konflikty sąsiedzkie mają to do siebie, że dotyczą osób, które muszą ze sobą żyć obok siebie przez lata. Wyrok sądowy rzadko kończy problem – często go pogłębia. Mediacja pozwala wypracować rozwiązanie akceptowalne dla obu stron.',
      'Jako mediator w Szczecinie spotykam się z różnymi sporami sąsiedzkimi: od hałasu i uciążliwych zapachów, przez spory o granice działek, po problemy ze wspólnymi instalacjami. W każdym przypadku moim celem jest nie tylko rozwiązać bieżący konflikt, ale też nauczyć sąsiadów komunikacji na przyszłość.',
      'Sesje mediacyjne prowadzę w gabinecie przy ul. Kapitańskiej 3a w centrum Szczecina. To neutralna przestrzeń, gdzie sąsiedzi mogą spokojnie porozmawiać z dala od miejsca konfliktu. W razie potrzeby mogę też przeprowadzić wizję lokalną, by lepiej zrozumieć istotę sporu.'
    ]
  },
  whenToUse: {
    title: 'Kiedy skorzystać z mediacji sąsiedzkiej?',
    situations: [
      'Sąsiad hałasuje i nie reaguje na upomnienia',
      'Dochodzi do sporów o przebieg granicy działki',
      'Drzewo lub krzewy sąsiada zagrażają Twojej posesji',
      'Masz problem z wodą spływającą z sąsiedniej działki',
      'Sąsiad prowadzi uciążliwą działalność (zapachy, kurz, ruch pojazdów)',
      'Wspólna droga dojazdowa jest źródłem nieporozumień',
      'Sąsiad blokuje Twój dostęp do światła lub widoku',
      'Zwierzęta sąsiada niszczą Twój ogród lub hałasują'
    ]
  },
  howProcess: {
    title: 'Jak przebiega mediacja sąsiedzka?',
    steps: [
      { title: 'Zgłoszenie', description: 'Kontaktujesz się ze mną i opisujesz problem' },
      { title: 'Zaproszenie sąsiada', description: 'Delikatnie zapraszam drugą stronę do rozmowy' },
      { title: 'Sesja mediacyjna', description: 'Spotykamy się i szukamy rozwiązania akceptowalnego dla obu stron' },
      { title: 'Porozumienie', description: 'Spisujemy zasady współżycia i wzajemne zobowiązania' }
    ]
  },
  listOfBenefits: {
    title: 'Korzyści z mediacji sąsiedzkiej',
    items: [
      'Zachowujesz dobre relacje w sąsiedztwie',
      'Rozwiązanie jest trwałe, bo wypracowane wspólnie',
      'Unikasz kosztownych i długotrwałych procesów sądowych',
      'Konflikt nie eskaluje do otwartej wojny',
      'Uczysz się komunikacji na przyszłe sytuacje'
    ]
  },
  frequentlyAskedQuestions: {
    title: 'Pytania o mediacje sąsiedzkie',
    questions: [
      {
        label: 'Ile kosztują mediacje sąsiedzkie w Szczecinie?',
        content: 'Mediacja sąsiedzka to koszt 220 zł za konsultację wstępną i 350-450 zł za sesję mediacyjną. Często wystarczają 1-3 sesje. To wielokrotnie mniej niż koszty procesu sądowego i wynajęcie prawników.'
      },
      {
        label: 'Co jeśli sąsiad odmówi udziału w mediacji?',
        content: 'Mediacja jest dobrowolna, ale większość osób zgadza się po wyjaśnieniu korzyści. Mam doświadczenie w przekonywaniu niechętnych stron – często pomagam w pierwszym kontakcie i wyjaśniam, czemu warto spróbować.'
      },
      {
        label: 'Czy ugoda z mediacji sąsiedzkiej jest wiążąca?',
        content: 'Ugoda spisana podczas mediacji jest wiążącą umową cywilną. Może też zostać zatwierdzona przez sąd i zyskać moc wyroku, co pozwala na egzekucję w razie nieprzestrzegania ustaleń.'
      },
      {
        label: 'Jak długo trwa mediacja sąsiedzka?',
        content: 'Typowa mediacja sąsiedzka kończy się w ciągu 1-3 sesji, rozłożonych na 2-4 tygodnie. To znacznie szybciej niż sprawa sądowa, która może ciągnąć się latami.'
      },
      {
        label: 'Czy mogę wziąć prawnika na mediację?',
        content: 'Tak, choć w sprawach sąsiedzkich rzadko jest to potrzebne. Mediacja to nieformalna rozmowa, a ja jako prawnik dbam o to, by wypracowane rozwiązania były zgodne z prawem.'
      }
    ]
  },
  callToAction: {
    title: 'Umów się na mediację sąsiedzką w&nbsp;Szczecinie'
  }
}
