import type { ProductItem } from '../components/ProductModal.vue'

export const products: ProductItem[] = [
  {
    id: 1,
    name: 'Two-stage ejector type FW',
    category: 'Utdrivare',
    description: 'För total kontroll av tvåstegs utstötning',
    features: [
      'Arbetar på övre sista sekvensen',
      'Finns i fyra storlekar för att täcka de flesta behov',
      'Enkel inställning och installation',
      'Första och andra slaglängden ställs in oberoende',
      'Härdade stålkomponenter för längre livslängd',
    ],
    image: '/bilder/produkter/Two-stage ejector type FW.jpg',
  },
  {
    id: 2,
    name: 'Two-stage ejector type G',
    category: 'Utdrivare',
    description: 'För total kontroll av tvåstegs utstötning',
    features: [
      'Arbetar på nedre sista sekvensen',
      'Finns i sex storlekar för att täcka de flesta behov',
      'Första och andra slaglängden ställs in oberoende',
      'Fasta slaglängder kan inte manipuleras eller ändras av misstag',
      'Härdade stålkomponenter för längre livslängd',
    ],
    image: '/bilder/produkter/Two-stage ejector type G.jpg',
  },
  {
    id: 3,
    name: 'Two-stage ejector type D',
    category: 'Utdrivare',
    description: 'För total kontroll av tvåstegs utstötning',
    features: [
      'Arbetar med helt separata steg',
      'Finns i fyra storlekar för att täcka de flesta behov',
      'Används i formverktyg där första och andra slaget ska arbeta helt separat från varandra',
      'Härdade stålkomponenter för längre livslängd',
    ],
    image: '/bilder/produkter/Two-stage ejector type D.jpg',
  },
  {
    id: 4,
    name: 'Mould gap filter type WSF',
    category: 'Filter',
    description: 'För formverktyg',
    features: [
      'Förhindrar att metallspån, osmält granulat etc. når formen',
      'Mild filtrering',
      'Lågt tryckfall',
      'Lätt att rengöra',
      'Filterpatronen är enkel att demontera med en utslagspinn',
      'Möjligt att förstora filtergapet med cylindrisk slipning',
    ],
    image: '/bilder/produkter/Mould gap filter type WSF.jpg',
  },
  {
    id: 5,
    name: 'Pneumatic quick release coupling type PK',
    category: 'Kopplingar',
    description: 'Snabbkoppling för pneumatiska system',
    features: [
      'Snabb och säker anslutning av verktyg och tillbehör',
      'Pneumatisk drift för effektiv koppling',
      'Robust konstruktion för industriell användning',
      'Kompatibel med vanliga pneumatiska system',
      'Lång livslängd och lågt underhållsbehov',
    ],
    image: '/bilder/produkter/PK168.svg',
  },
]
