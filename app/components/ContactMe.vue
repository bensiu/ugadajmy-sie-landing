<script setup>
const contacts = [
  {
    icon: 'i-lucide-phone',
    label: 'Telefon',
    value: '+48 796 245 605',
    href: 'tel:+48796245605'
  },
  {
    icon: 'i-lucide-mail',
    label: 'Email',
    value: 'Aleksandra_Dubiel@wp.pl',
    href: 'mailto:Aleksandra_Dubiel@wp.pl'
  },
  {
    icon: 'i-lucide-map-pin',
    label: 'Adres',
    value: 'ul. Kapitańska 3a, Szczecin',
    href: null
  },
  {
    icon: 'i-lucide-clock',
    label: 'Godziny',
    value: 'Pon. – Pt.: 9:00-18:00',
    href: null
  }
]
</script>

<template>
  <UPageSection
    id="contact"
    :ui="{
      container: 'py-8 lg:py-16'
    }"
  >
    <div class="page-container">
      <SubHeroHeader
        lead="Kontakt"
        title="Porozmawiajmy"
        description="Masz pytania? Chcesz umówić konsultację? Napisz lub zadzwoń – pierwsza rozmowa jest zawsze bezpłatna i&nbsp;niezobowiązująca."
      />

      <div class="grid lg:grid-cols-5 gap-12">
        <div class="lg:col-span-2 animate-fade-up">
          <CardContact
            v-for="item in contacts"
            :key="item.icon"
            :item="item"
            class="mb-5"
          />
          <div class="p-6 bg-[hsl(192,75%,25%)] rounded-xl text-white">
            <h3 class="font-display font-bold text-lg mb-2">
              Rozmowa wstępna
            </h3>
            <p class="text-white/80 text-sm">
              Pierwsza konsultacja jest po to, by zrozumieć i wskazać dalsze wskazówki. To&nbsp;60&nbsp;minut na poznanie Twojej sytuacji i&nbsp;wspólne ocenienie, jak mogę Ci pomóc.
            </p>
          </div>
        </div>
        <div class="lg:col-span-3 bg-card rounded-2xl border border-border p-8 animate-fade-up delay-200">
          <ContactForm />
        </div>
      </div>
    </div>
  </UPageSection>
</template>
