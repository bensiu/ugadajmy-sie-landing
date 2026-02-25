<script setup lang="ts">
import { page } from '~/data/wiadomosci'

if (page?.seo) {
  usePageSpecificSeoMeta(page.seo)
}
</script>

<template>
  <div class="min-h-screen">
    <HeroBox2
      id="home"
      :titles="page.title"
      top-badges="Mediator · Prawnik · Coach"
      :description="page.description"
    />

    <BlocksSectionWrapper
      v-if="page.news"
      :id="`lista-${page.id}`"
      :variant="page.news.variant || 'subtle'"
    >
      <BlocksSectionHeader
        :title="page.news.title"
        :description="page.news.description"
        :lead="page.news.lead"
        title-color=" "
      />
      <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <NuxtLink
          v-for="(service, index) in page.news.items"
          :key="`service-${index}`"
          :to="service.path"
          target="_blank"
        >
          <BlocksFeatureCard
            v-bind="service"
            class="h-full flex flex-col items-center text-left"
            link="Zobacz szczegóły"
          />
        </NuxtLink>
      </div>
    </BlocksSectionWrapper>
  </div>
</template>
