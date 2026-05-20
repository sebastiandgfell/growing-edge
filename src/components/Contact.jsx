import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CheckCircle, Send, Mail, Loader2, ChevronDown } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../i18n/LanguageContext'

const SERVICE_ID = 'service_pisjx2y'
const TEMPLATE_ID = 'template_ux7zuii'
const PUBLIC_KEY = 'qdY1ctr-zoACp6MiR'

const team = [
  { name: 'Denys', email: 'den.koval404@gmail.com', gmailUrl: 'https://mail.google.com/mail/?view=cm&to=den.koval404@gmail.com' },
  { name: 'Sebastian', email: 'sebastiangfell@gmail.com', gmailUrl: 'https://mail.google.com/mail/?view=cm&to=sebastiangfell@gmail.com' },
]

const challengeIcons = ['📣', '🌐', '⚙️', '💡']

const inputClass =
  'w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#C49A38] focus:border-transparent transition-all duration-200 text-[15px]'

function CustomSelect({ value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const selected = options.find((o) => o.value === value)

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-label={placeholder}
        onClick={() => setOpen((v) => !v)}
        className={`w-full px-4 py-3 border rounded-xl text-left flex items-center justify-between transition-all duration-200 text-[15px] bg-white ${
          open ? 'border-[#C49A38] ring-2 ring-[#C49A38]' : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        <span className={selected ? 'text-gray-900' : 'text-gray-400'}>
          {selected ? `${selected.icon} ${selected.label}` : placeholder}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={18} className="text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-xl shadow-gray-100/80 overflow-hidden"
          >
            {options.map((option, i) => (
              <motion.li
                key={option.value}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.18, delay: i * 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => { onChange(option.value); setOpen(false) }}
                  className={`w-full px-4 py-3 text-left flex items-center gap-3 text-[15px] transition-all duration-150 ${
                    value === option.value
                      ? 'bg-[#166534]/[0.08] text-[#166534] font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-lg leading-none">{option.icon}</span>
                  <span className="flex-1">{option.label}</span>
                  {value === option.value && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 rounded-full bg-[#166534]"
                    />
                  )}
                </button>
                {i < options.length - 1 && <div className="h-px bg-gray-100 mx-4" />}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', business: '', challenge: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' })

  const challengeOptions = t.contact.challengeOptions.map((label, i) => ({
    value: label.toLowerCase().replace(/\s+/g, '-'),
    label,
    icon: challengeIcons[i],
  }))

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: form.name,
        email: form.email,
        business: form.business,
        challenge: form.challenge,
        message: form.message,
      }, PUBLIC_KEY)
      setSubmitted(true)
    } catch {
      setError(t.contact.errorMsg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headerRef} className="text-center mb-12">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45 }} className="text-[#166534] font-semibold text-xs uppercase tracking-[0.18em] mb-4">
            {t.contact.eyebrow}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.1 }} className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {t.contact.title}{' '}
            <span className="text-[#166534]">{t.contact.titleAccent}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay: 0.2 }} className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            {t.contact.sub}
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.25 }} className="flex flex-col sm:flex-row gap-4 mb-10">
          {team.map((member) => (
            <a
              key={member.email}
              href={member.gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center gap-3 px-5 py-4 border border-gray-200 rounded-xl hover:border-[#166534]/40 hover:bg-green-50/50 transition-all duration-200 group"
            >
              <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#166534]/10 transition-colors duration-200">
                <Mail size={17} className="text-[#166534]" />
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{member.name}</div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-[#166534] transition-colors duration-200">{member.email}</div>
              </div>
            </a>
          ))}
        </motion.div>

        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{t.contact.orForm}</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/80 p-8 lg:p-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.labelName} <span className="text-[#166534]">*</span>
                  </label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder={t.contact.placeholderName} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.labelEmail} <span className="text-[#166534]">*</span>
                  </label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder={t.contact.placeholderEmail} className={inputClass} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.labelBusiness} <span className="text-[#166534]">*</span>
                </label>
                <input type="text" name="business" required value={form.business} onChange={handleChange} placeholder={t.contact.placeholderBusiness} className={inputClass} />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.labelChallenge} <span className="text-[#166534]">*</span>
                </label>
                <CustomSelect
                  value={form.challenge}
                  onChange={(val) => setForm((prev) => ({ ...prev, challenge: val }))}
                  options={challengeOptions}
                  placeholder={t.contact.placeholderChallenge}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.labelMessage}{' '}
                  <span className="text-gray-400 font-normal">({t.contact.labelMessageOptional})</span>
                </label>
                <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder={t.contact.placeholderMessage} className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#166534] text-white font-bold text-base rounded-xl hover:bg-[#15803d] transition-all duration-200 hover:scale-[1.02] active:scale-100 shadow-lg shadow-green-900/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    {t.contact.cta}
                    <Send size={17} />
                  </>
                )}
              </button>

              {error && <p className="text-center text-sm text-red-500">{error}</p>}

              <p className="text-center text-xs text-gray-400">{t.contact.disclaimer}</p>
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
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">{t.contact.successTitle}</h3>
              <p className="text-gray-500 text-lg max-w-sm mx-auto leading-relaxed">{t.contact.successMsg}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
