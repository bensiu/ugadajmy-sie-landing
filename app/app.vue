<script setup>
// 1. Logic for SEO Tags
useSeoMeta({
  title: 'Ugadajmy się - Aleksandra Dubiel | Mediator, Coach | Szczecin',
  description: 'Rozwiązuję konflikty. Buduję porozumienie. Aleksandra Dubiel – mediator, prawnik i coach. Mediacje rodzinne, spadkowe i dla firm. Coaching i szkolenia. Szczecin.',
  author: 'Aleksandra Dubiel - Ugadajmy się',
  keywords: 'mediator Szczecin, mediacje rodzinne, mediacje rozwodowe, mediacje spadkowe, coaching, rozwiązywanie konfliktów, prawnik mediator',
  canonical: 'https://ugadajmysie.pl',
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
  { href: '/#about', label: 'Kim jestem' },
  { href: '/#help', label: 'W czym pomagam' },
  { href: '/#mediation', label: 'Mediacje' },
  { href: '/#coaching', label: 'Coaching' },
  { href: '/#trainings', label: 'Szkolenia' },
  // { href: '#business', label: 'Dla firm' },
  { href: '/#contact', label: 'Kontakt' }
]
</script>

<template>
  <UApp :class="['bg-background text-foreground']">
    <NuxtRouteAnnouncer />
    <TheHeader :nav-links="navLinks" />
    <main>
      <NuxtPage />
    </main>
    <TheFooter :nav-links="navLinks" />
  </UApp>
</template>
