export interface NewsItem {
  id: number
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  highlight: boolean
}

export const news: NewsItem[] = [
  {
    id: 2,
    title: 'Ny hemsida är lanserad',
    date: '2026-08-22',
    category: 'Digitalt',
    excerpt: 'Välkommen till vår nya webbplats. Här hittar du lättare information om våra produkter, kompetenser och kontaktuppgifter.',
    content:
      'Vi är glada att lansera vår nya webbplats. Syftet är att göra det enklare för dig som kund och partner att hitta rätt information om våra produkter, kompetenser och hur du kommer i kontakt med oss.\n\nHemsidan är byggd med modern teknik och anpassas automatiskt till mobil, surfplatta och dator. Vi har också lagt stort fokus på snabb laddning och tydlig navigation.',
    highlight: false,
  },
  {
    id: 3,
    title: 'Investering i ny precisionsutrustning',
    date: '2026-08-15',
    category: 'Investering',
    excerpt: 'Vi har investerat i den senaste generationens precisionsmaskiner för att öka produktionskapacitet och noggrannhet.',
    content:
      'För att möta ökad efterfrågan och höja kvalitetsnivån ytterligare har vi investerat i moderna precisionsmaskiner.\n\nInvesteringen stärker vår kapacitet inom både små serier och större volymer, och korta ledtider för våra kunder.',
    highlight: false,
  },
  {
    id: 1,
    title: 'Sommarstängt 2026',
    date: '2026-06-25',
    category: 'Aktuellt',
    excerpt: 'Vi har stängt för sommarsemester 6–24 juli. Vecka 31 har vi begränsad bemanning.',
    content:
      'We are closed for summer vacation from 6 – 24 of July (week 28 - week 30).\n\nFrom 27 – 31 of July (v.31) we will have limited staffing.\nOrders that will be placed during closing time will be handled in week 31/32.\n\nWe wish you a great summer!',
    highlight: true,
  },
]
