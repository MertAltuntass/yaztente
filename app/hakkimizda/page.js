import Link from 'next/link'
import { Award, Users, MapPin, TrendingUp, ArrowRight } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Tamamlanan Proje' },
  { value: '10+', label: 'Yıllık Tecrübe' },
  { value: '50+', label: 'Mutlu Müşteri' },
  { value: '%100', label: 'Müşteri Memnuniyeti' },
]

const values = [
  {
    icon: Award,
    title: 'Kalite',
    description: 'TSE sertifikalı malzemeler ve uluslararası standartlarda üretim süreçleriyle en kaliteli ürünleri sunuyoruz.',
  },
  {
    icon: Users,
    title: 'Müşteri Odaklılık',
    description: 'Her müşterimizin ihtiyacını ayrı ayrı değerlendirerek, kişiye özel çözümler geliştiriyoruz.',
  },
  {
    icon: MapPin,
    title: 'Güvenilirlik',
    description: '10 yılı aşkın sektör deneyimimizle güvenilir, zamanında ve söz verdiğimiz kalitede hizmet sunuyoruz.',
  },
  {
    icon: TrendingUp,
    title: 'İnovasyon',
    description: 'Sektördeki son teknolojileri ve tasarım trendlerini takip ederek sürekli gelişen çözümler üretiyoruz.',
  },
]

const team = [
  { name: 'Lorem Ipsum', role: 'Genel Müdür', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
  { name: 'Lorem Ipsum', role: 'Tasarım Direktörü', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
  { name: 'Lorem Ipsum', role: 'Montaj Şefi', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'Lorem Ipsum', role: 'Müşteri İlişkileri', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
]

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Biz Kimiz?</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Hakkımızda</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            10 yılı aşkın tecrübemizle Türkiye&apos;nin güvenilir gölgelendirme firması
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-white">Hakkımızda</span>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Hikayemiz</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Kaliteyle Büyüyen<br />Bir Başarı Hikayesi
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Tente sektöründe güven, kalite ve estetiği bir araya getirmek amacıyla yola çıktık. Müşterilerimizin ihtiyaçlarını en doğru şekilde anlayarak; yaşam alanlarını daha konforlu, kullanışlı ve şık hale getiren çözümler sunuyoruz.
				Uzman ekibimiz ve yıllara dayanan tecrübemizle; sabit tente, körüklü tente, kasetli tente ve özel tasarım gölgelendirme sistemlerinde profesyonel hizmet sağlıyoruz. Her projeye özel yaklaşımımız sayesinde, mekânınıza en uygun sistemi tasarlıyor ve uyguluyoruz.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Kaliteli malzeme, titiz işçilik ve zamanında teslim prensiplerimizle müşteri memnuniyetini her zaman ön planda tutuyoruz. Amacımız yalnızca ürün sunmak değil; uzun ömürlü, estetik ve fonksiyonel çözümlerle yaşam alanlarınıza değer katmak.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Siz de mekânlarınızı dört mevsim keyifle kullanmak istiyorsanız, doğru yerdesiniz
              </p>
              <Link href="/iletisim" className="btn-primary">
                Bize Ulaşın <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80" alt="Proje" className="rounded-2xl h-56 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&q=80" alt="Proje" className="rounded-2xl h-56 w-full object-cover mt-8" />
              <img src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=500&q=80" alt="Proje" className="rounded-2xl h-56 w-full object-cover -mt-8" />
              <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&q=80" alt="Proje" className="rounded-2xl h-56 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{s.value}</div>
                <div className="text-orange-200 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Değerlerimiz</span>
            <h2 className="section-title mt-2">Bizi Biz Yapan Değerler</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow bg-cream">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={26} className="text-primary" />
                </div>
                <h3 className="font-bold text-dark text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Ekibimiz</span>
            <h2 className="section-title mt-2">Uzman Kadromuz</h2>
            <p className="section-subtitle">Deneyimli ve tutkulu ekibimizle hizmetinizdeyiz</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((m) => (
              <div key={m.name} className="text-center group">
                <div className="overflow-hidden rounded-2xl mb-4 shadow-lg">
                  <img src={m.img} alt={m.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-dark">{m.name}</h3>
                <p className="text-primary text-sm font-medium">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
