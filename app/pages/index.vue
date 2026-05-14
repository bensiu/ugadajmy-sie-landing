<script setup lang="ts">
import { page } from '~/data/general'

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
      :stats="[
        { value: '100+', label: 'zakończonych mediacji' },
        { value: '15+', label: 'lat doświadczenia' },
        { value: '100%', label: 'poufność' }
      ]"
    />

    <BlocksSectionWrapper
      v-if="page.kinds"
      :id="`rodzaje-${page.id}`"
      :variant="page.kinds.variant || 'subtle'"
    >
      <BlocksSectionHeader
        :title="page.kinds.title"
        :description="page.kinds.description"
        :lead="page.kinds.lead"
        title-color=" "
      />
      <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <NuxtLink
          v-for="(service, index) in page.kinds.items"
          :key="`service-${index}`"
          :to="service.link"
        >
          <BlocksFeatureCard
            v-bind="service"
            class="h-full flex flex-col items-center text-left"
            link-title="Zobacz szczegóły"
          />
        </NuxtLink>
      </div>
    </BlocksSectionWrapper>

    <BlocksSectionWrapper
      v-if="page.aboutMe"
      id="kim-jestem-Aleksandra-Dubiel"
      :variant="page.aboutMe.variant || 'default'"
      style="scroll-margin-top: 32px;"
    >
      <div class="grid md:grid-cols-12 gap-8">
        <PagesAboutMePhoto class="relative md:col-span-5" />
        <PagesAboutMeDescription
          v-bind="page.aboutMe"
          class="md:col-span-7"
        />
      </div>
    </BlocksSectionWrapper>

    <BlocksSectionWrapper
      v-if="page.whyMe"
      :id="`dlaczego-${page.id}`"
      :variant="page.whyMe.variant || 'subtle'"
    >
      <BlocksSectionHeader
        :title="page.whyMe.title"
        :description="page.whyMe.description"
        :lead="page.whyMe.lead"
        title-color=" "
      />
      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <BlocksFeatureCard
          v-for="(service, index) in page.whyMe.items"
          :key="`powod-${index}`"
          v-bind="service"
          class="h-full flex flex-col items-center text-left"
        />
      </div>
    </BlocksSectionWrapper>

    <SectionsCallToAction
      v-if="page.callToAction"
      :id="`${page.id}-call-to-action`"
      v-bind="page.callToAction"
    />

    <BlocksSectionWrapper
      v-if="page.contact"
      :id="`kontakt-${page.id}`"
      :variant="page.contact.variant || 'subtle'"
      style="scroll-margin-top: 32px;"
    >
      <BlocksSectionHeader
        :title="page.contact.title"
        :description="page.contact.description"
        :lead="page.contact.lead"
        title-color=" "
      />
      <PagesContactSection v-bind="page.contact" />
    </BlocksSectionWrapper>
  </div>
</template>
