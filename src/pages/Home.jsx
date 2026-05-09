import React from 'react'
import { Link } from 'react-router-dom'
import CTABanner   from '../components/CTABanner.jsx'
import ServiceCard from '../components/ServiceCard.jsx'

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" strokeWidth="2"/>
        <path d="M21 21l-2-2" strokeWidth="2" strokeLinecap="round"/>
        <path d="M11 8v6M8 11h6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Search Engine Optimization',
    description: 'We provide SEO for websites, including keyword research, on-page SEO, and meta-tag improvements — helping your site rank higher and reach more potential customers.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"/>
        <path d="M8 21h8M12 17v4" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 8l-3 3 3 3M16 8l3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Web Development',
    description: 'We develop fast, responsive, and reliable WordPress websites that are easy to manage and scale as your business grows, with a focus on performance and usability.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="21" r="1" strokeWidth="2"/>
        <circle cx="20" cy="21" r="1" strokeWidth="2"/>
      </svg>
    ),
    title: 'eCommerce',
    description: 'We help businesses sell products and services online through simple and effective e-commerce websites with easy-to-use stores that make ordering simple.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
        <path d="M12 8v4M12 16h.01" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Help & Support',
    description: "We don't just build your website and leave you. We provide ongoing help and support to keep your website updated, secure, and running properly.",
  },
]

const portfolio = [
  { label: 'Personal portfolio',          color: 'from-blue-900 to-blue-700' },
  { label: 'Professional school website', color: 'from-emerald-800 to-emerald-600' },
  { label: 'Health care service',         color: 'from-slate-700 to-slate-500' },
  { label: 'Skin care brand',             color: 'from-rose-800 to-rose-600' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center bg-brand-navy overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-cyan text-sm font-display font-semibold uppercase tracking-widest mb-4 fade-up">
              Professional Web Development That Drives Growth
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6 fade-up fade-up-delay-1">
              Create a strong online presence that builds{' '}
              <span className="text-brand-cyan">trust</span> and{' '}
              <span className="text-brand-light">credibility</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg fade-up fade-up-delay-2">
              We design and build modern, responsive websites that help your business get visible online, build trust, and turn visitors into real customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-up fade-up-delay-3">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">CONTACT US</Link>
              <Link to="/services"
                className="inline-block border-2 border-white text-white font-display font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:bg-white hover:text-brand-navy">
                OUR SERVICES
              </Link>
            </div>
          </div>

          {/* Decorative card */}
          <div className="hidden lg:flex justify-center fade-up fade-up-delay-2">
            <div className="relative w-72">
              <div className="bg-white rounded-2xl shadow-2xl p-6 rotate-2">
                <div className="h-4 bg-brand-gray rounded mb-3 w-3/4" />
                <div className="h-3 bg-brand-gray rounded mb-2 w-full" />
                <div className="h-3 bg-brand-gray rounded mb-2 w-5/6" />
                <div className="h-3 bg-brand-gray rounded mb-4 w-4/5" />
                <div className="h-8 bg-brand-blue rounded w-1/2" />
              </div>
              <div className="absolute -top-4 -right-4 bg-brand-cyan rounded-xl shadow-lg p-3 -rotate-3">
                <div className="text-white text-xs font-display font-bold">✓ Live &amp; Responsive</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About strip ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading mb-5">About Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              TechWithChizi is a web development agency that builds professional, easy-to-manage websites for businesses. We focus on creating digital experiences that are clear, functional, and designed to support long-term growth.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our approach combines thoughtful design, reliable development, and clear communication. Every website we build is tailored to your business goals — helping you establish credibility, improve visibility, and connect effectively with your audience online.
            </p>
            <Link to="/contact" className="btn-primary">CHAT WITH US</Link>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 bg-brand-gray rounded-2xl flex items-center justify-center">
                <svg width="100" height="100" viewBox="0 0 36 36" fill="none">
                  <rect width="36" height="36" rx="8" fill="#3b5bdb"/>
                  <circle cx="10" cy="18" r="4" fill="white"/>
                  <circle cx="26" cy="10" r="4" fill="#00c6ff"/>
                  <circle cx="26" cy="26" r="4" fill="white"/>
                  <line x1="14" y1="18" x2="26" y2="10" stroke="white" strokeWidth="2"/>
                  <line x1="14" y1="18" x2="26" y2="26" stroke="#00c6ff" strokeWidth="2"/>
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-blue rounded-xl opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-12">
          <h2 className="section-heading">How can we help you?</h2>
          <p className="section-subheading">
            We help startups and small businesses get online with professional websites that improve visibility, credibility, and customer engagement.
          </p>
          <Link to="/services" className="btn-primary mt-6 inline-block">GET STARTED</Link>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 gap-6">
          {services.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Portfolio</h2>
            <p className="section-subheading">Designs and Demo Projects to Illustrate My Work</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolio.map(({ label, color }) => (
              <div key={label} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${color} h-40 rounded-xl mb-2 transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-lg`} />
                <p className="text-sm text-gray-500 text-center font-display">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        btnLabel="HIRE US"
        body="Ready to take your business online or improve your existing website? Let's work together to build a website that helps your business get seen, trusted, and contacted by customers."
      />
    </>
  )
}
