'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    location: 'Beykoz / İstanbul',
    rating: 5,
    text: 'Villamızın terasına biyoklimatik pergola yaptırdık. Motorlu alüminyum kanatlar sayesinde yaz sıcağında gölge, yağmurda ise tam koruma sağlıyor. YAZ Gölgelendirme ekibi hem montajda hem malzeme kalitesinde çok titiz çalıştı.',
    product: 'Biyoklimatik Pergola',
  },
  {
    name: 'Fatma Kaya',
    location: 'Kadıköy / İstanbul',
    rating: 5,
    text: 'Balkonuma motorlu kol tente yaptırdım. Uzaktan kumandayla tek tuşta açılıp kapanıyor, rüzgar sensörü sayesinde rüzgarlı havalarda otomatik kapanıyor. Artık yaz aylarında balkonumda çok daha fazla vakit geçiriyorum.',
    product: 'Motorlu Kol Tente',
  },
  {
    name: 'Mehmet Demir',
    location: 'Ümraniye / İstanbul',
    rating: 5,
    text: 'Dükkanımızın cephesine LED aydınlatmalı sabit tente (markiz) yaptırdık. Hem gündüz güneşten koruma sağlıyor hem de geceleri logomuz çok güzel görünüyor. Müşterilerimiz de çok beğendi, tente fiyatı için de gayet uygundu.',
    product: 'Sabit Tente (Markiz)',
  },
  {
    name: 'Ayşe Öztürk',
    location: 'Sarıyer / İstanbul',
    rating: 5,
    text: 'Bahçemize alüminyum pergola ile birlikte yan cam branda perde sistemi kuruldu. Dört mevsim kullanılabilir bir oturma alanına kavuştuk. Gölgelendirme sistemi hem estetik görünüyor hem de dayanıklı; kesinlikle tavsiye ederim.',
    product: 'Alüminyum Pergola + Yan Perde',
  },
  {
    name: 'Kemal Arslan',
    location: 'Beşiktaş / İstanbul',
    rating: 5,
    text: 'Dairemi genişletmek için balkon cam sistemi yaptırdım. Temperli güvenlik camı kullandılar, montaj çok temiz ve düzgün oldu. Kış aylarında rüzgar ve yağmur girmiyor, balkon artık tam bir yaşam alanına dönüştü.',
    product: 'Cam Balkon Sistemi',
  },
  {
    name: 'Selin Çelik',
    location: 'Maltepe / İstanbul',
    rating: 5,
    text: 'Manuel kol tente yaptırdım, bütçe dostu bir çözüm arayanlara kesinlikle tavsiye ederim. Kumaş kalitesi çok iyi, UV koruması sayesinde teras serinledi. Ücretsiz keşif hizmeti de çok işimize yaradı.',
    product: 'Manuel Kol Tente',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Yorumlar</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Yüzlerce mutlu müşterimizin deneyimlerini okuyun
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <div
              key={i}
              className={`bg-dark-light rounded-2xl p-6 relative transition-all duration-300 ${i === 0 ? 'ring-2 ring-primary' : 'opacity-80'}`}
            >
              <Quote size={32} className="text-primary/30 absolute top-4 right-4" />
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, s) => (
                  <Star key={s} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.location} · {t.product}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-gray-600 hover:border-primary hover:bg-primary text-white transition-all flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-gray-600 hover:border-primary hover:bg-primary text-white transition-all flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
