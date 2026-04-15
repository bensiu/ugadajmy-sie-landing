<script setup lang="ts">
const { companyInfo } = useAppConfig()

interface CallToActionProps {
  id: string
  title: string
  description?: string
}

const props = withDefaults(
  defineProps<CallToActionProps>(),
  {
    description: 'Aleksandra Dubiel – Mediator, Prawnik, Coach'
  }
)
</script>

<template>
  <BlocksSectionWrapper
    :id="props.id"
  >
    <BlocksSectionHeader
      :title="props.title"
      :description="props.description"
      class="!mb-6"
      title-color=" "
    />

    <BlockCallToActionLinks :id="props.id" />

    <div class="flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-up delay-300">
      <UButton
        :id="`action-cta-button-phone-${props.id}`"
        :to="`tel:${companyInfo.phone.replaceAll(' ', '')}`"
        trailing-icon="lucide-phone"
        :ui="{
          trailingIcon: 'ml-4 transition-transform group-hover:translate-x-1',
          base: 'rounded-md py-4 px-6 font-bold min-w-[16em] flex justify-between'
        }"
      >
        Zadzwoń teraz
      </UButton>

      <UButton
        :id="`action-cta-button-email-${props.id}`"
        :to="`mailto:${companyInfo.email}`"
        variant="outline"
        trailing-icon="lucide-arrow-right"
        :ui="{
          trailingIcon: 'ml-4 transition-transform group-hover:translate-x-1',
          base: 'rounded-md py-4 px-6 font-bold min-w-[16em] flex justify-between'
        }"
      >
        Napisz wiadomość
      </UButton>
    </div>
  </BlocksSectionWrapper>
</template>
