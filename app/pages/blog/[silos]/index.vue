<script setup lang="ts">
import type { BlogPagesDetails } from '~/data/blogs'
import type { BlogItem } from '~/types'
import { pages } from '~/data/blogs'

const { params } = useRoute()
const page = ref<BlogPagesDetails | null>(pages[params.silos as string] || null)
const {
  itemsData, pullItems
} = useGazdaFormItems<BlogItem>('/api/blogs')

await pullItems(params.silos as string, false)
</script>

<template>
  <div class="min-h-screen">
    <HeroBox2
      :id="`blog-${params.silos}-poczatek`"
      :titles="['Skarbnica wiedzy']"
      :bread-crumbs="[
        { label: 'Strona Główna', href: '/' },
        { label: page?.breadCrumbsLabel || '' }
      ]"
    />

    <PagesBlogsList
      :silos="(params.silos as string)"
      :page="(page as {
        id: string
        title: string
        description: string
        parent?: string | undefined
        breadCrumbsLabel: string
        services: string[]
      })"
      :items="itemsData"
      variant="default"
    />
  </div>
</template>
