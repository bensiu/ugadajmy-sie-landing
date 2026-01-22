<script setup lang="ts">
const props = defineProps<{
  lead?: string
  title: string
  description: string
  asH1?: boolean
}>()
</script>

<template>
  <div class="text-center max-w-4xl mx-auto mb-16 animate-fade-up">
    <span
      v-if="props.lead"
      class="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
    >
      {{ props.lead }}
    </span>
    <h1
      v-if="props.asH1"
      class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6"
    >
      {{ props.title }}
    </h1>
    <h2
      v-else
      class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6"
    >
      {{ props.title }}
    </h2>
    <p
      class="text-lg text-muted-foreground"
      v-html="props.description"
    />
    <slot />
  </div>
</template>
