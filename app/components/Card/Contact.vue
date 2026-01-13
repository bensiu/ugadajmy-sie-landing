<script setup lang="ts">
interface InfoItem {
  label: string
  value: string
  icon: string // e.g., 'i-lucide-phone'
  href?: string
}

defineProps<{
  item: InfoItem
}>()
</script>

<template>
  <div class="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
    <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
      <UIcon
        :name="item.icon"
        class="h-5 w-5 text-primary"
      />
    </div>

    <div>
      <p class="text-sm text-muted-foreground">
        {{ item.label }}
      </p>

      <ULink
        v-if="item.href"
        :to="item.href"
        class="font-medium text-foreground hover:text-primary transition-colors"
      >
        {{ item.value }}
      </ULink>
      <p
        v-else
        class="font-medium text-foreground"
      >
        {{ item.value }}
      </p>
    </div>
  </div>
</template>
