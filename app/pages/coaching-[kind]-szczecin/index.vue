<script setup lang="ts">
import { pages } from '~/data/coaching/'

const page = usePageDataHandling(pages)
</script>

<template>
  <PagesDetailPage
    v-if="page"
    v-bind="page"
  />
  <div
    v-else
    class="min-h-screen"
  >
    <BlocksSectionWrapper
      id="404"
    >
      <BlocksSectionHeader
        title="props.whatIsIt.title"
        description="props.whatIsIt.description.join('<br><br>')"
        class="text-left !mb-2"
      />
    </BlocksSectionWrapper>
  </div>
</template>
