import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'İletişim | Ücretsiz Tente Keşfi Beykoz - Yaz Tente',
  description: 'Beykoz İstanbul\'da tente, pergola ve kış bahçesi montajı için ücretsiz keşif talebi oluşturun. Hemen arayın: 0546 770 25 83 veya WhatsApp ile yazın.',
  keywords: 'tente keşif İstanbul, pergola teklif Beykoz, tente montaj iletişim, YAZ Gölgelendirme telefon',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://yaztente.com.tr/#localbusiness',
  name: 'Yaz Gölgelendirme Sistemleri',
  alternateName: 'YAZ Tente',
  description: 'İstanbul Beykoz merkezli profesyonel tente, biyoklimatik pergola, kış bahçesi ve cam balkon montaj firması. 10+ yıllık deneyim, 500+ tamamlanan proje.',
  url: 'https://yaztente.com.tr',
  telephone: '+90-546-770-25-83',
  email: 'satis@yaztente.com.tr',
  priceRange: '₺₺',
  currenciesAccepted: 'TRY',
  paymentAccepted: 'Nakit, Kredi Kartı, Havale',
  image: {
    '@type': 'ImageObject',
    url: 'https://yaztente.com.tr/logo.png',
    width: 320,
    height: 120,
  },
  logo: {
    '@type': 'ImageObject',
    url: 'https://yaztente.com.tr/logo.png',
    width: 320,
    height: 120,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kuruçeşme Çk No:5, Yeni Mahalle',
    addressLocality: 'Beykoz',
    addressRegion: 'İstanbul',
    postalCode: '34815',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.1082,
    longitude: 29.0950,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Beykoz' },
    { '@type': 'City', name: 'Üsküdar' },
    { '@type': 'City', name: 'Kadıköy' },
    { '@type': 'City', name: 'Ataşehir' },
    { '@type': 'City', name: 'Maltepe' },
    { '@type': 'City', name: 'Sarıyer' },
    { '@type': 'City', name: 'Beşiktaş' },
    { '@type': 'City', name: 'Şişli' },
    { '@type': 'City', name: 'Ümraniye' },
    { '@type': 'City', name: 'Çekmeköy' },
    { '@type': 'State', name: 'İstanbul' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Gölgelendirme Sistemleri',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Motorlu Kol Tente',
          description: 'Uzaktan kumanda ve sensörlü motorlu kol tente montajı',
          url: 'https://yaztente.com.tr/urunler/tente',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Manuel Kol Tente',
          description: 'Ekonomik ve kullanışlı manuel tente sistemleri',
          url: 'https://yaztente.com.tr/urunler/tente',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Biyoklimatik Pergola',
          description: 'Dört mevsim kullanım için motorlu alüminyum kanatlı pergola',
          url: 'https://yaztente.com.tr/urunler/pergola',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Alüminyum Pergola',
          description: 'Dayanıklı alüminyum profil pergola sistemleri',
          url: 'https://yaztente.com.tr/urunler/pergola',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Kış Bahçesi',
          description: 'Alüminyum profil ve ısıcam ile dört mevsim kış bahçesi',
          url: 'https://yaztente.com.tr/urunler/kis-bahcesi',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cam Balkon Sistemi',
          description: 'Temperli güvenlik camlı balkon ve veranda sistemleri',
          url: 'https://yaztente.com.tr/urunler/diger',
        },
      },
    ],
  },
  sameAs: [
    'https://yaztente.com.tr',
  ],
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    lines: ['0 (546) 770 25 83'],
    href: 'tel:+905467702583',
  },
  {
    icon: Mail,
    title: 'E-Posta',
    lines: ['satis@yaztente.com.tr'],
    href: 'mailto:satis@yaztente.com.tr',
  },
  {
    icon: MapPin,
    title: 'Adres',
    lines: ['Kuruçeşme Çk No:5, Yeni Mahalle', '34815 Beykoz/İstanbul'],
    href: '#',
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    lines: ['7 Gün 24 Saat Hizmetinizdeyiz'],
    href: null,
  },
]

export default function IletisimPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Bize Ulaşın</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">İletişim</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Ücretsiz keşif ve teklif için hemen iletişime geçin
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-white">İletişim</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-dark mb-2">İletişim Bilgileri</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir. Ücretsiz keşif için hemen arayın!
              </p>
            </div>

            {contactInfo.map(({ icon: Icon, title, lines, href }) => (
              <div key={title} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">{title}</h3>
                  {lines.map((line, i) => (
                    href && i === 0 ? (
                      <a key={i} href={href} className="block text-sm text-gray-500 hover:text-primary transition-colors">{line}</a>
                    ) : (
                      <p key={i} className="text-sm text-gray-500">{line}</p>
                    )
                  ))}
                </div>
              </div>
            ))}

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/905467702583?text=Merhaba%2C%20ücretsiz%20keşif%20talep%20ediyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-500 hover:bg-green-600 rounded-2xl p-5 transition-colors"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">WhatsApp ile Yazın</p>
                <p className="text-green-100 text-sm">7/24 Hızlı Yanıt</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-dark mb-2">Teklif Formu</h2>
              <p className="text-gray-500 text-sm mb-8">
                Aşağıdaki formu doldurun, WhatsApp üzerinden anında iletişime geçelim.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 bg-white rounded-3xl overflow-hidden shadow-sm">
          <div className="h-80 relative">
            <iframe
              src="https://www.google.com/maps?q=Kuru%C3%A7e%C5%9Fme+%C3%87k+No:5,+Yeni+Mahalle,+34815+Beykoz%2F%C4%B0stanbul&output=embed"
              width="100%"
              height="100%"
              style={{border:0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="YAZ Gölgelendirme Konum"
            ></iframe>
          </div>
          <div className="p-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 text-center">
              Adresimizi Google Haritalar üzerinden görüntülemek için{' '}
              <a href="https://maps.app.goo.gl/8mKJLr7eTs7ivA5B8" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                buraya tıklayın
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
