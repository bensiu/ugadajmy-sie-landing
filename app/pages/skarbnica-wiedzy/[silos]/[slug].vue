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

let counterTimer: ReturnType<typeof setTimeout> | null = null
const routeKey = computed(() => `${params.silos}/${params.slug}`)

const triggerCounterApiCall = async (silos: string, slug: string) => {
  await $fetch('/api/blogs/counter', {
    method: 'POST',
    body: { silos, slug }
  })
}

watch(
  routeKey,
  () => {
    const { silos, slug } = params

    if (counterTimer) clearTimeout(counterTimer)
    if (silos && slug) {
      counterTimer = setTimeout(() => {
        triggerCounterApiCall(silos as string, slug as string)
      }, 10000)
    }
  },
  { immediate: true }
)
onBeforeUnmount(() => {
  if (counterTimer) clearTimeout(counterTimer)
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
      :id="`czym-sa-${props.id}`"
    >
      <!-- eslint-disable vue/no-v-html -->
      <BlogHeader
        v-if="data"
        v-bind="data"
      />
      <USeparator
        class="mb-8"
        size="md"
        type="solid"
      />
      <div
        class="markdown-article-body prose dark:prose-invert max-w-none"
        v-html="marked.parse(convertBenkarty(data?.content || ''))"
      />

      <p class="mt-8">
        <em>
          <strong>Aleksandra Dubiel</strong> -&nbsp;mediator,&nbsp;terapeuta&nbsp;par,&nbsp;coach. <strong>Ugadajmysie.pl</strong>&nbsp;–&nbsp;Szczecin&nbsp;i&nbsp;online.
        </em>
      </p>
      <hr class="my-8">
      <BlockCallToActionLinks :id="`${props.id}-${data?.slug}`" />

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
