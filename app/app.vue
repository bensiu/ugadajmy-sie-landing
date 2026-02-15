<script lang="ts" setup>
// 1. Logic for SEO Tags
useSeoMeta({
  title: 'Ugadajmy się - Aleksandra Dubiel | Mediator, Coach | Szczecin',
  description: 'Rozwiązuję konflikty. Buduję porozumienie. Aleksandra Dubiel – mediator, prawnik i coach. Mediacje rodzinne, spadkowe i dla firm. Coaching i szkolenia. Szczecin.',
  author: 'Aleksandra Dubiel - Ugadajmy się',
  keywords: 'mediator Szczecin, mediacje rodzinne, mediacje rozwodowe, mediacje spadkowe, coaching, rozwiązywanie konfliktów, prawnik mediator',
  // canonical: 'https://ugadajmysie.pl',
  // Open Graph
  ogTitle: 'Ugadajmy się - Aleksandra Dubiel | Mediator, Prawnik, Coach',
  ogDescription: 'Rozwiązuję konflikty. Buduję porozumienie. Mediacje rodzinne, spadkowe i dla firm. Coaching i szkolenia w Szczecinie.',
  ogType: 'website',
  // ogImage: 'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a4fadd1f-631f-43fd-abab-468429d56e33/id-preview-35150130--c3ce7dd4-0e1f-4cf7-b2d1-67b9e4c8b7a4.lovable.app-1768236509323.png',
  ogLocale: 'pl_PL',

  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: 'Ugadajmy się - Aleksandra Dubiel',
  twitterDescription: 'Mediator, prawnik i coach. Mediacje i coaching w Szczecinie.'
  // twitterImage: 'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a4fadd1f-631f-43fd-abab-468429d56e33/id-preview-35150130--c3ce7dd4-0e1f-4cf7-b2d1-67b9e4c8b7a4.lovable.app-1768236509323.png'
})

// 2. Logic for Scripts, Links, and Global Styles
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.png' }
  ],
  htmlAttrs: {
    lang: 'pl'
  }
})

const navLinks = [
  { href: '/program-dla-par', label: 'Program dla par' },
  { href: '/#o-mnie', label: 'Kim jestem' },
  { href: '/#w-czym-pomagam', label: 'W czym pomagam' },
  { href: '/#mediation', label: 'Mediacje' },
  { href: '/#coaching', label: 'Coaching' },
  { href: '/#szkolenia-i-programy', label: 'Szkolenia' },
  // { href: '#business', label: 'Dla firm' },
  { href: '/#contact', label: 'Kontakt' }
]

const isMenuOpen = ref(false)
const isScrolled = ref(false)

// Scroll Logic
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <UApp :class="['bg-background text-foreground']">
    <NuxtRouteAnnouncer />

    <UHeader
      :open="isMenuOpen"
      :ui="{
        left: 'lg:flex-1 xl:flex-none pr-4 lg:pr-8'
      }"
      :class="[
        'absolute w-full fixed left-0 top-0 right-0',
        isScrolled
          ? 'bg-background backdrop-blur-md shadow-soft border-b py-5'
          : 'bg-transparent py-5'
      ]"
    >
      <template #left>
        <NuxtLink
          to="/#home"
          class="flex items-center group"
        >
          <img
            src="/images/logo.png"
            alt="Ugadajmy się - Aleksandra Dubiel"
            :class="['h-10 w-auto transition-all', !isScrolled ? 'brightness-0 invert' : '']"
          >
        </NuxtLink>
      </template>

      <nav class="hidden lg:flex items-center gap-6">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          :class="[
            'text-sm font-medium transition-colors',
            isScrolled ? 'text-foreground/70 hover:text-primary' : 'text-white/80 hover:text-white'
          ]"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <template #right>
        <div class="hidden xl:flex items-center gap-4">
          <UButton
            to="tel:+48796245605"
            variant="ghost"
            color="neutral"
            :class="[
              'transition-colors',
              isScrolled ? 'text-muted-foreground hover:text-primary' : 'text-white/80 hover:text-white hover:bg-white/10'
            ]"
          >
            <template #leading>
              <UIcon
                name="i-lucide-phone"
                class="h-4 w-4"
              />
            </template>
            +48 796 245 605
          </UButton>

          <UButton
            to="#contact"
            size="sm"
            :class="[
              'font-semibold transition-all p-4',
              isScrolled
                ? ''
                : 'bg-[hsl(40,90%,55%)] text-[hsl(210,30%,12%)] hover:bg-[hsl(40,90%,50%)] border-none'
            ]"
          >
            Umów rozmowę
          </UButton>
        </div>
      </template>

      <template #body>
        <div class="p-2 flex flex-col h-full">
          <div class="flex flex-col gap-2">
            <UButton
              v-for="link in navLinks"
              :key="link.href"
              variant="ghost"
              :to="link.href"
              class="text-left text-lg font-semibold py-3 px-5 border-b border-gray-100 dark:border-gray-800"
            >
              {{ link.label }}
            </UButton>
          </div>
        </div>
      </template>
    </UHeader>

    <!-- <TheHeader :nav-links="navLinks" /> -->
    <main class="relative">
      <NuxtPage />
    </main>
    <TheFooter :nav-links="navLinks" />
  </UApp>
</template>
