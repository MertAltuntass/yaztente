import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Cam balkon sistemi ne kadar sağlam?',
    a: 'Cam balkon sistemlerinde kullanılan 8 mm temperli güvenlik camı, olası kırılmada keskin parçalar yerine küçük tanecikler oluşturduğundan yaralanma riski minimumdur. Alüminyum profil yapısı ise korozyon ve paslanmaya karşı dayanıklıdır.',
  },
  {
    q: 'Cam balkon kışın ısı yalıtımı sağlar mı?',
    a: 'Tek cam sistemler rüzgar ve yağmur engellerken ısıcam (çift cam) seçenekleri kış aylarında belirgin ısı yalıtımı sağlar ve enerji tasarrufu sunar. Isıcam tercihi, soğuk iklimlerde ve kuzey cepheli balkonlarda özellikle önerilir.',
  },
  {
    q: 'Bahçe güneşliği ne kadar alanı kapsar?',
    a: 'Şemsiye tipi bahçe güneşlikleri genellikle 3×3 m ile 5×5 m arasında alan kapatır. Sabit direkli büyük güneşlikler ise daha geniş teras ve bahçe alanlarına uygulanabilir; her ölçüde özel üretim yapılmaktadır.',
  },
  {
    q: 'Branda perde sistemi hangi alanlara uygundur?',
    a: 'PVC branda perdeler; depo, fabrika, atölye, garaj ve ticari mekanların kapı açıklıklarını kapatmak için idealdir. Isı, ses ve toz yalıtımı sağlarken araç geçişine izin veren esnek yapısıyla endüstriyel kullanıma uygundur.',
  },
  {
    q: 'Cam balkon sistemi apartman yönetiminden izin gerektirir mi?',
    a: 'Evet, çoğu apartman ve sitede cam balkon uygulaması için bina yönetimi veya kat malikleri kurulu kararı gerekmektedir. Bazı belediyelerde ruhsat zorunluluğu da bulunabilir; uygulama öncesinde yerel yönetmeliği kontrol etmenizi öneririz.',
  },
  {
    q: 'Cam balkon sistemleri kişisel verilerin gizliliğini sağlar mı?',
    a: 'Standart şeffaf camın yanı sıra mat, buzlu veya tek yönlü görüşlü cam seçenekleri de mevcuttur. Bu seçenekler hem mahremiyeti korur hem de doğal ışığın içeri girmesine izin verir.',
  },
]

const products = [
  {
    image: 'https://images.unsplash.com/photo-1445264755539-41ee51f9e8f1?w=800&q=80',
    title: 'Bahçe Güneşliği',
    description: 'Bahçe ve teras alanlarında güneşin sert etkisini azaltmak için tercih edilen güneşlik sistemleri, UV filtreli özel kumaşları ve alüminyum taşıyıcı direkleriyle uzun yıllar dayanıklı biçimde kullanılır. Şemsiye tipi ve sabit ankastre modellerde her alan boyutuna uygun çözüm sunulur.',
    features: ['Geniş Kapsama Alanı', 'UV Filtreli Kumaş', 'Alüminyum Direk', 'Rüzgar Dirençli Yapı'],
  },
  {
    image: 'https://images.unsplash.com/photo-1535918742955-c0320061e1a0?w=800&q=80',
    title: 'Branda & Kapı Sistemleri',
    description: 'Depo, garaj, fabrika ve ticari alanların kapı açıklıklarını kapatmak için kullanılan PVC branda perdeler; ısı, ses ve toz yalıtımı sağlar. Araç ve personel geçişine izin veren esnek yapısıyla endüstriyel ortamların vazgeçilmezi olan bu sistemler her ölçüde özel olarak üretilir.',
    features: ['PVC Branda Perde', 'Endüstriyel Kapı', 'Isı & Ses Yalıtımı', 'Her Ölçüde Üretim'],
  },
  {
    image: 'https://images.unsplash.com/photo-1758799012717-4a58ccf9247b?w=800&q=80',
    title: 'Cam Balkon & Veranda',
    description: 'Temperli güvenlik camı kullanılan cam balkon ve veranda sistemleri, açık balkonlarınızı dört mevsim kullanılabilir kapalı yaşam alanlarına dönüştürür. Katlanır, sürgülü veya sabit cam seçenekleri ve ısıcam uygulamasıyla hem rüzgar ve yağmur engeli hem de kış aylarında ısı yalıtımı sağlar.',
    features: ['Temperli Güvenlik Camı', 'Çatı Isıtma Seçeneği', 'Rüzgar & Yağmur Engeli', 'Gizlilik Seçenekleri'],
  },
]

export default function DigerPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1445264755539-41ee51f9e8f1?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Ürünlerimiz</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Diğer Gölge Sistemleri</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Güneşlik, branda, cam balkon ve daha fazlası
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/urunler" className="hover:text-primary transition-colors">Ürünler</Link>
            <span>/</span>
            <span className="text-white">Diğer Sistemler</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {products.map((p, i) => (
            <div key={p.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
            <h2 className="text-2xl md:text-3xl font-bold text-dark mt-2">Cam Balkon & Güneşlik Hakkında Sık Sorulan Sorular</h2>
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
