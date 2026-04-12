<script setup lang="ts">
import { flattenSections } from '~/data/gazda'
import { marked } from 'marked'

const { params, path } = useRoute()
const props = {
  id: 'blog',
  title: ['Skarbnica wiedzy'],
  breadCrumbs: [
    {
      label: 'Blog'
    }
  ]
}

const { data } = await useFetch(`/api/blogs/${params.silos}/${params.slug}`)

if (data?.value?.seo) {
  const seo = {
    ...data?.value?.seo,
    title: data?.value?.title.replaceAll('&nbsp;', ' '),
    author: data?.value?.author
  }
  usePageSpecificSeoMeta(seo, path)
}

const enhanceServiceLink = (key: string, url: string) => {
  const link = flattenSections.find(item => item.key === key)

  return {
    ...link,
    href: `/${url}${link?.key}-szczecin`,
    title: link?.label || ''
  }
}

const convertBenkarty = useContentModifier()
</script>

<template>
  <div class="min-h-screen">
    <HeroBox2
      :id="`${props.id}-poczatek`"
      :titles="props.title"
      :bread-crumbs="props.breadCrumbs"
    />
    <BlocksSectionWrapper
      :id="`czym-sa-${props.id}`"
    >
      <!-- eslint-disable vue/no-v-html -->
      <BlogHeader
        v-if="data"
        v-bind="data"
      />
      <USeparator
        class="mb-8 h-px"
        type="dashed"
      />
      <div
        class="markdown-article-body prose dark:prose-invert max-w-none"
        v-html="marked.parse(convertBenkarty(data?.content || ''))"
      />
      <!-- eslint-disable vue/max-attributes-per-line -->
      <!-- <DataDebugView label="params" :data="params" /> -->
      <!-- <DataDebugView label="blog" :data="blog" /> -->
      <BlogRelated
        v-if="data?.relatedItems && data?.relatedItems.length !== 0"
        title="Przeczytaj również:"
      >
        <BlogFullLinkCard
          v-for="item in data.relatedItems"
          :key="`blog-${item.slug}`"
          v-bind="item"
        />
      </BlogRelated>
      <BlogRelated
        v-if="data?.services && data?.services.length !== 0"
        title="Zobacz również:"
        variant="flex"
      >
        <BlogShortLink
          v-for="item in data.services"
          :key="`service-${item}`"
          v-bind="enhanceServiceLink(item, '')"
        />
      </BlogRelated>
    </BlocksSectionWrapper>
  </div>
</template>
