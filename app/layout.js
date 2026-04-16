import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: 'YAZ Gölgelendirme Sistemleri | Tente, Pergola ve Güneşlik Sistemleri',
  description: 'Profesyonel gölgelendirme çözümleri: Tente sistemleri, pergola, alüminyum sistemler ve daha fazlası. Ücretsiz keşif ve teklif için hemen iletişime geçin.',
  keywords: 'tente, pergola, gölgelendirme, alüminyum pergola, güneşlik, branda, cam sistem',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
