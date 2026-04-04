<script setup lang="ts">
import type { ListOfBlogsProps } from '~/types'

const props = defineProps<ListOfBlogsProps & { id: string }>()
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
        v-for="item in props.items"
        :key="`blog-${item.slug}`"
        v-bind="item"
      />
    </div>
  </BlocksSectionWrapper>
</template>
