<script setup>
// No imports needed for Lucide icons or Buttons when using Nuxt UI
const description = 'Jestem Aleksandra Dubiel – łączę doświadczenie prawnika, mediatora i coacha, by pomagać Ci wyjść z konfliktów z poczuciem ulgi i konkretnym rozwiązaniem. Dla osób prywatnych i firm.'
</script>

<template>
  <div
    id="home"
    class="bg-secondary-foreground"
  >
    <UPageHero
      :description="description"
      :ui="{
        wrapper: 'page-container w-full text-left',
        footer: 'text-left',
        container: 'pb-8 md:pb-12 lg:pb-16',
        description: 'text-white/90 mb-8 animate-fade-up delay-200'
      }"
    >
      <template #headline>
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-up">
          <span>Mediator · Prawnik · Coach</span>
        </div>
      </template>
      <template #title>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6 text-white animate-fade-up delay-100">
          Rozwiązuję konflikty.
          <span class="block text-primary">Buduję porozumienie.</span>
        </h1>
      </template>
      <template #footer>
        <div class="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
          <UButton
            to="#contact"
            size="xl"
            trailing-icon="i-lucide-arrow-right"
            :ui="{
              base: 'group',
              font: 'font-semibold',
              rounded: 'rounded-md',
              icon: { base: 'transition-transform group-hover:translate-x-1' }
            }"
            class="justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 bg-[hsl(40,90%,55%)] text-[hsl(210,30%,12%)] hover:bg-[hsl(40,90%,50%)] bg-primary text-primary-foreground px-8"
          >
            Umów się na rozmowę
          </UButton>

          <UButton
            to="#about"
            variant="outline"
            size="xl"
            class="justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 bg-[hsl(40,90%,55%)] text-[hsl(210,30%,12%)] hover:bg-[hsl(40,90%,50%)] bg-primary text-primary-foreground px-8"
          >
            Poznaj mnie
          </UButton>
        </div>
        <div class="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-white/20 animate-fade-up delay-400">
          <div class="text-center">
            <p class="text-3xl font-display font-bold text-white">
              100+
            </p>
            <p class="text-sm text-white/60">
              zakończonych mediacji
            </p>
          </div>
          <div class="text-center">
            <p class="text-3xl font-display font-bold text-white">
              15+
            </p>
            <p class="text-sm text-white/60">
              lat doświadczenia
            </p>
          </div>
          <div class="text-center">
            <p class="text-3xl font-display font-bold text-white">
              100%
            </p>
            <p class="text-sm text-white/60">
              poufność
            </p>
          </div>
        </div>
      </template>
    </UPageHero>
  </div>
</template>

<style scoped>
/* If your 'animate-fade-up' utility is from a library, it stays in Tailwind.
  If you need to define it manually for this component:
*/
.animate-fade-up {
  animation: fadeUp 0.5s ease-out forwards;
}
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
