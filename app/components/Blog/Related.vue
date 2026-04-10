<script setup lang="ts">
interface BlogRelatedProps {
  title: string
  variant?: 'grid' | 'flex'
}
const props = withDefaults(
  defineProps<BlogRelatedProps>(),
  {
    variant: 'grid'
  }
)
</script>

<template>
  <div class="mt-8">
    <USeparator
      class="mb-8 h-px"
      type="dashed"
    />
    <h2 class="text-3xl font-bold pb-8">
      {{ props.title }}
    </h2>
    <div
      :class="props.variant === 'grid'
        ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'
        : 'flex flex-wrap gap-4'
      "
    >
      <slot />
    </div>
  </div>
</template>
