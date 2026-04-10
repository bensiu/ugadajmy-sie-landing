<script setup lang="ts">
import type { BlogItem } from '~/types'
import * as v from 'valibot'
import { marked } from 'marked'
import { flattenSections } from '~/data/gazda'

interface BlogItemProps extends BlogItem {
  uniqueKey: number
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string
}
const props = defineProps<BlogItemProps>()

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
  related: v.pipe(
    v.array(v.string()),
    // v.minLength(1, 'Minimum 1 powiązany artykuł'),
    v.maxLength(3, 'Nie więcej niż 3 artykuły')
  ),
  services: v.pipe(
    v.array(v.string()),
    // v.minLength(1, 'Minimum 1 powiązany artykuł'),
    v.maxLength(7, 'Nie więcej niż 7 serwisów')
  ),
  active: v.pipe(v.boolean()),
  seoTitle: v.pipe(v.string(), v.minLength(3, 'Prefix tytułu powinien strony być trochę dłuższy')),
  seoDescription: v.pipe(v.string(), v.minLength(12, 'Opis strony powinien być trochę dłuższy')),
  seoKeywords: v.pipe(v.string(), v.minLength(12, 'Słowa kluczowe strony powinny być trochę dłuższe'))
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
  active: props.active || false,
  seoTitle: props.seoTitle || '',
  seoDescription: props.seoDescription || '',
  seoKeywords: props.seoKeywords || '',
  related: props.related || [],
  services: props.services || []
}

const relatedBlogsItems = ref<{ value: string, label: string }[]>([])
await $fetch('/api/blogs/', { query: { subject: `${props.silos.split('-')[0]}%` } })
  .then((response) => {
    const results = response as unknown as BlogItem[]
    relatedBlogsItems.value = results
      .filter(blog => blog.slug !== props.slug && blog.active)
      .map(
        blog => ({
          label: `<strong>${blog.silos}</strong> - ${blog.title}`,
          value: blog.slug
        })
      )
  })

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
  },
  {
    label: 'Tytuł strony (jako prefix):',
    type: 'text',
    name: 'seoTitle',
    class: 'col-span-4'
  },
  {
    label: 'Opis strony:',
    type: 'text',
    name: 'seoDescription',
    class: 'col-span-8'
  },
  {
    label: 'Słowa kluczowe:',
    type: 'textarea',
    name: 'seoKeywords',
    class: 'col-span-12',
    rows: 2
  },
  {
    type: 'checkboxgroup',
    name: 'related',
    checkboxLabel: 'Powiązane artykuły: (nie więcej niż 3)',
    items: relatedBlogsItems.value,
    class: 'col-span-12 mt-2'
  },
  {
    type: 'select',
    name: 'services',
    checkboxLabel: 'Powiązane serwisy: (nie więcej niż 7)',
    items: flattenSections.map(
      item => ({
        label: item.label,
        value: item.key
      })
    )
      .toSorted(
        (a, b) => a.value > b.value ? 1 : -1
      ),
    class: 'col-span-12 mt-2',
    multiple: true
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

const _handleSubmit = (event: unknown) => {
  handleSubmit({
    ...(event as BlogItemProps),
    seo: {
      title: (event as BlogItemProps).seoTitle || '',
      description: (event as BlogItemProps).seoDescription || '',
      keywords: (event as BlogItemProps).seoKeywords || ''
    }
  })
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
      checkboxgroup: {
        color: 'primary',
        ui: {
          legend: 'py-3 mt-2'
        }
      },
      checkbox: {
        color: 'primary'
      },
      button: {
        color: 'primary'
      }
    }"
    @submit="_handleSubmit"
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
