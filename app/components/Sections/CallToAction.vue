<script setup lang="ts">
import { config } from '../../data/config'

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
          :href="`tel:${config.phone.replaceAll(' ', '')}`"
          class="hover:text-primary transition-colors"
        >
          {{ config.phone }}
        </a>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <UIcon
          name="lucide-mail"
          class="h-5 w-5 text-primary"
        />
        <a
          :href="`mailto:${config.email}`"
          class="hover:text-primary transition-colors"
        >
          {{ config.email }}
        </a>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-up delay-300">
      <UButton
        :to="`tel:${config.phone.replaceAll(' ', '')}`"
        trailing-icon="lucide-phone"
        :ui="{
          trailingIcon: 'ml-4 transition-transform group-hover:translate-x-1',
          base: 'rounded-md py-4 px-6 font-bold'
        }"
      >
        Zadzwoń teraz
      </UButton>

      <UButton
        :to="`mailto:${config.email}`"
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
