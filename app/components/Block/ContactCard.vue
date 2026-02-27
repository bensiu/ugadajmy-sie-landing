<script setup lang="ts">
interface InfoItem {
  title: string
  description: string
  icon: string // e.g., 'i-lucide-phone'
  path?: string
}

defineProps<{
  item: InfoItem
}>()
</script>

<template>
  <div
    class="flex items-center gap-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow transition-all duration-300 group"
  >
    <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
      <UIcon
        :name="item.icon"
        class="h-5 w-5 text-primary"
      />
    </div>

    <div>
      <p class="text-sm text-muted-foreground">
        {{ item.title }}
      </p>

      <ULink
        v-if="item.path"
        :to="item.path"
        class="font-medium text-foreground hover:text-primary transition-colors"
      >
        {{ item.description }}
      </ULink>
      <p
        v-else
        class="font-medium text-foreground"
      >
        {{ item.description }}
      </p>
    </div>
  </div>
</template>
