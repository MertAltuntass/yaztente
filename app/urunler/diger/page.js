import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone } from 'lucide-react'

const products = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'Bahçe Güneşliği',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Büyük alanlara uygun, yüksek UV koruması sunan şemsiye tipi ve sabit güneşlik sistemleri.',
    features: ['Geniş Kapsama Alanı', 'UV Filtreli Kumaş', 'Alüminyum Direk', 'Rüzgar Dirençli Yapı'],
  },
  {
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    title: 'Branda & Kapı Sistemleri',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Depo, garaj, fabrika ve ticari alanlara uygun dayanıklı branda perde ve endüstriyel kapı sistemleri.',
    features: ['PVC Branda Perde', 'Endüstriyel Kapı', 'Isı & Ses Yalıtımı', 'Her Ölçüde Üretim'],
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    title: 'Cam Balkon & Veranda',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Isıtmalı cam balkon ve veranda sistemleriyle balkonunuzu dört mevsim kullanabileceğiniz bir yaşam alanına dönüştürün.',
    features: ['Temperli Güvenlik Camı', 'Çatı Isıtma Seçeneği', 'Rüzgar & Yağmur Engeli', 'Gizlilik Seçenekleri'],
  },
]

export default function DigerPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Ürünlerimiz</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Diğer Gölge Sistemleri</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Güneşlik, branda, cam balkon ve daha fazlası
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/urunler" className="hover:text-primary transition-colors">Ürünler</Link>
            <span>/</span>
            <span className="text-white">Diğer Sistemler</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {products.map((p, i) => (
            <div key={p.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img src={p.image} alt={p.title} className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">{p.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{p.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0" />
                      <span className="text-sm text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20${encodeURIComponent(p.title)}%20hakkında%20bilgi%20almak%20istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Teklif Al <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ücretsiz Ölçüm & Keşif</h2>
          <p className="text-orange-100 mb-6">Uzman ekibimiz evinize gelir, ölçüm alır ve size en uygun çözümü sunar.</p>
          <a href="tel:+905XXXXXXXXX" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors">
            <Phone size={20} />
            Hemen Ara
          </a>
        </div>
      </div>
    </div>
  )
}
