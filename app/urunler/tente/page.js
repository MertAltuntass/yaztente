import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone } from 'lucide-react'

const products = [
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    title: 'Motorlu Kol Tente',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Uzaktan kumanda ile kolayca kontrol edilebilen, rüzgar ve yağmur sensörlü modern sistemler.',
    features: ['Motorlu Açma / Kapama', 'Rüzgar Sensörü', 'Güneş Sensörü', 'Uzaktan Kumanda', 'Akıllı Ev Uyumlu', '5 Yıl Garanti'],
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    title: 'Manuel Kol Tente',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekonomik ve kullanışlı, elle açıp kapanabilen kol tente sistemleri.',
    features: ['Elle Açma / Kapama', 'Çelik Kol Mekanizması', 'Çeşitli Kumaş Renkleri', 'Kolay Montaj', '3 Yıl Garanti'],
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    title: 'Sabit Tente (Markiz)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mağaza ve işyerleri için görsel cazibesi yüksek sabit markiz tente sistemleri.',
    features: ['Özel Baskı İmkanı', 'LED Aydınlatma Seçeneği', 'Çerçeveli / Çerçevesiz', 'Her Ölçüde Üretim'],
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    title: 'Dikey Tente (Stor)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pencere ve kapı önlerine uygun dikey açılan stor tente sistemleri.',
    features: ['Dikey Açılım', 'Güneş Isı Kontrolü', 'Rüzgar Engeli', 'Gizlilik Sağlar'],
  },
]

export default function TentePage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Ürünlerimiz</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Tente Sistemleri</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Balkon, teras ve bahçeleriniz için profesyonel tente çözümleri
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/urunler" className="hover:text-primary transition-colors">Ürünler</Link>
            <span>/</span>
            <span className="text-white">Tente Sistemleri</span>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {products.map((p, i) => (
            <div key={p.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
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
                  Teklif Al
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
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
