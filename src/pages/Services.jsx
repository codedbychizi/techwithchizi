import React from 'react'
import { Link } from 'react-router-dom'
import PageHero    from '../components/PageHero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTABanner   from '../components/CTABanner.jsx'

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
    description: 'We provide SEO for websites, including keyword research, on-page SEO, and meta-tag improvements. This helps your site rank higher on search engines, attract organic traffic, and reach more potential customers.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"/>
        <path d="M8 21h8M12 17v4" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 8l-3 3 3 3M16 8l3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Website Development',
    description: 'We develop fast, responsive, and reliable WordPress websites that are easy to manage and scale as your business grows. Our development process focuses on performance, usability, and functionality.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="21" r="1" strokeWidth="2"/>
        <circle cx="20" cy="21" r="1" strokeWidth="2"/>
      </svg>
    ),
    title: 'E-Commerce Websites',
    description: "We help businesses sell products and services online through simple and effective e-commerce websites. Our focus is on creating easy-to-use online stores that showcase your products clearly.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
        <path d="M12 8v4M12 16h.01" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Help & Support',
    description: "We don't just build your website and leave you on your own. We provide ongoing help and support to keep your website updated, secure, and running properly.",
  },
]

export default function Services() {
  return (
    <>
      <div className="pt-16">
        <PageHero
          title="Services"
          subtitle="Web Solutions for Your Business"
          description="We design and build modern, responsive websites that make your business visible, professional, and easy for customers to find and trust."
        />
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-heading mb-4">How can we help you?</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Whether you're launching a new business or improving an existing one, we build scalable websites that grow with you and support your marketing efforts.
          </p>
          <Link to="/contact" className="btn-primary">BOOK NOW</Link>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 gap-6">
          {services.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
