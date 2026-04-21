<script setup lang="ts" generic="T extends {
  counter: string | number | undefined; active: boolean, title: string, silos: string
}">
interface GazdaRecordsListProps {
  items: T[]
  badges?: string[]
  rootSilos?: string
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
      Nie ma jeszcze - napisz!
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
      :ui="{
        container: 'p-2',
        body: 'w-full'
      }"
      @click="onSelected(item)"
    >
      <template #body>
        <!-- eslint-disable vue/no-v-html -->
        <h4
          class="flex justify-between items-center w-full font-semibold text-xl"
        >
          <span v-html="item?.title" />
          <div
            v-if="props.badges && props.badges.length !== 0"
            class="ml-6 flex flex-col items-center gap-2"
          >
            <UBadge
              v-if="props.badges.includes('silos') && item.silos !== props.rootSilos"
              :label="item.silos.slice((props.rootSilos?.length || 0) + 1)"
              class="p-2 px-4 font-semibold"
            />
            <UBadge
              v-if="props.badges.includes('counter')"
              :label="item.counter"
              class="p-2 px-4 font-semibold"
            />
          </div>
        </h4>
      </template>
    </UPageCard>
  </UPageList>
</template>
