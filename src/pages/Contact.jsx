import React, { useState } from 'react'
import emailjs    from '@emailjs/browser'
import PageHero   from '../components/PageHero.jsx'
import CTABanner  from '../components/CTABanner.jsx'

// Vite exposes env vars via import.meta.env (must be prefixed with VITE_)
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const empty = { name: '', email: '', message: '' }

export default function Contact() {
  const [form,      setForm]      = useState(empty)
  const [errors,    setErrors]    = useState({})
  const [sending,   setSending]   = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [sendError, setSendError] = useState('')

  function validate() {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required.'
    if (!form.email.trim())   e.email   = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email.'
    if (!form.message.trim()) e.message = 'Message is required.'
    return e
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
    if (sendError) setSendError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setSending(true)
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        PUBLIC_KEY
      )
      setSubmitted(true)
      setForm(empty)
    } catch (err) {
      console.error(err)
      setSendError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSending(false)
    }
  }

  const fieldClass = (key) =>
    `w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue transition ${
      errors[key] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
    }`

  return (
    <>
      <div className="pt-16">
        <PageHero
          title="Contact Us"
          subtitle="Contact Us for Web Development Services"
          description="Get in touch with us to discuss your website needs. Whether you're launching a new website or improving an existing one, we're here to help."
        />
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-start">

          {/* Form */}
          <div className="bg-brand-gray rounded-2xl p-8 shadow-sm">
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-6">Request Free Consultation</h2>

            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-2">Message sent!</h3>
                <p className="text-gray-500 text-sm">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)}
                  className="mt-6 text-brand-blue text-sm font-display font-semibold underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <input type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="Your name*" className={fieldClass('name')} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="Your email*" className={fieldClass('email')} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Your message*" rows={5}
                    className={`${fieldClass('message')} resize-none`} />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {sendError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-600 text-sm">
                    {sendError}
                  </div>
                )}

                <button type="submit" disabled={sending}
                  className={`btn-primary w-full flex items-center justify-center gap-2 ${sending ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {sending ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending…
                    </>
                  ) : 'SUBMIT'}
                </button>
              </form>
            )}
          </div>

          {/* Get in touch */}
          <div>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-6">Get In Touch</h2>
            <p className="text-gray-500 text-sm font-semibold mb-4 uppercase tracking-wide">Reach Us</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <span className="w-9 h-9 rounded-lg bg-brand-gray flex items-center justify-center text-brand-blue flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </span>
                <a href="mailto:contact@techwithchizi.com.ng" className="hover:text-brand-blue transition-colors">
                  contact@techwithchizi.com.ng
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <span className="w-9 h-9 rounded-lg bg-brand-gray flex items-center justify-center text-brand-blue flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </span>
                <a href="https://wa.me/2347073276471" target="_blank" rel="noreferrer"
                  className="hover:text-brand-blue transition-colors">Chat With Us on WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Would you like to start a project with us?"
        body="Ready to build a professional website that supports your business goals? Reach out to us today."
        btnLabel="CHAT WITH US"
      />
    </>
  )
}
