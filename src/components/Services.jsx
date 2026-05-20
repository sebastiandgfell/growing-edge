import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Megaphone, Globe, Settings, BarChart3, ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const icons = [Megaphone, Globe, Settings, BarChart3]

function ServiceCard({ service, icon: Icon, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group p-8 bg-white border border-gray-100 rounded-2xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-green-100/60 hover:border-[#166534]/15"
    >
      <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#166534]/10 transition-colors duration-300">
        <Icon className="text-[#166534]" size={26} strokeWidth={1.75} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-500 leading-relaxed text-[15px]">{service.description}</p>
    </motion.div>
  )
}

export default function Services() {
  const { t } = useLanguage()
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' })

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headerRef} className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45 }} className="text-[#166534] font-semibold text-xs uppercase tracking-[0.18em] mb-4">
            {t.services.eyebrow}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.1 }} className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {t.services.title}{' '}
            <span className="text-[#166534]">{t.services.titleAccent}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay: 0.2 }} className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.services.sub}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.items.map((service, index) => (
            <ServiceCard key={index} service={service} icon={icons[index]} index={index} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#166534] text-white font-bold rounded-xl hover:bg-[#15803d] transition-colors duration-200 shadow-lg shadow-green-900/20"
          >
            {t.services.cta}
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
