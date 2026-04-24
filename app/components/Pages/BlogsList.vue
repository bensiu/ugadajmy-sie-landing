<script setup lang="ts">
// import type { BlogPagesDetails } from '~/data/blogs'
import type { BlogItem, SectionVariant } from '~/types'
import { enhanceServiceLink } from '~/data/gazda'

const props = defineProps<{
  silos: string
  page: {
    id: string
    title: string
    description: string
    parent?: string | undefined
    breadCrumbsLabel: string
    services: string[]
  }
  items: BlogItem[]
  variant: SectionVariant
}>()
</script>

<template>
  <BlocksSectionWrapper
    :id="`blog-${props.silos}`"
    :variant="props.variant"
  >
    <BlocksSectionHeader
      :title="page?.title || ''"
      :description="props.page?.description"
      class="text-center !mb-2"
    />
    <BlogRelated
      v-if="props.items && props.items.length !== 0"
      class="border-0"
      title=""
      :separator="false"
    >
      <BlogFullLinkCard
        v-for="item in props.items"
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
</template>
