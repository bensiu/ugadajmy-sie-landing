<script setup lang="ts">
interface ListOdBenefitsProps {
  id: string
  title: string
  backgroundClass?: string
  questions: {
    label: string
    content: string
  }[]
}

const props = withDefaults(
  defineProps<ListOdBenefitsProps>(),
  {
    backgroundClass: 'bg-primary-500'
  }
)

// const props = defineProps({
//   title: String,
//   items: Array // Expected: [{ question: '...', answer: '...' }]
// })

// // UAccordion expects a 'label' and 'content' (or 'slot') key by default
// const uiItems = computed(() => props.items.map(item => ({
//   label: item.question,
//   content: item.answer,
//   // icon: 'i-heroicons-information-circle' // Optional: add an icon
// })))
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
    <UContainer>
      <UAccordion
        :items="props.questions"
        variant="none"
        :ui="{
          item: 'bg-white rounded-lg shadow-sm mb-4',
          trigger: 'text-left text-lg font-semibold  px-6 hover:no-underline',
          content: 'py-2 px-6'
        }"
      />
    </UContainer>
  </BlocksSectionWrapper>
</template>
