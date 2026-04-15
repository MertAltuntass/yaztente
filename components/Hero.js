'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight, Shield, Star, Clock } from 'lucide-react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      bg: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
      title: 'Hayalinizdeki',
      highlight: 'Gölge Sistemi',
      subtitle: 'Profesyonel tente, pergola ve güneşlik sistemleriyle yaşam alanlarınızı dönüştürüyoruz.',
    },
    {
      bg: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80',
      title: 'Modern Pergola',
      highlight: 'Çözümleri',
      subtitle: 'Biyoklimatik ve alüminyum pergola sistemleriyle outdoor alanlarınıza değer katıyoruz.',
    },
    {
      bg: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=1920&q=80',
      title: 'Kaliteli Tente',
      highlight: 'Sistemleri',
      subtitle: 'Motorlu ve manuel tente seçenekleriyle hem estetik hem fonksiyonel çözümler sunuyoruz.',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary-light px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star size={14} className="fill-primary text-primary" />
            <span>Türkiye&apos;nin Güvenilir Gölgelendirme Firması</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            {slides[currentSlide].title}
            <br />
            <span className="text-primary">{slides[currentSlide].highlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://wa.me/905467702583?text=Merhaba%2C%20ücretsiz%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              Ücretsiz Teklif Al
              <ArrowRight size={18} />
            </a>
            <Link href="/urunler" className="btn-outline text-base px-8 py-4">
              Ürünleri Keşfet
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              { icon: Shield, value: '500+', label: 'Tamamlanan Proje' },
              { icon: Star, value: '10+', label: 'Yıllık Tecrübe' },
              { icon: Clock, value: '%100', label: 'Müşteri Memnuniyeti' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-white font-bold text-xl">{value}</div>
                  <div className="text-gray-400 text-sm">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentSlide ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <a href="#products" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors flex flex-col items-center gap-1">
        <span className="text-xs tracking-widest uppercase">Keşfet</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  )
}
