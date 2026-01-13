<script setup>
const areas = [
  {
    icon: 'i-lucide-users',
    title: 'Konflikty osobiste i zawodowe',
    description: 'Pomagam rozwiązywać spory między partnerami, w rodzinie, z sąsiadami czy współpracownikami.',
    benefits: ['Mediacje rodzinne', 'Konflikty sąsiedzkie', 'Spory ze współpracownikami']
  },
  {
    icon: 'i-lucide-briefcase',
    title: 'Relacje prywatne i biznesowe',
    description: 'Wspieram w budowaniu zdrowych relacji zarówno w życiu osobistym, jak i w biznesie.',
    benefits: ['Relacje w firmie rodzinnej', 'Partnerstwa biznesowe', 'Relacje z klientami']
  },
  {
    icon: 'i-lucide-message-circle',
    title: 'Skuteczna komunikacja',
    description: 'Uczę jak mówić, by być słyszanym, i jak słuchać, by naprawdę rozumieć.',
    benefits: ['Techniki aktywnego słuchania', 'Asertywna komunikacja', 'Zarządzanie emocjami']
  },
  {
    icon: 'i-lucide-hand-heart',
    title: 'Trudne rozmowy i decyzje',
    description: 'Towarzyszę w najtrudniejszych momentach – gdy trzeba podjąć ważną decyzję lub przeprowadzić wymagającą rozmowę.',
    benefits: ['Negocjacje rozwodowe', 'Rozmowy o spadku', 'Decyzje biznesowe']
  }
]
</script>

<template>
  <UPageSection
    id="help"
    class="section-subtle"
    :ui="{
      container: 'py-8 lg:py-16'
    }"
  >
    <div class="page-container">
      <SubHeroHeader
        lead="W czym pomagam"
        title="Zamieniam konflikty w&nbsp;porozumienie"
        description="Niezależnie od tego, czy mierzysz się z konfliktem w rodzinie, w pracy,
          czy w biznesie – pomogę Ci znaleźć drogę do konstruktywnego rozwiązania."
      />

      <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
        <UCard
          v-for="(area, index) in areas"
          :key="area.title"
          :ui="{
            base: 'hover:border-primary/30 transition-all duration-300 hover:shadow-card group animate-fade-up',
            background: 'bg-card',
            divide: '',
            ring: 'ring-1 ring-border',
            body: { padding: 'p-8' }
          }"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="flex items-start gap-5">
            <div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <UIcon
                :name="area.icon"
                class="h-7 w-7 text-primary"
              />
            </div>

            <div class="flex-1">
              <h3 class="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                {{ area.title }}
              </h3>
              <p class="text-muted-foreground mb-4 leading-relaxed">
                {{ area.description }}
              </p>

              <ul class="space-y-2">
                <li
                  v-for="benefit in area.benefits"
                  :key="benefit"
                  class="flex items-center gap-2 text-sm"
                >
                  <UIcon
                    name="i-lucide-check-circle-2"
                    class="h-4 w-4 text-primary flex-shrink-0"
                  />
                  <span class="text-foreground">{{ benefit }}</span>
                </li>
              </ul>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </UPageSection>
</template>
