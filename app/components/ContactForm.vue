<script setup lang="ts">
const isSubmitted = ref(false)
const isSubmitting = ref(false)

const state = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

async function handleSubmit() {
  isSubmitting.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))

  isSubmitting.value = false
  isSubmitted.value = true

  // Reset form
  Object.assign(state, {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
}
</script>

<template>
  <div
    v-if="isSubmitted"
    class="h-full flex flex-col items-center justify-center text-center py-12"
  >
    <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
      <UIcon
        name="i-lucide-check-circle"
        class="h-8 w-8 text-primary"
      />
    </div>
    <h3 class="text-2xl font-display font-bold mb-3">
      Dziękuję!
    </h3>
    <p class="text-muted-foreground mb-6 max-w-sm">
      Twoja wiadomość dotarła do mnie. Odezwę się w ciągu 24 godzin.
    </p>
    <UButton
      variant="outline"
      @click="isSubmitted = false"
    >
      Wyślij kolejną wiadomość
    </UButton>
  </div>

  <form
    v-else
    class="space-y-6"
    @submit.prevent="handleSubmit"
  >
    <h3 class="text-xl font-display font-bold mb-5">
      Wyślij wiadomość
    </h3>

    <div class="grid sm:grid-cols-2 gap-4">
      <UFormField
        label="Imię i nazwisko *"
        name="name"
        class="w-full"
      >
        <UInput
          v-model="state.name"
          placeholder="Jan Kowalski"
          required
          class="w-full"
        />
      </UFormField>

      <UFormField
        label="Email *"
        name="email"
        class="w-full"
      >
        <UInput
          v-model="state.email"
          type="email"
          placeholder="jan@example.com"
          required
          class="w-full"
        />
      </UFormField>
    </div>

    <div class="grid sm:grid-cols-2 gap-4">
      <UFormField
        label="Telefon *"
        name="phone"
        class="w-full"
      >
        <UInput
          v-model="state.phone"
          type="tel"
          placeholder="+48 000 000 000"
          required
          class="w-full"
        />
      </UFormField>

      <UFormField
        label="Temat *"
        name="subject"
        class="w-full"
      >
        <UInput
          v-model="state.subject"
          placeholder="np. Mediacja rodzinna"
          required
          class="w-full"
        />
      </UFormField>
    </div>

    <UFormField
      label="Wiadomość"
      name="message"
      class="w-full"
    >
      <UTextarea
        v-model="state.message"
        placeholder="Opisz krótko swoją sytuację lub pytanie..."
        :rows="6"
        class="w-full"
      />
    </UFormField>

    <UButton
      type="submit"
      size="lg"
      block
      :loading="isSubmitting"
      icon="i-lucide-send"
      class="my-1"
    >
      Wyślij wiadomość
    </UButton>

    <p class="text-xs text-muted-foreground text-center mt-4">
      Wysyłając wiadomość, wyrażasz zgodę na&nbsp;przetwarzanie danych osobowych w&nbsp;celu odpowiedzi na&nbsp;zapytanie.
    </p>
  </form>
</template>
