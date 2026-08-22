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
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden section-padding">
      <img
        :src="factoryImg"
        alt="Müller Mekaniska fabrik"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/75"></div>
      <div class="container-custom relative z-10 text-center max-w-5xl">
        <div class="mb-6 inline-block">
          <span class="bg-accent-orange text-dark px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-widest">
            Sedan 1970
          </span>
        </div>
        <h1 class="text-5xl md:text-8xl font-black text-white mb-8 leading-tight">
          Precision Redefined
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          För över 50 år har Müller Mekaniska AB levererat världsklass precisionkomponenter till ledande aktörer inom formverktyg och plastindustrin.
        </p>
      </div>
    </section>

    <!-- Intro -->
    <section class="section-padding bg-white dark:bg-dark">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="mb-6 inline-block">
              <span class="text-accent-orange font-bold text-sm uppercase tracking-widest">Om Oss</span>
            </div>
            <h2 class="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Svensk precisionsteknik i världsklass
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Müller Mekaniska AB är ett familjeägt, svenskt precisionsteknikföretag baserat i Borås. Vi specialiserar oss på högkvalitativa komponenter för formverktyg och plastindustrin, och är en pålitlig partner för kunder i över 50 länder.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Vår ledande position i industrin bygger på en kombination av expertis, moderna maskiner, strikt kvalitetskontroll och ett dedikerat team av 40 erfarna medarbetare. Vi är certifierade enligt ISO 9001 och levererar komponenter som möter internationella standarder.
            </p>
            <div class="flex flex-wrap gap-4">
              <RouterLink to="/kontakt" class="btn-primary">
                Diskutera ditt projekt
              </RouterLink>
              <a href="#values" class="btn-outline">
                Läs mer om oss
              </a>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              :src="machineImg"
              alt="Precisionsmaskin"
              class="w-full h-96 lg:h-[32rem] object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="bg-dark border-y border-gray-800">
      <div class="container-custom py-12">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-black text-accent-orange mb-2">50+</div>
            <div class="text-sm font-bold text-gray-400 uppercase tracking-widest">År i industrin</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-black text-accent-orange mb-2">40</div>
            <div class="text-sm font-bold text-gray-400 uppercase tracking-widest">Experter</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-black text-accent-orange mb-2">7000m²</div>
            <div class="text-sm font-bold text-gray-400 uppercase tracking-widest">Modern fabrik</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-black text-accent-orange mb-2">50+</div>
            <div class="text-sm font-bold text-gray-400 uppercase tracking-widest">Länder</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section id="values" class="section-padding bg-white dark:bg-dark">
      <div class="container-custom">
        <div class="text-center mb-20">
          <span class="text-accent-orange font-bold text-sm uppercase tracking-widest">Våra värden</span>
          <h2 class="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mt-4 mb-6">
            Vad vi står för
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Dessa värden genomsyrar allt vi gör — från första ritning till slutlig kvalitetskontroll.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="value in values"
            :key="value.title"
            class="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-metal-gray dark:to-dark rounded-2xl p-10 border border-gray-200 dark:border-gray-700 hover:border-accent-orange dark:hover:border-accent-orange transition-all duration-300 hover:shadow-lg"
          >
            <div class="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-orange/20 transition-colors">
              <div class="w-6 h-6 rounded-full border-2 border-accent-orange"></div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ value.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              {{ value.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline / History -->
    <section class="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-metal-gray dark:to-dark">
      <div class="container-custom max-w-4xl">
        <div class="text-center mb-20">
          <span class="text-accent-orange font-bold text-sm uppercase tracking-widest">Vår historia</span>
          <h2 class="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mt-4 mb-6">
            Från start till världsklass
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            En resa av innovation, dedikation och konstant förbättring.
          </p>
        </div>

        <div class="space-y-12">
          <div
            v-for="(item, index) in timeline"
            :key="item.year"
            class="relative flex gap-8"
          >
            <!-- Timeline marker -->
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-accent-orange flex items-center justify-center text-dark font-black text-lg flex-shrink-0 shadow-lg">
                {{ index + 1 }}
              </div>
              <div
                v-if="index < timeline.length - 1"
                class="w-1 h-24 bg-gradient-to-b from-accent-orange to-gray-300 dark:to-gray-700 mt-4"
              ></div>
            </div>

            <!-- Content -->
            <div class="pb-12 pt-2">
              <div class="text-lg font-black text-accent-orange mb-2">{{ item.year }}</div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">{{ item.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{{ item.text }}</p>
            </div>
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
      <div class="absolute inset-0 bg-dark/80"></div>
      <div class="container-custom relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-accent-orange font-bold text-sm uppercase tracking-widest mb-4 inline-block">Vår anläggning</span>
            <h2 class="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              7000 m² modern fabrik
            </h2>
            <p class="text-xl text-gray-300 leading-relaxed mb-8 font-medium">
              Vår state-of-the-art anläggning i Borås är utrustad med moderna maskiner för svarvning, fräsning, trådgnistning, slipning och omfattande kvalitetskontroll. Här arbetar ca 40 erfarna medarbetare med allt från unika prototyper till större serier, 24/7.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <RouterLink to="/kontakt" class="btn-primary">
                Besök oss
              </RouterLink>
              <a href="#" class="btn-outline text-white border-white hover:bg-white/10">
                Se video av fabrik
              </a>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-colors">
              <div class="text-5xl font-black text-accent-orange mb-3">7000m²</div>
              <div class="text-white font-bold text-lg">Produktionsyta</div>
              <div class="text-gray-400 text-sm mt-2">Borås, Sverige</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-colors">
              <div class="text-5xl font-black text-accent-orange mb-3">40</div>
              <div class="text-white font-bold text-lg">Medarbetare</div>
              <div class="text-gray-400 text-sm mt-2">Erfaren arbetskraft</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-colors">
              <div class="text-5xl font-black text-accent-orange mb-3">50+</div>
              <div class="text-white font-bold text-lg">År i industrin</div>
              <div class="text-gray-400 text-sm mt-2">Sedan 1970</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-colors">
              <div class="text-5xl font-black text-accent-orange mb-3">50+</div>
              <div class="text-white font-bold text-lg">Länder</div>
              <div class="text-gray-400 text-sm mt-2">Globala leveranser</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="section-padding bg-gray-50 dark:bg-metal-gray border-y border-gray-200 dark:border-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="text-accent-orange font-bold text-sm uppercase tracking-widest">Certifieringar</span>
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-4 mb-6">
            Standarder & Certifieringar
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Vi möter och överskrider internationella standarder för kvalitet och säkerhet.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white dark:bg-dark rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:border-accent-orange transition-colors">
            <div class="text-4xl font-black text-accent-orange mb-4">ISO</div>
            <div class="font-bold text-gray-900 dark:text-white text-lg">ISO 9001:2015</div>
            <div class="text-gray-600 dark:text-gray-400 text-sm mt-2">Kvalitetsledning</div>
          </div>
          <div class="bg-white dark:bg-dark rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:border-accent-orange transition-colors">
            <div class="text-4xl font-black text-accent-orange mb-4">ISO</div>
            <div class="font-bold text-gray-900 dark:text-white text-lg">ISO 14001</div>
            <div class="text-gray-600 dark:text-gray-400 text-sm mt-2">Miljöledning</div>
          </div>
          <div class="bg-white dark:bg-dark rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:border-accent-orange transition-colors">
            <div class="text-4xl font-black text-accent-orange mb-4">CE</div>
            <div class="font-bold text-gray-900 dark:text-white text-lg">CE Märkning</div>
            <div class="text-gray-600 dark:text-gray-400 text-sm mt-2">Maskindirektiv</div>
          </div>
          <div class="bg-white dark:bg-dark rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:border-accent-orange transition-colors">
            <div class="text-4xl font-black text-accent-orange mb-4">RoHS</div>
            <div class="font-bold text-gray-900 dark:text-white text-lg">RoHS Compliance</div>
            <div class="text-gray-600 dark:text-gray-400 text-sm mt-2">Miljövänlig</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-gradient-to-r from-dark via-metal-gray to-dark relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-accent-orange opacity-10 rounded-full filter blur-3xl"></div>
      </div>
      <div class="container-custom text-center max-w-4xl relative z-10">
        <h2 class="text-4xl md:text-6xl font-black text-white mb-6">
          Vill du arbeta med oss?
        </h2>
        <p class="text-xl text-gray-300 mb-12 font-medium">
          Vi är alltid intresserade av att diskutera nya projekt och samarbeten. Kontakta oss idag för en kostnadsfri konsultation.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <RouterLink to="/kontakt" class="btn-primary text-lg py-4 px-10">
            Börja projekt
          </RouterLink>
          <a href="mailto:info@muller.se" class="btn-outline text-white border-white hover:bg-white/10 text-lg py-4 px-10">
            Skicka e-post
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
