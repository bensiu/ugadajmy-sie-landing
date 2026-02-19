<script setup lang="ts">
const trainings = [
  {
    icon: 'i-lucide-monitor',
    title: 'Program stałej współpracy dla firm',
    description: 'Długofalowe wsparcie w zakresie mediacji i&nbsp;rozwoju kompetencji komunikacyjnych dla&nbsp;Twojej organizacji.',
    items: ['Stałe wsparcie eksperta', 'Elastyczne warunki', 'Dedykowany opiekun']
  },
  {
    icon: 'i-lucide-graduation-cap',
    title: 'Szkolenia jednorazowe',
    description: 'Intensywne warsztaty na konkretny temat. Praktyczna wiedza w&nbsp;jeden dzień.',
    items: ['Warsztaty stacjonarne', 'Ćwiczenia praktyczne', 'Małe grupy']
  },
  {
    icon: 'i-lucide-building-2',
    title: 'Szkolenia dla firm',
    description: 'Dedykowane programy rozwojowe dla&nbsp;zespołów i&nbsp;organizacji.',
    items: ['Program dopasowany', 'Szkolenie w siedzibie', 'Wsparcie poszkoleniowe']
  }
]

const topics = [
  'Skuteczna komunikacja', 'Rozwiązywanie konfliktów', 'Mediacja w praktyce', 'Budowanie relacji',
  'Negocjacje', 'Zarządzanie emocjami', 'Asertywność', 'Trudne rozmowy'
]
</script>

<template>
  <BlocksSectionWrapper
    id="szkolenia-i-programy"
  >
    <BlocksSectionHeader
      lead="Szkolenia i programy"
      title="Rozwijaj umiejętności komunikacji"
      description="Dzielę się wiedzą i&nbsp;doświadczeniem w&nbsp;formie szkoleń, warsztatów i&nbsp;programów rozwojowych. Dla osób indywidualnych i całych zespołów."
      title-color=" "
    />
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <BlocksFeatureCard
        v-for="training in trainings"
        :key="training.title"
        :title="training.title"
        :icon="training.icon"
        :description="training.description"
      />
    </div>
    <div class="bg-primary rounded-2xl p-8 lg:p-12 animate-fade-up delay-200 mt-16">
      <BlocksSectionHeader
        title="Tematy szkoleń"
        description="Każde szkolenie można dostosować do Twoich potrzeb"
        class="bg-reverse max-w-5xl"
        title-color=" "
        description-color="text-white"
      >
        <SimpleBadges
          :features="topics"
          class="mt-8"
          bg-color="bg-secondary-100"
        />
      </BlocksSectionHeader>
      <BlockButtonLink
        href="/#contact"
        label="Zapytaj o szkolenie"
        class="bg-primary-foreground text-primary"
      />
    </div>
  </BlocksSectionWrapper>
</template>
