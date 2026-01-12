<script setup>
// No imports needed for Lucide icons or Buttons when using Nuxt UI
const description = 'Jestem Aleksandra Dubiel – łączę doświadczenie prawnika, mediatora i coacha, by pomagać Ci wyjść z konfliktów z poczuciem ulgi i konkretnym rozwiązaniem. Dla osób prywatnych i firm.'
// const links = [
//   {
//     label: 'Umów się na rozmowę',
//     href: '#contact',
//     color: 'primary',
//     size: 'xl',
//     trailingIcon: 'i-lucide-arrow-right',
//     class: 'p-4 px-8'
//   },
//   {
//     label: 'Poznaj mnie',
//     href: '#about',
//     color: 'primary',
//     size: 'xl',
//     class: 'p-4 px-8'
//   }
// ]
</script>

<template>
  <UPageHero
    :description="description"
    :ui="{
      wrapper: 'w-full text-left',
      footer: 'text-left',
      container: 'pb-8 md:pb-12 lg:pb-16'
    }"
    class="bg-background"
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
          class="px-8 py-6 text-base"
        >
          Umów się na rozmowę
        </UButton>

        <UButton
          to="#about"
          variant="outline"
          size="xl"
          class="px-8 py-6 text-base"
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
