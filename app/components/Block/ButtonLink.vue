<script setup lang="ts">
type ButtonLinkProps = {
  href: string
  label: string
}

const props = defineProps<ButtonLinkProps>()
const attrs = useAttrs()
defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div class="text-center pt-6 border-t border-border">
    <UButton
      v-bind="attrs"
      :to="props.href"
      size="xl"
      trailing-icon="i-lucide-arrow-right"
      class="px-8 py-4"
    >
      {{ props.label }}
    </UButton>
  </div>
</template>
