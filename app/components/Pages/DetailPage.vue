<script setup lang="ts">
import type { DetailPageProps } from '~/types'

const props = defineProps<DetailPageProps>()
</script>

<template>
  <div class="min-h-screen">
    <HeroBox2
      :id="`${props.id}-poczatek`"
      :titles="props.title"
      :description="props.description"
    />

    <BlocksSectionWrapper
      v-if="props.whatIsIt"
      :id="`czym-sa-${props.id}`"
    >
      <BlocksSectionHeader
        :title="props.whatIsIt.title"
        :description="props.whatIsIt.description.join('<br><br>')"
        class="text-left !mb-2"
      />
    </BlocksSectionWrapper>

    <BlocksSectionWrapper
      v-if="props.kinds"
      :id="`rodzaje-${props.id}`"
      class="section-subtle bg-secondary/30"
    >
      <BlocksSectionHeader
        :title="props.kinds.title"
        :description="props.kinds.description"
        title-color=" "
      />
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <NuxtLink
          v-for="(service, index) in props.kinds.items"
          :key="`service-${index}`"
          :to="service.path"
        >
          <BlocksFeatureCard
            v-bind="service"
            class="h-full flex flex-col items-center text-center"
          />
        </NuxtLink>
      </div>
    </BlocksSectionWrapper>

    <BlocksSectionWrapper
      :id="`kiedy-skorzystac-z-${props.id}`"
      class="section-subtle bg-secondary/30"
    >
      <BlocksSectionHeader
        v-if="props.whenToUse"
        :title="props.whenToUse?.title"
        :items="props.whenToUse.situations"
        class="text-left !mb-2"
      />
    </BlocksSectionWrapper>

    <BlocksSectionWrapper
      v-if="props.howProcess"
      :id="`process-${props.id}`"
    >
      <BlocksSectionHeader :title="props.howProcess.title" />
      <BlocksProcessSteps :steps="props.howProcess.steps" />
    </BlocksSectionWrapper>

    <SectionsListOfBenefits
      v-if="props.listOfBenefits"
      :id="`korzysci-z-${props.id}`"
      v-bind="props.listOfBenefits"
    />

    <SectionsFequentlyAskedQuestions
      v-if="props.frequentlyAskedQuestions"
      :id="`pytania-o-${props.id}`"
      background-class="section-subtle bg-secondary/30"
      v-bind="props.frequentlyAskedQuestions"
    />

    <SectionsCallToAction
      v-if="props.callToAction"
      :id="`${props.id}-call-to-action`"
      :title="props.callToAction.title"
    />
  </div>
</template>
