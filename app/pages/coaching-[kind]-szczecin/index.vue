<script setup lang="ts">
import { pages } from '~/data/coaching/'

const { params } = useRoute()
const kind = (params['kind'] as string).replaceAll('-', '_')

if (!pages[kind]) {
  console.log('No such kind of page :', kind)
  throw createError({
    statusMessage: 'Page Not Found',
    statusCode: 404
  })
}
const page = pages[kind]
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
