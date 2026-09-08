<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import SectionHeader from '../components/SectionHeader.vue'
import CTASection from '../components/CTASection.vue'

import robotImg from '../bilder/mullersmekaniska3.avif'
import workerImg from '../bilder/bildpåarbetare.jpg'

const capabilities = [
  {
    title: 'CNC-svarvning & fräsning',
    text: 'Moderna fleroperationsmaskiner för komplexa detaljer i både små och stora serier.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'Trådgnistning (Wire EDM)',
    text: 'Noggrann bearbetning av härdade material och komplexa geometrier.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Slipning, lapping & polering',
    text: 'Ytor med extrem finish för krävande applikationer inom formverktyg.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    title: 'Värme- & ytbehandling',
    text: 'Härdning och ytbehandling för maximal livslängd och slitstyrka.',
    icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z M9.879 16.121A3 3 0 1012.015 11L11 14L9.879 16.121z',
  },
  {
    title: 'Montering & kvalitetskontroll',
    text: 'Komplett slutmontering med dokumenterad mätning och provning.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    title: 'CAD-design & prototyping',
    text: 'Från idé till färdig ritning — vi hjälper dig hela vägen till första provdetaljen.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
  },
]

const processSteps = [
  { step: '01', title: 'Förfrågan & rådgivning', text: 'Vi går igenom dina krav, ritningar och önskemål tillsammans.' },
  { step: '02', title: 'Processval & offert', text: 'Vi väljer rätt processer och material och återkommer med en tydlig offert.' },
  { step: '03', title: 'Produktion', text: 'Tillverkning i vår fabrik i Borås med noggranna kontrollpunkter.' },
  { step: '04', title: 'Kvalitetskontroll', text: 'Varje detalj mäts och dokumenteras innan leverans.' },
  { step: '05', title: 'Leverans & support', text: 'Snabb leverans över hela världen med teknisk support efteråt.' },
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
    <PageHero
      eyebrow="Kompetenser"
      title="Komplett precisionsleverantör"
      lead="Med moderna maskiner, erfarna tekniker och över 50 års erfarenhet tar vi oss an allt från enstaka prototyper till större serier."
    />

    <!-- Capabilities -->
    <section class="section-padding bg-surface dark:bg-metal-gray/40">
      <div class="container-custom">
        <SectionHeader
          v-reveal
          eyebrow="Vad vi erbjuder"
          title="Vår kompetens"
          lead="Vi erbjuder hela kedjan från design och tillverkning till ytbehandling, montering och slutkontroll."
        />

        <div class="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div
            v-for="(cap, index) in capabilities"
            :key="cap.title"
            v-reveal="index * 80"
            class="group bg-white dark:bg-dark rounded-2xl p-7 border border-gray-200 dark:border-gray-800 card-hover hover:border-accent-orange dark:hover:border-accent-orange"
          >
            <div class="w-11 h-11 bg-accent-orange/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent-orange transition-colors duration-300">
              <svg class="w-5 h-5 text-accent-orange group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" :d="cap.icon" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2.5">{{ cap.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{{ cap.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section-padding bg-white dark:bg-dark">
      <div class="container-custom">
        <SectionHeader
          v-reveal
          eyebrow="Så arbetar vi"
          title="Från ritning till färdig komponent"
          lead="Varje projekt börjar med ett samtal om dina krav. Närheten mellan våra avdelningar gör att vi snabbt kan gå från ritning till färdig komponent."
        />

        <div class="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          <div
            v-for="(item, index) in processSteps"
            :key="item.step"
            v-reveal="index * 80"
            class="relative bg-surface dark:bg-metal-gray rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
          >
            <div class="text-4xl font-extrabold text-accent-orange/25 mb-3">{{ item.step }}</div>
            <h3 class="text-base font-bold text-gray-900 dark:text-white mb-2">{{ item.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ item.text }}</p>
          </div>
        </div>

        <div v-reveal class="mt-12 text-center">
          <RouterLink to="/kontakt" class="btn-primary">Starta ditt projekt</RouterLink>
        </div>
      </div>
    </section>

    <!-- Image band -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0">
        <img :src="workerImg" alt="" class="w-full h-full object-cover" loading="lazy" />
        <div class="absolute inset-0 bg-dark/85"></div>
      </div>
      <div class="container-custom section-padding relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div v-reveal>
            <span class="eyebrow">I verkstaden</span>
            <h2 class="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Där tekniken möter hantverket
            </h2>
            <p class="mt-6 text-lg text-gray-300 leading-relaxed">
              Kombinationen av erfarna maskinister och modern utrustning gör att vi kan ta oss an de mest krävande detaljerna — med högsta kvalitet i varje steg.
            </p>
          </div>
          <div v-reveal="150" class="rounded-2xl overflow-hidden shadow-2xl">
            <img :src="robotImg" alt="Robotiserad produktion hos Müller Mekaniska" loading="lazy" class="w-full h-72 object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Strengths -->
    <section class="section-padding bg-surface dark:bg-metal-gray/40">
      <div class="container-custom">
        <SectionHeader
          v-reveal
          eyebrow="Varför vi"
          title="Varför välja Müller Mekaniska?"
          lead="Vi kombinerar traditionellt hantverk med modern teknik för att leverera komponenter du kan lita på."
        />

        <div class="mt-16 grid sm:grid-cols-2 gap-6 md:gap-8">
          <div
            v-for="(item, index) in strengths"
            :key="item.title"
            v-reveal="index * 80"
            class="flex gap-5 bg-white dark:bg-dark rounded-2xl p-7 border border-gray-200 dark:border-gray-800 card-hover hover:border-accent-orange dark:hover:border-accent-orange"
          >
            <div class="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center flex-shrink-0 mt-1">
              <svg class="w-5 h-5 text-accent-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{{ item.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection />
  </div>
</template>
