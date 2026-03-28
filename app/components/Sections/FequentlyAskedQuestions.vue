<script setup lang="ts">
import type { SectionVariant } from '~/types'

interface ListOdBenefitsProps {
  id: string
  title: string
  variant?: SectionVariant
  questions: {
    label: string
    content: string
  }[]
}

const props = withDefaults(
  defineProps<ListOdBenefitsProps>(),
  {
    variant: 'primary'
  }
)

const onUpdate = (value: string | string[] | undefined) => {
  if (value && window) {
    if (window.dataLayer) {
      // window.dataLayer.push({
      //   event: 'faq-open',
      //   page_id: props.id,
      //   key: value
      // })
    }
  }
}
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
    <UContainer>
      <UAccordion
        :items="props.questions"
        variant="none"
        :ui="{
          item: 'bg-white rounded-lg shadow-sm mb-4',
          trigger: 'text-left text-lg font-semibold  px-6 hover:no-underline',
          content: 'py-2 px-6'
        }"
        @update:model-value="onUpdate"
      >
        <template #body="{ item }">
          <!-- eslint-disable vue/no-v-html -->
          <span v-html="item.content" />
        </template>
      </UAccordion>
    </UContainer>
  </BlocksSectionWrapper>
</template>
