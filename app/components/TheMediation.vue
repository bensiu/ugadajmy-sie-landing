<script setup>
const mediationTypes = [
  {
    icon: 'i-lucide-users',
    title: 'Mediacje okołorozwodowe',
    description: 'Wsparcie w ustaleniu warunków rozstania – opieka nad dziećmi, podział majątku, alimenty. Mniej emocji, więcej rozwiązań.'
  },
  {
    icon: 'i-lucide-scale',
    title: 'Mediacje spadkowe',
    description: 'Pomoc w rozwiązaniu sporów dotyczących spadku. Zachowaj relacje rodzinne mimo trudnych rozmów o majątku.'
  },
  {
    icon: 'i-lucide-building-2',
    title: 'Mediacje dla firm',
    description: 'Konflikty wspólników, spory z kontrahentami, napięcia w zespole. Skuteczne rozwiązania bez kosztownych procesów.'
  }
]

const benefits = [
  { icon: 'i-lucide-shield', text: 'Pełna poufność i dyskrecja' },
  { icon: 'i-lucide-clock', text: 'Szybciej niż proces sądowy' },
  { icon: 'i-lucide-file-text', text: 'Ugoda z mocą wyroku sądu' }
]

const steps = [
  {
    number: '01',
    title: 'Bezpłatna konsultacja',
    description: 'Poznajemy się. Opowiadasz o swojej sytuacji, ja oceniam, czy mediacja to właściwa droga.'
  },
  {
    number: '02',
    title: 'Przygotowanie',
    description: 'Ustalamy zasady, terminy i oczekiwania. Każda strona może przygotować swoje stanowisko.'
  },
  {
    number: '03',
    title: 'Sesje mediacyjne',
    description: 'Spotkania w bezpiecznej atmosferze. Moderuję rozmowę i pomagam szukać rozwiązań.'
  },
  {
    number: '04',
    title: 'Porozumienie',
    description: 'Wypracowana ugoda to Wasz sukces. Może mieć moc prawną – jak wyrok sądu.'
  }
]
</script>

<template>
  <UPageSection
    id="mediation"
    :ui="{
      container: 'py-8 lg:py-16'
    }"
  >
    <div class="page-container">
      <BlockHeroHeader
        lead="Mediacje"
        title="Rozwiązuj konflikty bez&nbsp;sądu"
        description="Mediacja to droga do porozumienia – szybsza, tańsza i&nbsp;mniej stresująca niż&nbsp;proces sądowy.
          A co najważniejsze: to&nbsp;Wy macie wpływ na rozwiązanie."
      />

      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <UCard
          v-for="(type, index) in mediationTypes"
          :key="type.title"
          :ui="{
            root: 'rounded-lg shadow-sm bg-[hsl(192,75%,25%)] border-0 text-white hover:bg-[hsl(192,75%,22%)] transition-all duration-300 hover:shadow-elevated animate-fade-up',
            divide: '',
            body: { padding: 'p-8' }
          }"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-secondary">
            <UIcon
              :name="type.icon"
              class="h-7 w-7 text-primary"
            />
          </div>
          <h3 class="text-xl font-display font-bold mb-4 text-black">
            {{ type.title }}
          </h3>
          <p class="text-white leading-relaxed">
            {{ type.description }}
          </p>
        </UCard>
      </div>

      <div class="bg-secondary rounded-2xl p-6 mb-16 animate-fade-up delay-200">
        <div class="grid sm:grid-cols-3 gap-6">
          <div
            v-for="benefit in benefits"
            :key="benefit.text"
            class="flex items-center gap-4"
          >
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <UIcon
                :name="benefit.icon"
                class="h-6 w-6 text-primary"
              />
            </div>
            <span class="font-medium text-foreground">{{ benefit.text }}</span>
          </div>
        </div>
      </div>

      <div class="bg-card rounded-2xl border border-border p-8 lg:p-12 animate-fade-up delay-300">
        <h3 class="text-2xl font-display font-bold mb-8 text-center">
          Jak przebiega proces mediacji?
        </h3>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div
            v-for="(step, index) in steps"
            :key="step.number"
            class="relative text-center lg:text-left"
          >
            <div class="text-5xl font-display font-bold text-primary/20 mb-3">
              {{ step.number }}
            </div>
            <h4 class="text-lg font-semibold mb-2">
              {{ step.title }}
            </h4>
            <p class="text-sm text-muted-foreground leading-relaxed">
              {{ step.description }}
            </p>

            <UIcon
              v-if="index < steps.length - 1"
              name="i-lucide-arrow-right"
              class="hidden lg:block absolute top-8 -right-4 h-6 w-6 text-border"
            />
          </div>
        </div>
        <BlockButtonLink
          href="/#contact"
          label="Umów się na konsultację"
        />
      </div>
    </div>
  </UPageSection>
</template>
