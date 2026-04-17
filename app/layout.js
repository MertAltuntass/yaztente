import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: 'Yaz Tente | İstanbul Tente, Pergola & Gölgelendirme',
  description: 'İstanbul Beykoz tente ve pergola firması. Motorlu tente, biyoklimatik pergola, kış bahçesi montajı. Ücretsiz keşif: 0546 770 25 83.',
  keywords: 'tente, pergola, gölgelendirme, alüminyum pergola, güneşlik, branda, cam sistem',
  verification: {
    google: 'xYrif5RBKIby4rNVlpfdofEFICoTSweej8UJKBYmphI',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
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
