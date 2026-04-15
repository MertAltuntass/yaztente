'use client'
import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Merhaba, ben ${form.name}.%0A📞 Telefon: ${form.phone}%0A📧 E-posta: ${form.email}%0A🏷️ Ürün: ${form.product}%0A💬 Mesaj: ${form.message}`
    window.open(`https://wa.me/905467702583?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Adınız Soyadınız *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Ahmet Yılmaz"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefon Numaranız *</label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="0 (546) 770 25 83"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">E-posta Adresiniz</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ornek@mail.com"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">İlgilendiğiniz Ürün *</label>
          <select
            name="product"
            required
            value={form.product}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
          >
            <option value="">Seçiniz...</option>
            <option value="Tente Sistemleri">Tente Sistemleri</option>
            <option value="Pergola & Alüminyum">Pergola & Alüminyum</option>
            <option value="Güneşlik Sistemi">Güneşlik Sistemi</option>
            <option value="Branda Sistemi">Branda Sistemi</option>
            <option value="Cam Balkon">Cam Balkon</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Mesajınız</label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Projeniz hakkında detay paylaşabilirsiniz..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full justify-center py-4 text-base"
      >
        {sent ? (
          <>
            <CheckCircle size={18} />
            WhatsApp Açılıyor...
          </>
        ) : (
          <>
            <Send size={18} />
            WhatsApp ile Gönder
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Formunuz WhatsApp üzerinden tarafımıza iletilecektir. En kısa sürede dönüş yapacağız.
      </p>
    </form>
  )
}
