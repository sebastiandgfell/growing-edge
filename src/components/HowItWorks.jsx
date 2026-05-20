import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Wrench, Rocket } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const icons = [MessageCircle, Wrench, Rocket]
const numbers = ['01', '02', '03']

export default function HowItWorks() {
  const { t } = useLanguage()
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' })

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#166534]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45 }} className="text-[#C49A38] font-semibold text-xs uppercase tracking-[0.18em] mb-4">
            {t.howItWorks.eyebrow}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.1 }} className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            {t.howItWorks.title}{' '}
            <span className="text-[#C49A38]">{t.howItWorks.titleAccent}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay: 0.2 }} className="text-white/45 text-lg max-w-2xl mx-auto">
            {t.howItWorks.sub}
          </motion.p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[52px] left-[calc(16.666%+32px)] right-[calc(16.666%+32px)] h-px bg-gradient-to-r from-[#166534]/40 via-[#C49A38]/30 to-[#166534]/40" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {t.howItWorks.steps.map((step, index) => {
              const Icon = icons[index]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="text-center"
                >
                  <div className="relative inline-flex flex-col items-center mb-6">
                    <div className="w-[104px] h-[104px] rounded-2xl bg-[#166534]/20 border border-[#166534]/40 flex items-center justify-center mb-3">
                      <Icon className="text-[#C49A38]" size={38} strokeWidth={1.6} />
                    </div>
                    <span className="text-[11px] font-bold text-[#C49A38]/50 tracking-[0.22em] uppercase">
                      Step {numbers[index]}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/45 leading-relaxed text-[15px] max-w-xs mx-auto">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-9 py-4 bg-[#C49A38] text-white font-bold text-base rounded-xl hover:bg-[#B5891F] transition-all duration-200 hover:scale-[1.03] active:scale-100 shadow-lg shadow-[#C49A38]/20"
          >
            {t.howItWorks.cta}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
