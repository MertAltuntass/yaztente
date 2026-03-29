import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ProductCard({ image, title, description, href, features = [] }) {
  return (
    <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg group">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            YAZ Ürünü
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>

        {features.length > 0 && (
          <ul className="space-y-1.5 mb-5">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span>
                {f}
              </li>
            ))}
          </ul>
        )}

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200"
        >
          Detaylı İncele
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
