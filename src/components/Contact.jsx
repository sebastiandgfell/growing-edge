import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle, Send } from 'lucide-react'

const challenges = [
  { value: '', label: 'Select your main challenge' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'website', label: 'Website' },
  { value: 'operations', label: 'Operations' },
  { value: 'not-sure', label: 'Not sure yet' },
]

const inputClass =
  'w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#C49A38] focus:border-transparent transition-all duration-200 text-[15px]'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    challenge: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' })

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // ── Wire up your form submission here (e.g. EmailJS, Formspree, or your own API) ──
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div ref={headerRef} className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="text-[#166534] font-semibold text-xs uppercase tracking-[0.18em] mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
          >
            Ready to Grow?{' '}
            <span className="text-[#166534]">Let's Talk.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Book your free 30-minute consultation. No pressure, no commitment — just a real
            conversation about your business.
          </motion.p>
        </div>

        {/* Form or success message */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/80 p-8 lg:p-10 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-[#166534]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-[#166534]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Name <span className="text-[#166534]">*</span>
                </label>
                <input
                  type="text"
                  name="business"
                  required
                  value={form.business}
                  onChange={handleChange}
                  placeholder="Your Business Name"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Main Challenge <span className="text-[#166534]">*</span>
                </label>
                <select
                  name="challenge"
                  required
                  value={form.challenge}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {challenges.map((c) => (
                    <option key={c.value} value={c.value} disabled={c.value === ''}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell Us More{' '}
                  <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your business and what you're looking to achieve..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#166534] text-white font-bold text-base rounded-xl hover:bg-[#15803d] transition-all duration-200 hover:scale-[1.02] active:scale-100 shadow-lg shadow-green-900/20"
              >
                Book My Free Call
                <Send size={17} />
              </button>

              <p className="text-center text-xs text-gray-400">
                We'll get back to you within 24 hours. No spam, ever.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-16 px-8 bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/80"
            >
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={34} className="text-[#166534]" />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">You're on the list!</h3>
              <p className="text-gray-500 text-lg max-w-sm mx-auto leading-relaxed">
                Thanks for reaching out. We'll be in touch within 24 hours to schedule
                your free consultation.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
