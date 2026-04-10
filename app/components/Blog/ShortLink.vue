<script setup lang="ts">
interface BlogShortLinkProps {
  title: string
  href: string
}

const props = defineProps<BlogShortLinkProps>()
</script>

<template>
  <NuxtLink
    :to="props.href"
    :class="[
      'group animate-fade-up block h-full',
      'inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/5',
      'border border-primary/10',
      'text-sm font-medium text-foreground',
      'hover:bg-primary/10 hover:border-primary/20 transition-all'
    ]"
  >
    <div class="flex items-center">
      <span>{{ props.title }}</span>
      <UIcon
        name="lucide-arrow-right"
        size="lg"
        class="h-5 w-5 text-primary px-3 ml-2"
      />
    </div>
  </NuxtLink>
</template>
