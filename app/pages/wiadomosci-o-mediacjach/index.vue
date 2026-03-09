<script setup lang="ts">
import type { NewsItem } from '~/types'
import { page } from '~/data/wiadomosci'

if (page?.seo) {
  usePageSpecificSeoMeta(page.seo)
}

const items = ref<NewsItem[]>([])

await useFetch('/api/wiadomosci')
  .then(response => ({
    ...response,
    data: response.data.value as unknown as NewsItem[]
  }))
  .then((response) => {
    items.value = response.data

    return response
  })
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

      <NuxtLink to="/wiadomosci-o-mediacjach/gazda">
        <USeparator
          class="mb-8 h-px"
          type="dashed"
          icon="i-lucide-briefcase-business"
        />
      </NuxtLink>

      <div class="grid gap-4 xl:grid-cols-2">
        <NuxtLink
          v-for="(item, index) in items"
          :key="`news-${index}`"
          :to="item.link"
          target="_blank"
        >
          <BlockNewsCard
            icon="lucide-external-link"
            v-bind="item"
          />
        </NuxtLink>
      </div>
    </BlocksSectionWrapper>
  </div>
</template>
