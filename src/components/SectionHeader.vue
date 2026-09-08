<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    lead?: string
    align?: 'left' | 'center'
    dark?: boolean
  }>(),
  { eyebrow: '', lead: '', align: 'center', dark: false },
)
</script>

<template>
  <div v-reveal :class="align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'">
    <span v-if="eyebrow" class="eyebrow" :class="{ 'eyebrow-centered': align === 'center' }">
      {{ eyebrow }}
    </span>
    <h2
      class="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight"
      :class="dark ? 'text-white' : 'text-gray-900 dark:text-white'"
    >
      {{ title }}
    </h2>
    <p
      v-if="lead"
      class="mt-6 text-lg leading-relaxed"
      :class="dark ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'"
    >
      {{ lead }}
    </p>
  </div>
</template>
