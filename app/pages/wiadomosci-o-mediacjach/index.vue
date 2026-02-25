<script setup lang="ts">
import { page } from '~/data/wiadomosci'

interface NewsItem {
  title: string
  link?: string
  content: string
  published: string
}

if (page?.seo) {
  usePageSpecificSeoMeta(page.seo)
}

const { data, error } = await useFetch('/api/wiadomosci')
const news = ref<NewsItem[]>([])

if (error.value) {
  news.value = []
} else {
  news.value = data as unknown as NewsItem[]
}
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
      <div class="grid gap-4 xl:grid-cols-2">
        <NuxtLink
          v-for="(item, index) in (data as unknown as NewsItem[])"
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
