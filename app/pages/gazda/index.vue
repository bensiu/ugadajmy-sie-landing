<script setup lang="ts">
interface NavigationLink {
  title: string
  href: string
  active: boolean
  counter: number
  silos: string
}

const onSelected = (value: NavigationLink) => {
  navigateTo(`/gazda/${value.href}/`)
}

const links: NavigationLink[] = [
  {
    title: 'Artykuły',
    href: 'blogs'
  },
  {
    title: 'Najczęstsze pytania',
    href: 'faqs'
  }
].map(i => ({ ...i, active: true, counter: 0, silos: '' }))

$fetch('/api/gazda/mewho', {
  method: 'GET',
  server: false
})
  .then(
    (value) => {
      if (!value.active) {
        navigateTo('/gazda/login')
      } else {
        console.log(value)
      }
    }
  )
  .catch(() => {
    navigateTo('/gazda/login')
  })
</script>

<template>
  <BlocksSectionWrapper
    id="gada-navigation"
  >
    <BlocksSectionHeader
      title="Administracja"
      class="text-left !my-8"
    />
    <GazdaRecordsList
      :items="links"
      class="max-w-4xl mx-auto my-4"
      @selected="onSelected"
    />
  </BlocksSectionWrapper>
</template>
