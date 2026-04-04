<script setup lang="ts">
import type { BlogItemMinimal } from '~/types'

const props = defineProps<BlogItemMinimal>()
</script>

<template>
  <NuxtLink
    :to="`/skarbnica-wiedzy/${props.silos}/${props.slug}/`"
    class="group animate-fade-up block h-full"
  >
    <UCard
      class="h-full transition-all duration-300"
      :ui="{
        root: 'hover:border-primary-500/30 hover:shadow-lg ring-1 ring-gray-200 dark:ring-gray-800',
        body: 'p-6'
      }"
    >
      <!-- Category Badge & Read Time -->
      <div class="flex items-center gap-3 mb-4">
        <UBadge
          v-if="props.silosName"
          variant="soft"
          size="lg"
          class="font-semibold px-4 rounded-full"
        >
          {{ props.silosName }}
        </UBadge>
        <UIcon
          v-else
          name="lucide-book-open"
          size="lg"
          class="h-5 w-5 text-primary"
        />

        <span
          v-if="props.readTime"
          class="text-xs text-gray-500 dark:text-gray-400"
        >
          {{ props.readTime }}
        </span>
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <h3
        class="text-lg font-semibold mb-3 group-hover:text-primary-500 transition-colors line-clamp-2"
        v-html="props.title"
      />
      <p
        class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3"
        v-html="props.description"
      />
    </UCard>
  </NuxtLink>
</template>
