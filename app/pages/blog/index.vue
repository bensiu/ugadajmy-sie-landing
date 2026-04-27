<script setup lang="ts">
import type { BlogItem } from '~/types'
import { pages } from '~/data/blogs'

const {
  itemsData, pullItems
} = useGazdaFormItems<BlogItem>('/api/blogs')

const filter = (silos: string) => (item: BlogItem) => item.active && item.silos.includes(silos)
const siloses: string[] = [
  'mediacje', 'terapia-dla-par', 'coaching'
]

await pullItems('', true)
</script>

<template>
  <div class="min-h-screen">
    <HeroBox2
      :id="`blog-wszystkie-poczatek`"
      :titles="['Skarbnica wiedzy']"
      :bread-crumbs="[
        { label: 'Strona Główna', href: '/' },
        { label: 'Blog' }
      ]"
    />

    <PagesBlogsList
      v-for="(silos, index) in siloses"
      :key="silos"
      :silos="(silos as string)"
      :page="(pages[silos] as {
        id: string
        title: string
        description: string
        parent?: string | undefined
        breadCrumbsLabel: string
        services: string[]
      })"
      :items="itemsData.filter(filter(silos)).slice(0, 9)"
      :variant="index % 2 ? 'default' : 'subtle'"
    />
  </div>
</template>
