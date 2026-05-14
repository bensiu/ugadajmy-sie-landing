<script setup lang="ts">
import type { GazdaUserResponse } from '~~/app/types'
import * as v from 'valibot'

// FORM definitions
const schema = v.object({
  usernamo: v.pipe(v.string()),
  passwordo: v.pipe(v.string())
  // rememberMe: v.pipe(v.boolean())
})

const _default = {
  usernamo: '',
  passwordo: '',
  rememberMe: false
}

const fields = [
  {
    label: 'Uzytkownik:',
    type: 'text',
    name: 'usernamo',
    class: 'col-span-12',
    required: true
  },
  {
    label: 'Hasło:',
    type: 'password',
    name: 'passwordo',
    class: 'col-span-12 mb-6',
    required: true
  // },
  // {
  //   type: 'checkbox',
  //   name: 'rememberMe',
  //   checkboxLabel: 'Pamiętaj mnie',
  //   class: 'col-span-12'
  }
]

const { isSubmitting, handleSubmit } = useContactForm('/api/gazda/logino')
const emits = defineEmits<{ submited: [value: string | boolean] }>()

const _handleSubmit = async (event: unknown) => {
  await handleSubmit(event).then(
    (result) => {
      localStorage.setItem('auth', JSON.stringify(result))
      console.log('RESULT : ', result)
      emits('submited', (result as unknown as GazdaUserResponse)?.username || false)
    }
  )
}
</script>

<template>
  <ContactFormCard
    :schema="schema"
    :default="_default"
    :fields="fields"
    :is-submitting="isSubmitting"
    button-label="Login"
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
  />
</template>
