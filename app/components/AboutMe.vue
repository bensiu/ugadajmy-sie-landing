<script setup>
const credentials = [
  {
    icon: 'i-lucide-scale',
    title: 'Prawnik',
    description: 'Wieloletnie doświadczenie w prawie rodzinnym i&nbsp;gospodarczym'
  },
  {
    icon: 'i-lucide-heart',
    title: 'Mediator',
    description: 'Certyfikowany mediator wpisany na listę stałych mediatorów'
  },
  {
    icon: 'i-lucide-target',
    title: 'Coach',
    description: 'Akredytowany coach wspierający rozwój osobisty i&nbsp;zawodowy'
  },
  {
    icon: 'i-lucide-award',
    title: 'Trener',
    description: 'Prowadzę szkolenia z&nbsp;komunikacji i&nbsp;rozwiązywania konfliktów'
  }
]
</script>

<template>
  <UPageSection id="about">
    <div class="page-container relative animate-fade-up">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div class="relative rounded-2xl animate-fade-up">
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <img
              src="/images/Aleksandra_Dubiel_zdjecie_glowne.JPG"
              alt="Aleksandra Dubiel - Mediator, Prawnik, Coach"
              class="w-full aspect-[4/5] object-cover"
            >
          </div>
          <div class="absolute -bottom-6 -right-6 px-6 py-4 rounded-xl shadow-card text-primary bg-primary-foreground">
            <p class="font-display font-bold text-2xl">
              15+
            </p>
            <p class="text-sm font-medium">
              lat doświadczenia
            </p>
          </div>
        </div>

        <div class="animate-fade-up delay-200">
          <span class="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Kim jestem
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Aleksandra Dubiel
          </h2>
          <div class="space-y-6 mb-8">
            <p class="text-lg text-muted-foreground leading-relaxed">
              Witaj! Jestem certyfikowanym mediatorem, coachem i&nbsp;prawnikiem. To&nbsp;unikalne połączenie kompetencji pozwala mi patrzeć na konflikty z wielu perspektyw i znajdować rozwiązania, które naprawdę działają.
            </p>
            <p class="text-lg text-muted-foreground leading-relaxed">
              Wierzę, że każdy konflikt można rozwiązać - potrzeba do tego bezpiecznej przestrzeni,
              profesjonalnego wsparcia i gotowości do&nbsp;dialogu. Moją&nbsp;rolą jest być Twoim przewodnikiem
              na&nbsp;drodze do&nbsp;porozumienia.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div
              v-for="item in credentials"
              :key="item.title"
              class="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
            >
              <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <UIcon
                  :name="item.icon"
                  class="h-5 w-5 text-primary"
                />
              </div>
              <div>
                <h3 class="font-semibold text-foreground mb-1">
                  {{ item.title }}
                </h3>
                <p
                  class="text-sm text-muted-foreground"
                  v-html="item.description"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UPageSection>
</template>

<style scoped>
/* Standard delay classes if not handled by your Tailwind config */
.delay-200 {
  animation-delay: 0.2s;
}
</style>
