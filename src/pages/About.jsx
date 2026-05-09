import React, { useState } from 'react'
import PageHero  from '../components/PageHero.jsx'
import CTABanner from '../components/CTABanner.jsx'

const process = [
  { num: '01', title: 'Discover', desc: "We begin by understanding your business, goals, target audience, and requirements. This helps us gain clarity on what you need and how your website should support your objectives." },
  { num: '02', title: 'Define',   desc: "Based on our findings, we define the website structure, features, and content direction. This stage ensures a clear roadmap before design and development begin." },
  { num: '03', title: 'Design',   desc: "We create clean, user-friendly designs that reflect your brand and provide a smooth experience across all devices. The focus is on clarity, usability, and visual consistency." },
  { num: '04', title: 'Develop',  desc: "We turn the approved design into a fully functional WordPress website. The site is built to be responsive, fast, and easy to manage." },
  { num: '05', title: 'Deploy',   desc: "After launch, we hand over the website, provide basic guidance, and ensure the client is comfortable managing their site." },
  { num: '06', title: 'Deliver',  desc: "Ongoing support is available when needed. We stay reachable so nothing gets left unresolved after go-live." },
]

const whyItems = [
  { title: 'Quality-Driven Design',       desc: 'We create clean, modern designs focused on clarity, usability, and your business goals.' },
  { title: 'Reliable Support',            desc: "We're here after launch — small changes, guidance, and updates are always within reach." },
  { title: 'Goal-Focused Projects',       desc: 'Every decision in the project ties back to your real business goals.' },
  { title: 'Simple & Transparent Process',desc: "No surprises. You know what's happening at every stage." },
  { title: 'Built for Growth',            desc: 'We build scalable sites that grow with your business.' },
  { title: 'Professional & Dedicated Team', desc: 'Direct communication with a developer who cares about your success.' },
]

function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full text-left flex items-center justify-between px-5 py-4 font-display font-semibold text-sm text-brand-navy hover:bg-brand-gray transition-colors"
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {item.title}
            <span className={`ml-2 transition-transform duration-200 text-brand-blue ${open === i ? 'rotate-45' : ''}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-4 text-gray-500 text-sm leading-relaxed">{item.desc}</div>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function About() {
  return (
    <>
      <div className="pt-16">
        <PageHero
          title="About Us"
          subtitle="Welcome to TechWithChizi"
          description="TechWithChizi is a web development agency that builds professional, easy-to-manage websites for startups and businesses — designed for visibility, credibility, and growth."
        />
      </div>

      {/* 3-col intro */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Who Are We',
              body: 'We are a team driven by creativity, functionality, and purpose. At TWC, we believe a website should do more than look good — it should clearly communicate your business, work smoothly across all devices, and support your growth goals.',
            },
            {
              title: 'Our Mission',
              body: 'Our mission is to help businesses build strong, reliable digital experiences through well-designed and functional websites that support visibility, credibility, and long-term growth.',
            },
            {
              title: 'What We Do',
              list: ['UI UX Design','Website Development','Startup & Business Websites','Website Redesign','E-Commerce Websites','Website Maintenance & Support'],
            },
          ].map(({ title, body, list }) => (
            <div key={title} className="border-t-2 border-brand-blue pt-6">
              <h3 className="font-display font-bold text-lg text-brand-navy mb-3">{title}</h3>
              {body ? (
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              ) : (
                <ul className="space-y-1 text-sm text-gray-500">
                  {list.map((l) => (
                    <li key={l} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block flex-shrink-0" />
                      {l}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-brand-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-heading mb-3">Meet Our Leadership</h2>
          <p className="section-subheading mb-12">
            We are a passionate team dedicated to helping businesses succeed online. Our leadership is focused on delivering practical web solutions, clear communication, and quality results.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
  
  {/* Leader 1 */}
  <div className="flex flex-col items-center text-center">
    <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-blue shadow-lg mb-4 flex items-center justify-center">
      {/* <img src="/covenant.jpg" alt="Covenant Chisiebube" className="w-full h-full object-cover rounded-2xl" /> */}
      <svg className="w-20 h-20 text-white opacity-40" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
      </svg>
    </div>
    <h3 className="font-display font-bold text-xl text-brand-navy">
      Covenant Chisiebube
    </h3>
    <p className="text-brand-blue font-display text-sm mt-1">
      Founder &amp; Lead Web Developer
    </p>
  </div>

  {/* Leader 2 */}
  <div className="flex flex-col items-center text-center">
    <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-blue shadow-lg mb-4 flex items-center justify-center">
      <svg className="w-20 h-20 text-white opacity-40" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
      </svg>
    </div>
    <h3 className="font-display font-bold text-xl text-brand-navy">
      Covenant Chisiebube
    </h3>
    <p className="text-brand-blue font-display text-sm mt-1">
      Founder &amp; Lead Web Developer
    </p>
  </div>
</div>
</div>
      </section>

      {/* 6-D Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading text-center mb-12">Our 6-D Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map(({ num, title, desc }) => (
              <div key={num} className="relative pl-4">
                <span className="absolute left-0 top-0 text-6xl font-display font-extrabold text-brand-gray leading-none select-none">{num}</span>
                <div className="pt-8"> <br/>
                  <h3 className="font-display font-bold text-brand-navy mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Why Choose Us?</h2>
            <p className="text-gray-300 leading-relaxed">
              We build professional websites with purpose — designed to be simple, effective, and easy to manage as your business grows.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <Accordion items={whyItems} />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Would you like to start a project with us?"
        body="Ready to build a professional website that helps your business get visible online and connect with customers? Let's discuss your ideas and create a solution that fits your goals."
        btnLabel="BOOK A FREE CONSULTATION"
      />
    </>
  )
}
