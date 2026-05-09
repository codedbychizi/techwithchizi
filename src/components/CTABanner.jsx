import React from 'react'
import { Link } from 'react-router-dom'

export default function CTABanner({
  heading = 'Would you like to start a project with us?',
  body    = "Ready to take your business online with a professional website? Let's discuss your ideas and build a solution tailored to your goals.",
  btnLabel = 'CHAT WITH US',
  btnTo    = '/contact',
}) {
  return (
    <section className="bg-brand-gray py-14 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-blue mb-2">{heading}</h2>
          <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
        </div>
        <Link to={btnTo} className="btn-primary whitespace-nowrap flex-shrink-0">{btnLabel}</Link>
      </div>
    </section>
  )
}
