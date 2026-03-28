<script setup lang="ts">
import type { FaqItem } from '~/types'
import { page } from '~/data/gazda'

// if (page?.seo) {
//   usePageSpecificSeoMeta(page.seo)
// }

// FAQs ========================================================
const faqsData = ref<FaqItem[]>([])
const uniqueKey = ref<number>(0)
const faqEditId = ref<string | null>(null)
const faqEditItem = ref<FaqItem | null>(null)

const pullFaqs = async (value: string | number) => {
  // console.log('pullFaqs : ', value)

  await $fetch('/api/faqs', { query: { subject: value } })
    .then((response) => {
      faqsData.value = response || []
    })

  faqEditItem.value = null
  faqEditId.value = null
  uniqueKey.value++
}
const handleSubmitOfFaq = (submitted: boolean, silosId: string) => {
  if (submitted) {
    faqEditItem.value = null
    faqEditId.value = null
    uniqueKey.value++
    pullFaqs(silosId)
  }
}
const handleEditOfFaq = (item: FaqItem) => {
  faqEditItem.value = item
  faqEditId.value = item.silos
  uniqueKey.value++
}
</script>

<template>
  <div class="min-h-screen mt-18 p-3 max-w-(--ui-container) mx-auto">
    <UTabs
      :items="page.sections"
      class="w-full"
    >
      <template #content="{ item: titleItem }">
        <UTabs
          :items="titleItem.items"
          class="mt-1 px-1"
          orientation="vertical"
          :ui="{
            root: 'gap-4 items-start',
            list: 'gap-1 items-start'
          }"
          value-key="key"
          @update:model-value="pullFaqs"
        >
          <template #content="{ item }">
            <h2 class="flex justify-between w-full text-3xl font-semibold p-1 pb-2 border-b-2 mb-2">
              FAQs
              <UButton
                v-if="faqEditId === null"
                class="align-end bg-primary"
                size="xl"
                :disabled="faqEditId !== null"
                @click="faqEditId = item.key"
              >
                <UIcon
                  name="lucide-plus"
                  size="xl"
                />
              </UButton>
              <UButton
                v-else
                class="align-end bg-secondary hover:bg-secondary/80"
                size="xl"
                @click="faqEditItem = null; faqEditId = null"
              >
                <UIcon
                  name="lucide-x"
                  size="xl"
                />
              </UButton>
            </h2>
            <GazdaFormsFaq
              v-if="faqEditItem || faqEditId"
              v-bind="(faqEditItem as FaqItem)"
              :unique-key="uniqueKey"
              :silos="faqEditItem?.silos || (faqEditId as string)"
              @submited="handleSubmitOfFaq"
            />
            <UPageList v-else>
              <UPageCard
                v-for="(faqData, index) in faqsData"
                :key="index"
                variant="outline"
                class="mb-2 hover:bg-gray-100 hover:shadow-md cursor-pointer"
                @click="handleEditOfFaq(faqData)"
              >
                <template #body>
                  <!-- eslint-disable vue/no-v-html -->
                  <h4
                    class="font-semibold text-xl"
                    v-html="faqData?.label"
                  />
                </template>
              </UPageCard>
            </UPageList>
            <!-- <pre>{{ JSON.stringify(faqsData, null, 2) }}</pre> -->
            <!-- <pre>{{ JSON.stringify(item, null, 2) }}</pre> -->
            <pre>uniqueKey: {{ uniqueKey }}</pre>
            <!-- <pre>faqEditItem: {{ faqEditItem }}</pre> -->
            <pre>faqEditId: {{ faqEditId }}</pre>
          </template>
        </UTabs>
      </template>
    </UTabs>
  </div>
</template>
