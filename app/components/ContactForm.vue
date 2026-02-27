<script setup lang="ts">
import * as v from 'valibot'

const schema = v.object({
  name: v.pipe(v.string(), v.minLength(2, 'Imię i nazwisko powino być trochę dłuższe')),
  email: v.pipe(v.string(), v.email('Podaj poprawny email adres')),
  phone: v.pipe(
    v.string(),
    // 1. Remove common formatting characters (spaces, hyphens, parentheses)
    v.transform(val => val.replace(/[\s\-()]/g, '')),
    // 2. Validate against Polish phone regex
    v.regex(
      /^(?:\+48|48)? ?[1-9]\d{8}$/,
      'Proszę podać poprawny numer telefonu +48 123 456 789'
    )
  ),
  subject: v.pipe(v.string()),
  message: v.pipe(v.string(), v.minLength(8, 'Wiadomość powina być trochę dłuższa')),
  rodo: v.pipe(v.literal(true, 'Musisz wyrazić zgodę na przetwarzanie danych osobowych'))
})

const _default = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  rodo: false
}

const fields = [
  {
    label: 'Imię i nazwisko:',
    type: 'text',
    name: 'name',
    class: 'col-span-12 sm:col-span-6',
    placeholder: 'Jan Kowalski',
    required: true
  },
  {
    label: 'Temat:',
    type: 'text',
    name: 'subject',
    class: 'col-span-12 sm:col-span-6',
    placeholder: 'np. Mediacja rodzinna'
  },
  {
    label: 'Telefon:',
    type: 'tel',
    name: 'phone',
    class: 'col-span-12 sm:col-span-6',
    placeholder: '+48 000 000 000',
    required: true
  },
  {
    label: 'Email:',
    type: 'text',
    name: 'email',
    class: 'col-span-12 sm:col-span-6',
    placeholder: 'jan@example.com',
    required: true
  },
  {
    label: 'Wiadomość:',
    type: 'textarea',
    name: 'message',
    placeholder: 'Opisz krótko swoją sytuację lub pytanie...',
    required: true,
    rows: 6
  },
  {
    type: 'checkbox',
    name: 'rodo',
    required: true,
    checkboxLabel: 'Wyrażam zgodę na przetwarzanie danych osobowych w celu kontaktu.'
  }
]

const { isSubmitted, isSubmitting, handleSubmit } = useContactForm()
</script>

<template>
  <ContactSuccessCard
    v-if="isSubmitted"
    title="Dziękuję!"
    description="Twoja wiadomość dotarła do&nbsp;mnie. Odezwę się w&nbsp;ciągu 24&nbsp;godzin."
    back-label="Wyślij kolejną wiadomość"
    :ui="{
      button: {
        class: 'p-3 px-5 bg-primary-100 font-semibold text-lg shadow-lg'
      }
    }"
    @clicked="isSubmitted = false"
  />

  <ContactFormCard
    v-else
    title="Wyślij wiadomość"
    :schema="schema"
    :default="_default"
    :fields="fields"
    :is-submitting="isSubmitting"
    button-label="Wyślij wiadomość"
    :ui="{
      button: {
        color: 'primary'
      }
    }"
    @submit="handleSubmit"
  />
</template>
