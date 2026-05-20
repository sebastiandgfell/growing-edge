import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const projectStatics = [
  {
    name: 'Meridian Realty Group',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80',
    tags: ['Web Design', 'UX Audit', 'SEO', 'Copywriting'],
  },
  {
    name: 'Brisa Café',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80',
    tags: ['Web Design', 'Bilingual UX', 'Local SEO', 'Reservation Flow'],
  },
]

export default function Portfolio() {
  const { t } = useLanguage()
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' })

  return (
    <section id="work" className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#C49A38]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#166534]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headerRef} className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45 }} className="text-[#C49A38] font-semibold text-xs uppercase tracking-[0.18em] mb-4">
            {t.portfolio.eyebrow}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.1 }} className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            {t.portfolio.title}{' '}
            <span className="text-[#C49A38]">{t.portfolio.titleAccent}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay: 0.2 }} className="text-white/45 text-lg max-w-2xl mx-auto">
            {t.portfolio.sub}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectStatics.map((project, index) => {
            const data = t.portfolio.projects[index]
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#0F172A]/80 backdrop-blur-sm border border-white/15 rounded-full">
                    <span className="text-[#C49A38] text-xs font-bold">{data.result}</span>
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-[#C49A38] text-xs font-semibold uppercase tracking-[0.16em] mb-2">
                    {data.category}
                  </p>
                  <h3 className="text-2xl font-extrabold text-white mb-3">{project.name}</h3>
                  <p className="text-white/50 text-[15px] leading-relaxed mb-6">{data.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-semibold text-white/60 border border-white/10 rounded-full bg-white/[0.04]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="text-center mt-14">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C49A38] text-white font-bold rounded-xl hover:bg-[#B5891F] transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-[#C49A38]/20"
          >
            {t.portfolio.cta}
            <ArrowUpRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
