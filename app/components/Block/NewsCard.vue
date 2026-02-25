<script setup lang="ts">
type NewsCardItem = {
  icon?: string
  title: string
  content: string
  published: string
  ui?: {
    title?: string
  }
}

const props = defineProps<NewsCardItem>()
const formatDate = (dateStr: string) => {
  try {
    return new Date(dateStr).toLocaleDateString('pl-PL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  } catch {
    return dateStr
  }
}
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow transition-all duration-300 group"
  >
    <!-- eslint-disable vue/no-v-html -->
    <div class="w-full mb-1 min-h-10 flex justify-between items-start">
      <div class="flex-1 min-w-0">
        <p class="text-xs text-muted-foreground mb-3">
          {{ formatDate(props.published) }}
        </p>
        <h2
          class="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2"
          v-html="props.title"
        />
        <p
          class="text-sm text-muted-foreground line-clamp-2"
          v-html="props.content"
        />
      </div>
      <UIcon
        :name="props.icon"
        class="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
      />
    </div>
  </div>
</template>
