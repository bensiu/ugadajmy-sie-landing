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

    <!-- <SectionsAboutMe /> -->

    <BlocksSectionWrapper
      v-if="page.aboutMe"
      :id="`dlaczego-${page.id}`"
      :variant="page.aboutMe.variant || 'default'"
    >
      <div class="grid md:grid-cols-12 gap-8">
        <div class="relative animate-fade-up md:col-span-5">
          <div class="relative">
            <div>
              <img
                src="/images/Aleksandra_Dubiel_zdjecie_glowne.JPG"
                alt="Aleksandra Dubiel - Mediator, Prawnik, Coach"
                class="w-full aspect-[4/5] object-cover rounded-4xl shadow-lg shadow-elevated p-3 border-1"
              >
              <div class="absolute -bottom-4 -right-2 px-8 py-6 rounded-xl shadow-lg text-primary bg-white border-2">
                <p class="font-display font-bold text-2xl">
                  15+
                </p>
                <p class="text-sm font-medium">
                  lat doświadczenia
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="animate-fade-up delay-200  md:col-span-7">
          <BlocksSectionHeader
            :title="page.aboutMe.title"
            :description="page.aboutMe.description"
            :lead="page.aboutMe.lead"
            title-color=" "
            class="text-left !mb-8"
            :ui="{
              description: '!text-base'
            }"
          />

          <div class="grid sm:grid-cols-2 gap-4">
            <BlockIndexCard
              v-for="item in page.aboutMe.items"
              :key="item.title"
              v-bind="item"
              class="section-subtle bg-secondary/30"
              :ui="{
                title: '!min-h-8'
              }"
            />
          </div>
        </div>
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
