'use client'
import { useState } from 'react'
import Link from 'next/link'
import { X, ZoomIn, ArrowRight } from 'lucide-react'

const allImages = [
  // ── Tente ──────────────────────────────────────────────────────────────────
  {
    src: 'https://images.unsplash.com/photo-1562081208-418b67878d0f?w=800&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1562081208-418b67878d0f?w=1400&q=90',
    category: 'tente',
    title: 'Motorlu Kol Tente',
    location: 'Beykoz, İstanbul',
    alt: 'Motorlu kol tente bina cephesi balkon gölgelendirme sistemi İstanbul – Yaz Gölgelendirme',
    href: '/urunler/tente',
  },
  {
    src: 'https://images.unsplash.com/photo-1725794440337-a8b6035c3a62?w=800&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1725794440337-a8b6035c3a62?w=1400&q=90',
    category: 'tente',
    title: 'Manuel Kol Tente',
    location: 'Üsküdar, İstanbul',
    alt: 'Manuel kol tente dükkân cephesi branda markiz gölgelendirme sistemi',
    href: '/urunler/tente',
  },
  {
    src: 'https://images.unsplash.com/photo-1749867817713-4dc76f47dca4?w=800&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1749867817713-4dc76f47dca4?w=1400&q=90',
    category: 'tente',
    title: 'Sabit Tente (Markiz)',
    location: 'Beşiktaş, İstanbul',
    alt: 'Sabit markiz tente kafeterya restoran cephe güneşlik mağaza önü sistemi',
    href: '/urunler/tente',
  },
  {
    src: 'https://images.unsplash.com/photo-1543033926-e422a368fa1c?w=800&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1543033926-e422a368fa1c?w=1400&q=90',
    category: 'tente',
    title: 'Dikey Tente (Stor)',
    location: 'Kadıköy, İstanbul',
    alt: 'Dikey stor tente pencere ve kapı önü güneş koruması gölgelendirme sistemi',
    href: '/urunler/tente',
  },
  // ── Pergola ────────────────────────────────────────────────────────────────
  {
    src: 'https://images.unsplash.com/photo-1527359443443-84a48aec73d2?w=800&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1527359443443-84a48aec73d2?w=1400&q=90',
    category: 'pergola',
    title: 'Biyoklimatik Pergola',
    location: 'Sarıyer, İstanbul',
    alt: 'Biyoklimatik pergola motorlu alüminyum kanat LED aydınlatma dış mekan sistemi',
    href: '/urunler/pergola',
  },
  {
    src: 'https://images.unsplash.com/photo-1562616195-8a3fda2721fb?w=800&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1562616195-8a3fda2721fb?w=1400&q=90',
    category: 'pergola',
    title: 'Alüminyum Pergola',
    location: 'Çekmeköy, İstanbul',
    alt: 'Alüminyum profil pergola bahçe teras tente örtüsü gölgelendirme sistemi',
    href: '/urunler/pergola',
  },
  {
    src: 'https://images.unsplash.com/photo-1696454596847-dda5f2dc0555?w=800&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1696454596847-dda5f2dc0555?w=1400&q=90',
    category: 'pergola',
    title: 'Cam Çatılı Pergola',
    location: 'Beykoz, İstanbul',
    alt: 'Cam çatılı pergola kış bahçesi lamine güvenlik camı yağmur koruması',
    href: '/urunler/pergola',
  },
  {
    src: 'https://images.unsplash.com/photo-1559194736-d117968ff4a3?w=800&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1559194736-d117968ff4a3?w=1400&q=90',
    category: 'pergola',
    title: 'Aydınlatmalı Pergola',
    location: 'Ataşehir, İstanbul',
    alt: 'LED aydınlatmalı bahçe pergolası gece kullanımı dış mekan teras sistemi',
    href: '/urunler/pergola',
  },
  // ── Diğer ──────────────────────────────────────────────────────────────────
  {
    src: 'https://images.unsplash.com/photo-1445264755539-41ee51f9e8f1?w=800&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1445264755539-41ee51f9e8f1?w=1400&q=90',
    category: 'diger',
    title: 'Bahçe Güneşliği',
    location: 'Maltepe, İstanbul',
    alt: 'Bahçe güneşliği büyük şemsiye UV koruma teras dış mekan gölgelendirme',
    href: '/urunler/diger',
  },
  {
    src: 'https://images.unsplash.com/photo-1535918742955-c0320061e1a0?w=800&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1535918742955-c0320061e1a0?w=1400&q=90',
    category: 'diger',
    title: 'Branda & Kapı Sistemi',
    location: 'Tuzla, İstanbul',
    alt: 'Branda kapı sistemi endüstriyel PVC şerit perde depo fabrika garaj kapı',
    href: '/urunler/diger',
  },
  {
    src: 'https://images.unsplash.com/photo-1758799012717-4a58ccf9247b?w=800&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1758799012717-4a58ccf9247b?w=1400&q=90',
    category: 'diger',
    title: 'Cam Balkon & Veranda',
    location: 'Beykoz, İstanbul',
    alt: 'Cam balkon veranda sistemi temperli güvenlik camı katlanır sürgülü balkon kapatma',
    href: '/urunler/diger',
  },
  {
    src: 'https://images.unsplash.com/photo-1537154259951-00da64098b37?w=800&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1537154259951-00da64098b37?w=1400&q=90',
    category: 'pergola',
    title: 'Pergola & Gölgelendirme',
    location: 'Şile, İstanbul',
    alt: 'Pergola teras gölgelendirme projesi dış mekan alüminyum sistem İstanbul',
    href: '/urunler/pergola',
  },
]

const categories = [
  { id: 'all', label: 'Tümü' },
  { id: 'tente', label: 'Tente Sistemleri' },
  { id: 'pergola', label: 'Pergola & Alüminyum' },
  { id: 'diger', label: 'Diğer Sistemler' },
]

export default function GaleriPage() {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'all' ? allImages : allImages.filter((i) => i.category === active)

  return (
    <div className="min-h-screen bg-cream">
      {/* ── Header ── */}
      <div className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1527359443443-84a48aec73d2?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-dark/80" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Portfolyo</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Proje Galerimiz</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            İstanbul'da tamamladığımız tente, pergola ve gölgelendirme projelerinden seçmeler
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-white">Galeri</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ── Filtreler ── */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center" role="group" aria-label="Kategori filtresi">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              aria-pressed={active === c.id}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === c.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary/10 border border-gray-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl aspect-square bg-gray-100 shadow-md">
              {/* Fotoğraf */}
              <img
                src={img.src}
                alt={img.alt}
                title={`${img.title} – ${img.location} | Yaz Gölgelendirme`}
                loading="lazy"
                decoding="async"
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover katmanı */}
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/55 transition-all duration-300" aria-hidden="true" />

              {/* Zoom butonu (lightbox) */}
              <button
                onClick={() => setLightbox(img)}
                aria-label={`${img.title} görselini büyüt`}
                className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary"
              >
                <ZoomIn size={18} />
              </button>

              {/* Alt bilgi + ürün linki */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-dark/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-semibold leading-tight">{img.title}</p>
                <p className="text-gray-300 text-xs mb-2">{img.location}</p>
                <Link
                  href={img.href}
                  className="inline-flex items-center gap-1 text-primary text-xs font-bold hover:text-orange-300 transition-colors"
                  title={`${img.title} ürünlerimizi inceleyin`}
                >
                  Ürünü İncele <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="mt-16 bg-dark rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Projenizi Hayata Geçirelim</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Beykoz merkezimizden İstanbul'un tüm ilçelerine ücretsiz keşif ve montaj hizmeti sunuyoruz.
          </p>
          <a
            href="https://wa.me/905467702583?text=Merhaba%2C%20proje%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            title="Tente ve pergola projesi için ücretsiz teklif alın"
          >
            Ücretsiz Teklif Al
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Kapat"
          >
            <X size={32} />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-4xl w-full">
            <img
              src={lightbox.srcLarge}
              alt={lightbox.alt}
              title={`${lightbox.title} – ${lightbox.location} | Yaz Gölgelendirme`}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="flex items-center justify-between mt-4 px-2">
              <div>
                <p className="text-white font-semibold">{lightbox.title}</p>
                <p className="text-gray-400 text-sm">{lightbox.location}</p>
              </div>
              <Link
                href={lightbox.href}
                onClick={() => setLightbox(null)}
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-orange-600 transition-colors"
                title={`${lightbox.title} ürün sayfası`}
              >
                Ürünü İncele <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
