'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Filter } from 'lucide-react'

const allProducts = [
  // Tente
  {
    category: 'tente',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    title: 'Motorlu Kol Tente',
    description: 'Uzaktan kumanda ile açılıp kapanan, rüzgar sensörlü modern motorlu kol tente sistemleri.',
    href: '/urunler/tente',
  },
  {
    category: 'tente',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    title: 'Manuel Kol Tente',
    description: 'Ekonomik ve kullanışlı manuel açma-kapama sistemiyle balkon ve teraslarınız için ideal.',
    href: '/urunler/tente',
  },
  {
    category: 'tente',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    title: 'Sabit Tente (Markiz)',
    description: 'Mağaza ve işyerleri için ideal, görsel cazibesi yüksek sabit markiz tente sistemleri.',
    href: '/urunler/tente',
  },
  // Pergola
  {
    category: 'pergola',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
    title: 'Biyoklimatik Pergola',
    description: 'Havalandırılabilir alüminyum kanatlarıyla dört mevsim kullanılan akıllı pergola sistemi.',
    href: '/urunler/pergola',
  },
  {
    category: 'pergola',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',
    title: 'Alüminyum Pergola',
    description: 'Dayanıklı alüminyum profil ve tente örtüsüyle şık ve fonksiyonel bahçe pergolası.',
    href: '/urunler/pergola',
  },
  {
    category: 'pergola',
    image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=600&q=80',
    title: 'Çatı Pergola',
    description: 'Polikarbonat veya cam çatı seçenekleriyle yağmurlu havalarda da kullanabileceğiniz pergola.',
    href: '/urunler/pergola',
  },
  // Diğer
  {
    category: 'diger',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    title: 'Bahçe Güneşliği',
    description: 'Büyük alanlara uygun, yüksek UV koruması sunan şemsiye tipi güneşlik sistemleri.',
    href: '/urunler/diger',
  },
  {
    category: 'diger',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    title: 'Branda Sistemleri',
    description: 'Depo, garaj ve ticari alanlara uygun dayanıklı branda ve kapı sistemleri.',
    href: '/urunler/diger',
  },
  {
    category: 'diger',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
    title: 'Cam Balkon',
    description: 'Isıtmalı cam balkon ve veranda sistemleriyle balkonunuzu dört mevsim yaşam alanına dönüştürün.',
    href: '/urunler/diger',
  },
]

const categories = [
  { id: 'all', label: 'Tümü' },
  { id: 'tente', label: 'Tente Sistemleri' },
  { id: 'pergola', label: 'Pergola & Alüminyum' },
  { id: 'diger', label: 'Diğer Sistemler' },
]

export default function UrunlerPage() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? allProducts : allProducts.filter((p) => p.category === active)

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Ürünlerimiz</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Gölgelendirme Sistemleri</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Her bütçeye ve mekana uygun profesyonel gölgelendirme çözümleri
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-white">Ürünler</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <Filter size={18} className="text-gray-400" />
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === c.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary/10 border border-gray-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <div key={p.title} className="card-hover bg-white rounded-2xl overflow-hidden shadow-md group">
              <div className="h-52 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-dark text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.description}</p>
                <Link href={p.href} className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                  Detayları Gör <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-dark rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">İhtiyacınıza Özel Çözüm</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Listede görmediğiniz bir sistem mi arıyorsunuz? Uzman ekibimizle iletişime geçin, size özel teklif hazırlayalım.
          </p>
          <a
            href="https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20ürün%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Ücretsiz Teklif Al
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}
