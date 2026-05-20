import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

const teamPhotos = [
  { photo: '/denys.jpg', name: 'Denys', objectPosition: 'center top' },
  { photo: '/sebastian.jpg', name: 'Sebastian', objectPosition: 'center 50%' },
]

function TeamCard({ member, bio, role, delay }) {
  const { t } = useLanguage()
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-100 transition-shadow duration-300"
    >
      <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 relative">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover"
          style={{ objectPosition: member.objectPosition }}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.nextElementSibling.style.display = 'flex'
          }}
        />
        <div className="absolute inset-0 items-center justify-center flex-col gap-2 bg-gradient-to-br from-[#166534] to-[#1a7a40]" style={{ display: 'none' }}>
          <span className="text-5xl font-extrabold text-white/90" style={{ fontFamily: "'Playfair Display', serif" }}>
            {member.name[0]}
          </span>
          <span className="text-xs text-white/50 font-medium tracking-widest uppercase">Photo coming soon</span>
        </div>
      </div>
      <div className="p-7">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
            <span className="inline-block mt-1.5 px-3 py-1 bg-green-50 text-[#166534] text-xs font-semibold rounded-full">{role}</span>
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#C49A38] mt-1.5 flex-shrink-0" />
        </div>
        <p className="text-gray-500 leading-relaxed text-[15px]">{bio}</p>
      </div>
    </motion.div>
  )
}

export default function About() {
  const { t } = useLanguage()
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' })

  return (
    <section id="about" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headerRef} className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45 }} className="text-[#166534] font-semibold text-xs uppercase tracking-[0.18em] mb-4">
            {t.about.eyebrow}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.1 }} className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {t.about.title}{' '}
            <span className="text-[#166534]">{t.about.titleAccent}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay: 0.2 }} className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            {t.about.sub}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teamPhotos.map((member, i) => (
            <TeamCard
              key={member.name}
              member={member}
              role={t.about.team[i].role}
              bio={t.about.team[i].bio}
              delay={i * 0.12}
            />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-14 text-center">
          <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">{t.about.quote}</p>
          <div className="mt-6">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#166534] text-white font-bold text-sm rounded-xl hover:bg-[#15803d] transition-colors duration-200"
            >
              {t.about.cta}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
