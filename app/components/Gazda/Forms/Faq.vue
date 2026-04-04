<script setup lang="ts">
import type { FaqItem } from '~/types'
import * as v from 'valibot'

const props = defineProps<FaqItem & { uniqueKey: number }>()

// FORM definitions
const schema = v.object({
  silos: v.pipe(v.string()),
  counter: v.pipe(v.number(), v.minValue(0)),
  title: v.pipe(v.string(), v.minLength(8, 'Pytanie powinno być trochę dłuższe')),
  content: v.pipe(v.string(), v.minLength(18, 'Odpowiedź powinna być trochę dłuższa')),
  slug: v.pipe(v.string(), v.minLength(8, 'Slug powinien być trochę dłuższy')),
  active: v.pipe(v.boolean())
})

const _default = {
  silos: props.silos,
  counter: props.counter || 0,
  title: props.title || '',
  content: props.content || '',
  slug: props.slug || '',
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
    class: 'col-span-2 sm:col-span-2 sm:col-start-11 number-text-right',
    disabled: true
  },
  {
    label: 'Pytanie:',
    type: 'text',
    name: 'title',
    class: 'col-span-12',
    required: true
  },
  {
    label: 'Odpowiedź:',
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
    type: 'checkbox',
    name: 'active',
    // required: true,
    checkboxLabel: 'Aktywny'
  }
]

const { isSubmitted, isSubmitting, handleSubmit } = useContactForm('/api/faqs/')

const emits = defineEmits<{ submited: [value: boolean, silosId: string] }>()
watch([isSubmitted], () => {
  emits('submited', isSubmitted.value, props.silos)
})
</script>

<template>
  <ContactFormCard
    :schema="schema"
    :default="_default"
    :fields="fields"
    :is-submitting="isSubmitting"
    button-label="Zapisz pytanie"
    :ui="{
      checkbox: {
        color: 'primary'
      },
      button: {
        color: 'primary'
      }
    }"
    @submit="handleSubmit"
  />
</template>
