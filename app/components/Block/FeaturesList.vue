<script setup lang="ts">
interface FeaturesListProps {
  features: string[]
}

const props = defineProps<FeaturesListProps>()
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4">
    <UBadge
      v-for="feature in props.features"
      :key="feature"
      variant="soft"
      size="lg"
      class="rounded-full font-medium p-3 px-6"
    >
      {{ feature }}
    </UBadge>
  </div>
</template>
