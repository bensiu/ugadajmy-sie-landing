<script setup lang="ts">
// const links = ref([
//   {
//     label: 'Umów się na rozmowę',
//     to: '/#kontakt',
//     icon: 'i-heroicons-arrow-right'
//   }
// ])

const props = defineProps<{
  id: string
  topBadges?: string
  titles: string[]
  description?: string
  stats?: {
    value: string
    label: string
  }[]
}>()
</script>

<template>
  <section
    :id="props.id"
    class="flex items-center overflow-hidden scroll-mt-20"
  >
    <UPageHero
      class="hero-container-background"
      :ui="{
        wrapper: 'w-full page-container text-left',
        container: 'mx-0 py-3 sm:py-4 md:py-6 lg:py-8 max-w-5xl text-left',
        title: 'text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold leading-tight mb-6 text-white animate-fade-up delay-100',
        description: 'text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-4xl animate-fade-up delay-200',
        footer: 'text-left'
      }"
    >
      <template #top>
        <div
          v-if="props.topBadges"
          class="px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-28"
        >
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-up">
            <span>{{ props.topBadges }}</span>
          </div>
        </div>
        <div
          v-else
          class="pt-16 sm:pt-20 md:pt-24 lg:pt-28"
        />
      </template>

      <template #title>
        <!-- eslint-disable vue/no-v-html -->
        <span
          v-for="(title, index) in props.titles"
          :key="title"
          :class="`block text-${index ? '[#eab308]' : 'white'}`"
          v-html="title"
        />
      </template>

      <template #description>
        <span
          v-if="props.description"
          v-html="props.description"
        />
      </template>

      <template #footer>
        <div class="flex flex-col sm:flex-row gap-8 animate-fade-up delay-300">
          <UButton
            to="#contact"
            size="lg"
            label="Umów się na rozmowę"
            trailing-icon="i-heroicons-arrow-right"
            :ui="{
              base: 'font-semibold px-8 py-4 group bg-[#eab308] hover:bg-[#d4a007] text-[#0f172a]'
            }"
          />
          <UButton
            to="#about"
            size="lg"
            variant="outline"
            label="Poznaj mnie"
            :ui="{
              base: 'border-white/30 text-white hover:bg-white/10 px-8 py-4'
            }"
          />
        </div>
        <div
          v-if="props.stats"
          class="flex flex-wrap items-center gap-8 mt-8 pt-6 border-t border-white/20 animate-fade-up delay-400"
        >
          <div
            v-for="stat in props.stats"
            :key="stat.label"
            class="text-center sm:text-left"
          >
            <p class="text-3xl font-bold text-white">
              {{ stat.value }}
            </p>
            <p class="text-sm text-white/60">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </template>
    </UPageHero>
  </section>
</template>
