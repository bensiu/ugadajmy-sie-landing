<script setup lang="ts">
interface NavLink {
  href: string
  label: string
}

const currentYear = new Date().getFullYear()

const socialLinks = [
  { icon: 'i-heroicons-envelope', label: 'Email', href: 'mailto:Aleksandra_Dubiel@wp.pl' },
  { icon: 'i-heroicons-phone', label: 'Telefon', href: 'tel:+48796245605' },
  { icon: 'i-simple-icons-facebook', label: 'Facebook', href: 'https://www.facebook.com/share/1LGSATGs2M/?mibextid=wwXIfr' },
  { icon: 'i-simple-icons-instagram', label: 'Instagram', href: 'https://www.instagram.com/ugadajmy.sie' }
  // { icon: 'i-simple-icons-linkedin', label: 'LinkedIn', href: '#' }
]

const props = defineProps<{
  navLinks: NavLink[]
}>()
</script>

<template>
  <footer class="bg-[hsl(210,35%,12%)] text-slate-300 py-8 lg:py-12">
    <UContainer>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
        <div class="lg:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <NuxtLink
              to="/#home"
              class="flex items-center group"
            >
              <img
                src="/images/logo.png"
                alt="Ugadajmy się - Aleksandra Dubiel"
                :class="['h-10 w-auto transition-all brightness-0 invert']"
              >
            </NuxtLink>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
            Aleksandra Dubiel – mediator, prawnik i coach. Pomagam rozwiązywać konflikty i budować porozumienie. Dla osób prywatnych i firm.
          </p>
          <div class="flex gap-3">
            <UButton
              v-for="social in socialLinks"
              :key="social.label"
              :icon="social.icon"
              :to="social.href"
              :aria-label="social.label"
              variant="ghost"
              class="bg-slate-800 hover:bg-slate-700 text-white rounded-lg w-10 h-10 flex justify-center"
              target="_blank"
            />
          </div>
        </div>

        <div>
          <h4 class="font-display font-semibold text-white mb-4">
            Usługi
          </h4>
          <ul class="space-y-3">
            <li
              v-for="link in props.navLinks"
              :key="link.label"
            >
              <NuxtLink
                :to="link.href"
                class="text-slate-400 hover:text-white text-sm transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-display font-semibold text-white mb-4">
            Kontakt
          </h4>
          <ul class="space-y-3 text-sm">
            <li class="text-slate-400">
              <a
                href="tel:+48796245605"
                class="hover:text-white transition-colors"
              >
                +48 796 245 605
              </a>
            </li>
            <li class="text-slate-400">
              <a
                href="mailto:Aleksandra_Dubiel@wp.pl"
                class="hover:text-white transition-colors"
              >
                Aleksandra_Dubiel@wp.pl
              </a>
            </li>
            <li class="text-slate-400">
              ul. Kapitańska 3a<br>
              70-001 Szczecin
            </li>
            <li class="text-slate-400">
              Pon. – Pt.: 9:00-18:00
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-slate-500 text-sm">
          © {{ currentYear }} Ugadajmy się – Aleksandra Dubiel. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </UContainer>
  </footer>
</template>
