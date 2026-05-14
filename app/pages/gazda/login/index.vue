<script setup lang="ts">
const handleSubmit = (username: string | boolean) => {
  if (username) {
    navigateTo('/gazda')
  } else {
    localStorage.removeItem('auth')
    console.log('Time to clean')
  }
}
</script>

<template>
  <div class=" flex items-center justify-center min-h-screen p-4">
    <GazdaFormsLogin
      class="w-full max-w-[320px] bg-white p-8 rounded-xl shadow-lg border-2 pt-2"
      @submited="handleSubmit"
    />
  </div>
</template>
