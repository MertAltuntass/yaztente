import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: 'YAZ Gölgelendirme Sistemleri | Tente, Pergola ve Güneşlik Sistemleri',
  description: 'Profesyonel gölgelendirme çözümleri: Tente sistemleri, pergola, alüminyum sistemler ve daha fazlası. Ücretsiz keşif ve teklif için hemen iletişime geçin.',
  keywords: 'tente, pergola, gölgelendirme, alüminyum pergola, güneşlik, branda, cam sistem',
verification: {
      google: 'xYrif5RBKIby4rNVlpfdofEFICoTSweej8UJKBYmphI',
    },
    icons: {
      icon: [
        { url: '/logo.png', type: 'image/png' },
      ],
      shortcut: '/logo.png',
      apple: '/logo.png',
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
