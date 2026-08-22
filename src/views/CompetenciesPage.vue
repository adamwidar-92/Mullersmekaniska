<script setup lang="ts">
const capabilities = [
  'CNC-svarvning och fräsning',
  'Trådgnistning (Wire EDM)',
  'Slipning, lapping och polering',
  'Värmebehandling och ytbehandling',
  'Montering och kvalitetskontroll',
  'CAD-design och prototyping',
]

const strengths = [
  {
    title: 'Hög precision',
    text: 'Vi tillverkar komponenter inom tiondels millimeternoggrannhet, med stabila processer och noggrann mätning i varje steg.',
  },
  {
    title: 'Flexibel produktion',
    text: 'Från prototyper och små serier till större volymer. Vi anpassar produktionen efter dina behov och tidsplaner.',
  },
  {
    title: 'Snabba leveranser',
    text: 'Modern maskinpark och erfarna tekniker gör att vi kan hålla korta ledtider utan att kompromissa med kvaliteten.',
  },
  {
    title: 'Kvalitet & miljö',
    text: 'Vi arbetar strukturerat med kvalitetskontroll och miljöcertifierad produktion enligt ISO 14001.',
  },
]
</script>

<template>
  <div>
    <!-- Intro -->
    <section class="section-padding border-b border-gray-200 dark:border-gray-800">
      <div class="container-custom max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
          Vår kompetens
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          Müller Mekaniska AB är en komplett precisionsleverantör för formverktyg och plastindustrin. Med moderna maskiner, erfarna tekniker och över 50 års erfarenhet tar vi oss an allt från enstaka prototyper till större serier.
        </p>
      </div>
    </section>

    <!-- Capabilities -->
    <section class="section-padding bg-gray-50 dark:bg-metal-gray">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Vad vi erbjuder
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Vi erbjuder hela kedjan från design och tillverkning till ytbehandling, montering och slutkontroll. Vår styrka ligger i komplexa detaljer där precision, ytkvalitet och funktion är avgörande.
            </p>
            <ul class="grid sm:grid-cols-2 gap-4">
              <li
                v-for="cap in capabilities"
                :key="cap"
                class="bg-white dark:bg-dark rounded-lg px-5 py-4 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-medium"
              >
                {{ cap }}
              </li>
            </ul>
          </div>

          <div class="bg-white dark:bg-dark rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-700">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Så arbetar vi
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Varje projekt börjar med ett samtal om dina krav. Sedan väljer vi rätt processer, material och kontrollpunkter för att säkerställa ett resultat som håller över tid. Närheten mellan våra avdelningar gör att vi snabbt kan gå från ritning till färdig komponent.
            </p>
            <RouterLink to="/kontakt" class="btn-primary">
              Diskutera ditt projekt
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Strengths -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Varför välja Müller Mekaniska?
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Vi kombinerar traditionellt hantverk med modern teknik för att leverera komponenter du kan lita på.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="item in strengths"
            :key="item.title"
            class="bg-gray-50 dark:bg-metal-gray rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {{ item.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
