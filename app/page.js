import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import Testimonials from '@/components/Testimonials'
import Link from 'next/link'
import { Shield, Zap, Award, Phone, ArrowRight, CheckCircle } from 'lucide-react'

const products = [
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    title: 'Tente Sistemleri',
    description: 'Motorlu ve manuel tente seçenekleriyle balkon, teras ve bahçelerinize konfor katın. UV korumalı kumaş seçenekleri.',
    href: '/urunler/tente',
    features: ['Motorlu & Manuel Seçenekler', 'UV Korumalı Kumaş', '5 Yıl Garanti', 'Ücretsiz Montaj'],
  },
  {
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    title: 'Pergola & Alüminyum Sistemler',
    description: 'Biyoklimatik pergola ve alüminyum sistemlerle dış mekanlarınızı dört mevsim kullanın.',
    href: '/urunler/pergola',
    features: ['Biyoklimatik Kanatlar', 'Sağlam Alüminyum Profil', 'Entegre Aydınlatma', 'Rüzgar Sensörü'],
  },
  {
    image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&q=80',
    title: 'Diğer Gölge Sistemleri',
    description: 'Güneşlik, branda, cam balkon ve daha fazlası. Her ihtiyaca özel profesyonel çözümler.',
    href: '/urunler/diger',
    features: ['Güneşlik Sistemleri', 'Branda Çözümleri', 'Cam Balkon', 'Özel Tasarım'],
  },
]

const features = [
  {
    icon: Shield,
    title: 'Kalite Güvencesi',
    description: 'Kullandığımız tüm malzemeler TSE sertifikalı ve uluslararası standartlara uygun.',
  },
  {
    icon: Zap,
    title: 'Hızlı Teslimat',
    description: 'Siparişinizi aldıktan sonra belirlenen süre içinde montajı tamamlıyoruz.',
  },
  {
    icon: Award,
    title: '5 Yıl Garanti',
    description: 'Tüm ürünlerimizde 5 yıl malzeme ve işçilik garantisi sunuyoruz.',
  },
  {
    icon: Phone,
    title: 'Ücretsiz Keşif',
    description: 'Uzman ekibimiz evinize gelerek ölçüm alır ve ücretsiz teklif sunar.',
  },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
  'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=600&q=80',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Products Section */}
      <section id="products" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Ürünlerimiz</span>
            <h2 className="section-title mt-2">Profesyonel Gölgelendirme<br />Çözümleri</h2>
            <p className="section-subtitle">
              Her mekan için özel tasarlanmış, kaliteli malzemelerle üretilen gölgelendirme sistemleri
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/urunler" className="btn-primary">
              Tüm Ürünleri Görüntüle
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Neden Biz?</span>
              <h2 className="section-title mt-2">10 Yıllık Tecrübeyle<br />Güvenilir Hizmet</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                YAZ Gölgelendirme Sistemleri olarak, müşterilerimizin hayallerini gerçeğe dönüştürüyoruz.
                Kaliteli malzeme, uzman ekip ve uygun fiyatlarla Türkiye genelinde hizmet veriyoruz.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['500+ Tamamlanan Proje', '10+ Yıllık Tecrübe', 'Türkiye Geneli Hizmet', '%100 Müşteri Memnuniyeti'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-primary shrink-0" />
                    <span className="text-sm font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Hemen İletişime Geç
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Right - Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="bg-cream rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-dark mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Projelerimiz</span>
            <h2 className="section-title mt-2">Tamamlanan Projelerden<br />Örnekler</h2>
            <p className="section-subtitle">
              Gerçekleştirdiğimiz projelerden bir kesit
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-2xl aspect-square group cursor-pointer">
                <img
                  src={src}
                  alt={`Proje ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/galeri" className="btn-primary">
              Tüm Projeleri Gör
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ücretsiz Keşif & Teklif İçin<br />Hemen Arayın!
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Uzman ekibimiz evinize gelir, ölçüm alır ve size en uygun çözümü sunar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20ücretsiz%20keşif%20talep%20ediyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp ile Yazın
            </a>
            <a
              href="tel:+905XXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              <Phone size={20} />
              Hemen Ara
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
