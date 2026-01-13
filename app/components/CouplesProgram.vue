<script setup>
const steps = [
  {
    icon: 'i-lucide-message-circle',
    title: 'Konsultacja',
    description: 'Poznajemy się i sprawdzamy, czy jesteśmy dla siebie. Możemy stworzyć plan spotkań dopasowany do Waszych potrzeb.',
    price: '220 zł',
    duration: '60 minut'
  },
  {
    icon: 'i-lucide-users',
    title: 'Spotkania indywidualne',
    description: 'Każdy partner przychodzi na osobne, poufne spotkanie. Poznaję perspektywę każdej strony z osobna.',
    price: '390 zł',
    duration: '2 godziny'
  },
  {
    icon: 'i-lucide-heart',
    title: 'Spotkania wspólne',
    description: 'Tematycznie uporządkowane sesje. Przed każdym spotkaniem otrzymujecie zadania domowe do przygotowania.',
    price: '490 zł',
    duration: '2 godziny'
  }
]

const modules = [
  {
    number: 1,
    title: 'On łowi, a ona smaży',
    description: 'Podział ról, obowiązków i czasu. Rozmowa o tym, kto czuje się niedoceniony i skąd biorą się frustracje.',
    videoUrl: 'https://youtube.com/shorts/4QFOt5GVEzk'
  },
  {
    number: 2,
    title: 'Mam tego dość',
    description: 'Czas powiedzieć o tym, co boli i co musi się zmienić. Czyścimy emocje i sprzątamy raz a dobrze.',
    videoUrl: 'https://youtube.com/shorts/welociI8Pxc'
  },
  {
    number: 3,
    title: 'Związek marzeń',
    description: 'Rozmowa o potrzebach i oczekiwaniach. Zaktualizowana wersja Ciebie wychodzi po to, czego potrzebuje.',
    videoUrl: 'https://youtube.com/shorts/Ct5RRyyiIiI'
  },
  {
    number: 4,
    title: 'Sex – co nas kręci',
    description: 'Większość problemów w seksie bierze się z braku rozmowy. Czas odkryć kim jesteście teraz.',
    videoUrl: 'https://youtube.com/shorts/sJa3AT3DmVo'
  },
  {
    number: 5,
    title: 'Dzieci',
    description: 'Uświadomienie wzorców z domu pochodzenia i zbudowanie własnej wizji bycia rodzicem.',
    videoUrl: 'https://youtube.com/shorts/BaTSXKJeXwA'
  },
  {
    number: 6,
    title: 'BHP obsługi konfliktu',
    description: 'Jako mediator dzielę się wiedzą o tym, co zasila konflikt i jak na niego reagować.',
    videoUrl: 'https://youtube.com/shorts/iBUAZ0BTF7g'
  },
  {
    number: 7,
    title: 'Ugoda miłości',
    description: 'Podsumowanie wszystkiego, co było wypowiedziane. Czas na aktywne słuchanie i komunikowanie potrzeb.',
    videoUrl: 'https://youtube.com/shorts/wTGyvi2RmP8'
  },
  {
    number: 8,
    title: 'Cash, money, dolary',
    description: 'Kłótnie o pieniądze często wynikają z historii rodowych. Warto to zobaczyć z lotu ptaka.',
    videoUrl: 'https://youtube.com/shorts/I0rH6Zim2EU'
  },
  {
    number: 9,
    title: 'Akcja komunikacja',
    description: 'Dla tych, którzy potrzebują więcej pracy nad schodzeniem ze ścieżki wojennej.',
    videoUrl: 'https://youtube.com/shorts/3Nswo9-33jc'
  },
  {
    number: 10,
    title: 'Uzależnienia',
    description: 'Od gier, telefonu, social media, alkoholu. Działamy warsztatowo nad nowymi nawykami.',
    videoUrl: ''
  },
  {
    number: 11,
    title: 'Zdrada',
    description: 'Poznanie powodów zdrady i szczera rozmowa o tym, czy można być dalej razem.',
    videoUrl: ''
  },
  {
    number: 12,
    title: 'Jak to teraz ułożyć na nowo',
    description: 'Dla rozstających się – przejście z relacji partnerskiej na rodzicielską.',
    videoUrl: ''
  },
  {
    number: 13,
    title: 'Patchwork – kochana rodzinka',
    description: 'Jak poukładać rodzinę patchworkową, by każdy miał przestrzeń na swoje potrzeby.',
    videoUrl: ''
  }
]
</script>

<template>
  <UPageSection
    id="couples-program"
    class="section-subtle bg-secondary/30"
    :ui="{
      container: 'py-8 lg:py-16'
    }"
  >
    <div class="relative animate-fade-up">
      <CouplesProgramHeader
        :features="[
          'Przywracanie komunikacji',
          'Zrozumienie ról w związku',
          'Uświadamianie potrzeb emocjonalnych',
          'Budowanie porozumienia'
        ]"
      />
      <CouplesProgramWhy
        :benefits="[
          'Aby ubrać proces terapeutyczny w konkretne ramy',
          'Abyście wiedzieli o czym będzie spotkanie i ile ich będzie',
          'Abyście mogli przygotować się do każdego spotkania',
          'Abyście mogli wybrać tematy, które Was dotyczą'
        ]"
      />
      <div class="grid md:grid-cols-3 gap-6">
        <CouplesProgramStep
          v-for="step in steps"
          :key="step.title"
          :step="step"
        />
      </div>
      <CouplesProgramDiscount />
      <CouplesProgramModules :modules="modules" />
    </div>
  </UPageSection>
</template>
