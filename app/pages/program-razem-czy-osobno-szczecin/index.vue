<script setup lang="ts">
import { page } from '~/data/terapia-dla-par/program-razem-czy-osobno'
import { interPage } from '~/data/terapia-dla-par'
import { addBreadCrumbs } from '~/data/add-bread-crumbs'

if (page?.seo) {
  usePageSpecificSeoMeta(page.seo)
}
</script>

<template>
  <PagesDetailPage
    v-bind="addBreadCrumbs(page, interPage)"
  >
    <template #before>
      <BlocksSectionWrapper
        v-if="page.programDlaPar"
        :id="`program-dla-par-${page.id}`"
        variant="subtle"
      >
        <BlocksSectionHeader
          v-bind="page.programDlaPar"
          title-color=" "
          class="!mb-4"
        />
        <BlockFeaturesList
          :features="page.programDlaPar.features"
          class="mb-8 md:mb-12"
        />
        <BlocksFeatureCard
          :title="page.programDlaPar.why.title"
          :ui="{ title: '!min-h-12' }"
          class="mb-8 md:mb-12"
        >
          <template #list>
            <div class="w-full text-left">
              <ul
                class="grid sm:grid-cols-2 gap-3 text-muted-foreground"
              >
                <li
                  v-for="(item, index) in page.programDlaPar.why.items"
                  :key="`item-${index}`"
                  class="text-(--ui-text-muted) flex items-center gap-2"
                >
                  <UIcon
                    name="lucide-file-check"
                    class="w-6 h-6 text-primary flex-shrink-0 mt-0.7"
                  />
                  <!-- eslint-disable vue/no-v-html -->
                  <span v-html="item" />
                </li>
              </ul>
            </div>
          </template>
        </BlocksFeatureCard>

        <div
          v-if="page.programDlaPar.what"
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <BlocksFeatureCard
            v-for="item in page.programDlaPar.what"
            :key="`program-${item.title}`"
            v-bind="item"
            :ui="{ title: '!min-h-12' }"
          >
            <template #link>
              <div class="flex justify-between text-sm border-t pt-4 mt-4">
                <span class="font-semibold text-primary">{{ item.price }}</span>
                <span class="text-muted-foreground">{{ item.duration }}</span>
              </div>
            </template>
          </BlocksFeatureCard>
        </div>

        <div
          v-if="page.programDlaPar.discount"
          class="text-center mb-12 p-4 bg-primary/5 rounded-xl border border-primary/10"
        >
          <p
            class="text-primary font-medium"
            v-html="page.programDlaPar.discount"
          />
          <p class="text-sm text-muted-foreground mt-2">
            Miejsce: Szczecin, ul. Kapitańska 3a | Dla par spoza Szczecina – spotkania online
          </p>
        </div>
      </BlocksSectionWrapper>
    </template>
  </PagesDetailPage>
</template>
