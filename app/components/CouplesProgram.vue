<script lang="ts" setup>
const features = [
  'Przywracanie komunikacji',
  'Zrozumienie ról w związku',
  'Uświadamianie potrzeb emocjonalnych',
  'Budowanie porozumienia'
]

const props = defineProps<{
  asH1?: boolean
}>()
</script>

<template>
  <UPageSection
    id="program-dla-par"
    class="section-subtle bg-secondary/30"
    :ui="{
      container: 'py-8 lg:py-16'
    }"
  >
    <div class="page-container relative animate-fade-up">
      <BlockHeroHeader
        lead="Program dla par"
        title="„Razem czy osobno?”"
        description="Program zbudowany na strukturze mediacji, który przywraca komunikację w&nbsp;relacji,
          pozwala dostrzec różne role w&nbsp;związku i&nbsp;uświadamia potrzeby emocjonalne partnerów."
        :as-h1="props.asH1"
      >
        <SimpleBadges
          :features="features"
          class="mt-8"
        />
      </BlockHeroHeader>
      <CouplesProgramWhy
        :benefits="[
          'Aby ubrać proces terapeutyczny w konkretne ramy',
          'Abyście wiedzieli o czym będzie spotkanie i ile ich będzie',
          'Abyście mogli przygotować się do każdego spotkania',
          'Abyście mogli wybrać tematy, które Was dotyczą'
        ]"
      />
      <slot />
    </div>
  </UPageSection>
</template>
