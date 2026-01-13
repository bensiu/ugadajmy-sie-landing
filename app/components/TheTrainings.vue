<script setup lang="ts">
const trainings = [
  {
    icon: 'i-lucide-monitor',
    title: 'Program stałej współpracy dla firm',
    description: 'Długofalowe wsparcie w zakresie mediacji i rozwoju kompetencji komunikacyjnych dla Twojej organizacji.',
    items: ['Stałe wsparcie eksperta', 'Elastyczne warunki', 'Dedykowany opiekun']
  },
  {
    icon: 'i-lucide-graduation-cap',
    title: 'Szkolenia jednorazowe',
    description: 'Intensywne warsztaty na konkretny temat. Praktyczna wiedza w jeden dzień.',
    items: ['Warsztaty stacjonarne', 'Ćwiczenia praktyczne', 'Małe grupy']
  },
  {
    icon: 'i-lucide-building-2',
    title: 'Szkolenia dla firm',
    description: 'Dedykowane programy rozwojowe dla zespołów i organizacji.',
    items: ['Program dopasowany', 'Szkolenie w siedzibie', 'Wsparcie poszkoleniowe']
  }
]

const topics = [
  'Skuteczna komunikacja', 'Rozwiązywanie konfliktów', 'Mediacja w praktyce', 'Budowanie relacji',
  'Negocjacje', 'Zarządzanie emocjami', 'Asertywność', 'Trudne rozmowy'
]
</script>

<template>
  <UPageSection
    id="trainings"
    :ui="{
      container: 'py-8 lg:py-16'
    }"
  >
    <div class="page-container">
      <SubHeroHeader
        lead="Szkolenia i programy"
        title="Rozwijaj umiejętności komunikacji"
        description="Dzielę się wiedzą i doświadczeniem w formie szkoleń, warsztatów i programów rozwojowych.
          Dla osób indywidualnych i całych zespołów."
      />
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <SimpleCard
          v-for="(training, index) in trainings"
          :key="training.title"
          :area="training"
          :style="{ animationDelay: `${index * 100}ms` }"
        />
      </div>
    </div>
    <div class="bg-[hsl(192,75%,25%)] rounded-2xl p-8 lg:p-12 animate-fade-up delay-200">
      <SubHeroHeader
        title="Tematy szkoleń"
        description="Każde szkolenie można dostosować do Twoich potrzeb"
        class="bg-reverse max-w-5xl"
      >
        <SimpleBadges
          :features="topics"
          class="mt-8"
        />
      </SubHeroHeader>
    </div>
  </UPageSection>
</template>
