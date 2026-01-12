<script setup lang="ts">
interface Props {
  features?: string[]
}

// Define props with default value
const props = withDefaults(defineProps<Props>(), {
  features: () => []
})
</script>

<template>
  <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
    <span class="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
      Program dla par
    </span>

    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
      „Razem czy osobno?"
    </h2>

    <p class="text-lg text-muted-foreground mb-6">
      Program zbudowany na strukturze mediacji, który przywraca komunikację w relacji,
      pozwala dostrzec różne role w związku i uświadamia potrzeby emocjonalne partnerów.
    </p>

    <div class="flex flex-wrap justify-center gap-3">
      <span
        v-for="feature in props.features"
        :key="feature"
        class="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium"
      >
        {{ feature }}
      </span>
    </div>
  </div>
</template>
