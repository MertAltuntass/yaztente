import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Biyoklimatik pergola ile klasik pergola arasındaki fark nedir?',
    a: 'Biyoklimatik pergolalar, motorlu hareketli alüminyum kanatlara sahiptir; kanatlar açılıp kapanarak güneş ve yağmur koruması sağlar. Klasik pergolalar ise sabit yapılıdır; yağmur geçirme riski bulunur ve hava koşullarına göre ayarlama yapılamaz.',
  },
  {
    q: 'Pergola ne kadar alanda kurulabilir?',
    a: 'Biyoklimatik ve alüminyum pergolalar genellikle minimum 3×3 m\'den başlayarak 15 metreye kadar uzayan tek açıklıklarda kurulabilir. Daha büyük alanlar için ayaklı çok gözlü sistemler tercih edilir.',
  },
  {
    q: 'Pergola yağmurda sızdırmaz mı?',
    a: 'Biyoklimatik pergolalar, kanatların tam kapalı konumunda ve entegre yağmur oluklarıyla tam su sızdırmazlık sağlar. Cam çatılı pergolalar da yağmura karşı eksiksiz koruma sunar. Kumaş tenteli pergolalarda ise hafif yağmur dayanımı olsa da şiddetli yağışta ıslanma riski bulunabilir.',
  },
  {
    q: 'Pergola montajı için bina yönetiminden izin gerekir mi?',
    a: 'Evet, özellikle apartman ve site gibi ortak yapılarda bina yönetimi ve kat maliklerinden onay alınması gerekebilir. Belediyeye ruhsat zorunluluğu ise yapının bulunduğu bölge ve belediye yönetmeliklerine göre değişir.',
  },
  {
    q: 'Pergolaya sonradan LED aydınlatma veya yan perde eklenebilir mi?',
    a: 'Evet, çoğu biyoklimatik ve alüminyum pergola sistemi modüler yapıda olduğundan LED aydınlatma, yan cam, branda perde veya ısıtıcı gibi aksesuarlar sonradan eklenebilir.',
  },
  {
    q: 'Beykoz veya İstanbul\'un diğer ilçelerine pergola montajı yapıyor musunuz?',
    a: 'Evet, Beykoz merkezimizden hareketle İstanbul\'un tüm Anadolu ve Avrupa yakası ilçelerine pergola montajı gerçekleştiriyoruz. Ücretsiz keşif için WhatsApp veya telefon ile ulaşabilirsiniz.',
  },
]

const products = [
  {
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    title: 'Biyoklimatik Pergola',
    description: 'Motorlu hareketli alüminyum kanatları sayesinde güneş açısına göre ayarlanabilen biyoklimatik pergola, yağmur yağdığında kanatları tam kapanarak entegre su oluklarıyla mekânı korur. LED aydınlatma, yan cam perde ve ısıtıcı aksesuar seçenekleriyle dört mevsim kullanılabilir bir yaşam alanına dönüşür.',
    features: ['Hareketli Alüminyum Kanatlar', 'Motorlu Açma/Kapama', 'LED Aydınlatma', 'Yağmur & Rüzgar Sensörü', 'Yan Perde Seçeneği', '10 Yıl Garanti'],
  },
  {
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    title: 'Alüminyum Pergola',
    description: 'Dayanıklı alüminyum profil taşıyıcı sistemi üzerine kumaş tente örtüsü kullanılan alüminyum pergolalar, klasik ahşap pergolalara kıyasla çok daha uzun ömürlü ve bakımsızdır. Çeşitli RAL renk seçenekleri ve yan kapatma imkânıyla bahçe ve teraslarınıza şık bir görünüm kazandırır.',
    features: ['Alüminyum Profil Yapı', 'Tente Örtü Sistemi', 'Çeşitli Renk Seçenekleri', 'Yan Kapatma İmkanı'],
  },
  {
    image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&q=80',
    title: 'Cam Çatılı Pergola',
    description: 'Lamine güvenlik camı veya ısıcam seçenekleriyle üretilen cam çatılı pergolalar, yağmuru tamamen dışarıda tutarken doğal ışığın içeri girmesini sağlar. Yağmur sesi azaltıcı özel cam tipleri ve UV koruyucu kaplamalarıyla bahçenizi kış aylarında dahi konforlu biçimde kullanabilirsiniz.',
    features: ['Lamine Güvenlik Camı', 'Isıcam Seçeneği', 'Yağmur Sesi Azaltıcı', 'UV Koruması'],
  },
]

export default function PergolaPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Ürünlerimiz</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Pergola & Alüminyum</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Modern pergola sistemleriyle dış mekanlarınızı dört mevsim yaşam alanına dönüştürün
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/urunler" className="hover:text-primary transition-colors">Ürünler</Link>
            <span>/</span>
            <span className="text-white">Pergola & Alüminyum</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {products.map((p, i) => (
            <div key={p.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
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
                  Teklif Al <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

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
            <h2 className="text-2xl md:text-3xl font-bold text-dark mt-2">Pergola Hakkında Sık Sorulan Sorular</h2>
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
