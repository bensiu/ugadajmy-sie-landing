<script setup lang="ts">
interface BlogRelatedProps {
  title: string
  variant?: 'grid' | 'flex'
  separator?: boolean
}
const props = withDefaults(
  defineProps<BlogRelatedProps>(),
  {
    variant: 'grid',
    separator: true
  }
)
</script>

<template>
  <div class="mt-8">
    <USeparator
      v-if="props.separator"
      class="mb-8 h-px"
      type="dashed"
    />
    <!-- eslint-disable vue/no-v-html -->
    <h2
      v-if="props.title"
      class="text-3xl font-bold pb-8"
      v-html="props.title"
    />
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
