<script setup lang="ts">
interface Step {
  title: string
  description: string
  icon: string // Format: 'i-lucide-users'
  price: string
  duration: string
}

const props = defineProps<{
  step: Step
}>()
</script>

<template>
  <UCard
    class="bg-background border hover:shadow-lg transition-shadow shadow-sm mb-16 bg-background/80 backdrop-blur animate-fade-up"
    :ui="{
      body: 'px-4 py-5 sm:p-6',
      header: 'px-4 py-5 sm:px-6 border-none'
    }"
  >
    <template #header>
      <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <UIcon
          :name="props.step.icon"
          class="w-6 h-6 text-primary"
        />
      </div>
      <h3 class="text-lg font-bold leading-tight">
        {{ props.step.title }}
      </h3>
    </template>

    <p
      class="text-muted-foreground text-sm mb-4"
      v-html="props.step.description"
    />

    <div class="flex justify-between text-sm border-t border-gray-200 dark:border-gray-800 pt-4">
      <span class="font-semibold text-primary">{{ props.step.price }}</span>
      <span class="text-muted-foreground">{{ props.step.duration }}</span>
    </div>
  </UCard>
</template>
