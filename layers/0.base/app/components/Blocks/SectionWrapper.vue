<script lang="ts" setup>
interface SectionWrapperProps {
  id: string
  containerClass?: string
}

const props = defineProps<SectionWrapperProps>()
</script>

<template>
  <UPageSection
    :id="props.id"
    :ui="{
      container: `page-container py-8 sm:py-12 lg:py-16 ${props.containerClass || ''} `
    }"
  >
    <div class="page-container">
      <slot />
    </div>
  </UPageSection>
</template>
