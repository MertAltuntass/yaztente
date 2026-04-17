export default function sitemap() {
  const base = 'https://yaztente.com.tr'

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/urunler`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/urunler/tente`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/urunler/pergola`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/urunler/kis-bahcesi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/urunler/diger`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/blog/balkon-tentesi-fiyatlari-2025`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/biyoklimatik-pergola-nedir`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/motorlu-tente-mi-manuel-tente-mi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/cam-balkon-sistemi-rehberi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/istanbul-tente-pergola-montaji`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/hakkimizda`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/iletisim`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
