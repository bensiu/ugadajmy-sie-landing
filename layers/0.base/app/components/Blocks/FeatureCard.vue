<script setup lang="ts">
type FeatureCardItem = {
  icon: string
  title: string
  desc: string
}
const props = defineProps<FeatureCardItem>()
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow transition-all duration-300 group"
  >
    <div
      class="h-12 w-12 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-500 mb-4 group-hover:scale-110 transition-transform"
    >
      <slot name="icon">
        <UIcon
          v-if="props.icon"
          :name="props.icon"
          class="h-6 w-6"
        />
      </slot>
    </div>

    <h3 class="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
      <slot name="title">
        {{ props.title }}
      </slot>
    </h3>

    <!-- eslint-disable vue/no-v-html -->
    <p
      class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed"
      v-html="props.desc"
    />
  </div>
</template>
