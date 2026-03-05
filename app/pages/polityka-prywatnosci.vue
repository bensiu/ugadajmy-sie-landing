<script setup>
import { page } from '~/data/general'
import { config } from '../data/config'

const securityItems = [
  {
    icon: 'i-lucide-shield-check',
    title: 'Bezpieczeństwo',
    desc: 'Twoje dane są szyfrowane i bezpieczne.'
  },
  {
    icon: 'i-lucide-lock',
    title: 'Prywatność',
    desc: 'Nie udostępniamy danych osobom trzecim.'
  },
  {
    icon: 'i-lucide-eye',
    title: 'Transparentność',
    desc: 'Zawsze masz wgląd w swoje dane.'
  }
]

if (page?.seo) {
  usePageSpecificSeoMeta(page.seo)
}
</script>

<template>
  <div>
    <main class="container mx-auto px-4 md:px-6 py-12 md:py-20 mt-8">
      <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-12 text-center underline decoration-secondary-200">
        Polityka Prywatności i&nbsp;RODO
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div
          v-for="item in securityItems"
          :key="item.title"
          class="bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <UIcon
            :name="item.icon"
            class="h-10 w-10 text-primary-500 mb-4"
          />

          <h3 class="font-bold mb-2 text-gray-900 dark:text-white">
            {{ item.title }}
          </h3>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            {{ item.desc }}
          </p>
        </div>
      </div>

      <div class="prose prose-slate dark:prose-invert max-w-none space-y-12 text-gray-600 dark:text-gray-400">
        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-primary flex items-center gap-2 not-prose mb-4">
            1. Administrator Danych
          </h2>
          <p>
            Administratorem Twoich danych osobowych jest firma <strong>Ugadajmy Się Szczecin</strong> z&nbsp;siedzibą w&nbsp;Szczecinie,
            ul.&nbsp;Kapitańska&nbsp;3a, 70&#8209;001&nbsp;Szczecin. W sprawach związanych z&nbsp;ochroną danych możesz skontaktować się
            pod&nbsp;adresem e-mail:
            <NuxtLink
              :to="`mailto:${config.email}`"
              class="text-primary-500 underline hover:text-primary-600 transition-colors"
            >
              {{ config.email }}
            </NuxtLink>.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-primary flex items-center gap-2 not-prose mb-4">
            2. Cel i Podstawa Przetwarzania
          </h2>
          <p>Dane przetwarzane są w celu:</p>
          <ul class="list-disc pl-6 mt-2">
            <li>Odpowiedzi na zapytania przesłane przez formularz kontaktowy (art. 6 ust. 1 lit. f RODO).</li>
            <li>Realizacji zamówienia na świadectwo energetyczne lub audyt (art. 6 ust. 1 lit. b RODO).</li>
            <li>Wypełnienia obowiązków prawnych ciążących na Administratorze (art. 6 ust. 1 lit. c RODO).</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-primary not-prose mb-4">
            3. Okres Przechowywania Danych
          </h2>
          <p>
            Twoje dane będą przechowywane przez okres niezbędny do&nbsp;realizacji celu, dla&nbsp;którego zostały zebrane,
            a po jego zakończeniu przez czas wymagany przepisami prawa lub do&nbsp;momentu wycofania zgody.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-primary not-prose mb-4">
            4. Twoje Prawa
          </h2>
          <p>W związku z RODO przysługuje Ci prawo do:</p>
          <ul class="list-disc pl-6 mt-2">
            <li>Dostępu do swoich danych oraz otrzymania ich kopii.</li>
            <li>Sprostowania (poprawiania) swoich danych.</li>
            <li>Usunięcia danych ("prawo do bycia zapomnianym").</li>
            <li>Ograniczenia przetwarzania danych.</li>
            <li>Wniesienia sprzeciwu wobec przetwarzania.</li>
            <li>Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-primary not-prose mb-4">
            5. Pliki Cookies
          </h2>
          <p>
            Strona korzysta z&nbsp;plików cookies w&nbsp;celach statystycznych i&nbsp;funkcjonalnych. Możesz zarządzać ustawieniami
            cookies w swojej przeglądarce internetowej. Wyłączenie cookies może wpłynąć na&nbsp;funkcjonalność niektórych elementów strony.
          </p>
        </section>
      </div>
    </main>
  </div>
</template>
