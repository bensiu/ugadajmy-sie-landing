<script setup lang="ts">
interface ListOdBenefitsProps {
  id: string
  title: string
  backgroundClass?: string
  items: string[]
}

const props = withDefaults(
  defineProps<ListOdBenefitsProps>(),
  {
    backgroundClass: 'bg-primary-500'
  }
)
</script>

<template>
  <BlocksSectionWrapper
    :id="props.id"
    :class="props.backgroundClass"
  >
    <BlocksSectionHeader
      :title="props.title"
      :title-color="props.backgroundClass === 'bg-primary-500' ? ' ' : ''"
    />
    <BlocksListOfCards
      :items="props.items"
    />
  </BlocksSectionWrapper>
</template>
