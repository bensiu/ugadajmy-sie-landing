<script setup lang="ts">
import { page } from '~/data/szkolenia/general'
import { addBreadCrumbs } from '~/data/add-bread-crumbs'

if (page?.seo) {
  usePageSpecificSeoMeta(page.seo)
}
</script>

<template>
  <PagesDetailPage
    v-bind="addBreadCrumbs(page)"
  />
</template>
