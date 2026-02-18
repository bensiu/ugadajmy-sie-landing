<script setup lang="ts">
const serviceCategories = [
  {
    title: 'Mediacje',
    path: '/mediacje-szczecin',
    description: 'Skuteczne rozwiązywanie konfliktów rodzinnych, rozwodowych, gospodarczych i cywilnych. Bez sądu, szybciej i taniej.',
    icon: 'lucide-scale',
    items: [
      'Mediacje rodzinne',
      'Mediacje rozwodowe',
      'Mediacje gospodarcze',
      'Mediacje spadkowe',
      'Mediacje online'
    ]
  },
  {
    title: 'Terapia dla par',
    path: '/terapia-dla-par-szczecin',
    description: 'Profesjonalne wsparcie relacji. Poprawa komunikacji, rozwiązywanie kryzysów, program \'Razem czy osobno?\'.',
    icon: 'lucide-heart',
    items: [
      'Terapia małżeńska',
      'Program dla par',
      'Warsztaty dla par',
      'Konsultacje przedrozwodowe'
    ]
  },
  {
    title: 'Coaching',
    path: '/coaching-szczecin',
    description: 'Rozwój osobisty i zawodowy z profesjonalnym wsparciem. Coaching dla kobiet, biznesowy i&nbsp;decyzyjny.',
    icon: 'lucide-target',
    items: [
      'Coaching dla kobiet',
      'Coaching biznesowy',
      'Coaching rozwoju osobistego',
      'Coaching karierowy'
    ]
  },
  {
    title: 'Szkolenia',
    path: '/szkolenia-szczecin',
    description: 'Szkolenia z komunikacji i rozwiązywania konfliktów dla firm i osób prywatnych w Szczecinie.',
    icon: 'lucide-graduation-cap',
    items: [
      'Szkolenia z komunikacji',
      'Rozwiązywanie konfliktów',
      'Szkolenia dla firm'
    ]
  }
]
</script>

<template>
  <BlocksSectionWrapper
    id="moje-uslugi"
    class="section-subtle bg-secondary/30"
  >
    <BlocksSectionHeader
      lead="Moje usługi"
      title="Jak mogę Ci pomóc?"
      description="Oferuję kompleksowe wsparcie w rozwiązywaniu konfliktów, budowaniu relacji i rozwoju osobistym. Każda usługa dostosowana do Twoich potrzeb."
      title-color=" "
    />

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="(service, index) in serviceCategories"
        :key="`service-${index}`"
        :to="service.path"
      >
        <BlocksFeatureCard
          v-bind="service"
          link="Zobacz szczegóły"
          class="h-full"
        />
      </NuxtLink>
    </div>
  </BlocksSectionWrapper>
</template>
