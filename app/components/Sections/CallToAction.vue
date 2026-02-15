<script setup lang="ts">
interface CallToActionProps {
  id: string
  title: string
}

const props = withDefaults(
  defineProps<CallToActionProps>(),
  {}
)
</script>

<template>
  <BlocksSectionWrapper
    :id="props.id"
  >
    <BlocksSectionHeader
      :title="props.title"
      description="Aleksandra Dubiel – Mediator, Prawnik, Coach"
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
          href="tel:+48796245605"
          class="hover:text-primary transition-colors"
        >
          +48 796 245 605
        </a>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <UIcon
          name="lucide-mail"
          class="h-5 w-5 text-primary"
        />
        <a
          href="mailto:kontakt@ugadajmysie.pl"
          class="hover:text-primary transition-colors"
        >
          kontakt@ugadajmysie.pl
        </a>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-up delay-300">
      <UButton
        to="tel:+48796245605"
        trailing-icon="lucide-phone"
        :ui="{
          trailingIcon: 'ml-4 transition-transform group-hover:translate-x-1',
          base: 'rounded-md py-4 px-6 font-bold'
        }"
      >
        Zadzwoń teraz
      </UButton>

      <UButton
        to="mailto:kontakt@ugadajmysie.pl"
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
