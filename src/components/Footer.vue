<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-dark text-white relative overflow-hidden">
    <!-- Subtle background accent -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -top-32 right-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-1/3 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom py-20 md:py-28 relative z-10">
      <!-- Top Section - Brand & CTA -->
      <div class="mb-16 pb-16 border-b border-white/10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <!-- Brand Info -->
          <div>
            <div class="flex items-center gap-4 mb-5">
              <img
                src="/bilder/logomullers.jpg"
                alt="Müller Mekaniska Logo"
                class="h-12 w-auto object-contain rounded-lg"
              />
              <div>
                <div class="font-extrabold text-2xl text-white leading-none">Müller</div>
                <div class="text-xs text-gray-400 font-bold tracking-widest leading-none mt-1.5">MEKANISKA AB</div>
              </div>
            </div>
            <p class="text-gray-400 leading-relaxed max-w-md">
              Högkvalitativa precisionkomponenter för formverktyg och plastindustrin. Sedan 1970.
            </p>
          </div>

          <!-- Quick Contact CTA -->
          <div class="bg-gradient-to-br from-accent-orange/10 to-transparent border border-accent-orange/20 rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
            <div>
              <h3 class="text-lg font-extrabold text-white mb-1">Redo att starta ett projekt?</h3>
              <p class="text-gray-400 text-sm">Vi svarar inom 24 timmar på vardagar.</p>
            </div>
            <RouterLink to="/kontakt" class="btn-primary text-sm flex-shrink-0">
              Kontakta oss
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Main Footer Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
        <!-- Navigation -->
        <div>
          <h4 class="font-extrabold text-white mb-5 text-xs uppercase tracking-widest">Navigation</h4>
          <ul class="space-y-3">
            <li><RouterLink to="/" class="text-gray-400 hover:text-accent-orange transition-colors font-medium text-sm">Hem</RouterLink></li>
            <li><RouterLink to="/om-oss" class="text-gray-400 hover:text-accent-orange transition-colors font-medium text-sm">Om oss</RouterLink></li>
            <li><RouterLink to="/produkter" class="text-gray-400 hover:text-accent-orange transition-colors font-medium text-sm">Produkter</RouterLink></li>
            <li><RouterLink to="/kompetenser" class="text-gray-400 hover:text-accent-orange transition-colors font-medium text-sm">Kompetenser</RouterLink></li>
            <li><RouterLink to="/kontakt" class="text-gray-400 hover:text-accent-orange transition-colors font-medium text-sm">Kontakt</RouterLink></li>
          </ul>
        </div>

        <!-- Information -->
        <div>
          <h4 class="font-extrabold text-white mb-5 text-xs uppercase tracking-widest">Information</h4>
          <ul class="space-y-3">
            <li><RouterLink to="/nyheter" class="text-gray-400 hover:text-accent-orange transition-colors font-medium text-sm">Nyheter</RouterLink></li>
            <li><RouterLink to="/om-oss#certifieringar" class="text-gray-400 hover:text-accent-orange transition-colors font-medium text-sm">Certifieringar</RouterLink></li>
            <li><RouterLink to="/kontakt" class="text-gray-400 hover:text-accent-orange transition-colors font-medium text-sm">Vanliga frågor</RouterLink></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-extrabold text-white mb-5 text-xs uppercase tracking-widest">Kontakt</h4>
          <ul class="space-y-3 text-sm">
            <li class="text-gray-400">Müller Mekaniska AB<br>Viaredsvägen 16<br>504 64 Borås, Sverige</li>
            <li>
              <a href="tel:+46334060" class="text-gray-400 hover:text-accent-orange transition-colors font-medium">+46 (0)33 40 60</a>
            </li>
            <li>
              <a href="mailto:info@muller.se" class="text-gray-400 hover:text-accent-orange transition-colors font-medium">info@muller.se</a>
            </li>
          </ul>
        </div>

        <!-- Certifications -->
        <div>
          <h4 class="font-extrabold text-white mb-5 text-xs uppercase tracking-widest">Certifieringar</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-center gap-2.5 text-gray-400 font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-accent-orange flex-shrink-0"></span>
              ISO 9001:2015
            </li>
            <li class="flex items-center gap-2.5 text-gray-400 font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-accent-orange flex-shrink-0"></span>
              ISO 14001
            </li>
            <li class="flex items-center gap-2.5 text-gray-400 font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-accent-orange flex-shrink-0"></span>
              CE-märkning
            </li>
            <li class="flex items-center gap-2.5 text-gray-400 font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-accent-orange flex-shrink-0"></span>
              RoHS
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-white/10 pt-10">
        <div class="flex flex-col md:flex-row justify-between items-center gap-3">
          <p class="text-gray-500 text-sm font-medium text-center md:text-left">
            &copy; {{ currentYear }} Müller Mekaniska AB. Alla rättigheter förbehållna.
          </p>
          <p class="text-gray-600 text-xs font-medium">
            Kvalitet genom innovation — sedan 1970
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
