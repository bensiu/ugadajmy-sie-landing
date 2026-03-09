<script setup lang="ts">
import type { NewsCardItem, NewsItem } from '~/types'

const props = defineProps<NewsCardItem>()
const formatDate = (dateStr: string) => {
  try {
    return new Date(dateStr).toLocaleDateString('pl-PL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  } catch {
    return dateStr
  }
}

const emits = defineEmits<{ approve: [value: NewsItem] }>()
</script>

<template>
  <div
    :class="[
      'dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700',
      'hover:shadow-md transition-shadow transition-all duration-300 group',
      props.toEdit
        ? (
          props.approved
            ? 'bg-primary/5'
            : (
              props.approved !== undefined
                ? 'bg-destructive/5'
                : 'bg-white'
            )
        )
        : 'bg-white'
    ]"
  >
    <!-- eslint-disable vue/no-v-html -->
    <div
      :class="[
        'w-full mb-1 min-h-10 flex justify-between items-start'
      ]"
    >
      <div class="flex-1 min-w-0 pr-3">
        <p class="text-xs text-muted-foreground mb-3">
          {{ formatDate(props.published) }}
        </p>
        <h2
          class="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2"
          v-html="props.title"
        />
        <p
          class="text-sm text-muted-foreground line-clamp-2"
          v-html="props.content"
        />
      </div>
      <UIcon
        v-if="!props.toEdit"
        :name="props.icon"
        class="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1 px-4"
      />
      <div
        v-else
        class="h-full flex flex-col justify-between"
      >
        <UButton
          :class="[
            'px-4 shadow-lg disabled:bg-promary/20',
            props.approved
              ? 'bg-primary/20 hover:bg-primary/20'
              : 'bg-primary/85 hover:bg-primary'
          ]"
          :disabled="props.approved"
          aria-label="Dodaj do listy"
          @click="emits('approve', { ...props, approved: true })"
        >
          <UIcon
            name="lucide-check-circle"
            class="h-10 w-10"
          />
        </UButton>
        <div class="flex-grow">
          &nbsp;
        </div>
        <UButton
          :class="[
            'px-4 shadow-lg disabled:bg-destructive/20',
            !props.approved && props.approved === false
              ? 'bg-destructive/20 hover:bg-destructive/20'
              : 'bg-destructive/85 hover:bg-destructive'
          ]"
          :disabled="!props.approved && props.approved === false"
          aria-label="Usuń z listy"
          @click="emits('approve', { ...props, approved: false })"
        >
          <UIcon
            name="lucide-x"
            class="h-10 w-10"
          />
        </UButton>
      </div>
    </div>
  </div>
</template>
