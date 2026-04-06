<script setup lang="ts">
import type { BlogItem } from '~/types'
import * as v from 'valibot'
import { marked } from 'marked'

const props = defineProps<BlogItem & { uniqueKey: number }>()

// FORM definitions
const schema = v.object({
  silos: v.pipe(v.string()),
  counter: v.pipe(v.number(), v.minValue(0)),
  title: v.pipe(v.string(), v.minLength(8, 'Tytuł powinien być trochę dłuższy')),
  description: v.pipe(v.string(), v.minLength(8, 'Zajawka powinna być trochę dłuższa')),
  content: v.pipe(v.string(), v.minLength(18, 'Odpowiedź powinna być trochę dłuższa')),
  slug: v.pipe(v.string(), v.minLength(8, 'Slug powinien być trochę dłuższy')),
  author: v.pipe(v.string(), v.minLength(8, 'Autor powinien być trochę dłuższy')),
  date: v.pipe(v.string(), v.regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, 'Data powinna być w formacie: YYYY-MM-DD')),
  readTime: v.pipe(v.number(), v.minValue(1, 'Czas czytania powinien być większy niż 1')),
  active: v.pipe(v.boolean())
})

const _default = {
  silos: props.silos,
  counter: props.counter || 0,
  title: props.title || '',
  description: props.description || '',
  content: props.content || '',
  slug: props.slug || '',
  author: props.author || 'Aleksanda Dubiel',
  date: props.date || new Date().toISOString().slice(0, 10),
  readTime: props.readTime || 1,
  active: props.active || false
}

const fields = [
  {
    label: 'Silos:',
    type: 'text',
    name: 'silos',
    class: 'col-span-10 sm:col-span-8',
    disabled: true,
    required: true
  },
  {
    label: 'Licznik:',
    type: 'number',
    name: 'counter',
    class: 'col-span-2 sm:col-span-2 sm:col-start-11 input-text-right',
    disabled: true
  },
  {
    label: 'Tytuł:',
    type: 'text',
    name: 'title',
    class: 'col-span-12',
    required: true
  },
  {
    label: 'Zajawka:',
    type: 'textarea',
    name: 'description',
    class: 'col-span-12',
    required: true,
    rows: 3
  },
  {
    label: 'Treść:',
    type: 'textarea',
    name: 'content',
    class: 'col-span-12',
    required: true,
    rows: 6
  },
  {
    label: 'Slug:',
    type: 'text',
    name: 'slug',
    class: 'col-span-12',
    required: true
  },
  {
    label: 'Autor:',
    type: 'text',
    name: 'author',
    class: 'col-span-5',
    required: true
  },
  {
    label: 'Dzień:',
    type: 'text',
    name: 'date',
    class: 'col-span-2 col-start-7 input-text-center',
    required: true
  },
  {
    label: 'Minutes:',
    type: 'number',
    name: 'readTime',
    class: 'col-span-1 input-text-right',
    required: true
  },
  {
    type: 'checkbox',
    name: 'active',
    checkboxLabel: 'Aktywny',
    class: 'col-span-2 col-start-11 pt-7'
  }
]

const { isSubmitted, isSubmitting, handleSubmit } = useContactForm('/api/blogs/')

const emits = defineEmits<{ submited: [value: boolean, silosId: string] }>()
watch([isSubmitted], () => {
  emits('submited', isSubmitted.value, props.silos)
})
const readingTime = (text: string, wordsPerMinute: number = 90): number => {
  const words = text.split(/\s+/).length

  return Math.ceil(words / wordsPerMinute)
}
</script>

<template>
  <ContactFormCard
    :schema="schema"
    :default="_default"
    :fields="fields"
    :is-submitting="isSubmitting"
    button-label="Zapisz blog"
    :ui="{
      checkbox: {
        color: 'primary'
      },
      button: {
        color: 'primary'
      }
    }"
    @submit="handleSubmit"
  >
    <template #preview="{ state }">
      <!-- eslint-disable vue/no-v-html -->
      <USeparator
        :label="`Podgląd treści (${readingTime(state.content as string)} min)`"
        class="mb-5 mt-3 col-span-12"
      />
      <div
        class="markdown-article-body prose dark:prose-invert max-w-none w-full col-span-12"
        v-html="marked.parse(state?.content as string || '')"
      />
      <USeparator
        class="my-3 col-span-12"
      />
    </template>
  </ContactFormCard>
</template>
