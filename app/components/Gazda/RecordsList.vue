<script setup lang="ts" generic="T extends { active: boolean, title: string }">
interface GazdaRecordsListProps {
  items: T[]
}

const props = defineProps<GazdaRecordsListProps>()
const emits = defineEmits<{ selected: [value: T] }>()
const onSelected = (value: T) => {
  emits('selected', value)
}
</script>

<template>
  <div
    v-if="props.items.length === 0"
  >
    <p>
      Nie ma !
    </p>
  </div>
  <UPageList v-else>
    <UPageCard
      v-for="(item, index) in props.items"
      :key="index"
      variant="outline"
      :class="[
        'mb-2 hover:bg-gray-100 hover:shadow-md cursor-pointer',
        item.active ? '' : 'bg-red-100 hover:bg-red-200'
      ]"
      @click="onSelected(item)"
    >
      <template #body>
        <!-- eslint-disable vue/no-v-html -->
        <h4
          class="font-semibold text-xl"
          v-html="item?.title"
        />
      </template>
    </UPageCard>
  </UPageList>
</template>
