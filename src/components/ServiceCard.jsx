import React from 'react'

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="card group">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-brand-gray text-brand-blue mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-200">
        {icon}
      </div>
      <h3 className="font-display font-bold text-lg text-brand-navy mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
