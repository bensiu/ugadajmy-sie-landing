<script setup lang="ts">
import type { NewsItem } from '~/types'
import { page } from '~/data/wiadomosci'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { FetchError } from 'ofetch'

if (page?.seo) {
  usePageSpecificSeoMeta(page.seo)
}

useSeoMeta({
  robots: 'noindex, follow'
})

const items = ref<NewsItem[]>([])

await useFetch('/api/wiadomosci?all=true')
  .then(response => ({
    ...response,
    data: response.data.value as unknown as NewsItem[]
  }))
  .then((response) => {
    items.value = response.data

    return response
  })

const onApprove = async (newsItem: NewsItem) => {
  console.log('newsItem : ', { id: newsItem.id, approved: newsItem.approved })
  try {
    const response = await $fetch('/api/wiadomosci/approval', {
      method: 'POST',
      body: { id: newsItem.id, approved: newsItem.approved }
    })

    console.log('Server response : ', response)
    console.log('items : ', items)

    const index = items.value.findIndex(item => item.id === newsItem.id)
    items.value[index] = response
  } catch (error: FetchError | unknown) {
    // 4. Handle Error
    console.error(error)
  }
}

const filter = (i: NewsItem, v: string) => {
  if (v === 'newItems') return i.approved === undefined
  if (v === 'approved') return i.approved === true
  if (v === 'denied') return i.approved === false

  return true
}

const summary = computed(() => ({
  newItems: items.value.filter(i => filter(i, 'newItems')).length,
  approved: items.value.filter(i => filter(i, 'approved')).length,
  denied: items.value.filter(i => filter(i, 'denied')).length,
  all: items.value.length
}))
const filtered = ref<string>('all')
const options = computed(() => ([
  {
    value: 'all',
    label: `Wszystkie wiadomości (${summary.value.all})`
  },
  {
    value: 'approved',
    label: `Zatwierdzone wiadomości (${summary.value.approved})`
  },
  {
    value: 'denied',
    label: `Do usinięcia wiadomości (${summary.value.denied})`
  },
  {
    value: 'newItems',
    label: `Nowe wiadomości (${summary.value.newItems})`
  }
]))
</script>

<template>
  <div class="min-h-screen">
    <HeroBox2
      id="home"
      :titles="page.title"
      top-badges="Mediator · Prawnik · Coach"
      :description="page.description"
    />

    <BlocksSectionWrapper
      v-if="page.news"
      :id="`lista-${page.id}`"
      :variant="page.news.variant || 'subtle'"
    >
      <BlocksSectionHeader
        :title="page.news.title"
        :description="page.news.description"
        :lead="page.news.lead"
        title-color=" "
      />

      <NuxtLink to="/wiadomosci-o-mediacjach">
        <USeparator
          class="mb-8 h-px"
          type="dashed"
          icon="i-lucide-briefcase-business"
        />
      </NuxtLink>

      <URadioGroup
        v-model="filtered"
        legend="Filtruj wg statusu"
        :items="options"
        :ui="{
          fieldset: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4',
          legend: 'font-lg, pb-3'
        }"
        class="p-2 mb-5"
      />
      <div class="grid gap-4 xl:grid-cols-2">
        <BlockNewsCard
          v-for="(item, index) in items.filter(i => filter(i, filtered))"
          :key="`news-${index}`"
          icon="lucide-external-link"
          v-bind="item"
          :to-edit="true"
          :approved="item.approved || (item.approved === false ? false : undefined)"
          @approve="onApprove"
        />
      </div>
    </BlocksSectionWrapper>
  </div>
</template>
