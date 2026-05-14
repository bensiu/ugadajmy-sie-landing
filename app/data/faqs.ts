import type { FaqItem, FaqItemBase } from '~/types'

const fullFaqs: FaqItem[] = [
  {
    title: 'Ile kosztuje sesja terapii małżeńskiej?',
    silos: 'terapia-dla-par-malzenska',
    counter: 12,
    slug: 'ile-kosztuje-sesja-terapii-malzenskiej',
    update_time: '2026-04-10T20:39:35.683Z',
    content: 'Konsultacja wstępna (60 min) kosztuje 220&nbsp;zł. Sesja indywidualna (2h) to 390&nbsp;zł, a&nbsp;sesja wspólna (2h) to 490&nbsp;zł. Przy płatności za cały program otrzymujecie 10% rabatu.',
    active: true
  },
  {
    silos: 'terapia-dla-par-malzenska',
    slug: 'ile-trwa-terapia-malzenska',
    counter: 9,
    title: 'Ile trwa terapia małżeńska?',
    content: 'Zazwyczaj pracujemy przez 8-12 sesji, ale wszystko zależy od Waszej sytuacji&nbsp; celów. Niektóre pary potrzebują kilku spotkań, inne pracują dłużej. Po&nbsp;konsultacji zaproponuję orientacyjny plan.',
    update_time: '2026-04-10T20:39:35.666Z',
    active: true
  },
  {
    counter: 7,
    content: 'Tak, pomagam parom po zdradzie. To trudna droga, ale wielu parom udaje się odbudować relację. Kluczowe jest, by oboje partnerzy chcieli dać związkowi szansę.',
    silos: 'terapia-dla-par-malzenska',
    slug: 'czy-terapia-malzenska-pomoze-jesli-doszlo-do-zdrady',
    active: true,
    title: 'Czy terapia małżeńska pomoże, jeśli doszło do zdrady?',
    update_time: '2026-04-10T20:39:35.667Z'
  },
  {
    content: 'Idealna sytuacja to taka, gdy oboje partnerzy są zmotywowani. Jednak często zaczyna się od jednej osoby. Możemy najpierw spotkać się indywidualnie, a&nbsp;Twój partner może dołączyć później, gdy poczuje się gotowy.',
    counter: 6,
    silos: 'terapia-dla-par-malzenska',
    active: true,
    update_time: '2026-04-10T20:39:35.669Z',
    title: 'Czy mój partner musi chcieć przyjść na terapię?',
    slug: 'czy-moj-partner-musi-chciec-przyjsc-na-terapie'
  },
  {
    content: 'To zależy. Niektóre szczegóły mogą być niszczące i&nbsp;niepotrzebne. Inne są konieczne dla odbudowy zaufania. Pomagam ustalić, co jest ważne, a co może tylko pogłębić ból bez wartości dla procesu.',
    update_time: '2026-04-10T20:39:35.648Z',
    slug: 'czy-partner-ka-musi-wiedziec-wszystkie-szczegoly-zdrady',
    active: true,
    silos: 'terapia-dla-par-po-zdradzie',
    title: 'Czy partner/ka musi wiedzieć wszystkie szczegóły zdrady?',
    counter: 3
  },
  {
    update_time: '2026-04-10T20:39:35.650Z',
    slug: 'czy-przebaczenie-jest-konieczne-do-kontynuowania-zwiazku',
    content: 'Przebaczenie to proces, nie jednorazowa decyzja. Nie musisz przebaczyć od razu, żeby rozpocząć terapię. Pracujemy nad tym stopniowo. Niektórzy wybaczają, inni uczą się żyć z&nbsp;tym, co się stało.',
    active: true,
    silos: 'terapia-dla-par-po-zdradzie',
    title: 'Czy przebaczenie jest konieczne do kontynuowania związku?',
    counter: 3
  },
  {
    update_time: '2026-04-10T20:39:35.651Z',
    content: 'Nie stoję po żadnej stronie. Moją rolą jest stworzenie przestrzeni, w&nbsp;której oboje możecie być wysłuchani. Zdrada jest bolesna dla obu stron – osoba zdradzona przeżywa traumę, osoba zdradzająca często głęboki wstyd i&nbsp;poczucie winy.',
    active: true,
    title: 'Czy terapeutka stoi po stronie osoby zdradzonej?',
    silos: 'terapia-dla-par-po-zdradzie',
    slug: 'czy-terapeutka-stoi-po-stronie-osoby-zdradzonej',
    counter: 3
  },
  {
    update_time: '2026-04-10T20:39:35.653Z',
    title: 'Co jeśli nie jestem pewny/a, czy chcę zostać?',
    slug: 'co-jesli-nie-jestem-pewny-a-czy-chce-zostac',
    active: true,
    silos: 'terapia-dla-par-po-zdradzie',
    content: 'To normalne. Wielu klientów przychodzi z&nbsp;ambiwalencją. Część terapii to pomoc w&nbsp;podjęciu świadomej decyzji. Możesz pracować nad relacją, jednocześnie nie wiedząc jeszcze, czy zostaniesz.',
    counter: 3
  },
  {
    content: 'Zazwyczaj od 6 do&nbsp;18 miesięcy regularnych spotkań. Długość zależy od wielu czynników: jak dawno była zdrada, jak została odkryta, jakie są zasoby relacji. To nie jest sprint, ale maraton.',
    update_time: '2026-04-10T20:39:35.663Z',
    slug: 'ile-trwa-terapia-po-zdradzie',
    active: true,
    title: 'Ile trwa terapia po zdradzie?',
    silos: 'terapia-dla-par-po-zdradzie',
    counter: 3
  },
  {
    content: 'Tak, prowadzę też indywidualne sesje dla osób po zdradzie – zarówno dla osób zdradzonych, jak i&nbsp;zdradzających. Czasem partner nie jest gotowy lub związek się już skończył, ale Ty potrzebujesz przepracować tę sytuację.',
    slug: 'czy-moge-przyjsc-na-terapie-sam-sama',
    active: true,
    update_time: '2026-04-10T20:39:35.665Z',
    silos: 'terapia-dla-par-po-zdradzie',
    title: 'Czy mogę przyjść na terapię sam/sama?',
    counter: 3
  },
  {
    silos: 'terapia-dla-par-malzenska',
    slug: 'czy-oferujecie-sesje-online',
    content: 'Tak, prowadzę sesje online dla par spoza Szczecina lub tych, którzy preferują tę formę. Sesje online są równie skuteczne jak spotkania w&nbsp;gabinecie.',
    title: 'Czy oferujecie sesje online?',
    active: true,
    update_time: '2026-04-10T20:39:35.684Z',
    counter: 3
  },
  {
    update_time: '2026-04-10T20:39:35.625Z',
    slug: 'czy-mozemy-wziac-udzial-w-kilku-warsztatach',
    title: 'Czy możemy wziąć udział w kilku warsztatach?',
    silos: 'terapia-warsztaty-dla-par',
    active: true,
    content: 'Oczywiście. Wiele par zaczyna od jednego warsztatu i&nbsp;potem uczestniczy w&nbsp;kolejnych. Możecie też zamówić indywidualnie dopasowany cykl warsztatów.',
    counter: 2
  },
  {
    content: 'Cena warsztatu indywidualnego to 600-900 zł w&nbsp;zależności od długości. Warsztaty grupowe są tańsze – około 300-400 zł za parę. Dokładne ceny podaję po ustaleniu formatu.',
    title: 'Ile kosztują warsztaty dla par?',
    slug: 'ile-kosztuja-warsztaty-dla-par',
    silos: 'terapia-warsztaty-dla-par',
    update_time: '2026-04-10T20:39:35.629Z',
    active: true,
    counter: 2
  },
  {
    slug: 'czy-warsztaty-zastepuja-terapie-par',
    title: 'Czy warsztaty zastępują terapię par?',
    content: 'Warsztaty są świetnym uzupełnieniem terapii lub dobrym punktem wyjścia. Jeśli Wasza sytuacja wymaga głębszej pracy, po warsztacie mogę zaproponować kontynuację w&nbsp;formie terapii.',
    silos: 'terapia-warsztaty-dla-par',
    active: true,
    update_time: '2026-04-10T20:39:35.630Z',
    counter: 2
  },
  {
    update_time: '2026-04-10T20:39:35.368Z',
    title: 'Co jeśli w trakcie zdecydujemy się rozstać?',
    slug: 'co-jesli-w-trakcie-zdecydujemy-sie-rozstac',
    active: true,
    content: 'To też jest wartościowy wynik programu. Pomagam wówczas przejść z&nbsp;relacji partnerskiej na rodzicielską (jeśli macie dzieci) w&nbsp;sposób cywilizowany. Jest na to dedykowany moduł 12.',
    counter: 2,
    silos: 'terapia-program-razem-czy-osobno'
  },
  {
    content: 'Nie, program jest elastyczny. Na konsultacji wstępnej wspólnie wybierzemy moduły, które są najważniejsze dla Waszej sytuacji. Możecie zacząć od kilku i&nbsp;ewentualnie dodać kolejne.',
    update_time: '2026-04-10T23:15:24.753Z',
    active: true,
    title: 'Czy musimy przejść wszystkie 13 modułów programu?',
    slug: 'czy-musimy-przejsc-wszystkie-13-modulow-programu-razem-czy-osobno',
    counter: 2,
    silos: 'terapia-program-razem-czy-osobno'
  },
  {
    content: 'Zależy od liczby wybranych modułów. Minimum to konsultacja + 2 spotkania indywidualne + 3-4 moduły wspólne, czyli około 6-8 tygodni. Pełny program (wszystkie moduły) trwa 4-6 miesięcy.',
    title: 'Ile trwa cały program?',
    update_time: '2026-04-10T20:39:35.611Z',
    active: true,
    slug: 'ile-trwa-caly-program-razem-czy-osobno',
    counter: 2,
    silos: 'terapia-program-razem-czy-osobno'
  },
  {
    slug: 'jak-wyglada-płatnosc-za-program-razem-czy-osobno',
    content: 'Możecie płacić za każde spotkanie osobno lub jednorazowo za cały wybrany pakiet modułów. Przy płatności z&nbsp;góry otrzymujecie 10% rabatu.',
    update_time: '2026-04-10T20:39:35.733Z',
    title: 'Jak wygląda płatność za program?',
    active: true,
    counter: 2,
    silos: 'terapia-program-razem-czy-osobno'
  },
  {
    content: 'Tak, prowadzę program online dla par spoza Szczecina. Sesje są równie skuteczne jak spotkania w&nbsp;gabinecie. Część par wybiera formę hybrydową.',
    active: true,
    update_time: '2026-04-10T20:39:35.743Z',
    title: 'Czy program jest dostępny online?',
    slug: 'czy-program-razem-czy-osobno-jest-dostepny-online',
    counter: 2,
    silos: 'terapia-program-razem-czy-osobno'
  },
  {
    title: 'Czym różni się program od zwykłej terapii par?',
    content: 'Program ma konkretną strukturę opartą na mediacji. Przed każdym spotkaniem wiecie, o&nbsp;czym będziecie rozmawiać, i&nbsp;możecie się przygotować. Dostajecie też zadania domowe między sesjami.',
    active: true,
    update_time: '2026-04-10T20:39:35.422Z',
    slug: 'czym-rozni-sie-program-razem-czy-osobno-od-zwyklej-terapii-par',
    counter: 2,
    silos: 'terapia-program-razem-czy-osobno'
  },
  {
    title: 'Czy warsztaty dla par są dostępne online?',
    silos: 'terapia-warsztaty-dla-par',
    slug: 'czy-warsztaty-dla-par-sa-dostępne-online',
    counter: 1,
    active: true,
    update_time: '2026-04-10T20:39:35.627Z',
    content: 'Większość warsztatów prowadzę także online. Format wirtualny sprawdza się szczególnie dobrze przy warsztatach komunikacyjnych. Warsztaty dotyczące intymności lepiej działają stacjonarnie.'
  },
  {
    title: 'Kiedy organizujecie warsztaty grupowe?',
    update_time: '2026-04-10T20:39:35.631Z',
    slug: 'kiedy-organizujecie-warsztaty-grupowe',
    silos: 'terapia-warsztaty-dla-par',
    counter: 1,
    active: true,
    content: 'Warsztaty grupowe organizuję, gdy zbierze się grupa 4-6 par. Jeśli jesteście zainteresowani, zapiszcie się na listę oczekujących, a poinformuję Was o&nbsp;najbliższym terminie.'
  },
  {
    silos: 'szkolenia-dla-firm',
    counter: 1,
    active: true,
    slug: 'jak-dlugo-trwa-szkolenie-firmowe',
    content: 'Standardowe szkolenie jednodniowe trwa 6-8 godzin. Oferuję również warsztaty 4-godzinne, dwudniowe programy intensywne oraz cykle szkoleniowe rozłożone na&nbsp;kilka tygodni lub&nbsp;miesięcy. Czas trwania dostosowuję do&nbsp;potrzeb i&nbsp;możliwości organizacji.',
    update_time: '2026-04-10T20:39:36.028Z',
    title: 'Jak długo trwa szkolenie firmowe?'
  },
  {
    slug: 'gdzie-odbywaja-sie-mediacje',
    counter: 1,
    title: 'Gdzie odbywają się mediacje w Szczecinie?',
    active: true,
    silos: 'mediacje',
    content: 'Sesje mediacyjne prowadzę w gabinecie przy ul. Kapitańskiej 3a w centrum Szczecina. Dla osób spoza miasta oferuję mediacje online przez wideokonferencję.',
    update_time: '2026-04-10T20:39:35.922Z'
  },
  {
    update_time: '2026-04-10T20:39:35.365Z',
    title: 'Jak długo trwa mediacja?',
    counter: 1,
    slug: 'jak-dlugo-trwa-mediacja',
    content: 'Większość mediacji kończy się w ciągu 2-6 tygodni. Zwykle potrzeba 2-5 sesji po 1,5-2 godziny. To znacznie szybciej niż proces sądowy, który może trwać latami.',
    active: true,
    silos: 'mediacje'
  },
  {
    update_time: '2026-04-10T20:39:35.622Z',
    counter: 1,
    slug: 'ile-kosztuja-mediacje',
    title: 'Ile kosztują mediacje w Szczecinie?',
    active: true,
    silos: 'mediacje',
    content: 'Koszt mediacji zależy od rodzaju sprawy i liczby sesji. Wstępna konsultacja kosztuje 220 zł. Pełny cennik omawiam podczas pierwszego spotkania. Mediacje są wielokrotnie tańsze niż postępowanie sądowe.'
  },
  {
    title: 'Czy to, co powiem, jest poufne?',
    silos: 'terapia-dla-par-przedrozwodowa',
    content: 'Absolutnie tak. Wszystko, co powiesz podczas konsultacji, pozostaje poufne. Jedyny wyjątek to sytuacja zagrożenia życia lub zdrowia – wtedy mam obowiązek interwencji.',
    slug: 'czy-to-co-powiem-na-konsultacjach-jest-poufne',
    active: true,
    update_time: '2026-04-10T20:39:35.633Z',
    counter: 0
  },
  {
    content: 'Nie. Moją rolą jest pomóc Ci podjąć własną decyzję, nie podejmować ją za Ciebie. Dam Ci narzędzia, perspektywę i&nbsp;wsparcie, ale ostateczna decyzja należy do&nbsp;Ciebie.',
    silos: 'terapia-dla-par-przedrozwodowa',
    slug: 'czy-mozecie-mi-powiedziec-co-powinnam-powinienem-zrobic',
    update_time: '2026-04-10T20:39:35.643Z',
    active: true,
    title: 'Czy możecie mi powiedzieć, co powinnam/powinienem zrobić?',
    counter: 0
  },
  {
    silos: 'terapia-dla-par-przedrozwodowa',
    content: 'Nie, prowadzę konsultacje zarówno dla par, jak i&nbsp;dla osób indywidualnych. Czasem partner nie chce uczestniczyć lub nie wie o&nbsp;rozważaniach – możesz przyjść sam/sama.',
    title: 'Czy konsultacje są tylko dla par?',
    active: true,
    slug: 'czy-konsultacje-sa-tylko-dla-par',
    update_time: '2026-04-10T20:39:35.644Z',
    counter: 0
  },
  {
    silos: 'terapia-dla-par-przedrozwodowa',
    content: 'Zazwyczaj to 2-4 spotkania, każde po 1,5-2 godziny. Niektórzy potrzebują jednego spotkania, żeby zyskać jasność, inni wolą dłuższy proces. Dostosowuję się do&nbsp;Twoich potrzeb.',
    title: 'Ile trwają konsultacje przedrozwodowe?',
    update_time: '2026-04-10T20:39:35.646Z',
    active: true,
    slug: 'ile-trwaja-konsultacje-przedrozwodowe',
    counter: 0
  },
  {
    silos: 'terapia-dla-par-przedrozwodowa',
    content: 'Możemy pracować indywidualnie. Często po kilku spotkaniach osoba decyduje się zaprosić partnera lub podejmuje decyzję samodzielnie. Twoja droga jest równie wartościowa.',
    slug: 'co-jesli-moj-partner-nie-chce-przyjsc-na-konsultacje',
    title: 'Co jeśli mój partner nie chce przyjść?',
    update_time: '2026-04-10T20:39:35.647Z',
    active: true,
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.686Z',
    content: 'Tak, szkolenia prowadzę zgodnie ze standardami szkolenia mediatorów przyjętymi przez Społeczną Radę ds. Alternatywnych Metod Rozwiązywania Konfliktów i&nbsp;Sporów przy Ministrze Sprawiedliwości. Certyfikat jest honorowany przez sądy przy wpisie na&nbsp;listę mediatorów.',
    active: true,
    silos: 'szkolenia-z-mediacji',
    slug: 'czy-szkolenie-jest-akredytowane',
    title: 'Czy szkolenie jest akredytowane?',
    counter: 0
  },
  {
    content: 'Szkolenie podstawowe z&nbsp;mediacji jest otwarte dla&nbsp;wszystkich osób pełnoletnich. Nie są wymagane wcześniejsze kwalifikacje, choć doświadczenie w&nbsp;pracy z&nbsp;ludźmi jest pomocne. dla&nbsp;osób chcących pracować jako mediatorzy sądowi wymagane jest wykształcenie wyższe.',
    active: true,
    slug: 'jakie-sa-wymagania-zeby-uczestniczyc-szkoleniu',
    silos: 'szkolenia-z-mediacji',
    update_time: '2026-04-10T20:39:35.687Z',
    counter: 0,
    title: 'Jakie są wymagania, żeby uczestniczyć szkoleniu?'
  },
  {
    update_time: '2026-04-10T20:39:35.689Z',
    content: 'Podstawowe szkolenie mediacyjne trwa 40-60 godzin dydaktycznych, rozłożonych zazwyczaj na&nbsp;kilka weekendów. Oferuję również szkolenia specjalistyczne (np. mediacja rodzinna, gospodarcza), które trwają 20-40 godzin i&nbsp;są przeznaczone dla&nbsp;osób z&nbsp;ukończonym szkoleniem podstawowym.',
    title: 'Ile trwa szkolenie z mediacji?',
    active: true,
    slug: 'lle-trwa-szkolenie-z-mediacji',
    silos: 'szkolenia-z-mediacji',
    counter: 0
  },
  {
    slug: 'czy-po-szkoleniu-moge-zostac-mediatorem',
    title: 'Czy po szkoleniu mogę zostać mediatorem?',
    update_time: '2026-04-10T20:39:35.690Z',
    active: true,
    silos: 'szkolenia-z-mediacji',
    content: 'Tak, szkolenie podstawowe z&nbsp;mediacji (40-60 godzin) uprawnia do&nbsp;ubiegania się o&nbsp;wpis na&nbsp;listę mediatorów sądowych. Po ukończeniu szkolenia otrzymujesz certyfikat, który jest wymagany przez sądy. Dodatkowo rekomenduję praktykę pod superwizją i&nbsp;dalsze szkolenia specjalistyczne.',
    counter: 0
  },
  {
    content: 'Część teoretyczna szkolenia może być realizowana online. Jednak praktyka mediacyjna, symulacje i&nbsp;superwizja wymagają spotkań stacjonarnych. Oferuję formaty hybrydowe, które łączą elastyczność nauki zdalnej z&nbsp;wartością bezpośredniej praktyki.',
    slug: 'czy-moge-uczestniczyc-w-szkoleniu-online',
    active: true,
    update_time: '2026-04-10T20:39:35.691Z',
    silos: 'szkolenia-z-mediacji',
    title: 'Czy mogę uczestniczyć w szkoleniu online?',
    counter: 0
  },
  {
    content: 'Szkolenie jest dla&nbsp;każdego, kto chce poprawić jakość swoich relacji i&nbsp;rozmów. Szczególnie polecam je menedżerom, specjalistom ds. sprzedaży i&nbsp;obsługi klienta, osobom pracującym w&nbsp;zespołach oraz każdemu, kto czuje, że komunikacja jest jego słabą stroną.',
    slug: 'dla-kogo-jest-przeznaczone-szkolenie-z-komunikacji',
    active: true,
    silos: 'szkolenia-z-komunikacji',
    title: 'Dla kogo jest przeznaczone szkolenie z komunikacji?',
    update_time: '2026-04-10T20:39:35.693Z',
    counter: 0
  },
  {
    title: 'Czego konkretnie nauczę się na szkoleniu z komunikacji?',
    content: 'Na szkoleniu poznasz techniki aktywnego słuchania, zadawania pytań, parafrazowania i&nbsp;odzwierciedlania emocji. Nauczysz się formułować komunikaty \\\'ja\\\', wyrażać oczekiwania bez agresji i&nbsp;reagować na&nbsp;krytykę konstruktywnie. Ćwiczymy również rozpoznawanie barier komunikacyjnych i&nbsp;techniki ich przezwyciężania.',
    slug: 'czego-konkretnie-naucze-sie-na-szkoleniu-z-komunikacji',
    active: true,
    update_time: '2026-04-10T20:39:35.702Z',
    silos: 'szkolenia-z-komunikacji',
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.827Z',
    active: true,
    title: 'Czy po szkoleniu otrzymam jakieś materiały?',
    silos: 'szkolenia-z-komunikacji',
    slug: 'czy-po-szkoleniu-otrzymam-jakies-materialy',
    content: 'Tak, każdy uczestnik otrzymuje komplet materiałów szkoleniowych: podręcznik z&nbsp;opisem technik, karty z&nbsp;narzędziami do&nbsp;codziennego stosowania oraz dostęp do&nbsp;dodatkowych materiałów online. Po szkoleniu oferuję również możliwość konsultacji follow-up.',
    counter: 0
  },
  {
    title: 'Czy szkolenie jest prowadzone indywidualnie czy w grupie?',
    slug: 'czy-szkolenie-jest-prowadzone-indywidualnie-czy-w-grupie',
    content: 'Prowadzę zarówno szkolenia grupowe (optymalna wielkość to 8-12 osób), jak i&nbsp;sesje indywidualne. Szkolenia grupowe mają tę zaletę, że pozwalają na&nbsp;ćwiczenie z&nbsp;różnymi partnerami i&nbsp;uczenie się od innych uczestników.',
    update_time: '2026-04-10T20:39:35.704Z',
    active: true,
    silos: 'szkolenia-z-komunikacji',
    counter: 0
  },
  {
    content: 'Podstawowe szkolenie z&nbsp;komunikacji trwa jeden dzień (6-8 godzin). dla&nbsp;osób chcących głębiej rozwinąć umiejętności oferuję dwudniowe warsztaty intensywne lub&nbsp;cykl 4 spotkań po 3 godziny, co pozwala na&nbsp;praktykowanie między sesjami.',
    slug: 'jak-dlugo-trwa-szkolenie-z-komunikacji',
    active: true,
    title: 'Jak długo trwa szkolenie z komunikacji?',
    update_time: '2026-04-10T20:39:35.705Z',
    silos: 'szkolenia-z-komunikacji',
    counter: 0
  },
  {
    content: 'Tak, organizuję warsztaty dla&nbsp;grup przyjaciół, zespołów w&nbsp;pracy czy społeczności. Temat i&nbsp;program dostosowuję do&nbsp;potrzeb grupy. To świetna opcja na&nbsp;integrację połączoną z&nbsp;rozwojem osobistym.',
    title: 'Czy warsztat może być zorganizowany dla zamkniętej grupy?',
    update_time: '2026-04-10T20:39:35.843Z',
    silos: 'szkolenia-warsztaty-rozwojowe',
    active: true,
    slug: 'czy-warsztat-moze-byc-zorganizowany-dla-zamknietej-grupy',
    counter: 0
  },
  {
    title: 'Ile trwa warsztat rozwojowy?',
    silos: 'szkolenia-warsztaty-rozwojowe',
    content: 'Standardowy warsztat trwa od 4 do&nbsp;8 godzin, zazwyczaj w&nbsp;sobotę lub&nbsp;niedzielę. Organizuję również weekendowe warsztaty intensywne (2 dni) dla&nbsp;osób chcących głębiej pracować nad określonym tematem.',
    active: true,
    slug: 'ile-trwa-warsztat-rozwojowy',
    update_time: '2026-04-10T20:39:35.830Z',
    counter: 0
  },
  {
    slug: 'czy-musze-miec-wczesniejsze-doswiadczenie-z-praca-rozwojowa',
    silos: 'szkolenia-warsztaty-rozwojowe',
    content: 'Nie, warsztaty są otwarte dla&nbsp;wszystkich. Przygotowuję je tak, aby były wartościowe zarówno dla&nbsp;osób rozpoczynających pracę nad sobą, jak i&nbsp;dla tych z&nbsp;doświadczeniem w&nbsp;coachingu czy terapii. Ważna jest otwartość i&nbsp;gotowość do&nbsp;refleksji.',
    update_time: '2026-04-10T20:39:35.709Z',
    active: true,
    title: 'Czy muszę mieć wcześniejsze doświadczenie z pracą rozwojową?',
    counter: 0
  },
  {
    title: 'Jak duże są grupy na warsztatach?',
    content: 'Warsztaty rozwojowe prowadzę w&nbsp;grupach 6-10 osób. Taka wielkość pozwala na&nbsp;indywidualną uwagę dla&nbsp;każdego uczestnika, a jednocześnie daje bogactwo perspektyw i&nbsp;możliwość uczenia się od innych.',
    silos: 'szkolenia-warsztaty-rozwojowe',
    slug: 'jak-duze-sa-grupy-na-warsztatach',
    active: true,
    update_time: '2026-04-10T20:39:35.832Z',
    counter: 0
  },
  {
    title: 'Jakie tematy obejmują warsztaty rozwojowe?',
    silos: 'szkolenia-warsztaty-rozwojowe',
    slug: 'jakie-tematy-obejmuja-warsztaty-rozwojowe',
    active: true,
    update_time: '2026-04-10T20:39:35.841Z',
    content: 'Prowadzę warsztaty o&nbsp;różnej tematyce: inteligencja emocjonalna, zarządzanie stresem, asertywność i&nbsp;granice, komunikacja w&nbsp;relacjach, radzenie sobie z&nbsp;trudnymi emocjami, budowanie pewności siebie. Aktualne tematy i&nbsp;terminy znajdziesz na&nbsp;stronie lub&nbsp;możesz zapytać o&nbsp;indywidualny warsztat.',
    counter: 0
  },
  {
    content: 'Na początku współpracy ustalamy mierzalne cele i&nbsp;wskaźniki sukcesu. Mogą to być np. ankiety satysfakcji pracowników, wskaźniki rotacji, liczba rozwiązanych konfliktów, feedback od menedżerów. Regularnie raportujemy postępy i&nbsp;dostosowujemy działania.',
    active: true,
    slug: 'jak-mierzone-sa-efekty-programu',
    silos: 'szkolenia-program-wspolpracy-dla-firm',
    update_time: '2026-04-10T20:39:35.846Z',
    counter: 0,
    title: 'Jak mierzone są efekty programu?'
  },
  {
    update_time: '2026-04-10T20:39:35.829Z',
    slug: 'jaki-jest-minimalny-czas-trwania-wspolpracy',
    title: 'Jaki jest minimalny czas trwania współpracy?',
    content: 'Rekomendowany minimalny okres współpracy to 6 miesięcy – tyle czasu potrzeba, by poznać organizację, wdrożyć pierwsze działania i&nbsp;zobaczyć efekty. Współprace roczne i&nbsp;dłuższe oferuję na&nbsp;preferencyjnych warunkach cenowych.',
    active: true,
    silos: 'szkolenia-program-wspolpracy-dla-firm',
    counter: 0
  },
  {
    content: 'Oferuję różne modele współpracy: abonament miesięczny z&nbsp;określoną liczbą godzin, pakiety kwartalne lub&nbsp;roczne z&nbsp;gwarantowanym rabatem, lub&nbsp;model success-fee dla&nbsp;konkretnych projektów. Szczegóły ustalamy indywidualnie, dopasowując model do&nbsp;potrzeb i&nbsp;budżetu firmy.',
    title: 'Jak wygląda model rozliczeń w programie stałej współpracy?',
    update_time: '2026-04-10T20:39:35.845Z',
    active: true,
    silos: 'szkolenia-program-wspolpracy-dla-firm',
    slug: 'jak-wyglada-model-rozliczen-w-programie-stalej-wspolpracy',
    counter: 0
  },
  {
    title: 'Czy mogę korzystać z usług ad hoc poza programem?',
    slug: 'czy-moge-korzystac-z-uslug-ad-hoc-poza-programem',
    active: true,
    content: 'Tak, w&nbsp;ramach współpracy masz priorytetowy dostęp do&nbsp;dodatkowych usług w&nbsp;preferencyjnych cenach. Jeśli pojawi się nagła potrzeba – np. pilna mediacja czy dodatkowe szkolenie – reaguję szybciej niż przy jednorazowych zleceniach.',
    update_time: '2026-04-10T20:39:36.012Z',
    silos: 'szkolenia-program-wspolpracy-dla-firm',
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:36.011Z',
    title: 'Co wchodzi w zakres programu współpracy?',
    active: true,
    silos: 'szkolenia-program-wspolpracy-dla-firm',
    slug: 'co-wchodzi-w-zakres-programu-wspolpracy',
    content: 'Program jest elastyczny i&nbsp;może obejmować: cykliczne szkolenia dla&nbsp;zespołów, mediacje w&nbsp;sytuacjach konfliktowych, coaching dla&nbsp;menedżerów, konsultacje dla&nbsp;HR, warsztaty integracyjne, wsparcie w&nbsp;procesach zmian. Zakres ustalamy na&nbsp;etapie projektowania programu.',
    counter: 0
  },
  {
    silos: 'szkolenia-dla-firm',
    slug: 'czy-szkolenia-mozna-przeprowadzic-online',
    title: 'Czy szkolenia można przeprowadzić online?',
    content: 'Tak, prowadzę szkolenia zarówno stacjonarnie, jak i&nbsp;online. Szkolenia zdalne realizuję przez platformy Zoom lub&nbsp;Teams, wykorzystując interaktywne narzędzia, które angażują uczestników tak samo skutecznie jak spotkania na&nbsp;żywo.',
    active: true,
    update_time: '2026-04-10T20:39:36.023Z',
    counter: 0
  },
  {
    silos: 'szkolenia-dla-firm',
    slug: 'czy-otrzymamy-materialy-po-szkoleniu',
    update_time: '2026-04-10T20:39:36.024Z',
    active: true,
    content: 'Tak, każdy uczestnik otrzymuje materiały szkoleniowe w&nbsp;formie drukowanej lub&nbsp;elektronicznej. Dodatkowo firma otrzymuje raport podsumowujący szkolenie z&nbsp;rekomendacjami dotyczącymi dalszego rozwoju zespołu.',
    title: 'Czy otrzymamy materiały po szkoleniu?',
    counter: 0
  },
  {
    silos: 'szkolenia-dla-firm',
    slug: 'ile-kosztuja-szkolenia-firmowe',
    content: 'Cena szkolenia zależy od wielu czynników: liczby uczestników, czasu trwania, zakresu tematycznego i&nbsp;formy realizacji. Po rozmowie o&nbsp;potrzebach firmy przygotowuję indywidualną wycenę. Oferuję również pakiety szkoleniowe i&nbsp;programy stałej współpracy w&nbsp;atrakcyjnych cenach.',
    title: 'Ile kosztują szkolenia firmowe w Szczecinie?',
    update_time: '2026-04-10T20:39:36.022Z',
    active: true,
    counter: 0
  },
  {
    content: 'Dla warsztatów interaktywnych optymalna grupa to 8-12 osób. Taka wielkość pozwala na&nbsp;indywidualną pracę z&nbsp;uczestnikami i&nbsp;skuteczne ćwiczenia praktyczne. Większe grupy są możliwe przy formatach wykładowych lub&nbsp;przy podziale na&nbsp;podgrupy.',
    silos: 'szkolenia-dla-firm',
    update_time: '2026-04-10T20:39:36.026Z',
    slug: 'jaka-jest-optymalna-wielkosc-grupy-szkoleniowej',
    active: true,
    title: 'Jaka jest optymalna wielkość grupy szkoleniowej?',
    counter: 0
  },
  {
    content: 'Ustalamy to z&nbsp;góry z&nbsp;rodzicami. Zazwyczaj przekazuję rodzicom ogólną perspektywę dziecka, ale nie dosłownie każde słowo. Jeśli dziecko poprosi o&nbsp;dyskrecję w&nbsp;jakiejś sprawie, respektuję to, chyba że chodzi o&nbsp;bezpieczeństwo.',
    title: 'Czy to, co powie dziecko, jest poufne?',
    update_time: '2026-04-10T20:39:35.744Z',
    active: true,
    silos: 'mediacje-z-udzialem-dzieci',
    slug: 'czy-to-co-powie-dziecko-jest-poufne',
    counter: 0
  },
  {
    content: 'Nie, udział dziecka jest zawsze opcjonalny i&nbsp;zależy od sytuacji. Czasami wystarczy, że przeprowadzę z&nbsp;dzieckiem rozmowę i&nbsp;przekażę rodzicom jego perspektywę. Innym razem wspólna sesja jest wskazana.',
    update_time: '2026-04-10T20:39:35.746Z',
    title: 'Czy dziecko musi brać udział w mediacji?',
    active: true,
    silos: 'mediacje-z-udzialem-dzieci',
    slug: 'czy-dziecko-musi-brac-udzial-w-mediacji',
    counter: 0
  },
  {
    content: 'Sesja mediacyjna z&nbsp;udziałem dziecka to koszt 450-550 zł, ponieważ wymaga dodatkowego czasu i&nbsp;przygotowania. Rozmowa wstępna z&nbsp;dzieckiem to ok. 220 zł. Dokładny koszt ustalamy po poznaniu sytuacji.',
    slug: 'ile-kosztuje-mediacja-z-udziałem-dziecka',
    title: 'Ile kosztuje mediacja z udziałem dziecka w Szczecinie?',
    active: true,
    silos: 'mediacje-z-udzialem-dzieci',
    update_time: '2026-04-10T20:39:35.747Z',
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.749Z',
    content: 'Nie ma sztywnej granicy wiekowej. Już 5-6-latki mogą uczestniczyć w&nbsp;uproszczonych formach rozmowy. Im starsze dziecko, tym bardziej może być zaangażowane. Nastolatki często uczestniczą we wspólnych sesjach z&nbsp;rodzicami.',
    active: true,
    slug: 'od-jakiego-wieku-dziecko-moze-uczestniczyc-w-mediacji',
    title: 'Od jakiego wieku dziecko może uczestniczyć w mediacji?',
    silos: 'mediacje-z-udzialem-dzieci',
    counter: 0
  },
  {
    title: 'Czy dziecko decyduje o wyniku mediacji?',
    content: 'Absolutnie nie. Decyzje podejmują dorośli. Głos dziecka jest jednym z&nbsp;elementów branych pod uwagę, ale odpowiedzialność za decyzje spoczywa na&nbsp;rodzicach. Chronię dzieci przed byciem rozjemcami.',
    update_time: '2026-04-10T20:39:35.750Z',
    active: true,
    silos: 'mediacje-z-udzialem-dzieci',
    counter: 0,
    slug: 'czy-dziecko-decyduje-o-wyniku-mediacji'
  },
  {
    title: 'Czy mediacja jest możliwa przy sporze o ważność testamentu?',
    slug: 'czy-mediacja-jest-mozliwa-przy-sporze-o-waznosc-testamentu',
    active: true,
    content: 'Tak, choć w&nbsp;takich przypadkach ostateczne rozstrzygnięcie prawne należy do&nbsp;sądu. Mediacja może jednak pomóc stronom dojść do&nbsp;porozumienia co do&nbsp;podziału majątku niezależnie od treści testamentu.',
    update_time: '2026-04-10T20:39:35.751Z',
    silos: 'mediacje-spadkowe',
    counter: 0
  },
  {
    slug: 'ile-kosztuja-mediacje-spadkowe',
    update_time: '2026-04-10T20:39:35.761Z',
    title: 'Ile kosztują mediacje spadkowe w Szczecinie?',
    active: true,
    content: 'Koszt mediacji spadkowej zależy od złożoności sprawy i&nbsp;liczby spadkobierców. Konsultacja wstępna kosztuje 220 zł. Sesja mediacyjna to 390-490 zł. Mimo tych kosztów, mediacja jest wielokrotnie tańsza niż wieloletni proces sądowy o&nbsp;spadek.',
    silos: 'mediacje-spadkowe',
    counter: 0
  },
  {
    title: 'Czy ugoda z mediacji spadkowej jest wiążąca prawnie?',
    content: 'Tak! Ugoda spadkowa zawarta przed mediatorem, po zatwierdzeniu przez sąd, ma moc prawną równą orzeczeniu sądowemu. Można na&nbsp;jej podstawie dokonać wpisów w&nbsp;księgach wieczystych czy przepisać pojazdy.',
    active: true,
    update_time: '2026-04-10T20:39:35.763Z',
    silos: 'mediacje-spadkowe',
    slug: 'czy-ugoda-z-mediacji-spadkowej-jest-wiazaca-prawnie',
    counter: 0
  },
  {
    content: 'Oferuję mediacje online, które umożliwiają udział spadkobierców z&nbsp;dowolnego miejsca. Sesje prowadzę przez wideokonferencję, co pozwala wszystkim uczestniczyć bez kosztów podróży.',
    update_time: '2026-04-10T20:39:35.764Z',
    slug: 'co-jesli-jeden-spadkobierca-mieszka-za-granica',
    active: true,
    title: 'Co jeśli jeden spadkobierca mieszka za granicą?',
    silos: 'mediacje-spadkowe',
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.766Z',
    title: 'Ile sesji potrzeba do zakończenia mediacji spadkowej?',
    content: 'Zazwyczaj potrzeba 3-6 sesji, rozłożonych na&nbsp;kilka tygodni. To zależy od liczby spadkobierców, wartości spadku i&nbsp;stopnia skomplikowania relacji rodzinnych.',
    slug: 'ile-sesji-potrzeba-do-zakonczenia-mediacji-spadkowej',
    active: true,
    silos: 'mediacje-spadkowe',
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.767Z',
    silos: 'mediacje-sasiedzkie',
    slug: 'czy-ugoda-z-mediacji-sasiedzkiej-jest-wiazaca',
    title: 'Czy ugoda z mediacji sąsiedzkiej jest wiążąca?',
    active: true,
    content: 'Ugoda spisana podczas mediacji jest wiążącą umową cywilną. Może też zostać zatwierdzona przez sąd i&nbsp;zyskać moc wyroku, co pozwala na&nbsp;egzekucję w&nbsp;razie nieprzestrzegania ustaleń.',
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.768Z',
    title: 'Ile kosztują mediacje sąsiedzkie w Szczecinie?',
    silos: 'mediacje-sasiedzkie',
    active: true,
    content: 'Mediacja sąsiedzka to koszt 220 zł za konsultację wstępną i&nbsp;390-490 zł za sesję mediacyjną. Często wystarczają 1-3 sesje. To wielokrotnie mniej niż koszty procesu sądowego i&nbsp;wynajęcie prawników.',
    slug: 'ile-kosztuja-mediacje-sasiedzkie',
    counter: 0
  },
  {
    slug: 'czy-moge-wziac-prawnika-na-mediacje',
    title: 'Czy mogę wziąć prawnika na mediację?',
    update_time: '2026-04-10T20:39:35.783Z',
    content: 'Tak, choć w&nbsp;sprawach sąsiedzkich rzadko jest to potrzebne. Mediacja to nieformalna rozmowa, a ja jako prawnik dbam o&nbsp;to, by wypracowane rozwiązania były zgodne z&nbsp;prawem.',
    silos: 'mediacje-sasiedzkie',
    active: true,
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.784Z',
    content: 'Typowa mediacja sąsiedzka kończy się w&nbsp;ciągu 1-3 sesji, rozłożonych na&nbsp;2-4 tygodnie. To znacznie szybciej niż sprawa sądowa, która może ciągnąć się latami.',
    silos: 'mediacje-sasiedzkie',
    title: 'Jak długo trwa mediacja sąsiedzka?',
    slug: 'jak-dlugo-trwa-mediacja-sasiedzka',
    active: true,
    counter: 0
  },
  {
    slug: 'co-jesli-sasiad-odmowi-udzialu-w-mediacji',
    update_time: '2026-04-10T20:39:35.786Z',
    title: 'Co jeśli sąsiad odmówi udziału w mediacji?',
    silos: 'mediacje-sasiedzkie',
    content: 'Mediacja jest dobrowolna, ale większość osób zgadza się po wyjaśnieniu korzyści. Mam doświadczenie w&nbsp;przekonywaniu niechętnych stron – często pomagam w&nbsp;pierwszym kontakcie i&nbsp;wyjaśniam, czemu warto spróbować.',
    active: true,
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.787Z',
    slug: 'co-jesli-nie-dogadamy-sie-na-mediacji-rozwodowej',
    title: 'Co jeśli nie dogadamy się na mediacji rozwodowej?',
    silos: 'mediacje-rozwodowe',
    active: true,
    content: 'Jeśli mediacja nie zakończy się pełnym porozumieniem, sprawa wraca do&nbsp;sądu. Jednak nawet częściowe ustalenia (np. tylko o&nbsp;dzieciach) przyspieszają proces sądowy.',
    counter: 0
  },
  {
    title: 'Jak długo trwa mediacja rozwodowa?',
    slug: 'jak-dlugo-trwa-mediacja-rozwodowa',
    silos: 'mediacje-rozwodowe',
    active: true,
    content: 'Zazwyczaj 3-6 sesji po 2 godziny, rozłożonych na&nbsp;4-8 tygodni. To znacznie szybciej niż proces sądowy, który może ciągnąć się latami.',
    update_time: '2026-04-10T20:39:35.788Z',
    counter: 0
  },
  {
    content: 'Mediacja wymaga obecności obu stron. Mogę jednak pomóc w&nbsp;pierwszym kontakcie z&nbsp;małżonkiem i&nbsp;wyjaśnić korzyści płynące z&nbsp;mediacji.',
    slug: 'czy-moge-przyjsc-na-mediacje-bez-malzonka',
    update_time: '2026-04-10T20:39:35.790Z',
    silos: 'mediacje-rozwodowe',
    active: true,
    title: 'Czy mogę przyjść na mediacje bez małżonka?',
    counter: 0
  },
  {
    title: 'Czy mediacje rozwodowe są obowiązkowe?',
    update_time: '2026-04-10T20:39:35.791Z',
    silos: 'mediacje-rozwodowe',
    active: true,
    content: 'W Polsce mediacje są dobrowolne, ale sąd może na&nbsp;nie skierować. Jeśli sąd skieruje Was na&nbsp;mediacje, warto z&nbsp;nich skorzystać – pokazuje to dobrą wolę i&nbsp;może przyspieszyć proces.',
    counter: 0,
    slug: 'czy-mediacje-rozwodowe-sa-obowiazkowe'
  },
  {
    content: 'Koszt mediacji rozwodowej zależy od złożoności sprawy. Pierwsza konsultacja to 220 zł. Sesja mediacyjna (2 godz.) kosztuje 390-490 zł. To wielokrotnie mniej niż koszty procesu sądowego z&nbsp;udziałem adwokatów.',
    slug: 'ile-kosztuja-mediacje-rozwodowe',
    update_time: '2026-04-10T20:39:35.792Z',
    silos: 'mediacje-rozwodowe',
    active: true,
    title: 'Ile kosztują mediacje rozwodowe w Szczecinie?',
    counter: 0
  },
  {
    content: 'To zależy od sytuacji i&nbsp;wieku dzieci. w&nbsp;niektórych przypadkach głos dziecka jest ważny. Oferuję specjalne mediacje z&nbsp;udziałem dzieci, gdzie w&nbsp;bezpieczny sposób mogą wyrazić swoje potrzeby.',
    silos: 'mediacje-rodzinne',
    update_time: '2026-04-10T20:39:35.802Z',
    slug: 'czy-dzieci-uczestnicza-w-mediacjach-rodzinnych',
    active: true,
    title: 'Czy dzieci uczestniczą w mediacjach rodzinnych?',
    counter: 0
  },
  {
    silos: 'mediacje-rodzinne',
    slug: 'co-jesli-drugi-czlonek-rodziny-nie-chce-mediacji',
    title: 'Co jeśli drugi członek rodziny nie chce mediacji?',
    update_time: '2026-04-10T20:39:35.803Z',
    active: true,
    content: 'Mediacja jest dobrowolna. Jednak często osoba początkowo niechętna zmienia zdanie, gdy wyjaśnię korzyści. Mogę pomóc w&nbsp;pierwszym kontakcie z&nbsp;drugą stroną.',
    counter: 0
  },
  {
    silos: 'mediacje-rodzinne',
    update_time: '2026-04-10T20:39:35.805Z',
    active: true,
    title: 'Czy ugoda z mediacji rodzinnej jest wiążąca?',
    slug: 'czy-ugoda-z-mediacji-rodzinnej-jest-wiazaca',
    content: 'Ugoda rodzinna jest wiążącą umową między stronami. Jeśli dotyczy spraw wymagających formy prawnej (np. podział majątku), może być zatwierdzona przez sąd i&nbsp;zyskać moc wyroku.',
    counter: 0
  },
  {
    content: 'Mediacja i&nbsp;terapia mają różne cele. Mediacja skupia się na&nbsp;rozwiązaniu konkretnego konfliktu i&nbsp;wypracowaniu porozumienia. Terapia pracuje nad głębszymi problemami emocjonalnymi. Często te procesy się uzupełniają.',
    slug: 'czy-mediacja-rodzinna-zastepuje-terapie',
    silos: 'mediacje-rodzinne',
    update_time: '2026-04-10T20:39:35.806Z',
    active: true,
    title: 'Czy mediacja rodzinna zastępuje terapię rodzinną?',
    counter: 0
  },
  {
    content: 'Pierwsza konsultacja kosztuje 220 zł. Pełna sesja mediacyjna trwająca 2 godziny to koszt 390-490 zł w&nbsp;zależności od złożoności sprawy. To wielokrotnie mniej niż koszty procesu sądowego.',
    title: 'Ile kosztują mediacje rodzinne w Szczecinie?',
    silos: 'mediacje-rodzinne',
    update_time: '2026-04-10T20:39:35.807Z',
    slug: 'ile-kosztuja-mediacje-rodzinne',
    active: true,
    counter: 0
  },
  {
    silos: 'mediacje-online',
    slug: 'jakiego-sprzetu-potrzebuje-do-mediacji-online',
    title: 'Jakiego sprzętu potrzebuję do mediacji online?',
    update_time: '2026-04-10T20:39:35.809Z',
    content: 'Wystarczy komputer, tablet lub&nbsp;smartfon z&nbsp;kamerą, mikrofonem i&nbsp;dostępem do&nbsp;internetu. Wysyłam link do&nbsp;spotkania – nie musisz instalować żadnego specjalnego oprogramowania. Przed pierwszą sesją robimy krótki test połączenia.',
    active: true,
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.810Z',
    silos: 'mediacje-online',
    content: 'Ugodę można podpisać na&nbsp;kilka sposobów: elektronicznie (podpis kwalifikowany lub&nbsp;profil zaufany), tradycyjnie (wysyłka pocztą) lub&nbsp;hybrydowo (spotkanie tylko na&nbsp;podpisanie). Doradzę najlepsze rozwiązanie dla&nbsp;Twojej sytuacji.',
    active: true,
    slug: 'jak-podpisac-ugode-przy-mediacji-online',
    title: 'Jak podpisać ugodę przy mediacji online?',
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.811Z',
    silos: 'mediacje-online',
    content: 'Tak! Badania pokazują, że mediacje online mają porównywalną skuteczność do&nbsp;stacjonarnych. Kluczowe jest przygotowanie techniczne i&nbsp;stworzenie odpowiedniej atmosfery. Mam wieloletnie doświadczenie w&nbsp;prowadzeniu mediacji online.',
    slug: 'czy-mediacja-online-jest-rownie-skuteczna-jak-stacjonarna',
    title: 'Czy mediacja online jest równie skuteczna jak stacjonarna?',
    active: true,
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.813Z',
    silos: 'mediacje-online',
    title: 'Czy mediacja online jest bezpieczna i poufna?',
    content: 'Tak, korzystam z&nbsp;szyfrowanych platform do&nbsp;wideokonferencji. Sesje nie są nagrywane bez zgody stron. Poufność mediacji online jest taka sama jak stacjonarnej.',
    slug: 'czy-mediacja-online-jest-bezpieczna-i-poufna',
    active: true,
    counter: 0
  },
  {
    silos: 'mediacje-online',
    content: 'Ceny mediacji online są takie same jak stacjonarnych. Konsultacja wstępna: 220 zł. Sesja mediacyjna: 350-500 zł w&nbsp;zależności od typu sprawy. Oszczędzasz jednak na&nbsp;dojazdach i&nbsp;czasie.',
    active: true,
    update_time: '2026-04-10T20:39:35.823Z',
    slug: 'ile-kosztuja-mediacje-online',
    title: 'Ile kosztują mediacje online?',
    counter: 0
  },
  {
    slug: 'ile-trwaja-mediacje-okołorozwodowe',
    title: 'Ile trwają mediacje okołorozwodowe w Szczecinie?',
    silos: 'mediacje-okolorozwodowe',
    update_time: '2026-04-10T20:39:35.824Z',
    active: true,
    content: 'Zazwyczaj potrzeba 3-6 sesji po 2 godziny, rozłożonych na&nbsp;kilka tygodni. Czas zależy od złożoności Waszej sytuacji i&nbsp;ilości spraw do&nbsp;ustalenia.',
    counter: 0
  },
  {
    title: 'Czym różnią się mediacje okołorozwodowe od rozwodowych?',
    silos: 'mediacje-okolorozwodowe',
    active: true,
    content: 'Mediacje okołorozwodowe odbywają się przed złożeniem pozwu rozwodowego – pomagają przygotować porozumienie. Mediacje rozwodowe mogą być prowadzone już w&nbsp;trakcie procesu sądowego, często na&nbsp;polecenie sądu.',
    update_time: '2026-04-10T20:39:35.826Z',
    slug: 'czym-roznia-sie-mediacje-okołorozwodowe-od-rozwodowych',
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.863Z',
    title: 'Co jeśli nie dogadamy się we wszystkich kwestiach?',
    silos: 'mediacje-okolorozwodowe',
    active: true,
    slug: 'co-jesli-nie-dogadamy-sie-we-wszystkich-kwestiach',
    content: 'Nawet częściowe porozumienie jest wartościowe. Zmniejsza liczbę spornych kwestii, którymi musi zająć się sąd. Możemy ustalić np. opiekę nad dziećmi, a podział majątku zostawić do&nbsp;rozstrzygnięcia sądowi.',
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.864Z',
    title: 'Czy porozumienie z mediacji jest wiążące w sądzie?',
    slug: 'czy-porozumienie-z-mediacji-jest-wiazace-w-sadzie',
    content: 'Porozumienie wypracowane na&nbsp;mediacji możecie przedstawić sądowi jako propozycję warunków rozwodu. Sąd zazwyczaj je akceptuje, co znacznie przyspiesza cały proces.',
    silos: 'mediacje-okolorozwodowe',
    active: true,
    counter: 0
  },
  {
    content: 'Mediator jest bezstronny i&nbsp;nie reprezentuje żadnej ze stron. Jeśli chcesz mieć pewność co do&nbsp;swoich praw, możesz skonsultować się z&nbsp;adwokatem przed lub&nbsp;po mediacjach.',
    silos: 'mediacje-okolorozwodowe',
    slug: 'czy-potrzebuje-adwokata-oprocz-mediatora',
    title: 'Czy potrzebuję adwokata oprócz mediatora?',
    active: true,
    update_time: '2026-04-10T20:39:35.866Z',
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.867Z',
    title: 'Czy mogę prowadzić mediacje zamiast iść do sądu w sprawie windykacyjnej?',
    content: 'Tak. Mediacja często jest skuteczniejsza niż sąd w&nbsp;sprawach o&nbsp;zapłatę. Dłużnik chętniej negocjuje warunki spłaty niż czeka na&nbsp;wyrok. Można ustalić raty, odroczenia, częściowe umorzenie.',
    active: true,
    silos: 'mediacje-gospodarcze',
    counter: 0,
    slug: 'czy-moge-prowadzic-mediacje-zamiast-isc-do-sadu-w-sprawie-windykacyjnej'
  },
  {
    slug: 'czy-ugoda-z-mediacji-jest-wiazaca-dla-firm',
    content: 'Tak! Ugoda zawarta przed mediatorem, po zatwierdzeniu przez sąd, ma moc prawną wyroku sądowego. Można ją egzekwować przez komornika w&nbsp;razie niewykonania zobowiązań.',
    title: 'Czy ugoda z mediacji jest wiążąca dla firm?',
    active: true,
    silos: 'mediacje-gospodarcze',
    update_time: '2026-04-10T20:39:35.869Z',
    counter: 0
  },
  {
    slug: 'czy-konkurencja-dowie-sie-o-naszym-sporze',
    title: 'Czy konkurencja dowie się o naszym sporze?',
    update_time: '2026-04-10T20:39:35.882Z',
    active: true,
    content: 'Nie. w&nbsp;przeciwieństwie do&nbsp;procesu sądowego, który jest jawny, mediacje są całkowicie poufne. Żadna informacja nie wychodzi poza pokój mediacyjny.',
    silos: 'mediacje-gospodarcze',
    counter: 0
  },
  {
    content: 'Absolutnie. Wszystko, co powiedziane na&nbsp;mediacji, jest objęte tajemnicą. Mediator nie może zeznawać w&nbsp;sądzie na&nbsp;temat przebiegu mediacji. To chroni reputację firm.',
    title: 'Czy mediacje gospodarcze są poufne?',
    slug: 'czy-mediacje-gospodarcze-sa-poufne',
    active: true,
    silos: 'mediacje-gospodarcze',
    update_time: '2026-04-10T20:39:35.884Z',
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.885Z',
    slug: 'lle-kosztuja-mediacje-gospodarcze',
    content: 'Koszt zależy od wartości sporu i&nbsp;złożoności sprawy. Pierwsze spotkanie organizacyjne jest wliczone w&nbsp;koszt mediacji. Łączny koszt jest znacznie niższy niż proces sądowy, a czas rozwiązania liczony w&nbsp;tygodniach, nie latach.',
    active: true,
    title: 'Ile kosztują mediacje gospodarcze w Szczecinie?',
    silos: 'mediacje-gospodarcze',
    counter: 0
  },
  {
    content: 'Tak, treść rozmów mediacyjnych jest poufna. Zarząd otrzymuje informację o&nbsp;wyniku mediacji i&nbsp;uzgodnionych rozwiązaniach, ale nie o&nbsp;szczegółach rozmów. To buduje zaufanie uczestników.',
    silos: 'mediacje-dla-firm',
    active: true,
    update_time: '2026-04-10T20:39:35.886Z',
    counter: 0,
    slug: 'czy-mediacja-jest-poufna-wobec-zarzadu',
    title: 'Czy mediacja jest poufna wobec zarządu?'
  },
  {
    silos: 'mediacje-dla-firm',
    content: 'W wielu przypadkach tak. Mediacja jest szczególnie skuteczna, gdy chcesz rozwiązać konflikt bez eskalacji. Oczywiście w&nbsp;przypadku poważnych naruszeń prawa procedury formalne mogą być konieczne równolegle.',
    update_time: '2026-04-10T20:39:35.888Z',
    slug: 'czy-mediacja-moze-zastapic-procedure-dyscyplinarna',
    title: 'Czy mediacja może zastąpić procedurę dyscyplinarną?',
    active: true,
    counter: 0
  },
  {
    silos: 'mediacje-dla-firm',
    content: 'Typowy konflikt między dwiema osobami rozwiązuję w&nbsp;2-4 sesjach rozłożonych na&nbsp;2-3 tygodnie. Bardziej złożone sytuacje (konflikty zespołowe) mogą wymagać więcej czasu, ale i&nbsp;tak to znacznie szybciej niż inne metody.',
    title: 'Jak długo trwa mediacja firmowa?',
    active: true,
    update_time: '2026-04-10T20:39:35.901Z',
    slug: 'jak-dlugo-trwa-mediacja-firmowa',
    counter: 0
  },
  {
    content: 'Tak! Oprócz mediacji prowadzę szkolenia dla&nbsp;menedżerów i&nbsp;zespołów z&nbsp;komunikacji i&nbsp;zarządzania konfliktami. To inwestycja w&nbsp;prewencję, która zmniejsza liczbę konfliktów w&nbsp;przyszłości.',
    silos: 'mediacje-dla-firm',
    slug: 'czy-oferujesz-szkolenia-z-zarzadzania-konfliktami',
    update_time: '2026-04-10T20:39:35.903Z',
    active: true,
    title: 'Czy oferujesz szkolenia z zarządzania konfliktami?',
    counter: 0
  },
  {
    silos: 'mediacje-dla-firm',
    title: 'Ile kosztują mediacje dla firm w Szczecinie?',
    content: 'Koszt mediacji firmowej zależy od skali konfliktu i&nbsp;liczby osób zaangażowanych. dla&nbsp;małych zespołów (2-3 osoby) to 500-800 zł za sesję. dla&nbsp;większych konfliktów przygotowuję indywidualną wycenę. Koszt mediacji to ułamek strat generowanych przez konflikt.',
    active: true,
    slug: 'ile-kosztuja-mediacje-dla-firm',
    update_time: '2026-04-10T20:39:35.904Z',
    counter: 0
  },
  {
    slug: 'czy-kazda-sprawa-nadaje-sie-do-mediacji',
    update_time: '2026-04-10T20:39:35.906Z',
    silos: 'mediacje-cywilne',
    title: 'Czy każda sprawa cywilna nadaje się do mediacji?',
    active: true,
    content: 'Większość tak. Nie nadają się sprawy, gdzie jedna strona całkowicie odmawia dialogu, lub&nbsp;gdzie rozstrzygnięcie wymaga interpretacji prawa przez sąd. Podczas konsultacji oceniam szanse powodzenia mediacji.',
    counter: 0
  },
  {
    slug: 'ile-kosztuje-mediacja-cywilna',
    silos: 'mediacje-cywilne',
    content: 'Koszt zależy od wartości przedmiotu sporu i&nbsp;złożoności sprawy. Zazwyczaj jest to ułamek kosztów procesu sądowego. Konkretny cennik omawiam podczas pierwszej konsultacji.',
    active: true,
    title: 'Ile kosztuje mediacja cywilna w Szczecinie?',
    update_time: '2026-04-10T20:39:35.907Z',
    counter: 0
  },
  {
    silos: 'mediacje-cywilne',
    content: 'Oczywiście. Mediacja jest dobrowolna na&nbsp;każdym etapie. Możesz zrezygnować w&nbsp;dowolnym momencie i&nbsp;skierować sprawę do&nbsp;sądu.',
    active: true,
    slug: 'czy-moge-przerwac-mediacje-jesli-nie-przynosi-efektow',
    update_time: '2026-04-10T20:39:35.909Z',
    counter: 0,
    title: 'Czy mogę przerwać mediację, jeśli nie przynosi efektów?'
  },
  {
    silos: 'mediacje-cywilne',
    content: 'Nie jest to wymagane, ale możesz przyjść z&nbsp;prawnikiem jeśli czujesz taką potrzebę. Jako mediator jestem bezstronny i&nbsp;nie reprezentuję żadnej ze stron.',
    title: 'Czy potrzebuję prawnika na mediacji cywilnej?',
    active: true,
    slug: 'czy-potrzebuje-prawnika-na-mediacji-cywilnej',
    update_time: '2026-04-10T20:39:35.911Z',
    counter: 0
  },
  {
    title: 'Co jeśli druga strona nie zgodzi się na mediację?',
    silos: 'mediacje-cywilne',
    update_time: '2026-04-10T20:39:35.912Z',
    content: 'Mediacja wymaga zgody obu stron. Jednak często osoby początkowo sceptyczne zmieniają zdanie, gdy wyjaśnię im korzyści. Pomagam w&nbsp;pierwszym kontakcie z&nbsp;drugą stroną.',
    active: true,
    slug: 'co-jesli-druga-strona-nie-zgodzi-sie-na-mediacje',
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.924Z',
    title: 'Czy sesje mogą być online?',
    active: true,
    slug: 'czy-sesje-coachingu-zyciowego-moga-byc-online',
    content: 'Tak, oferuję zarówno sesje stacjonarne w&nbsp;Szczecinie, jak i&nbsp;sesje online przez wideokonferencję. Sesje online są równie skuteczne i&nbsp;często wygodniejsze dla&nbsp;osób z&nbsp;napiętym harmonogramem.',
    silos: 'coaching-zyciowy',
    counter: 0
  },
  {
    content: 'Nie, nie musisz przychodzić z&nbsp;gotowym celem. Wiele osób zaczyna coaching z&nbsp;ogólnym poczuciem, że czegoś im brakuje lub&nbsp;że chcą więcej od życia. Pierwszą częścią naszej pracy jest właśnie zdefiniowanie, nad czym chcesz pracować.',
    update_time: '2026-04-10T20:39:35.927Z',
    title: 'Czy muszę mieć konkretny cel przed rozpoczęciem?',
    active: true,
    silos: 'coaching-zyciowy',
    slug: 'czy-musze-miec-konkretny-cel-przed-rozpoczeciem',
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.928Z',
    title: 'Co jeśli nie wiem, czego chcę od życia?',
    content: 'To częsta sytuacja i&nbsp;doskonały punkt wyjścia do&nbsp;coachingu! Właśnie od odkrywania tego, czego naprawdę chcesz, zaczynamy naszą współpracę. Poprzez pytania i&nbsp;ćwiczenia coachingowe stopniowo wyłania się jaśniejszy obraz Twoich pragnień i&nbsp;wartości.',
    slug: 'co-jesli-nie-wiem-czego-chce-od-zycia',
    active: true,
    silos: 'coaching-zyciowy',
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:35.943Z',
    slug: 'jak-dlugo-trwa-coaching-zyciowy',
    active: true,
    title: 'Jak długo trwa coaching życiowy?',
    content: 'Typowy proces coachingu życiowego trwa od 3 do&nbsp;6 miesięcy, z&nbsp;sesjami co 2-3 tygodnie. Niektórzy klienci kontynuują współpracę dłużej, innym wystarczy kilka sesji. Wszystko zależy od Twoich celów i&nbsp;tempa, w&nbsp;jakim chcesz pracować.',
    silos: 'coaching-zyciowy',
    counter: 0
  },
  {
    content: 'Nie, coaching różni się od terapii. Terapia koncentruje się na&nbsp;leczeniu problemów psychicznych i&nbsp;pracy z&nbsp;przeszłością. Coaching jest zorientowany na&nbsp;przyszłość – skupiamy się na&nbsp;celach, rozwoju i&nbsp;budowaniu życia, jakiego pragniesz. Jeśli zmagasz się z&nbsp;poważnymi problemami emocjonalnymi, rekomenduję współpracę z&nbsp;psychoterapeutą.',
    update_time: '2026-04-10T20:39:35.945Z',
    slug: 'czy-coaching-zyciowy-to-terapia',
    active: true,
    silos: 'coaching-zyciowy',
    counter: 0,
    title: 'Czy coaching życiowy to terapia?'
  },
  {
    silos: 'coaching-konfliktow',
    title: 'Czy coaching pomoże, jeśli konflikt jest bardzo zaawansowany?',
    update_time: '2026-04-10T20:39:35.946Z',
    active: true,
    content: 'Coaching może pomóc na&nbsp;każdym etapie konfliktu. w&nbsp;zaawansowanych przypadkach pracujemy nad strategiami deeskalacji, zarządzaniem emocjami i&nbsp;przygotowaniem do trudnych rozmów. Czasem rekomenduję też mediację jako uzupełnienie.',
    slug: 'czy-coaching-pomoze-jesli-konflikt-jest-bardzo-zaawansowany',
    counter: 0
  },
  {
    silos: 'coaching-konfliktow',
    update_time: '2026-04-10T20:39:35.948Z',
    title: 'Ile sesji potrzeba, żeby zauważyć zmiany?',
    content: 'Pierwsze zmiany w&nbsp;sposobie reagowania na&nbsp;konflikty można zauważyć już po 2-3 sesjach. Budowanie trwałych nawyków wymaga zazwyczaj 6-10 sesji. Tempo zależy od złożoności wyzwań i&nbsp;Twojego zaangażowania w&nbsp;praktykowanie nowych umiejętności.',
    active: true,
    slug: 'ile-sesji-potrzeba-zeby-zauwazyc-zmiany',
    counter: 0
  },
  {
    silos: 'coaching-konfliktow',
    slug: 'czym-rozni-sie-coaching-konfliktow-od-mediacji',
    update_time: '2026-04-10T20:39:35.961Z',
    content: 'Mediacja to proces rozwiązywania konkretnego sporu między stronami z&nbsp;udziałem mediatora. Coaching konfliktów to praca indywidualna nad rozwijaniem Twoich umiejętności zarządzania konfliktami. Coaching nie wymaga udziału drugiej strony konfliktu.',
    active: true,
    title: 'Czym różni się coaching konfliktów od mediacji?',
    counter: 0
  },
  {
    silos: 'coaching-konfliktow',
    content: 'Zdecydowanie tak! Wiele osób unikających konfliktów korzysta z&nbsp;coachingu. Pracujemy nad rozumieniem, skąd bierze się unikanie, i&nbsp;stopniowo budujemy pewność siebie w&nbsp;wyrażaniu własnych potrzeb i&nbsp;granic.',
    update_time: '2026-04-10T20:39:35.963Z',
    title: 'Czy coaching konfliktów jest dla mnie, jeśli unikam konfrontacji?',
    active: true,
    slug: 'czy-coaching-konfliktow-jest-dla-mnie-jesli-unikam-konfrontacji',
    counter: 0
  },
  {
    silos: 'coaching-konfliktow',
    slug: 'czy-sesje-coachingu-konfliktow-sa-poufne',
    title: 'Czy sesje są poufne?',
    content: 'Tak, wszystkie sesje coachingowe są całkowicie poufne. Cokolwiek omawiamy podczas sesji, pozostaje między nami. To przestrzeń bezpieczna, w&nbsp;której możesz otwarcie mówić o&nbsp;trudnych sytuacjach.',
    active: true,
    update_time: '2026-04-10T20:39:35.965Z',
    counter: 0
  },
  {
    content: 'Doradca zawodowy daje konkretne rady i&nbsp;wskazówki. Coach pomaga Ci odkryć własne odpowiedzi poprzez pytania i&nbsp;refleksję. w&nbsp;coachingu to Ty jesteś ekspertem od swojego życia – ja pomagam Ci lepiej myśleć i&nbsp;podejmować trafniejsze decyzje.',
    update_time: '2026-04-10T20:39:35.966Z',
    active: true,
    silos: 'coaching-kariery',
    title: 'Czym różni się coaching od doradztwa zawodowego?',
    counter: 0,
    slug: 'czym-rozni-sie-coaching-od-doradztwa-zawodowego'
  },
  {
    title: 'Czy sesje mogą odbywać się online?',
    slug: 'czy-sesje-moga-odbywac-sie-online',
    content: 'Tak, oferuję zarówno sesje stacjonarne w&nbsp;Szczecinie, jak i&nbsp;sesje online przez wideokonferencję. Wiele osób ceni sobie wygodę sesji zdalnych, które są równie skuteczne jak spotkania osobiste.',
    active: true,
    update_time: '2026-04-10T20:39:35.968Z',
    silos: 'coaching-kariery',
    counter: 0
  },
  {
    active: true,
    content: 'Coaching pomoże Ci podjąć świadomą decyzję – czy zmiana pracy jest właściwym krokiem. Pracujemy nad zdefiniowaniem tego, czego naprawdę szukasz, jakie masz opcje i&nbsp;jak skutecznie przeprowadzić zmianę, jeśli się na&nbsp;nią zdecydujesz.',
    update_time: '2026-04-10T20:39:35.982Z',
    silos: 'coaching-kariery',
    slug: 'czy-coaching-pomoze-mi-zmienic-prace',
    counter: 0,
    title: 'Czy coaching pomoże mi zmienić pracę?'
  },
  {
    content: 'Przed pierwszą sesją warto zastanowić się, czego oczekujesz od coachingu i&nbsp;jakie wyzwania zawodowe są dla&nbsp;Ciebie najważniejsze. Nie musisz mieć gotowych odpowiedzi – to właśnie będziemy wypracowywać wspólnie.',
    update_time: '2026-04-10T20:39:35.984Z',
    active: true,
    title: 'Jak przygotować się do pierwszej sesji?',
    silos: 'coaching-kariery',
    slug: 'jak-przygotowac-sie-do-pierwszej-sesji',
    counter: 0
  },
  {
    title: 'Ile trwa proces coachingu kariery?',
    slug: 'ile-trwa-proces-coachingu-kariery',
    content: 'Typowy proces coachingu kariery trwa od 6 do&nbsp;12 sesji, rozłożonych na&nbsp;2-4 miesiące. Czasem wystarczy kilka spotkań, żeby uzyskać klarowność w&nbsp;konkretnej kwestii. Zawsze dopasowuję liczbę sesji do&nbsp;Twoich potrzeb i&nbsp;celów.',
    update_time: '2026-04-10T20:39:35.988Z',
    active: true,
    silos: 'coaching-kariery',
    counter: 0
  },
  {
    slug: 'ile-trwa-jedna-sesja-coachingu-indywidualnego',
    content: 'Standardowa sesja trwa 60-90 minut. na&nbsp;pierwszym spotkaniu rezerwujemy więcej czasu – około 90 minut – żeby mieć przestrzeń na&nbsp;dokładne poznanie się i&nbsp;zdefiniowanie celów.',
    update_time: '2026-04-10T20:39:36.002Z',
    active: true,
    silos: 'coaching-indywidualny',
    title: 'Ile trwa jedna sesja?',
    counter: 0
  },
  {
    content: 'Przed rozpoczęciem regularnej współpracy oferuję bezpłatną rozmowę wprowadzającą. To szansa, żebyś sprawdził/a, czy coaching i&nbsp;nasza współpraca Ci odpowiadają. Jeśli po kilku sesjach czujesz, że to nie jest dla&nbsp;Ciebie – możesz zakończyć współpracę bez zobowiązań.',
    slug: 'co-jesli--coaching-indywidualny-mi-nie-odpowiada',
    title: 'Co jeśli coaching mi nie odpowiada?',
    active: true,
    update_time: '2026-04-10T20:39:36.003Z',
    silos: 'coaching-indywidualny',
    counter: 0
  },
  {
    slug: 'jak-sie-przygotowac-do-sesji-coachingu-indywidualnego',
    content: 'Nie ma ścisłych wymagań, ale warto przed sesją zastanowić się, co jest aktualnie najważniejsze i&nbsp;nad czym chcesz pracować. Czasem daję też krótkie zadania między sesjami – wtedy przygotowaniem jest ich wykonanie.',
    title: 'Jak przygotować się do sesji?',
    active: true,
    update_time: '2026-04-10T20:39:36.005Z',
    silos: 'coaching-indywidualny',
    counter: 0
  },
  {
    title: 'Jak wygląda pierwsza sesja coachingowa?',
    active: true,
    update_time: '2026-04-10T20:39:36.006Z',
    content: 'Pierwsza sesja to przede wszystkim poznanie się i&nbsp;zbudowanie zaufania. Rozmawiamy o&nbsp;Twojej sytuacji, celach i&nbsp;oczekiwaniach wobec coachingu. Ustalamy też praktyczne kwestie – częstotliwość spotkań, sposób pracy i&nbsp;zasady współpracy.',
    silos: 'coaching-indywidualny',
    slug: 'jak-wyglada-pierwsza-sesja-coachingu-indywidualnego',
    counter: 0
  },
  {
    slug: 'czy-moge-zmienic-temat-coachingu-indywidualnego',
    active: true,
    update_time: '2026-04-10T20:39:36.007Z',
    content: 'Absolutnie tak! Coaching indywidualny jest elastyczny. Jeśli w&nbsp;trakcie pracy pojawi się ważniejszy temat lub&nbsp;zmienią się Twoje priorytety, dostosowujemy kierunek pracy. To jest właśnie siła indywidualnego podejścia.',
    silos: 'coaching-indywidualny',
    counter: 0,
    title: 'Czy mogę zmienić temat w trakcie procesu coachingowego?'
  },
  {
    content: 'Najczęściej spotykamy się co 2-3 tygodnie. Ten rytm daje wystarczająco czasu na&nbsp;wdrażanie zmian między sesjami, a jednocześnie utrzymuje momentum. Częstotliwość możemy dostosować do&nbsp;Twoich potrzeb.',
    slug: 'jak-czesto-powinny-odbywac-sie-sesje-coachingu-indywidualnego',
    title: 'Jak często powinny odbywać się sesje?',
    active: true,
    silos: 'coaching-indywidualny',
    update_time: '2026-04-10T20:39:36.008Z',
    counter: 0
  },
  {
    content: 'Coaching biznesowy sprawdza się zarówno w&nbsp;jednoosobowych działalnościach, jak i&nbsp;większych firmach. Pracuję z&nbsp;przedsiębiorcami na&nbsp;każdym etapie rozwoju – od start-upów po dojrzałe organizacje. Zawsze dopasowuję podejście do&nbsp;specyfiki Twojego biznesu.',
    title: 'Dla jakiej wielkości firm jest coaching biznesowy?',
    update_time: '2026-04-10T20:39:36.010Z',
    slug: 'dla-jakiej-wielkosci-firm-jest-coaching-biznesowy',
    silos: 'coaching-biznesowy',
    active: true,
    counter: 0
  },
  {
    title: 'Ile kosztuje coaching biznesowy?',
    update_time: '2026-04-10T20:39:36.083Z',
    content: 'Ceny sesji coachingu biznesowego są ustalane indywidualnie, w&nbsp;zależności od zakresu współpracy i&nbsp;specyfiki potrzeb. Skontaktuj się ze mną, żeby omówić szczegóły i&nbsp;otrzymać ofertę dopasowaną do&nbsp;Twojej sytuacji.',
    silos: 'coaching-biznesowy',
    active: true,
    slug: 'ile-kosztuje-coaching-biznesowy',
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:36.030Z',
    title: 'Czy coaching może pomóc w rozwiązywaniu konfliktów w firmie?',
    slug: 'czy-coaching-moze-pomoc-w-rozwiazaniu-konfliktow',
    silos: 'coaching-biznesowy',
    active: true,
    content: 'Tak, coaching biznesowy często obejmuje pracę nad konfliktami w&nbsp;zespole. Moje doświadczenie mediacyjne pozwala mi skutecznie wspierać liderów w&nbsp;zarządzaniu trudnymi sytuacjami i&nbsp;budowaniu zdrowszych relacji w&nbsp;organizacji.',
    counter: 0
  },
  {
    title: 'Jak często odbywają się sesje coachingu biznesowego?',
    update_time: '2026-04-10T20:39:35.623Z',
    content: 'Typowo sesje odbywają się co 2-3 tygodnie, co daje czas na&nbsp;wdrożenie zmian między spotkaniami. w&nbsp;intensywnych okresach (np. przed ważnymi decyzjami) możemy spotykać się częściej. Harmonogram zawsze dostosowuję do&nbsp;rytmu Twojego biznesu.',
    slug: 'jak-czesto-odbywaja-sie-sesje-coaching-biznesowego',
    silos: 'coaching-biznesowy',
    active: true,
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:36.031Z',
    content: 'Coaching biznesowy sprawdza się zarówno w&nbsp;jednoosobowych działalnościach, jak i&nbsp;większych firmach. Pracuję z&nbsp;przedsiębiorcami na&nbsp;każdym etapie rozwoju – od start-upów po dojrzałe organizacje. Zawsze dopasowuję podejście do&nbsp;specyfiki Twojego biznesu.',
    title: 'Dla jakiej wielkości firm jest coaching biznesowy?',
    slug: 'dla-jakiej-wielkosci-firm',
    silos: 'coaching-biznesowy',
    active: true,
    counter: 0
  },
  {
    update_time: '2026-04-10T20:39:36.032Z',
    slug: 'czy-coaching-obejmuje-doradztwo',
    content: 'Coaching koncentruje się na&nbsp;rozwijaniu Twoich kompetencji i&nbsp;znajdowaniu własnych rozwiązań. Nie daję gotowych odpowiedzi, ale pomagam Ci myśleć strategicznie. w&nbsp;razie potrzeby mogę wskazać kierunek lub&nbsp;podzielić się wiedzą – to zależy od Twoich potrzeb.',
    title: 'Czy coaching biznesowy obejmuje doradztwo?',
    silos: 'coaching-biznesowy',
    active: true,
    counter: 0
  }
]

export const faqs: FaqItemBase[] = fullFaqs
  .filter(faq => faq.active)
  .map(
    faq => ({
      content: faq.content,
      title: faq.title,
      slug: faq.slug,
      silos: faq.silos
    })
  )
