<script setup lang="ts">
import type { ConfigItems } from '~/types'

interface NavLink {
  href: string
  label: string
}

const currentYear = new Date().getFullYear()

const props = defineProps<{
  navLinks: NavLink[]
  config: ConfigItems
}>()

const socialLinks = [
  { icon: 'i-lucide-mail', label: 'Email', href: `mailto:${props.config.email}` },
  { icon: 'i-lucide-phone', label: 'Telefon', href: `tel:${props.config.phone.replaceAll(' ', '')}` },
  { icon: 'i-lucide-facebook', label: 'Facebook', href: 'https://www.facebook.com/share/1LGSATGs2M/?mibextid=wwXIfr' },
  { icon: 'i-lucide-instagram', label: 'Instagram', href: 'https://www.instagram.com/ugadajmy.sie' }
  // { icon: 'i-simple-icons-linkedin', label: 'LinkedIn', href: '#' }
]
</script>

<template>
  <footer class="bg-secondary-foreground text-slate-300 py-8 lg:py-12">
    <UContainer>
      <div class="grid grid-cols-12 gap-6 mb-4">
        <div class="col-span-12 sm:col-span-7 lg:col-span-6">
          <slot>
            <div class="flex items-center gap-2 mb-4">
              <NuxtLink
                to="/"
                class="flex items-center group"
              >
                <img
                  src="/images/logo.png"
                  alt="Ugadajmy się - Aleksandra Dubiel"
                  :class="['h-10 w-auto transition-all brightness-0 invert']"
                >
              </NuxtLink>
            </div>
            <p class="text-white text-sm leading-relaxed max-w-lg mb-6">
              Aleksandra Dubiel – mediator, prawnik i coach. Pomagam rozwiązywać konflikty i budować porozumienie. Dla osób prywatnych i firm.
            </p>
          </slot>
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

        <div class="col-span-12 col-start-1 sm:col-span-5 sm:col-start-1 lg:col-span-2 lg:col-start-7">
          <h4 class="font-bold text-primary-500 mb-6 uppercase tracking-widest text-sm">
            Menu Serwisu
          </h4>
          <ul class="space-y-4 text-sm text-primary-100/70">
            <li
              v-for="link in props.navLinks"
              :key="link.href"
            >
              <NuxtLink
                :to="link.href"
                class="text-white hover:text-white text-sm font-semibold transition-colors flex items-center"
              >
                <UIcon
                  name="lucide-chevron-right"
                  class="h-5 w-5 mr-2"
                />
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="col-span-12 col-start-1 sm:col-span-7 sm:col-start-6 lg:col-span-4 lg:col-start-9 mt-6 sm:mt-0">
          <h4 class="font-bold text-primary-500 mb-6 uppercase tracking-widest text-sm">
            Biuro i Kontakt
          </h4>
          <address class="not-italic text-sm text-white space-y-4">
            <p class="flex items-center gap-2">
              <UIcon
                name="lucide-map-pin"
                class="h-6 w-6 text-primary-500 shrink-0 mr-1"
              />
              <!-- eslint-disable vue/no-v-html -->
              <span
                v-html="props.config.fullAddress"
              />
            </p>
            <p class="flex items-center gap-2">
              <UIcon
                name="lucide-phone"
                class="h-6 w-6 text-primary-500 shrink-0 mr-1"
              />
              <NuxtLink
                :to="`tel:${props.config.phone.replaceAll(' ', '')}`"
                class="text-sm text-white transition-colors"
              >
                {{ props.config.phone }}
              </NuxtLink>
            </p>
            <p
              v-if="props.config.email"
              class="flex items-center gap-2 text-primary-500"
            >
              <UIcon
                name="lucide-mail"
                class="h-6 w-6 shrink-0 mr-1"
              />
              <NuxtLink
                :to="`mailto:${props.config.email}`"
                class="text-sm text-white transition-colors"
              >
                {{ props.config.email }}
              </NuxtLink>
            </p>
            <p class="flex items-center justify-between gap-2">
              <UIcon
                name="lucide-clock"
                class="h-6 w-6 text-primary-500 shrink-0 mr-1"
              />
              <span>Poniedziałek-Piątek</span>
              <span class="flex-grow" />
              <span class="font-semibold">9:00-18:00</span>
            </p>
          </address>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8 text-center text-[10px] text-primary-100/40 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-500 text-sm">
          &copy; {{ currentYear }} Ugadajmy się – Aleksandra Dubiel. Wszelkie prawa zastrzeżone.
        </p>
        <div class="flex gap-6">
          <NuxtLink
            to="/polityka-prywatnosci"
            class="text-slate-500 text-sm hover:text-white underline underline-offset-4"
          >
            Polityka Prywatności
          </NuxtLink>
          <NuxtLink
            to="/polityka-prywatnosci"
            class="text-slate-500 text-sm hover:text-white underline underline-offset-4"
          >
            RODO
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
