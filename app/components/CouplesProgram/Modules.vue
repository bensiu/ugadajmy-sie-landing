<script setup lang="ts">
import { h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'

interface Module {
  number: string | number
  title: string
  description: string
  videoUrl: string
}

const UButton = resolveComponent('UButton')

const columns: TableColumn<Module>[] = [
  {
    accessorKey: 'number',
    header: 'Nr',
    meta: {
      class: {
        th: 'w-16 text-right',
        td: 'text-right font-semibold'
      }
    }
  },
  {
    accessorKey: 'title',
    header: 'Moduł',
    meta: {
      class: {
        th: 'w-64',
        td: 'font-semibold'
      }
    }
  },
  {
    accessorKey: 'description',
    header: 'Opis',
    meta: {
      class: {
        td: 'text-wrap whitespace-normal'
      }
    }
  },
  {
    accessorKey: 'videoUrl',
    header: 'Wideo',
    meta: {
      class: {
        th: 'w-32 text-center',
        td: 'text-center font-medium align-middle flex items-center justify-center'
      }
    },
    cell: ({ row }) => {
      if (!row.getValue('videoUrl')) {
        return 'Wkrótce'
      }

      return h(UButton, {
        to: row.getValue('videoUrl'),
        target: '_blank',
        icon: 'i-lucide-play',
        color: 'red',
        variant: 'solid',
        class: 'rounded-full w-10 h-10 flex items-center justify-center p-0 bg-red-500 hover:bg-red-600 text-white'
      })
    }
  }
]

const props = defineProps<{
  modules: Module[]
}>()
</script>

<template>
  <div class="animate-fade-up">
    <h3 class="text-2xl font-display font-bold text-center mb-8">
      Moduły Programu
    </h3>

    <div class="rounded-xl border bg-background overflow-hidden">
      <UTable
        :data="props.modules"
        :columns="columns"
        :ui="{
          thead: 'bg-primary/5',
          th: 'text-foreground font-semibold',
          td: 'align-middle'
        }"
      />
    </div>
  </div>
</template>
