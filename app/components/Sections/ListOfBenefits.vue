<script setup lang="ts">
import type { SectionVariant } from '~/types'

interface ListOdBenefitsProps {
  id: string
  title: string
  variant?: SectionVariant
  items: string[]
}

const props = withDefaults(
  defineProps<ListOdBenefitsProps>(),
  {
    variant: 'primary'
  }
)
</script>

<template>
  <BlocksSectionWrapper
    :id="props.id"
    :variant="props.variant"
  >
    <BlocksSectionHeader
      :title="props.title"
      :title-color="props.variant === 'primary' ? ' ' : ''"
    />
    <BlocksListOfCards
      :items="props.items"
    />
  </BlocksSectionWrapper>
</template>
