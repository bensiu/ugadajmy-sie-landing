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
        th: 'w-16 text-right hidden md:table-cell',
        td: 'text-right font-semibold hidden md:table-cell'
      }
    }
  },
  {
    accessorKey: 'title',
    header: 'Moduł',
    meta: {
      class: {
        th: 'max-w-64',
        td: 'font-semibold text-wrap whitespace-normal col-start-1 col-span-2 align-middle sm:table-cell flex items-center'
      }
    }
  },
  {
    accessorKey: 'description',
    header: 'Opis',
    meta: {
      class: {
        td: 'text-wrap whitespace-normal col-span-3 sm:table-cell border-t sm:border-t-0'
      }
    }
  },
  {
    accessorKey: 'videoUrl',
    header: 'Wideo',
    meta: {
      class: {
        th: 'w-32 text-center',
        td: 'col-start-3 row-start-1 justify-self-end sm:table-cell text-center font-medium align-middle flex items-center sm:justify-items-center'
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

    <div class="rounded-xl border bg-background">
      <UTable
        :data="props.modules"
        :columns="columns"
        :ui="{
          thead: 'hidden sm:table-header-group bg-primary/5', // Hide headers on mobile
          tr: 'grid grid-cols-3 gap-x-4 gap-y-1 p-4 sm:p-0 sm:table-row border-b last:border-0',
          th: 'text-foreground font-semibold',
          td: 'align-middle'
        }"
      />
    </div>
  </div>
</template>
