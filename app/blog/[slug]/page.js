import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Tag, ArrowRight } from 'lucide-react'
import { articles } from '../page'

const articleContent = {
  'balkon-tentesi-fiyatlari-2025': {
    intro: 'Balkon tentesi, evlerin en çok tercih edilen gölgelendirme çözümlerinden biridir. Güneşin doğrudan etkisini azaltırken balkonunuzu daha konforlu ve kullanışlı bir alana dönüştürür. Ancak piyasada onlarca farklı tente modeli ve fiyat aralığı bulunduğundan, doğru seçimi yapmak zaman zaman kafa karıştırıcı olabilir.',
    sections: [
      {
        title: 'Balkon Tentesi Fiyatlarını Etkileyen Faktörler',
        content: 'Tente fiyatları birçok değişkene göre şekillenir. Balkonun genişliği ve derinliği, kullanılan kumaşın kalitesi ve güneş koruma faktörü (UV direnci), motorlu ya da manuel olması, iskelet malzemesinin kalitesi (alüminyum veya çelik), ek özellikler (rüzgar sensörü, güneş sensörü, LED aydınlatma) ve montaj zorluğu bu faktörlerin başında gelir.',
      },
      {
        title: 'Motorlu Kol Tente Fiyatları',
        content: 'Motorlu kol tenteler, uzaktan kumanda veya akıllı telefon uygulamasıyla kolayca açılıp kapanabilen sistemlerdir. Rüzgar ve güneş sensörü eklenebilen bu tenteler konfor açısından üst düzey bir deneyim sunar. Motorlu kol tente fiyatları; balkon boyutu, motor markası ve ek özellikler gibi faktörlere göre değişiklik gösterir. Doğru fiyat için ölçüm ve keşif yaptırmanızı öneririz.',
      },
      {
        title: 'Manuel Kol Tente Fiyatları',
        content: 'Manuel kol tenteler, krank kolu ile açılıp kapanan ekonomik çözümlerdir. Daha düşük bütçelerle balkon gölgelendirmesi arayan müşteriler için ideal seçenektir. Çeşitli kumaş rengi ve desen seçenekleri sayesinde balkonunuza estetik bir görünüm kazandırır. Motorlu sisteme kıyasla daha uygun fiyatlıdır ve düşük bakım maliyetiyle öne çıkar.',
      },
      {
        title: 'Sabit Tente (Markiz) Fiyatları',
        content: 'Özellikle dükkan ve işyeri cephelerinde tercih edilen sabit tenteler (markiz), marka kimliğini yansıtan baskılı seçenekleriyle öne çıkar. LED aydınlatma eklenebilen bu sistemler hem gündüz hem gece görünürlük sağlar. Her ölçüde üretime uygun olan sabit tenteler, ticari mekanların vazgeçilmezi haline gelmiştir.',
      },
      {
        title: 'Doğru Tente Sistemini Nasıl Seçmelisiniz?',
        content: 'Balkon boyutunuzu ve yönünü (güneş alıp almadığını), bütçenizi ve ek konfor beklentilerinizi, binaya montaj iznini ve yönetim planı kısıtlamalarını, bulunduğunuz bölgenin rüzgar koşullarını göz önünde bulundurmanız gerekir. Uzman bir tente firmasından ücretsiz keşif ve ölçüm hizmeti alarak size özel bir teklif talep etmenizi öneririz.',
      },
    ],
    conclusion: 'Balkon tentesi alırken yalnızca fiyata odaklanmak yerine kumaş kalitesi, garanti süresi ve montaj hizmetinin kapsamını da değerlendirmeniz önemlidir. YAZ Gölgelendirme olarak Beykoz ve İstanbul genelinde ücretsiz keşif hizmeti sunuyor, size en uygun tente sistemini belirlemenize yardımcı oluyoruz.',
  },
  'biyoklimatik-pergola-nedir': {
    intro: 'Biyoklimatik pergola, son yıllarda Türkiye\'de hızla yaygınlaşan ve bahçe ile terasları dört mevsim kullanılabilir alana dönüştüren modern bir gölgelendirme sistemidir. Hareketli alüminyum kanatları sayesinde hem güneş kontrolü hem de yağmur koruması sağlayan bu sistemler, geleneksel pergolalardan köklü biçimde ayrılmaktadır.',
    sections: [
      {
        title: 'Biyoklimatik Pergola Nasıl Çalışır?',
        content: 'Biyoklimatik pergolalar, çatı kısmında birbirine paralel yerleştirilmiş motorlu alüminyum kanatlardan oluşur. Bu kanatlar 0° ile 135° arasında açı ayarı yapılarak hem tam gölge hem de tam havalandırma pozisyonu arasında konumlandırılabilir. Yağmur yağdığında kanatlar tam kapalı konuma geçerek suyu sisteme entegre yağmur oluklarına yönlendirir.',
      },
      {
        title: 'Biyoklimatik Pergola ile Klasik Pergola Arasındaki Fark',
        content: 'Klasik ahşap veya alüminyum pergolalar sabit bir yapıya sahipken biyoklimatik pergolalar hareketli kanat sistemiyle hava koşullarına göre ayarlanabilir. Klasik pergolaya kumaş örtü eklenebilse de yağmur geçirme riski devam eder. Biyoklimatik sistemlerde ise yağmur oluklarıyla tam su sızdırmazlık sağlanır.',
      },
      {
        title: 'Biyoklimatik Pergolanın Avantajları',
        content: 'Dört mevsim kullanım imkânı sunar; yaz aylarında serinlik, kış aylarında rüzgar engeli sağlar. Motorlu kanat sistemiyle uzaktan kumanda veya akıllı ev sistemleriyle entegre çalışır. LED aydınlatma, yan cam veya branda perde seçenekleriyle özelleştirilebilir. Alüminyum yapısı sayesinde pas tutmaz, uzun yıllar boyunca bakımsız kalabilir. Yüksek rüzgar ve kar yüküne karşı dayanıklıdır.',
      },
      {
        title: 'Biyoklimatik Pergola Hangi Alanlara Uygundur?',
        content: 'Villa ve müstakil bahçelerde oturma alanı oluşturmak, restoran ve kafe teraslarını müşterilere açık tutmak, siteler ve rezidanslarda ortak terasları kapatmak, yazlık ve tatil evlerinde açık alanları değerlendirmek için idealdir. Minimum 3x3 metreden başlayan ölçülerde ve 15 metreye kadar uzanan geniş açıklıklarda uygulanabilir.',
      },
      {
        title: 'Biyoklimatik Pergola Fiyatları',
        content: 'Biyoklimatik pergola fiyatları; sistemin boyutu, kanat sayısı, ek aksesuarlar (LED, yan perdeler, ısıtıcı) ve marka kalitesine göre değişir. Doğru fiyat için mutlaka yerinde ölçüm ve keşif yapılması gerekmektedir. Satın alma kararı vermeden önce en az 2-3 firmadan karşılaştırmalı teklif almanızı öneririz.',
      },
    ],
    conclusion: 'Biyoklimatik pergola, başlangıç maliyeti yüksek görünse de uzun vadeli konfor ve kullanım süresi göz önünde bulundurulduğunda oldukça ekonomik bir yatırımdır. YAZ Gölgelendirme olarak Beykoz başta olmak üzere İstanbul\'un tüm ilçelerinde biyoklimatik pergola montajı gerçekleştiriyoruz.',
  },
  'motorlu-tente-mi-manuel-tente-mi': {
    intro: 'Balkon veya teras için tente sistemine karar verdiniz ama motorlu tente mi yoksa manuel tente mi alacağınızı seçemediniz mi? Bu kararı etkileyen birçok faktör var: bütçeniz, kullanım sıklığınız, balkonunuzun konumu ve konfor beklentileriniz. İki sistemi karşılaştırdık.',
    sections: [
      {
        title: 'Motorlu Kol Tente Nedir?',
        content: 'Motorlu kol tenteler, elektrikli motor aracılığıyla uzaktan kumanda, duvar düğmesi veya akıllı telefon uygulamasıyla açılıp kapanan sistemlerdir. Üst segment modellerde rüzgar sensörü ve güneş sensörü bulunur; sensörler otomatik olarak tenten açma/kapama işlemini gerçekleştirir. Akıllı ev sistemleriyle (Google Home, Amazon Alexa) entegre çalışabilen modeller de mevcuttur.',
      },
      {
        title: 'Manuel Kol Tente Nedir?',
        content: 'Manuel kol tenteler, krank kolu ya da elle çekme sistemiyle açılıp kapanan geleneksel tente sistemleridir. Elektrik bağlantısı gerektirmez, bu nedenle elektriğin olmadığı balkon veya teraslarda da kullanılabilir. Bakım maliyeti düşük, kurulumu basittir. Daha uygun fiyatıyla geniş bir müşteri kitlesine hitap etmektedir.',
      },
      {
        title: 'Fiyat Karşılaştırması',
        content: 'Motorlu tente sistemleri, motor ve kontrol ünitesi maliyeti nedeniyle manuel sistemlerden daha yüksek bir başlangıç maliyetine sahiptir. Ancak günlük kullanım kolaylığı ve sensör sistemleri göz önünde bulundurulduğunda uzun vadede bu fark telafi edilmektedir. Manuel tenteler daha kısıtlı bütçeler için ideal başlangıç noktasıdır; üstelik ilerleyen dönemde motor eklemesi mümkün olan modeller de mevcuttur.',
      },
      {
        title: 'Kullanım Kolaylığı',
        content: 'Motorlu tente, özellikle büyük balkon ve teraslarda büyük kolaylık sağlar. 4-5 metre genişliğindeki bir tente manuel olarak açıp kapatmak yorucu olabilir; motorlu sistemlerde ise tek tuşla işlem tamamlanır. Yaşlılar ve hareket kısıtlılığı bulunan bireyler için motorlu sistem belirgin biçimde daha ergonomiktir.',
      },
      {
        title: 'Hangisini Seçmelisiniz?',
        content: 'Konforu ön planda tutuyorsanız, büyük bir balkon veya terasınız varsa, sık sık tente açıp kapatıyorsanız ve akıllı ev sistemleriyle entegrasyon istiyorsanız motorlu tente sizin için doğru seçimdir. Bütçeniz kısıtlıysa, balkonunuz küçük (2-3 metre) ve tente kullanımınız sınırlıysa veya sade ve düşük bakım maliyetli bir çözüm arıyorsanız manuel tente ihtiyacınızı karşılayacaktır.',
      },
    ],
    conclusion: 'Her iki sistemin de kendine özgü avantajları bulunmaktadır. Doğru kararı vermek için balkon boyutunuzu, günlük kullanım alışkanlığınızı ve bütçenizi değerlendirmeniz gerekir. YAZ Gölgelendirme uzmanları, ücretsiz keşif ziyaretinde ihtiyacınıza en uygun sistemi belirleyerek size özel teklif hazırlar.',
  },
  'cam-balkon-sistemi-rehberi': {
    intro: 'Cam balkon sistemleri, açık balkon alanlarını dört mevsim kullanılabilir kapalı yaşam alanlarına dönüştüren modern mimari çözümlerdir. Son yıllarda Türkiye\'deki yeni yapılaşmada ve dönüşüm projelerinde cam balkon uygulamaları büyük ilgi görmektedir.',
    sections: [
      {
        title: 'Cam Balkon Sistemi Nedir?',
        content: 'Cam balkon, balkon korkulukları ve çatısının temperli güvenlik camıyla kapatılmasıyla oluşturulan, açma/kapama mekanizması bulunan modern bir sistem ailesidir. Katlanır, sürgülü veya sabit olarak uygulanabilen cam balkon sistemleri; rüzgar, yağmur ve soğuğu dışarıda tutarken doğal ışığı içeri alır.',
      },
      {
        title: 'Cam Balkon Çeşitleri',
        content: 'Katlanır cam balkon sistemleri, camları akordiyon gibi katlanarak tamamen açılabildiğinden yazın açık alan deneyimi sunar. Sürgülü cam balkon sistemleri, camların yatay kaymasıyla çalışır ve daha az yer kaplar. Sabit cam cephe sistemleri ise tamamen kapalı veranda yaratmak için tercih edilir ve en yüksek yalıtımı sağlar.',
      },
      {
        title: 'Cam Seçenekleri ve Güvenlik',
        content: 'Cam balkon sistemlerinde kullanılan camlar mutlaka güvenlik standardını karşılamalıdır. 8 mm temperli cam, olası bir kırılmada keskin parçalar yerine küçük tanecikler oluşturarak yaralanma riskini minimuma indirir. Isıcam (çift cam) seçeneğiyle ısı yalıtımı önemli ölçüde iyileştirilebilir, bu da kış aylarında ısınma masraflarını düşürür.',
      },
      {
        title: 'Cam Balkon Avantajları',
        content: 'Balkon alanını yıl boyunca kullanılabilir yaşam alanına dönüştürür. Rüzgar, toz ve gürültü kirliliğini azaltır. Balkonun iç mekanla görsel sürekliliğini sağlayarak evi daha geniş gösterir. Kış aylarında ısı kaybını azaltır, enerji tasarrufu sağlar. Estetik görünümüyle konut değerini artırır.',
      },
      {
        title: 'Cam Balkon Fiyatları',
        content: 'Cam balkon fiyatları; sistemin boyutu, cam türü (tek cam / ısıcam), profil rengi, açılma mekanizması ve montaj koşullarına göre değişir. Fiyat hesabı her zaman yerinde ölçümle yapılmalıdır. Farklı firmalardan karşılaştırmalı teklif alarak hem fiyat hem de malzeme kalitesini değerlendirmenizi öneririz.',
      },
    ],
    conclusion: 'Cam balkon sistemi, modern yaşam tarzına uygun, estetik ve fonksiyonel bir yatırımdır. Doğru sistem seçimi ve profesyonel montaj ile balkonunuzu tüm yıl boyunca konforla kullanabilirsiniz. YAZ Gölgelendirme olarak İstanbul\'un tüm ilçelerinde cam balkon ve veranda sistemleri kuruyoruz; ücretsiz keşif için bizimle iletişime geçin.',
  },
  'istanbul-tente-pergola-montaji': {
    intro: 'İstanbul\'da tente veya pergola yaptırmayı düşünüyorsanız, doğru firmayı seçmek hem kaliteli bir sonuç elde etmek hem de gereksiz maliyet ve hayal kırıklıklarından korunmak için kritik önem taşır. Onlarca farklı firma arasından doğru seçimi yapabilmeniz için dikkat etmeniz gereken 7 noktayı derledik.',
    sections: [
      {
        title: '1. Referans ve Tamamlanmış Proje Portföyüne Bakın',
        content: 'Güvenilir bir tente veya pergola firması, daha önce tamamladığı projelerin fotoğraflarını ve müşteri referanslarını rahatlıkla paylaşabilmelidir. Firmanın web sitesindeki galeri bölümünü inceleyin, mümkünse eski müşterilerle iletişime geçin. 10 yılı aşkın deneyime sahip firmalar, yüzlerce tamamlanmış proje portföyüyle bu güveni somutlaştırabilir.',
      },
      {
        title: '2. Garanti Koşullarını Netleştirin',
        content: 'Tente ve pergola sistemlerinde kumaş garantisi ile mekanik garanti birbirinden farklıdır. Kumaş garantisi genellikle 3-5 yıl, motorlu sistemler için motor garantisi 2-3 yıl, alüminyum yapı garantisi ise 5-10 yıl arasındadır. Sözlü garantiler yerine yazılı belge talep edin.',
      },
      {
        title: '3. Malzeme Kalitesini Sorgulayın',
        content: 'Tente kumaşında Türk Standartları Enstitüsü (TSE) sertifikalı veya Avrupa normlara uygun malzeme kullanıldığından emin olun. UV direnci düşük kumaşlar kısa sürede solar ve yıpranır. Alüminyum profillerde et kalınlığı önemlidir; ince profiller rüzgar yükü altında hasar görebilir.',
      },
      {
        title: '4. Yerinde Keşif ve Ölçüm Yapılmasını İsteyin',
        content: 'Telefon veya fotoğrafla verilen fiyat teklifleri genellikle gerçekçi değildir. Güvenilir firmalar mutlaka yerinde ölçüm ve keşif yapar; zemin, duvar cinsi, çevresel koşullar ve teknik detayları değerlendirdikten sonra kesin teklif sunar. Ücretsiz keşif hizmeti veren firmaları tercih edin.',
      },
      {
        title: '5. Montaj Ekibinin Deneyimini Değerlendirin',
        content: 'Yanlış montaj, en kaliteli ürünü bile işlevsiz kılabilir. Montaj ekibinin tecrübeli ve sertifikalı olması gerekir. Özellikle motorlu sistem ve biyoklimatik pergola montajlarında hatalı kurulum hem ürünün ömrünü kısaltır hem de güvenlik riskleri doğurabilir.',
      },
      {
        title: '6. Satış Sonrası Hizmet Varlığını Sorun',
        content: 'Tente ve pergola sistemleri zaman içinde bakım ve küçük onarım gerektirebilir. Satış sonrası teknik servis desteği sunan firmalar, uzun vadede çok daha avantajlıdır. Özellikle motorlu sistemlerde motor arızaları, sensör kalibrasyonu gibi teknik sorunlar için yetkili servis ağı önemlidir.',
      },
      {
        title: '7. Birden Fazla Firmadan Teklif Alın',
        content: 'Yalnızca tek bir firmaya güvenmek yerine en az 2-3 farklı firmadan karşılaştırmalı teklif alın. Fiyat karşılaştırması yaparken malzeme kalitesini, garanti koşullarını ve montaj kapsamını da mutlaka sorgulamanız gerekir. En ucuz teklif çoğu zaman en iyi değeri sunmaz.',
      },
    ],
    conclusion: 'YAZ Gölgelendirme olarak Beykoz merkezli olmakla birlikte İstanbul\'un tüm ilçelerinde tente, pergola, cam balkon ve gölgelendirme sistemleri kuruyoruz. 10 yılı aşkın deneyimimiz, TSE sertifikalı malzemelerimiz ve ücretsiz keşif hizmetimizle doğru çözümü birlikte bulalım.',
  },
}

export function generateMetadata({ params }) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}
  return {
    title: `${article.title} | Beykoz İstanbul - Yaz Tente`,
    description: `${article.excerpt} Ücretsiz keşif için hemen arayın: 0546 770 25 83.`,
    keywords: `${article.category.toLowerCase()}, tente İstanbul, pergola Beykoz, gölgelendirme sistemi, YAZ Gölgelendirme`,
  }
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

const categoryColors = {
  'Tente': 'bg-orange-100 text-orange-700',
  'Pergola': 'bg-blue-100 text-blue-700',
  'Cam Sistemler': 'bg-teal-100 text-teal-700',
  'Rehber': 'bg-purple-100 text-purple-700',
}

export default function ArticlePage({ params }) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) notFound()

  const content = articleContent[params.slug]
  const related = articles.filter((a) => a.slug !== params.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-cream">
      {/* Header Image */}
      <div className="bg-dark pt-32 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(${article.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[article.category]}`}>{article.category}</span>
            <span className="text-gray-400 text-xs flex items-center gap-1"><Clock size={12} /> {article.readTime} okuma</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">{article.title}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">{article.excerpt}</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white line-clamp-1">{article.title}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-12">
          <p className="text-gray-600 text-lg leading-relaxed mb-10 border-l-4 border-primary pl-6">{content.intro}</p>

          <div className="space-y-10">
            {content.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-dark mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-cream rounded-2xl border border-gray-100">
            <p className="text-gray-700 leading-relaxed">{content.conclusion}</p>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-primary rounded-2xl p-8 text-center">
            <h3 className="text-white font-bold text-xl mb-2">Ücretsiz Keşif & Teklif Alın</h3>
            <p className="text-orange-100 mb-5 text-sm">Uzmanlarımız evinize gelir, ölçüm alır ve size özel teklif hazırlar.</p>
            <a
              href="https://wa.me/905467702583?text=Merhaba%2C%20blog%20yazısını%20okudum%2C%20ücretsiz%20keşif%20talep%20ediyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
            >
              WhatsApp ile Teklif Al <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Back + Related */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-10 block">
          <ArrowLeft size={16} /> Tüm Yazılar
        </Link>

        <h3 className="text-xl font-bold text-dark mb-6">İlgili Yazılar</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((a) => (
            <Link key={a.slug} href={`/blog/${a.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
              <div className="overflow-hidden h-40">
                <img src={a.image} alt={a.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[a.category]}`}>{a.category}</span>
                <h4 className="font-bold text-dark text-sm mt-2 group-hover:text-primary transition-colors line-clamp-2">{a.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
