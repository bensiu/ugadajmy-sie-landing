<script setup lang="ts">
interface NavLink {
  href: string
  label: string
}

// State
const isMobileMenuOpen = ref(false)
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

const props = defineProps<{
  navLinks: NavLink[]
}>()
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4',
      isScrolled
        ? 'bg-background backdrop-blur-md shadow-soft border-b py-5'
        : 'bg-secondary-foreground py-5'
    ]"
  >
    <div class="page-container flex items-center justify-between">
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

      <nav class="hidden xl:flex items-center gap-6">
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

      <UButton
        variant="ghost"
        color="neutral"
        :class="['xl:hidden p-2', isScrolled ? 'text-foreground' : 'text-white']"
        :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <template #leading>
          <UIcon
            v-if="isMobileMenuOpen"
            name="i-lucide-x"
            class="h-8 w-8"
          />
          <UIcon
            v-else
            name="i-lucide-menu"
            class="h-8 w-8"
          />
        </template>
      </UButton>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="xl:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-elevated w-full"
      >
        <nav class="py-6 flex flex-col gap-4 w-full">
          <NuxtLink
            v-for="link in props.navLinks"
            :key="link.href"
            :to="link.href"
            class="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-6"
            @click="isMobileMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <div class="pt-4 border-t border-border flex flex-col gap-3 px-6">
            <UButton
              to="tel:+48796245605"
              variant="link"
              color="primary"
              class="justify-center p-0"
            >
              <template #leading>
                <UIcon
                  name="i-lucide-phone"
                  class="h-5 w-5"
                />
              </template>
              +48 796 245 605
            </UButton>

            <UButton
              to="#contact"
              size="lg"
              block
              @click="isMobileMenuOpen = false"
            >
              Umów bezpłatną rozmowę
            </UButton>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>
