<script setup lang="ts">
type OptionCardItem = {
  title: string
  description?: string
  detail?: string
  ui?: {
    title?: string
  }
}
const props = defineProps<OptionCardItem>()
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow transition-all duration-300 group"
  >
    <!-- eslint-disable vue/no-v-html -->
    <div class="w-full mb-2 min-h-10 flex justify-between items-start">
      <h3
        :class="[
          'text-xl font-bold group-hover:text-primary-500 transition-colors',
          props.ui?.title ? props.ui?.title : ''
        ]"
        v-html="props.title"
      />
      <span
        v-if="props.detail"
        class="text-primary font-medium"
        v-html="props.detail"
      />
    </div>

    <p
      v-if="props.description"
      class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed"
      v-html="props.description"
    />
  </div>
</template>
