<script setup lang="ts">
import type { FaqItem } from '~/types'

const {
  itemsData, itemEditId, itemEditItem, itemLoading,
  pullItems, handleSubmitOfItem, handleEditOfItem,
  uniqueKey
} = useGazdaFormItems<FaqItem>('/api/faqs')

const _default = {
  title: '',
  content: '',
  slug: '',
  counter: 0,
  active: false
}

$fetch('/api/gazda/mewho', {
  method: 'GET',
  server: false
})
  .then(
    (value) => {
      if (!value.active) {
        navigateTo('/gazda/login')
      } else {
        console.log(value)
      }
    }
  )
  .catch(() => {
    navigateTo('/gazda/login')
  })
</script>

<template>
  <GazdaLayout
    @selected="pullItems"
  >
    <template #body="{ item }">
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
        <GazdaRecordsList
          v-else
          :items="itemsData"
          @selected="handleEditOfItem"
        />
      </div>
    </template>
  </GazdaLayout>
</template>
