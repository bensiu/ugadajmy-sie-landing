<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen">
    <HeroBox2
      id="home"
      :titles="['Rozwiązuję konflikty.', 'Buduję porozumienie.']"
      top-badges="Mediator · Prawnik · Coach"
      description="Jestem Aleksandra Dubiel – łączę doświadczenie prawnika, mediatora i coacha, by pomagać Ci wyjść z konfliktów z poczuciem ulgi i konkretnym rozwiązaniem. Dla osób prywatnych i firm."
      :stats="[
        { value: '100+', label: 'zakończonych mediacji' },
        { value: '15+', label: 'lat doświadczenia' },
        { value: '100%', label: 'poufność' }
      ]"
    />
    <SectionsHowICanHelp />
    <!-- <SectionsCouplesProgram>
      <BlockButtonLink
        href="/program-dla-par"
        label="Więcej o programie"
      />
    </SectionsCouplesProgram> -->
    <SectionsAboutMe />
    <SectionsHowIHelp />
    <TheMediation />
    <TheCoaching />
    <SectionsTheTrainings />
    <FinalCallToAction />
    <ContactMe />
  </div>
</template>
