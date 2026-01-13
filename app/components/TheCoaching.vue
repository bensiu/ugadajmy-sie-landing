<script setup lang="ts">
const whatYouGet = [
  'Indywidualne sesje dopasowane do Twoich potrzeb',
  'Konkretne narzędzia i techniki do codziennego stosowania',
  'Wsparcie w podejmowaniu trudnych decyzji',
  'Przestrzeń do refleksji i rozwoju',
  'Odpowiedzialność za realizację celów'
]

const coachingAreas = [
  {
    icon: 'i-lucide-trending-up',
    title: 'Wyzwania zawodowe',
    description: 'Awans, zmiana ścieżki kariery, trudne decyzje w pracy – razem znajdziemy drogę do Twoich celów.'
  },
  {
    icon: 'i-lucide-target',
    title: 'Rozwijanie biznesu',
    description: 'Strategia, przywództwo, zarządzanie zespołem. Wspieram przedsiębiorców w budowaniu sukcesu.'
  },
  {
    icon: 'i-lucide-users',
    title: 'Rozwiązywanie konfliktów',
    description: 'Nauczysz się radzić sobie z napięciami i budować zdrowe relacje – w pracy i w życiu prywatnym.'
  },
  {
    icon: 'i-lucide-compass',
    title: 'Indywidualne cele',
    description: 'Każdy ma inne marzenia. Pomogę Ci je zdefiniować i stworzyć plan ich realizacji.'
  }
]
</script>

<template>
  <UPageSection
    id="coaching"
    class="section-subtle"
    :ui="{
      container: 'py-8 lg:py-16'
    }"
  >
    <div class="page-container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div class="animate-fade-up">
        <span class="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
          Sesje coachingowe 1:1
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
          Osiągnij więcej z&nbsp;profesjonalnym wsparciem
        </h2>
        <p class="text-lg text-muted-foreground mb-8 leading-relaxed">
          Coaching to partnerska rozmowa, która pomaga Ci odkryć własne odpowiedzi.
          Nie daję gotowych rad – pomagam Ci myśleć jaśniej i&nbsp;działać skuteczniej.
        </p>

        <ul class="space-y-3 mb-8">
          <li
            v-for="item in whatYouGet"
            :key="item"
            class="flex items-start gap-3"
          >
            <UIcon
              name="i-lucide-check-circle-2"
              class="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
            />
            <span class="text-foreground">{{ item }}</span>
          </li>
        </ul>

        <UButton
          to="#contact"
          size="lg"
          class="px-8 py-4"
          trailing-icon="i-lucide-arrow-right"
        >
          Zarezerwuj sesję próbną
        </UButton>
      </div>
      <div class="grid sm:grid-cols-2 gap-4 animate-fade-up delay-200">
        <SimpleCard
          v-for="area in coachingAreas"
          :key="area.title"
          :area="area"
        />
      </div>
    </div>
  </UPageSection>
</template>
