<script setup lang="ts">
import factoryImg from '../bilder/Bildpålokalen.jpg'
import workerImg from '../bilder/bildpåarbetare.jpg'
import machineImg from '../bilder/precisioncnc.jpeg'

const values = [
  {
    title: 'Precision',
    text: 'Varje komponent tillverkas med noggrannhet och repeterbarhet. Vi accepterar inget annat än rätt kvalitet.',
  },
  {
    title: 'Innovation',
    text: 'Genom ständig utveckling och investering i ny teknik förbättrar vi våra processer och produkter.',
  },
  {
    title: 'Tillförlitlighet',
    text: 'Sedan 1970 har vi byggt långsiktiga relationer med kunder över hela världen. Leveranssäkerhet är nyckeln.',
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
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative min-h-[50vh] flex items-center justify-center overflow-hidden section-padding">
      <img
        :src="factoryImg"
        alt="Müller Mekaniska fabrik"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="container-custom relative z-10 text-center max-w-4xl">
        <h1 class="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          Om Müller Mekaniska
        </h1>
        <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
          En pålitlig partner för precision, innovation och hållbar tillverkning sedan 1970.
        </p>
      </div>
    </section>

    <!-- Intro -->
    <section class="section-padding bg-white dark:bg-dark">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Svensk precisionsteknik
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Müller Mekaniska AB är ett svenskt precisionsteknikföretag baserat i Borås. Vi specialiserar oss på högkvalitativa komponenter för formverktyg och plastindustrin, och har levererat lösningar till kunder över hela världen i över 50 år.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Vår styrka ligger i kombinationen av erfarenhet, modern teknik och en dedikerad organisation som alltid sätter kvalitet och kundnöjdhet i första rummet.
            </p>
            <RouterLink to="/kontakt" class="btn-primary">
              Kontakta oss
            </RouterLink>
          </div>
          <div class="relative rounded-2xl overflow-hidden shadow-soft-lg">
            <img
              :src="machineImg"
              alt="Precisionsmaskin"
              class="w-full h-80 lg:h-[28rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding bg-gray-50 dark:bg-metal-gray border-y border-gray-200 dark:border-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Våra värderingar
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Det vi står för genomsyrar allt vi gör — från första ritning till färdig komponent.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="value in values"
            :key="value.title"
            class="bg-white dark:bg-dark rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ value.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ value.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section-padding bg-white dark:bg-dark">
      <div class="container-custom max-w-4xl">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Vår historia
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Från familjeföretag till internationell precisionsleverantör.
          </p>
        </div>

        <div class="space-y-12 relative pl-8 md:pl-0">
          <div
            v-for="(item, index) in timeline"
            :key="item.year"
            class="relative md:grid md:grid-cols-2 md:gap-12 items-center"
          >
            <div
              class="md:text-right"
              :class="index % 2 === 1 ? 'md:order-2 md:text-left' : ''"
            >
              <div class="text-4xl font-black text-accent-orange mb-2">{{ item.year }}</div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ item.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ item.text }}</p>
            </div>
            <div
              class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"
            ></div>
            <div
              class="hidden md:block absolute left-1/2 top-3 w-4 h-4 bg-accent-orange rounded-full transform -translate-x-1/2"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Facility -->
    <section class="section-padding relative overflow-hidden">
      <img
        :src="workerImg"
        alt="Müller Mekaniska team"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-dark/85"></div>
      <div class="container-custom relative z-10">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
              Modern fabrik i Borås
            </h2>
            <p class="text-lg text-gray-300 leading-relaxed">
              Vår 7000 m² stora anläggning rymmer moderna maskiner för svarvning, fräsning, trådgnistning, slipning och kvalitetskontroll. Här arbetar ca 40 erfarna medarbetare med allt från prototyper till större serier.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <div class="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div class="text-4xl font-black text-accent-orange mb-2">7000m²</div>
              <div class="text-white font-medium">Modern fabrik</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div class="text-4xl font-black text-accent-orange mb-2">40</div>
              <div class="text-white font-medium">Erfarna medarbetare</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div class="text-4xl font-black text-accent-orange mb-2">50+</div>
              <div class="text-white font-medium">År i industrin</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div class="text-4xl font-black text-accent-orange mb-2">Globalt</div>
              <div class="text-white font-medium">Leveranser</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-gray-50 dark:bg-metal-gray">
      <div class="container-custom text-center max-w-3xl">
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
          Vill du veta mer?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-10">
          Kontakta oss för att diskutera hur vi kan stötta ditt projekt med precisionstillverkning.
        </p>
        <RouterLink to="/kontakt" class="btn-primary text-lg py-4 px-10">
          Kontakta oss
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
