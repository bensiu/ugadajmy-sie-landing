<script setup lang="ts">
import type { BlogItem } from '~/types'

const props = defineProps<BlogItem>()
const articleData = computed<string>(
  () => {
    const date = new Date(props.date)

    return isNaN(date.getTime())
      ? ''
      : date.toLocaleDateString('pl-PL', {
          year: 'numeric',
          month: 'long', // "kwietnia" instead of "04"
          day: 'numeric'
        })
  }
)
</script>

<template>
  <header class="mb-10 animate-fade-up">
    <!-- Badge and Read Time -->
    <div class="flex items-center gap-3 mt-1 mb-2">
      <!-- <UBadge
        v-if="meta.parentLabel"
        variant="soft"
        size="xs"
        class="font-medium rounded-full"
      >
        {{ meta.parentLabel }}
      </UBadge> -->

      <span
        v-if="props.readTime"
        class="text-xs text-gray-500 dark:text-gray-400"
      >
        {{ props.readTime }}
      </span>
    </div>

    <!-- eslint-disable vue/no-v-html -->
    <!-- Main Title -->
    <h2
      class="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 py-2 font-display tracking-tight text-gray-900 dark:text-white"
      v-html="props.title"
    />

    <!-- Footer Meta -->
    <div class="flex items-center gap-4 text-gray-500 dark:text-gray-400 mb-2">
      <span class="font-medium text-gray-700 dark:text-gray-300">
        {{ props.author }}
      </span>

      <template v-if="props.date">
        <span class="opacity-50">•</span>
        <time :datetime="props.date">{{ articleData }}</time>
      </template>
    </div>
  </header>
</template>
