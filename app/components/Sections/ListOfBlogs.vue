<script setup lang="ts">
import type { ListOfBlogsProps, BlogItemMinimal } from '~/types'

const props = defineProps<ListOfBlogsProps & { id: string, silos: string }>()
const blogsData = ref<BlogItemMinimal[]>([])

if (!Array.isArray(props.articles)) {
  await $fetch(`/api/blogs/?subject=${props.silos}`)
    .then((response) => {
      blogsData.value = response.map(
        (item: BlogItemMinimal) => ({
          silos: item.silos,
          title: item.title,
          description: item.description,
          slug: item.slug,
          readTime: item.readTime,
          counter: item.counter,
          active: item.active
        })
      )
    })
} else {
  blogsData.value = props.articles
}
</script>

<template>
  <BlocksSectionWrapper
    :id="`opcje-${props.id}`"
    :variant="props.variant || 'subtle'"
  >
    <BlocksSectionHeader
      :title="props.title"
      :description="props.description"
      lead="Skarbnica Wiedzy"
      class="!mb-8"
      title-color=" "
    />
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <BlogFullLinkCard
        v-for="item in blogsData"
        :key="`blog-${item.slug}`"
        v-bind="item"
      />
    </div>
  </BlocksSectionWrapper>
</template>
