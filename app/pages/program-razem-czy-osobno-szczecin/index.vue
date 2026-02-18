<script setup lang="ts">
import { page } from '~/data/terapia-dla-par/program-razem-czy-osobno'
import { interPage } from '~/data/terapia-dla-par'
import { addBreadCrumbs } from '~/data/add-bread-crumbs'

if (page?.seo) {
  usePageSpecificSeoMeta(page.seo)
}
</script>

<template>
  <PagesDetailPage
    v-bind="addBreadCrumbs(page, interPage)"
  />
</template>
