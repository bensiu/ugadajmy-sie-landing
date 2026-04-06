<script setup lang="ts">
import { marked } from 'marked'
import type { BlogItem } from '~/types'

const { params } = useRoute()
const props = {
  id: 'blog',
  title: ['Skarbnica wiedzy'],
  breadCrumbs: [
    {
      label: 'Blog'
    }
  ]
}

const blog = ref<BlogItem | null>(null)

await $fetch(`/api/blogs/${params.silos}/${params.slug}`)
  .then((response) => {
    blog.value = response as unknown as BlogItem
  })
</script>

<template>
  <div class="min-h-screen">
    <HeroBox2
      :id="`${props.id}-poczatek`"
      :titles="props.title"
      :bread-crumbs="props.breadCrumbs"
    />
    <BlocksSectionWrapper
      v-if="blog?.content"
      :id="`czym-sa-${props.id}`"
    >
      <!-- eslint-disable vue/no-v-html -->
      <BlogHeader
        v-if="blog"
        v-bind="blog"
      />
      <USeparator
        class="mb-8 h-px"
        type="dashed"
      />
      <div
        class="markdown-article-body prose dark:prose-invert max-w-none"
        v-html="marked.parse(blog?.content || '')"
      />
      <!-- eslint-disable vue/max-attributes-per-line -->
      <!-- <DataDebugView label="params" :data="params" /> -->
      <!-- <DataDebugView label="blog" :data="blog" /> -->
    </BlocksSectionWrapper>
  </div>
</template>
