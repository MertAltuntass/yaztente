import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Balkon tentesi fiyatları neye göre değişir?',
    a: 'Tente fiyatı; balkonun genişliği ve derinliği, motorlu ya da manuel sistem seçimi, kumaşın UV dayanım derecesi, rüzgar/güneş sensörü gibi ek özellikler ve montaj koşullarına göre değişir. Kesin fiyat için ücretsiz keşif yapılması gerekir.',
  },
  {
    q: 'Motorlu tente mi, manuel tente mi daha iyi?',
    a: 'Büyük balkon ve teraslarda motorlu kol tente konfor açısından çok daha avantajlıdır; uzaktan kumanda ve sensörlerle otomatik çalışır. Manuel tenteler ise daha uygun fiyatlı olup küçük balkonlar için yeterli bir çözüm sunar.',
  },
  {
    q: 'Tente kumaşı yağmura dayanıklı mı?',
    a: 'Su geçirmez apre kaplı akrilat kumaşlar hafif yağmura karşı koruma sağlar; ancak şiddetli yağış sırasında tentenin kapalı tutulması, kumaş ömrünü uzatır ve mekanizmayı korur.',
  },
  {
    q: 'Tente montajı ne kadar sürer?',
    a: 'Standart bir balkon tentesinin montajı genellikle yarım ile bir tam iş günü arasında tamamlanır. Büyük ticari cephe veya çoklu balkon uygulamalarında bu süre uzayabilir.',
  },
  {
    q: 'Tente bakımı nasıl yapılır?',
    a: 'Yılda bir kez kumaş temizliği ve mekanizma yağlaması yapılması önerilir. Güçlü rüzgar ve kar yağışı gibi aşırı hava koşullarında tenteyi kapalı tutmak, ömrünü önemli ölçüde uzatır.',
  },
  {
    q: 'İstanbul\'da tente montajı yapıyor musunuz?',
    a: 'Evet, Beykoz merkezli olarak İstanbul\'un tüm ilçelerinde tente montajı gerçekleştiriyoruz. Ücretsiz keşif için bize WhatsApp veya telefon aracılığıyla ulaşabilirsiniz.',
  },
]

const products = [
  {
    image: 'https://images.unsplash.com/photo-1562081208-418b67878d0f?w=800&q=80',
    title: 'Motorlu Kol Tente',
    description: 'Uzaktan kumanda veya akıllı telefon uygulamasıyla tek tuşta açılıp kapanan motorlu kol tenteler; rüzgar ve güneş sensörü sayesinde hava koşullarına göre otomatik çalışır. Akıllı ev sistemleriyle entegre edilebilen bu tenteler, balkon ve teraslarınıza konfor ve modern bir görünüm katar.',
    features: ['Motorlu Açma / Kapama', 'Rüzgar Sensörü', 'Güneş Sensörü', 'Uzaktan Kumanda', 'Akıllı Ev Uyumlu', '1 Yıl Garanti'],
  },
  {
    image: 'https://images.unsplash.com/photo-1725794440337-a8b6035c3a62?w=800&q=80',
    title: 'Manuel Kol Tente',
    description: 'Krank kolu veya elle çekme mekanizmasıyla kolayca açılıp kapanan manuel kol tenteler, bütçe dostu ve bakımı düşük bir gölgelendirme çözümü sunar. Çelik kol mekanizması ve geniş kumaş rengi seçenekleriyle balkonunuza estetik bir görünüm kazandırır.',
    features: ['Elle Açma / Kapama', 'Çelik Kol Mekanizması', 'Çeşitli Kumaş Renkleri', 'Kolay Montaj', '3 Yıl Garanti'],
  },
  {
    image: 'https://images.unsplash.com/photo-1749867817713-4dc76f47dca4?w=800&q=80',
    title: 'Sabit Tente (Markiz)',
    description: 'Mağaza, restoran ve işyeri cephelerine uygulanan sabit tenteler (markiz), markanızın logosunu taşıyabilen özel baskı seçeneğiyle hem tanıtım hem gölgelendirme işlevi görür. LED aydınlatma eklenerek gece görünürlüğü artırılabilir; her genişlik ve uzunlukta özel üretim yapılır.',
    features: ['Özel Baskı İmkanı', 'LED Aydınlatma Seçeneği', 'Çerçeveli / Çerçevesiz', 'Her Ölçüde Üretim'],
  },
  {
    image: 'https://images.unsplash.com/photo-1543033926-e422a368fa1c?w=800&q=80',
    title: 'Dikey Tente (Stor)',
    description: 'Pencere ve kapı önlerine dikey olarak inen stor tenteler, güneş ışınlarını ve ısıyı kontrol altına alırken dışarıdan görüşü kısıtlayarak gizlilik sağlar. Rüzgar engeli işlevi gören bu sistemler, balkon ve teras kenarlarını kapatmak için de yaygın biçimde tercih edilir.',
    features: ['Dikey Açılım', 'Güneş Isı Kontrolü', 'Rüzgar Engeli', 'Gizlilik Sağlar'],
  },
]

export default function TentePage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1562081208-418b67878d0f?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
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
                  href={`https://wa.me/905467702583?text=Merhaba%2C%20${encodeURIComponent(p.title)}%20hakkında%20bilgi%20almak%20istiyorum.`}
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
          <p className="text-orange-100 mb-6">Uzmanlarımız evinize gelir, ölçüm alır ve size en uygun çözümü sunar.</p>
          <a href="tel:+905467702583" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors">
            <Phone size={20} />
            Hemen Ara
          </a>
        </div>

        {/* SSS */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">SSS</span>
            <h2 className="text-2xl md:text-3xl font-bold text-dark mt-2">Tente Hakkında Sık Sorulan Sorular</h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-dark list-none">
                  {faq.q}
                  <ChevronDown size={20} className="text-primary shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="px-6 pb-6 text-gray-500 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
