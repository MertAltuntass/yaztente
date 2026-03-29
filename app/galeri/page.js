'use client'
import { useState } from 'react'
import Link from 'next/link'
import { X, ZoomIn } from 'lucide-react'

const allImages = [
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', category: 'tente', title: 'Motorlu Kol Tente - İstanbul' },
  { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80', category: 'pergola', title: 'Biyoklimatik Pergola - Ankara' },
  { src: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&q=80', category: 'tente', title: 'Markiz Tente - İzmir' },
  { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80', category: 'pergola', title: 'Alüminyum Pergola - Bursa' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', category: 'tente', title: 'Manuel Kol Tente - Antalya' },
  { src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80', category: 'pergola', title: 'Çatı Pergola - İstanbul' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', category: 'diger', title: 'Bahçe Güneşliği - Mersin' },
  { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', category: 'diger', title: 'Cam Balkon - İstanbul' },
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', category: 'diger', title: 'Stor Tente - Ankara' },
  { src: 'https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800&q=80', category: 'pergola', title: 'Bahçe Pergolası - İzmir' },
  { src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80', category: 'tente', title: 'Ticari Tente - Antalya' },
  { src: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&q=80', category: 'diger', title: 'Güneşlik Sistemi - Bursa' },
]

const categories = [
  { id: 'all', label: 'Tümü' },
  { id: 'tente', label: 'Tente' },
  { id: 'pergola', label: 'Pergola' },
  { id: 'diger', label: 'Diğer' },
]

export default function GaleriPage() {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'all' ? allImages : allImages.filter((i) => i.category === active)

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Portfolyo</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Proje Galerimiz</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Tamamladığımız projelerden seçmeler
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-white">Galeri</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === c.id ? 'bg-primary text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-primary/10 border border-gray-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
              onClick={() => setLightbox(img)}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-medium">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-4xl w-full">
            <img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[80vh] object-contain rounded-xl" />
            <p className="text-white text-center mt-4 font-medium">{lightbox.title}</p>
          </div>
        </div>
      )}
    </div>
  )
}
