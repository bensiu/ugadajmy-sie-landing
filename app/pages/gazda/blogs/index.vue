<script setup lang="ts">
import type { BlogItem } from '~/types'

const {
  itemsData, itemEditId, itemEditItem, itemLoading,
  pullItems, handleSubmitOfItem, handleEditOfItem,
  uniqueKey
} = useGazdaFormItems<BlogItem>('/api/blogs')

const _default = {
  title: '',
  content: '',
  slug: '',
  description: '',
  author: 'Aleksandra Dubiel',
  date: new Date().toISOString().slice(0, 10),
  counter: 0,
  active: false
}
</script>

<template>
  <GazdaLayout
    @selected="pullItems"
  >
    <template #body="{ item }">
      <GazdaFormsTitle
        title="BLOGs"
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
        <GazdaFormsBlog
          v-if="itemEditItem || itemEditId"
          v-bind="(itemEditItem as BlogItem)"
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
