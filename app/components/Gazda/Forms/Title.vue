<script setup lang="ts">
defineProps<{
  title: string
  isEditing: string | null
}>()

const emits = defineEmits(['add', 'cancel'])
</script>

<template>
  <h2 class="flex justify-between items-center w-full text-3xl font-semibold p-1 pb-2 border-b-2 mb-2">
    <span>{{ title }}</span>

    <div class="flex items-center">
      <UButton
        v-if="!isEditing"
        class="bg-primary"
        size="xl"
        icon="i-lucide-plus"
        @click="emits('add')"
      />

      <UButton
        v-else
        class="bg-secondary hover:bg-secondary/80"
        size="xl"
        icon="i-lucide-x"
        @click="emits('cancel')"
      />
    </div>
  </h2>
</template>
