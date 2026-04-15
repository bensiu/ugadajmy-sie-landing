<script setup lang="ts">
import type { BlogItem } from '~/types'
import { getSilosName } from '~/data/gazda'

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

const convertBenkarty = useContentModifier()
</script>

<template>
  <header class="mb-2 animate-fade-up">
    <!-- Badge and Read Time -->
    <div class="flex items-center gap-3 mt-1 mb-2">
      <UBadge
        variant="soft"
        size="lg"
        class="font-medium rounded-xl p-2 px-4 mr-2"
      >
        {{ getSilosName(props.silos) }}
      </UBadge>

      <UIcon
        name="lucide-book-open"
        size="lg"
        class="h-5 w-5 text-primary"
      />
      <span
        v-if="props.readTime"
        class="text-xs text-gray-500 dark:text-gray-400"
      >
        {{ props.readTime }} min
      </span>
    </div>

    <!-- eslint-disable vue/no-v-html -->
    <!-- Main Title -->
    <h2
      class="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 py-2 font-display tracking-tight text-gray-900 dark:text-white"
      v-html="convertBenkarty(props.title)"
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
