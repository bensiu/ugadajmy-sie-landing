<script setup lang="ts">
import type { SectionVariant, FaqItem } from '~/types'

interface Question {
  label: string
  content: string
  value?: string
}

interface FequentlyAskedQuestionsProps {
  id: string
  title: string
  variant?: SectionVariant
  silos: string
  questions: Question[] | '/api/faqs/'
}

const props = withDefaults(
  defineProps<FequentlyAskedQuestionsProps>(),
  {
    variant: 'primary'
  }
)

const questionsData = ref<Question[]>([])

if (!Array.isArray(props.questions)) {
  await $fetch(`/api/faqs/?subject=${props.silos}`)
    .then((response) => {
      questionsData.value = response.map(
        (item: FaqItem) => ({
          label: item.title,
          content: item.content,
          value: item.slug
        })
      )
    })
} else {
  questionsData.value = props.questions
}

const onUpdate = (value: string | string[] | undefined) => {
  if (value && window) {
    if (window.dataLayer) {
      // window.dataLayer.push({
      //   event: 'faq-open',
      //   page_id: props.id,
      //   key: value
      // })
    }
    const item = questionsData.value.find(i => i.value === value)

    if (item && value) {
      $fetch('/api/faqs/counter', {
        method: 'POST',
        body: {
          silos: props.silos,
          slug: item.value
        }
      })
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
        :items="questionsData"
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
