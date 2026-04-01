<script setup lang="ts">
import type { FaqItem } from '~/types'
import { page } from '~/data/gazda'

// if (page?.seo) {
//   usePageSpecificSeoMeta(page.seo)
// }

setTimeout(async () => {
  $fetch('/api/auth/', {
    method: 'POST',
    server: false
  })
}, 10 * 1000)

const {
  itemsData, itemEditId, itemEditItem, itemLoading,
  pullItems, handleSubmitOfItem, handleEditOfItem,
  uniqueKey
} = useGazdaFormItems<FaqItem>('/api/faqs')

const _default = {
  counter: 0,
  label: '',
  content: '',
  slug: '',
  active: false
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
          @update:model-value="pullItems"
        >
          <template #content="{ item }">
            <GazdaFormsTitle
              title="FAQs"
              :is-editing="itemEditId"
              @add="itemEditId = item.key; itemEditItem = { ..._default, silos: item.key }"
              @cancel="itemEditId = null; itemEditItem = null"
            />
            <GazdaFormsSkeleton
              v-if="itemLoading"
              :up-to-number="7"
            />
            <div
              v-else
            >
              <GazdaFormsFaq
                v-if="itemEditItem || itemEditId"
                v-bind="(itemEditItem as FaqItem)"
                :unique-key="uniqueKey"
                :silos="itemEditItem?.silos || (itemEditId as string)"
                @submited="handleSubmitOfItem"
              />
              <div
                v-else-if="itemsData.length === 0"
              >
                <p>
                  Nie ma !
                </p>
              </div>
              <UPageList v-else>
                <UPageCard
                  v-for="(iData, index) in itemsData"
                  :key="index"
                  variant="outline"
                  :class="[
                    'mb-2 hover:bg-gray-100 hover:shadow-md cursor-pointer',
                    iData.active ? '' : 'bg-red-100 hover:bg-red-200'
                  ]"
                  @click="handleEditOfItem(iData)"
                >
                  <template #body>
                    <!-- eslint-disable vue/no-v-html -->
                    <h4
                      class="font-semibold text-xl"
                      v-html="iData?.label"
                    />
                  </template>
                </UPageCard>
              </UPageList>
            </div>
            <!-- <pre>{{ JSON.stringify(faqsData, null, 2) }}</pre> -->
            <!-- <pre>{{ JSON.stringify(item, null, 2) }}</pre> -->
            <!-- <pre>uniqueKey: {{ uniqueKey }}</pre> -->
            <!-- <pre>faqEditItem: {{ faqEditItem }}</pre> -->
            <!-- <pre>faqEditId: {{ faqEditId }}</pre> -->
          </template>
        </UTabs>
      </template>
    </UTabs>
  </div>
</template>
