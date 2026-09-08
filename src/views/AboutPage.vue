<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import SectionHeader from '../components/SectionHeader.vue'
import ImageLightbox from '../components/ImageLightbox.vue'
import CTASection from '../components/CTASection.vue'
import type { GalleryImage } from '../components/ImageLightbox.vue'
import { ref } from 'vue'

import factoryImg from '../bilder/Bildpålokalen.jpg'
import workerImg from '../bilder/bildpåarbetare.jpg'
import cncImg from '../bilder/precisioncnc.jpeg'
import visitorsImg from '../bilder/mullersbild.jpg'

const lightboxOpen = ref(false)
const startIndex = ref(0)

const galleryImages: GalleryImage[] = [
  { src: workerImg, alt: 'Våra medarbetare i produktionen' },
  { src: visitorsImg, alt: 'Besök vid vår robotiserade produktionscell' },
  { src: cncImg, alt: 'Precisionsbearbetning i CNC-maskin' },
  { src: factoryImg, alt: 'Anläggningen i Borås' },
]

const openAt = (index: number) => {
  startIndex.value = index
  lightboxOpen.value = true
}

const values = [
  {
    title: 'Precision',
    text: 'Varje komponent tillverkas med noggrannhet och repeterbarhet. Vi accepterar inget annat än rätt kvalitet.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Innovation',
    text: 'Genom ständig utveckling och investering i ny teknik förbättrar vi våra processer och produkter.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0013.5 20h-3a3.374 3.374 0 00-1.486-2.758l-.548-.547z',
  },
  {
    title: 'Tillförlitlighet',
    text: 'Sedan 1970 har vi byggt långsiktiga relationer med kunder över hela världen. Leveranssäkerhet är nyckeln.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
]

const timeline = [
  {
    year: '1970',
    title: 'Företaget grundas',
    text: 'Müller Mekaniska AB startar som ett familjeföretag i Borås med fokus på precisionsbearbetning.',
  },
  {
    year: '1990',
    title: 'Expansion och nya marknader',
    text: 'Investering i moderna maskiner och internationell expansion inom formverktyg och plastindustrin.',
  },
  {
    year: 'Idag',
    title: '40 experter, 7000 m²',
    text: 'Idag är vi ca 40 dedikerade medarbetare i en 7000 m² stor, modern fabrik i Borås.',
  },
]

const certifications = [
  { code: 'ISO', title: 'ISO 9001:2015', text: 'Kvalitetsledning' },
  { code: 'ISO', title: 'ISO 14001', text: 'Miljöledning' },
  { code: 'CE', title: 'CE-märkning', text: 'Maskindirektiv' },
  { code: 'RoHS', title: 'RoHS Compliance', text: 'Miljövänlig produktion' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <PageHero
      eyebrow="Sedan 1970"
      title="Precision Redefined"
      lead="I över 50 år har Müller Mekaniska AB levererat precisionkomponenter i världsklass till ledande aktörer inom formverktyg och plastindustri."
      :image="workerImg"
      image-alt="Müller Mekaniska — produktion"
    />

    <!-- Intro -->
    <section class="section-padding bg-white dark:bg-dark">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div v-reveal>
            <span class="eyebrow">Om oss</span>
            <h2 class="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Ett familjeföretag i världsklass
            </h2>
            <p class="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Müller Mekaniska AB är ett familjeägt, svenskt precisionsteknikföretag baserat i Borås. Vi specialiserar oss på högkvalitativa komponenter för formverktyg och plastindustrin, och är en pålitlig partner för kunder i över 50 länder.
            </p>
            <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Vår ledande position bygger på en kombination av expertis, moderna maskiner, strikt kvalitetskontroll och ett dedikerat team av 40 erfarna medarbetare. Vi är certifierade enligt ISO 9001 och levererar komponenter som möter internationella standarder.
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <RouterLink to="/kontakt" class="btn-primary">Diskutera ditt projekt</RouterLink>
              <RouterLink to="/kompetenser" class="btn-outline">Våra kompetenser</RouterLink>
            </div>
          </div>

          <!-- Gallery -->
          <div v-reveal="150" class="grid grid-cols-2 gap-5 md:gap-6">
            <button
              v-for="(image, index) in galleryImages"
              :key="image.src"
              class="group relative rounded-2xl overflow-hidden shadow-soft-lg focus-visible:outline-2 focus-visible:outline-accent-orange"
              :class="index === 0 || index === 3 ? 'col-span-2 h-52 md:h-64' : 'h-40 md:h-48'"
              :aria-label="`Förstora bild: ${image.alt}`"
              @click="openAt(index)"
            >
              <img :src="image.src" :alt="image.alt" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors flex items-center justify-center">
                <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding bg-surface dark:bg-metal-gray/40">
      <div class="container-custom">
        <SectionHeader
          v-reveal
          eyebrow="Våra värden"
          title="Vad vi står för"
          lead="Dessa värden genomsyrar allt vi gör — från första ritning till slutlig kvalitetskontroll."
        />

        <div class="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
          <div
            v-for="(value, index) in values"
            :key="value.title"
            v-reveal="index * 100"
            class="group bg-white dark:bg-dark rounded-2xl p-8 border border-gray-200 dark:border-gray-800 card-hover hover:border-accent-orange dark:hover:border-accent-orange"
          >
            <div class="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-orange transition-colors duration-300">
              <svg class="w-6 h-6 text-accent-orange group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" :d="value.icon" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ value.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ value.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline / History -->
    <section class="section-padding bg-white dark:bg-dark">
      <div class="container-custom max-w-4xl">
        <SectionHeader
          v-reveal
          eyebrow="Vår historia"
          title="Från start till världsklass"
          lead="En resa av innovation, dedikation och ständig förbättring."
        />

        <div v-reveal class="mt-16 space-y-0">
          <div
            v-for="(item, index) in timeline"
            :key="item.year"
            v-reveal
            class="relative flex gap-6 md:gap-8"
          >
            <!-- Timeline marker -->
            <div class="flex flex-col items-center">
              <div class="w-11 h-11 rounded-full bg-accent-orange flex items-center justify-center text-white font-extrabold shadow-glow flex-shrink-0">
                {{ index + 1 }}
              </div>
              <div
                v-if="index < timeline.length - 1"
                class="w-0.5 flex-grow min-h-16 bg-gradient-to-b from-accent-orange/50 to-gray-300 dark:to-gray-700 mt-3"
              ></div>
            </div>

            <!-- Content -->
            <div class="pb-14 pt-1.5">
              <div class="text-sm font-extrabold text-accent-orange uppercase tracking-widest mb-1.5">{{ item.year }}</div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2.5">{{ item.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Facility -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0">
        <img :src="workerImg" alt="" class="w-full h-full object-cover" loading="lazy" />
        <div class="absolute inset-0 bg-dark/85"></div>
      </div>
      <div class="container-custom section-padding relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div v-reveal>
            <span class="eyebrow">Vår anläggning</span>
            <h2 class="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              7000 m² modern fabrik
            </h2>
            <p class="mt-6 text-lg text-gray-300 leading-relaxed">
              Vår anläggning i Borås är utrustad med moderna maskiner för svarvning, fräsning, trådgnistning, slipning och omfattande kvalitetskontroll. Här arbetar ca 40 erfarna medarbetare med allt från unika prototyper till större serier.
            </p>
            <div class="mt-8">
              <RouterLink to="/kontakt" class="btn-primary">Boka ett besök</RouterLink>
            </div>
          </div>
          <div v-reveal="150" class="grid grid-cols-2 gap-5 md:gap-6">
            <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
              <div class="text-4xl md:text-5xl font-extrabold text-accent-orange mb-2">7000m²</div>
              <div class="text-white font-bold">Produktionsyta</div>
              <div class="text-gray-400 text-sm mt-1.5">Borås, Sverige</div>
            </div>
            <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
              <div class="text-4xl md:text-5xl font-extrabold text-accent-orange mb-2">40</div>
              <div class="text-white font-bold">Medarbetare</div>
              <div class="text-gray-400 text-sm mt-1.5">Erfaren arbetskraft</div>
            </div>
            <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
              <div class="text-4xl md:text-5xl font-extrabold text-accent-orange mb-2">50+</div>
              <div class="text-white font-bold">År i industrin</div>
              <div class="text-gray-400 text-sm mt-1.5">Sedan 1970</div>
            </div>
            <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
              <div class="text-4xl md:text-5xl font-extrabold text-accent-orange mb-2">50+</div>
              <div class="text-white font-bold">Länder</div>
              <div class="text-gray-400 text-sm mt-1.5">Globala leveranser</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section id="certifieringar" class="section-padding bg-surface dark:bg-metal-gray/40 scroll-mt-24">
      <div class="container-custom">
        <SectionHeader
          v-reveal
          eyebrow="Certifieringar"
          title="Standarder & certifieringar"
          lead="Vi möter och överskrider internationella standarder för kvalitet och säkerhet."
        />

        <div class="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div
            v-for="(cert, index) in certifications"
            :key="cert.title"
            v-reveal="index * 100"
            class="bg-white dark:bg-dark rounded-2xl p-7 text-center border border-gray-200 dark:border-gray-800 card-hover hover:border-accent-orange dark:hover:border-accent-orange"
          >
            <div class="text-3xl font-extrabold text-accent-orange mb-3">{{ cert.code }}</div>
            <div class="font-bold text-gray-900 dark:text-white">{{ cert.title }}</div>
            <div class="text-gray-500 dark:text-gray-400 text-sm mt-1.5">{{ cert.text }}</div>
          </div>
        </div>
      </div>
    </section>

    <CTASection />
  </div>

  <ImageLightbox v-model="lightboxOpen" :images="galleryImages" :start-index="startIndex" />
</template>
