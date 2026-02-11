<script setup lang="ts">
const props = defineProps<{
  features: string[]
  bgColor?: string
}>()
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4">
    <span
      v-for="feature in props.features"
      :key="feature"
      :class="[
        'px-6 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium the-feature',
        props.bgColor || ''
      ]"
    >
      {{ feature }}
    </span>
  </div>
</template>
