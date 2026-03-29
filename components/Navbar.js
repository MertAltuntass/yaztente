'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/urunler', label: 'Ürünler' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-dark shadow-2xl py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="YAZ Gölgelendirme Sistemleri"
              width={160}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white font-medium hover:text-primary transition-colors duration-200 text-sm tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+905XXXXXXXXX"
              className="flex items-center gap-2 text-white hover:text-primary transition-colors text-sm"
            >
              <Phone size={16} />
              <span>0 (5XX) XXX XX XX</span>
            </a>
            <a
              href="https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20gölgelendirme%20sistemleri%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5"
            >
              Ücretsiz Teklif Al
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark border-t border-gray-700 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white hover:text-primary py-3 border-b border-gray-700 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20gölgelendirme%20sistemleri%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 w-full justify-center"
          >
            Ücretsiz Teklif Al
          </a>
        </div>
      )}
    </nav>
  )
}
