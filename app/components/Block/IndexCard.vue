<script setup lang="ts">
type IndexCardItem = {
  icon?: string
  title: string
  description?: string
  ui?: {
    title?: string
  }
}
const props = defineProps<IndexCardItem>()
</script>

<template>
  <div
    class="flex items-start gap-3 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow transition-all duration-300 group"
  >
    <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
      <UIcon
        :name="props.icon"
        class="h-5 w-5 text-primary"
      />
    </div>
    <div>
      <!-- eslint-disable vue/no-v-html -->
      <h3
        :class="[
          'text-lg font-bold group-hover:text-primary-500 transition-colors',
          props.ui?.title ? props.ui?.title : ''
        ]"
        v-html="props.title"
      />
      <p
        v-if="props.description"
        class="text-gray-500 dark:text-gray-400 text-sm"
        v-html="props.description"
      />
    </div>
  </div>
</template>
