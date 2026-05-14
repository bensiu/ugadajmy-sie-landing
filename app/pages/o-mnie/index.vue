<script setup lang="ts">
import { aboutMe } from '~/data/about-me'

if (aboutMe?.seo) {
  usePageSpecificSeoMeta(aboutMe.seo)
}
</script>

<template>
  <div class="min-h-screen">
    <HeroBox2
      id="home"
      :titles="aboutMe.title"
      top-badges="Mediator · Prawnik · Coach"
      :description="aboutMe.description"
      :stats="[
        { value: '100+', label: 'zakończonych mediacji' },
        { value: '15+', label: 'lat doświadczenia' },
        { value: '100%', label: 'poufność' }
      ]"
    />

    <BlocksSectionWrapper
      v-if="aboutMe.aboutMe"
      id="kim-jestem-Aleksandra-Dubiel"
      :variant="aboutMe.aboutMe.variant || 'default'"
      style="scroll-margin-top: 32px;"
    >
      <div class="grid md:grid-cols-12 gap-8">
        <PagesAboutMePhoto class="relative md:col-span-5" />
        <PagesAboutMeDescription
          v-bind="aboutMe.aboutMe"
          class="md:col-span-7"
        />
      </div>
    </BlocksSectionWrapper>

    <BlocksSectionWrapper
      v-if="aboutMe.contact"
      :id="`kontakt-${aboutMe.id}`"
      :variant="aboutMe.contact.variant || 'subtle'"
      style="scroll-margin-top: 32px;"
    >
      <BlocksSectionHeader
        :title="aboutMe.contact.title"
        :description="aboutMe.contact.description"
        :lead="aboutMe.contact.lead"
        title-color=" "
      />
      <PagesContactSection v-bind="aboutMe.contact" />
    </BlocksSectionWrapper>
  </div>
</template>
