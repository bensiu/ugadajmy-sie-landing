<script setup lang="ts">
interface GazdaFormsSkeletonProps {
  skeletonClass?: string
  upToNumber?: number
}

const props = withDefaults(
  defineProps<GazdaFormsSkeletonProps>(),
  {
    skeletonClass: 'h-14',
    upToNumber: 7
  }
)

const getRandomWidth = () => {
  const min = 40
  const max = 100
  const width = Math.floor(Math.random() * (max - min + 1)) + min

  return `${width}%`
}
</script>

<template>
  <div class="w-full grid gap-2">
    <USkeleton
      v-for="i in Math.floor(Math.random() * props.upToNumber) + 1"
      :key="i"
      :class="props.skeletonClass"
      :style="{ width: getRandomWidth() }"
    />
  </div>
</template>
