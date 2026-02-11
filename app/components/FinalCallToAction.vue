<template>
  <UPageSection
    id="help"
    class="section-subtle"
    :ui="{
      container: 'py-8 lg:py-16'
    }"
  >
    <div class="page-container">
      <BlocksSectionHeader
        title="Pierwszy krok do&nbsp;rozwiązania jest&nbsp;prostszy niż&nbsp;myślisz"
        description="Nie musisz mierzyć się z&nbsp;konfliktem sam. Umów bezpłatną rozmowę wstępną – bez zobowiązań, w&nbsp;pełnej dyskrecji. Wspólnie ocenimy, jak mogę Ci pomóc."
        title-color=" "
      />

      <div class="flex flex-col sm:flex-row gap-6 justify-center mb-12">
        <UButton
          to="#contact"
          size="lg"
          icon="i-lucide-calendar"
          class="bg-[hsl(40,90%,55%)] text-[hsl(210,30%,12%)] hover:bg-[hsl(40,90%,50%)] font-semibold text-base px-8 py-4 group transition-colors rounded-md"
        >
          Umów się na rozmowę
        </UButton>

        <UButton
          to="tel:+48796245605"
          size="lg"
          icon="i-lucide-phone"
          class="border-white text-white hover:bg-white/10 hover:text-white text-base px-8 py-4 transition-colors rounded-md"
        >
          +48 796 245 605
        </UButton>
      </div>
      <p class="text-sm text-center">
        Odpowiadam na wiadomości w ciągu 24 godzin. Wszystkie rozmowy są poufne.
      </p>
    </div>
  </UPageSection>
</template>
