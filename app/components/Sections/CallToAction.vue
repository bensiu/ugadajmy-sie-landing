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

    <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
      <div class="flex items-center gap-2 text-muted-foreground">
        <UIcon
          name="lucide-map-pin"
          class="h-5 w-5 text-primary"
        />
        <span>ul. Kapitańska 3a, 70-001 Szczecin</span>
      </div>
      <div class="flex items-center gap-2 text-muted-foreground">
        <UIcon
          name="lucide-phone"
          class="h-5 w-5 text-primary"
        />
        <a
          :href="`tel:${companyInfo.phone.replaceAll(' ', '')}`"
          class="hover:text-primary transition-colors"
        >
          {{ companyInfo.phone }}
        </a>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <UIcon
          name="lucide-mail"
          class="h-5 w-5 text-primary"
        />
        <a
          :href="`mailto:${companyInfo.email}`"
          class="hover:text-primary transition-colors"
        >
          {{ companyInfo.email }}
        </a>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-up delay-300">
      <UButton
        :to="`tel:${companyInfo.phone.replaceAll(' ', '')}`"
        trailing-icon="lucide-phone"
        :ui="{
          trailingIcon: 'ml-4 transition-transform group-hover:translate-x-1',
          base: 'rounded-md py-4 px-6 font-bold'
        }"
      >
        Zadzwoń teraz
      </UButton>

      <UButton
        :to="`mailto:${companyInfo.email}`"
        variant="outline"
        trailing-icon="lucide-arrow-right"
        :ui="{
          trailingIcon: 'ml-4 transition-transform group-hover:translate-x-1',
          base: 'rounded-md py-4 px-6 font-bold'
        }"
      >
        Napisz wiadomość
      </UButton>
    </div>
  </BlocksSectionWrapper>
</template>
