<script setup lang="ts">
import type { BlogPagesDetails } from '~/data/blogs'
import type { BlogItem } from '~/types'
import { pages } from '~/data/blogs'
import { enhanceServiceLink } from '~/data/gazda'

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
      :id="`skarbnica-wiedzy-${params.silos}-poczatek`"
      :titles="['Skarbnica wiedzy']"
      :bread-crumbs="[
        { label: 'Strona Główna', href: '/' },
        { label: page?.breadCrumbsLabel || '' }
      ]"
    />

    <BlocksSectionWrapper
      :id="`skarbnica-wiedzy-${params.silos}`"
    >
      <BlocksSectionHeader
        :title="page?.title || ''"
        :description="page?.description"
        class="text-center !mb-2"
      />
      <BlogRelated
        v-if="itemsData && itemsData.length !== 0"
        class="border-0"
        title=""
        :separator="false"
      >
        <BlogFullLinkCard
          v-for="item in itemsData"
          :key="`blog-${item.slug}`"
          v-bind="item"
        />
      </BlogRelated>
      <BlogRelated
        v-if="page?.services && page?.services.length !== 0"
        title="Zobacz również:"
        variant="flex"
      >
        <BlogShortLink
          v-for="item in page.services"
          :key="`service-${item}`"
          v-bind="enhanceServiceLink(item, '')"
        />
      </BlogRelated>
    </BlocksSectionWrapper>
  </div>
</template>
