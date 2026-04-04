<script setup lang="ts">
import { page } from '~/data/gazda'

setTimeout(async () => {
  $fetch('/api/auth/', {
    method: 'POST',
    server: false
  })
}, 3 * 1000)

const emits = defineEmits<{ selected: [value: string | number] }>()
const onSelected = (value: string | number) => {
  emits('selected', value)
}
</script>

<template>
  <div class="min-h-screen mt-18 p-3 max-w-(--ui-container) mx-auto">
    <UTabs
      :items="page.sections"
      class="w-full"
    >
      <template #content="{ item: titleItem }">
        <UTabs
          :items="titleItem.items"
          class="mt-1 px-1"
          orientation="vertical"
          :ui="{
            root: 'gap-4 items-start',
            list: 'gap-1 items-start'
          }"
          value-key="key"
          @update:model-value="onSelected"
        >
          <template #content="{ item }">
            <slot
              name="body"
              :item="item"
            />
          </template>
        </UTabs>
      </template>
    </UTabs>
  </div>
</template>
