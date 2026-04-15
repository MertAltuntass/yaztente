import Link from 'next/link'
import { Clock, ArrowRight, Tag } from 'lucide-react'

export const metadata = {
  title: 'Blog | Tente, Pergola ve Gölgelendirme Rehberi – YAZ Gölgelendirme',
  description: 'Tente fiyatları, pergola seçimi, cam balkon sistemleri ve gölgelendirme çözümleri hakkında uzman rehberleri. YAZ Gölgelendirme blog sayfası.',
  keywords: 'tente rehberi, pergola nedir, balkon tentesi fiyatları, motorlu tente, cam balkon, gölgelendirme sistemi',
}

export const articles = [
  {
    slug: 'balkon-tentesi-fiyatlari-2025',
    title: 'Balkon Tentesi Fiyatları 2025: Neye Göre Değişir?',
    excerpt: 'Motorlu kol tente, manuel tente ve kasetli tente fiyatlarını etkileyen faktörleri, ortalama maliyet aralıklarını ve doğru ürünü nasıl seçeceğinizi anlattık.',
    category: 'Tente',
    readTime: '5 dk',
    date: '2025-03-10',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    slug: 'biyoklimatik-pergola-nedir',
    title: 'Biyoklimatik Pergola Nedir? Avantajları ve Kullanım Alanları',
    excerpt: 'Hareketli alüminyum kanatlarıyla hem güneşten koruyan hem de yağmur geçirmeyen biyoklimatik pergola sistemlerini tüm detaylarıyla inceledik.',
    category: 'Pergola',
    readTime: '6 dk',
    date: '2025-02-20',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
  },
  {
    slug: 'motorlu-tente-mi-manuel-tente-mi',
    title: 'Motorlu Tente mi, Manuel Tente mi? Hangisini Seçmeliyim?',
    excerpt: 'İki sistem arasındaki fark ne? Fiyat, kullanım kolaylığı, ömür ve bakım açısından motorlu ve manuel kol tente sistemlerini karşılaştırdık.',
    category: 'Tente',
    readTime: '4 dk',
    date: '2025-01-15',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    slug: 'cam-balkon-sistemi-rehberi',
    title: 'Cam Balkon Sistemi: 4 Mevsim Kullanım İçin İdeal Çözüm',
    excerpt: 'Cam balkon ve veranda sistemleri nedir, nasıl çalışır? Isı yalıtımı, güvenlik camı seçenekleri ve fiyat rehberiyle kapsamlı bir inceleme.',
    category: 'Cam Sistemler',
    readTime: '5 dk',
    date: '2025-01-05',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
  {
    slug: 'istanbul-tente-pergola-montaji',
    title: 'İstanbul\'da Tente ve Pergola Montajı: Doğru Firmayı Nasıl Seçersiniz?',
    excerpt: 'İstanbul\'da tente veya pergola yaptırmayı düşünüyorsanız dikkat etmeniz gereken 7 kritik nokta. Fiyat teklifi almadan önce mutlaka okuyun.',
    category: 'Rehber',
    readTime: '7 dk',
    date: '2024-12-20',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
  },
]

const categoryColors = {
  'Tente': 'bg-orange-100 text-orange-700',
  'Pergola': 'bg-blue-100 text-blue-700',
  'Cam Sistemler': 'bg-teal-100 text-teal-700',
  'Rehber': 'bg-purple-100 text-purple-700',
}

export default function BlogPage() {
  const [featured, ...rest] = articles

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Uzman Rehberleri</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Blog</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Tente, pergola ve gölgelendirme sistemleri hakkında merak ettikleriniz
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-white">Blog</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Article */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="overflow-hidden h-72 lg:h-auto">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category]}`}>{featured.category}</span>
                <span className="text-gray-400 text-xs flex items-center gap-1"><Clock size={12} /> {featured.readTime} okuma</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">{featured.title}</h2>
              <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold">
                Devamını Oku <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </Link>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden h-48">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[article.category]}`}>{article.category}</span>
                  <span className="text-gray-400 text-xs flex items-center gap-1"><Clock size={11} /> {article.readTime}</span>
                </div>
                <h3 className="font-bold text-dark text-sm leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
