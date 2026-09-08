<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    lead?: string
    image?: string
    imageAlt?: string
  }>(),
  { eyebrow: '', lead: '', image: '', imageAlt: '' },
)
</script>

<template>
  <section class="relative overflow-hidden bg-dark">
    <!-- Background -->
    <div v-if="image" class="absolute inset-0">
      <img :src="image" :alt="imageAlt" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark"></div>
    </div>
    <div v-else class="absolute inset-0">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-32 -left-24 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom relative z-10 section-padding">
      <div class="max-w-3xl" :class="{ 'mx-auto text-center': !image }">
        <span v-if="eyebrow" class="eyebrow animate-fade-in" :class="{ 'eyebrow-centered': !image }">
          {{ eyebrow }}
        </span>
        <h1
          class="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white animate-slide-up"
          style="animation-delay: 100ms"
        >
          {{ title }}
        </h1>
        <p
          v-if="lead"
          class="mt-6 text-lg md:text-xl leading-relaxed text-gray-300 animate-slide-up"
          style="animation-delay: 200ms"
        >
          {{ lead }}
        </p>
        <slot />
      </div>
    </div>

    <!-- Bottom fade into page background -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-orange/40 to-transparent"></div>
  </section>
</template>
