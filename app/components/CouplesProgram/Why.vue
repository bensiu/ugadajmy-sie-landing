<script setup lang="ts">
interface Props {
  benefits?: string[]
}

// Define props with default value
const props = withDefaults(defineProps<Props>(), {
  benefits: () => []
})
</script>

<template>
  <UCard
    class="rounded-lg border text-card-foreground shadow-sm mb-16 bg-background/80 backdrop-blur animate-fade-up"
    :ui="{
      body: 'px-4 py-5 sm:p-6',
      header: 'px-4 py-5 sm:px-6'
    }"
  >
    <template #header>
      <h3 class="text-xl font-semibold text-primary">
        Dlaczego stworzyłam Program „Razem czy osobno?"
      </h3>
    </template>

    <ul class="grid sm:grid-cols-2 gap-3 text-muted-foreground">
      <li
        v-for="(item, index) in props.benefits"
        :key="index"
        class="flex items-start gap-2"
      >
        <UIcon
          name="i-lucide-file-check"
          class="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
        />
        <span>{{ item }}</span>
      </li>
    </ul>
  </UCard>
</template>
