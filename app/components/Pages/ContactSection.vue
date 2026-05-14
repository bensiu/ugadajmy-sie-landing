<script setup lang="ts">
import type { SectionContentProps } from '~/types'
import type { ContactDetailsFooter } from '~/data/contact'

const props = defineProps<SectionContentProps & ContactDetailsFooter>()
</script>

<template>
  <div class="grid lg:grid-cols-5 gap-5">
    <div class="lg:col-span-2 animate-fade-up flex flex-col">
      <BlockContactCard
        v-for="item in props.items"
        :key="item.icon"
        :item="item"
        class="mb-3"
      />
      <div class="flex-grow" />
      <div class="p-3 bg-primary rounded-xl text-white rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow transition-all duration-300 group">
        <!-- eslint-disable vue/no-v-html -->
        <h3
          class="font-display font-bold text-lg mb-2"
          v-html="props.footer.title"
        />
        <p
          class="text-white/80 text-sm"
          v-html="props.footer.description"
        />
      </div>
    </div>
    <div class="lg:col-span-3 animate-fade-up">
      <ContactForm
        class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow transition-all duration-300 group"
      />
    </div>
  </div>
</template>
