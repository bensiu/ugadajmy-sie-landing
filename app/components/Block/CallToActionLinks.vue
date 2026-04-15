<script setup lang="ts">
const { companyInfo } = useAppConfig()
const props = defineProps<{ id: string }>()
</script>

<template>
  <div class="flex flex-col flex-wrap sm:flex-row items-center justify-center gap-6 mb-10">
    <div class="flex items-center gap-2 text-muted-foreground text-nowrap">
      <UIcon
        name="lucide-map-pin"
        class="h-5 w-5 text-primary"
      />
      <span>ul. Kapitańska 3a, 70-001 Szczecin</span>
    </div>
    <div class="flex items-center gap-2 text-muted-foreground  text-nowrap">
      <UIcon
        name="lucide-phone"
        class="h-5 w-5 text-primary"
      />
      <NuxtLink
        :id="`action-cta-link-phone-${props.id}`"
        :to="`tel:${companyInfo.phone.replaceAll(' ', '')}`"
        class="hover:text-primary transition-colors"
      >
        {{ companyInfo.phone }}
      </NuxtLink>
    </div>
    <div class="flex items-center gap-2 text-muted-foreground  text-nowrap">
      <UIcon
        name="lucide-mail"
        class="h-5 w-5 text-primary"
      />
      <NuxtLink
        :id="`action-cta-link-email-${props.id}`"
        :to="`mailto:${companyInfo.email}`"
        class="hover:text-primary transition-colors"
      >
        {{ companyInfo.email }}
      </NuxtLink>
    </div>
  </div>
</template>
