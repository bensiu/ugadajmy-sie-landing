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
          :to="service.path"
        >
          <BlocksFeatureCard
            v-bind="service"
            class="h-full flex flex-col items-center text-left"
            link="Zobacz szczegóły"
          />
        </NuxtLink>
      </div>
    </BlocksSectionWrapper>

    <SectionsAboutMe />

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

    <!-- <SectionsHowICanHelp /> -->
    <!-- <SectionsCouplesProgram>
      <BlockButtonLink
        href="/program-dla-par"
        label="Więcej o programie"
      />
    </SectionsCouplesProgram> -->
    <!-- <SectionsHowIHelp />
    <TheMediation />
    <TheCoaching />
    <SectionsTheTrainings />
    <FinalCallToAction />
    <ContactMe /> -->
  </div>
</template>
