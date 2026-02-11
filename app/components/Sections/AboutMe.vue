<script setup>
const credentials = [
  {
    icon: 'i-lucide-scale',
    title: 'Prawnik',
    description: 'Wieloletnie doświadczenie w&nbsp;prawie rodzinnym i&nbsp;gospodarczym'
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
  <BlocksSectionWrapper id="o-mnie">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
      <div class="relative rounded-2xl animate-fade-up">
        <div className="relative rounded-2xl shadow-elevated">
          <div>
            <img
              src="/images/Aleksandra_Dubiel_zdjecie_glowne.JPG"
              alt="Aleksandra Dubiel - Mediator, Prawnik, Coach"
              class="w-full aspect-[4/5] object-cover"
            >
            <div class="absolute -bottom-4 -right-2 px-8 py-6 rounded-xl shadow-lg text-primary bg-white border-2">
              <p class="font-display font-bold text-2xl">
                15+
              </p>
              <p class="text-sm font-medium">
                lat doświadczenia
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="animate-fade-up delay-200">
        <BlocksSectionHeader
          lead="Kim jestem"
          title="Aleksandra Dubiel"
          description="Witaj! Jestem certyfikowanym mediatorem, coachem i&nbsp;prawnikiem. To&nbsp;unikalne połączenie kompetencji pozwala mi patrzeć na konflikty z wielu perspektyw i znajdować rozwiązania, które naprawdę działają.
            <br><br>Wierzę, że każdy konflikt można rozwiązać - potrzeba do&nbsp;tego bezpiecznej przestrzeni, profesjonalnego wsparcia i&nbsp;gotowości do&nbsp;dialogu. Moją&nbsp;rolą jest być Twoim przewodnikiem na&nbsp;drodze do&nbsp;porozumienia.
          "
          title-color=" "
          class="!text-left"
        />
        <div class="grid sm:grid-cols-2 gap-4">
          <BlocksFeatureCard
            v-for="(credential, index) in credentials"
            :key="credential.title"
            :title="credential.title"
            :icon="credential.icon"
            :desc="credential.description"
            :style="{ animationDelay: `${index * 100}ms` }"
          />
        </div>
      </div>
    </div>
  </BlocksSectionWrapper>
</template>

<style scoped>
/* Standard delay classes if not handled by your Tailwind config */
.delay-200 {
  animation-delay: 0.2s;
}
</style>
