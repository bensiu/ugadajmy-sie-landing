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
      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <CouplesProgramStep
          v-for="step in steps"
          :key="step.title"
          :step="step"
        />
      </div>
    </div>
  </UPageSection>
</template>
