<script setup lang="ts">
import type { SectionContentProps } from '~/types'

const props = defineProps<SectionContentProps & { class?: string }>()
</script>

<template>
  <div :class="['animate-fade-up', props.class]">
    <BlocksSectionHeader
      :title="props.title"
      :description="props.description"
      :lead="props.lead"
      title-color=" "
      class="text-left !mb-8"
      :ui="{
        description: '!text-base'
      }"
    />

    <div class="grid sm:grid-cols-2 gap-4">
      <BlockIndexCard
        v-for="item in props.items"
        :key="item.title"
        v-bind="item"
        class="section-subtle bg-secondary/30"
        :ui="{
          title: '!min-h-8'
        }"
      />
    </div>
  </div>
</template>
