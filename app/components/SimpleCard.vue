<script setup lang="ts">
interface CoachingArea {
  title: string
  description: string
  icon: string // Expected format: 'i-lucide-target' or 'i-lucide-users'
  items?: string[]
}

const props = defineProps<{
  area: CoachingArea
}>()
</script>

<template>
  <div class="p-6 rounded-xl bg-card border shadow-card transition-all duration-300 group">
    <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <UIcon
        :name="props.area.icon"
        class="h-6 w-6 text-primary"
      />
    </div>

    <h3 class="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
      {{ props.area.title }}
    </h3>

    <p class="text-sm text-muted-foreground leading-relaxed">
      {{ props.area.description }}
    </p>

    <ul
      v-if="props.area.items"
      class="space-y-2 mt-6"
    >
      <li
        v-for="item in props.area.items"
        :key="item"
        class="text-sm text-foreground flex items-center gap-2"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        {{ item }}
      </li>
    </ul>
  </div>
</template>
