import React from 'react'

export default function PageHero({ title, subtitle, description }) {
  return (
    <section className="relative min-h-[320px] flex items-center justify-center text-center text-white overflow-hidden bg-brand-navy">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-3 fade-up">{title}</h1>
        {subtitle && (
          <p className="text-lg font-semibold text-blue-200 mb-2 fade-up fade-up-delay-1">{subtitle}</p>
        )}
        {description && (
          <p className="text-gray-200 leading-relaxed fade-up fade-up-delay-2">{description}</p>
        )}
      </div>
    </section>
  )
}
