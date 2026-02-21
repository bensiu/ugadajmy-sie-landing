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
      :bread-crumbs="props.breadCrumbs"
    />

    <slot name="before" />

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
      :variant="props.kinds.variant || 'subtle'"
    >
      <BlocksSectionHeader
        :title="props.kinds.title"
        :description="props.kinds.description"
        title-color=" "
      />
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      v-if="props.whenToUse"
      :id="`kiedy-skorzystac-z-${props.id}`"
      :variant="props.whenToUse.variant || 'subtle'"
    >
      <BlocksSectionHeader
        :title="props.whenToUse?.title"
        :items="props.whenToUse.situations"
        class="text-left !mb-2"
      />
    </BlocksSectionWrapper>

    <BlocksSectionWrapper
      v-if="props.howProcess"
      :id="`process-${props.id}`"
      :variant="props.howProcess.variant || 'default'"
    >
      <BlocksSectionHeader :title="props.howProcess.title" />
      <BlocksProcessSteps :steps="props.howProcess.steps" />
    </BlocksSectionWrapper>

    <BlocksSectionWrapper
      v-if="props.options"
      :id="`opcje-${props.id}`"
      :variant="props.options.variant || 'subtle'"
    >
      <BlocksSectionHeader
        :title="props.options.title"
        class="!mb-6 text-left"
      />
      <BlockOptionCard
        v-for="option in props.options.items"
        :key="option.title"
        v-bind="option"
        class="my-4"
      />
    </BlocksSectionWrapper>

    <SectionsListOfBenefits
      v-if="props.listOfBenefits"
      :id="`korzysci-z-${props.id}`"
      v-bind="props.listOfBenefits"
      :variant="props.listOfBenefits.variant || 'primary'"
    />

    <SectionsFequentlyAskedQuestions
      v-if="props.frequentlyAskedQuestions"
      :id="`pytania-o-${props.id}`"
      :variant="props.frequentlyAskedQuestions.variant || 'subtle'"
      v-bind="props.frequentlyAskedQuestions"
    />

    <SectionsCallToAction
      v-if="props.callToAction"
      :id="`${props.id}-call-to-action`"
      v-bind="props.callToAction"
      :variant="props.callToAction.variant || 'default'"
    />
  </div>
</template>
