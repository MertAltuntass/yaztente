import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone } from 'lucide-react'

export const metadata = {
  title: 'Kış Bahçesi Sistemleri | YAZ Gölgelendirme',
  description: 'Dört mevsim kullanılabilen kış bahçesi sistemleri. Alüminyum profil, ısı yalıtımlı cam ve özel tasarım seçenekleriyle yaşam alanınızı genişletin.',
  keywords: 'kış bahçesi, cam kış bahçesi, alüminyum kış bahçesi, teras kapatma, veranda sistemi',
}

const faqs = [
  {
    q: 'Kış bahçesi ne kadar sürede monte edilir?',
    a: 'Standart bir kış bahçesinin montajı proje büyüklüğüne göre 2-5 iş günü arasında tamamlanır. Özel tasarım ve büyük alanlar daha uzun sürebilir.',
  },
  {
    q: 'Kış bahçesi ısı yalıtımı sağlar mı?',
    a: 'Evet, çift camlı (ısıcam) sistemler ile ısı yalıtımı sağlanır. Kış aylarında soğuğu dışarıda tutarken yaz aylarında serin bir ortam oluşturur.',
  },
  {
    q: 'Kış bahçesi için ruhsat gerekli mi?',
    a: 'Kış bahçesi yapımı için çoğu durumda belediyeden yapı izni alınması gerekmektedir. Proje öncesinde ilgili belediye ile iletişime geçmenizi tavsiye ederiz.',
  },
  {
    q: 'Hangi cam seçenekleri mevcut?',
    a: 'Tek cam, ısıcam (çift cam), lamine güvenlik camı ve güneş kontrol camlı seçenekler mevcuttur. İhtiyacınıza göre en uygun seçeneği birlikte belirleriz.',
  },
  {
    q: 'Kış bahçesi her mevsim kullanılabilir mi?',
    a: 'Evet. Doğru cam ve havalandırma sistemi seçimi ile kış bahçenizi yılın 4 mevsimi konforlu şekilde kullanabilirsiniz.',
  },
]

const products = [
  {
    image: '/x1.jpeg',
    title: 'Alüminyum Kış Bahçesi',
    description: 'Dayanıklı alüminyum profil taşıyıcı sistem ve ısıcam kombinasyonuyla kış aylarında da sıcak, yaz aylarında serin bir alan sunar. Her ölçüde özel üretim yapılır.',
    features: ['Alüminyum Profil Taşıyıcı', 'Isıcam Seçeneği', 'Her Ölçüde Özel Üretim', 'Renkli Profil Seçenekleri', '1 Yıl Garanti'],
  },
  {
    image: '/x2.jpeg',
    title: 'Çatı Camlı Kış Bahçesi',
    description: 'Cam çatı sistemiyle doğal ışığı içeri alan, havalandırma pencereleriyle taze hava sağlayan kış bahçesi modeli. Bahçe ve teraslarınızı dört mevsim yaşanabilir mekanlara dönüştürür.',
    features: ['Cam Çatı Sistemi', 'Havalandırma Pencereleri', 'Doğal Aydınlatma', 'Güneş Kontrol Camı', 'Özel Tasarım'],
  },
  {
    image: '/x3.jpeg',
    title: 'Modern Kış Bahçesi',
    description: 'Mimari estetiğiyle öne çıkan modern kış bahçesi tasarımları. Sürme, açılır-kapanır veya sabit cam sistemleri ile evinize özel çözümler sunuyoruz.',
    features: ['Sürme Cam Sistemi', 'Açılır-Kapanır Seçenek', 'Güvenlik Camı', 'LED Aydınlatma Uyumlu', 'Özel Boyut Üretim'],
  },
]

export default function KisBahcesiPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'url(/x1.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
        <div className="absolute inset-0 bg-dark/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Ürünlerimiz</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Kış Bahçesi Sistemleri</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Dört mevsim kullanılabilen, enerji tasarruflu kış bahçesi çözümleri
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/urunler" className="hover:text-primary transition-colors">Ürünler</Link>
            <span>/</span>
            <span className="text-white">Kış Bahçesi</span>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {products.map((p, i) => (
          <div key={p.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-80 object-cover rounded-3xl shadow-xl"
              />
            </div>
            <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Kış Bahçesi</span>
              <h2 className="text-2xl md:text-3xl font-bold text-dark mt-2 mb-4">{p.title}</h2>
              <p className="text-gray-500 leading-relaxed mb-6">{p.description}</p>
              <ul className="space-y-2 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-primary shrink-0" />
                    <span className="text-sm font-medium text-dark">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/905467702583?text=Merhaba%2C%20k%C4%B1%C5%9F%20bah%C3%A7esi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Ücretsiz Teklif Al
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">SSS</span>
            <h2 className="text-3xl font-bold text-dark mt-2">Sıkça Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-cream rounded-2xl p-6">
                <h3 className="font-bold text-dark mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-dark py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Kış Bahçenizi Tasarlayalım</h2>
          <p className="text-gray-400 mb-8">Uzman ekibimiz ölçüm alarak size özel kış bahçesi projenizi hazırlasın.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/905467702583?text=Merhaba%2C%20k%C4%B1%C5%9F%20bah%C3%A7esi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp ile Yazın
              <ArrowRight size={18} />
            </a>
            <a href="tel:+905467702583" className="btn-outline">
              <Phone size={18} />
              Hemen Ara
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
