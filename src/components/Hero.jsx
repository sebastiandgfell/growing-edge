import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, Users } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

function FloatingOrb({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{ x: [0, 25, -18, 8, 0], y: [0, -22, 18, -10, 0], scale: [1, 1.08, 0.94, 1.04, 1] }}
      transition={{ duration: 16, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

const stats = [
  { value: '50+', key: 'stat1Label' },
  { value: '3×', key: 'stat2Label' },
  { value: '20h+', key: 'stat3Label' },
]

export default function Hero() {
  const { t } = useLanguage()
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-screen bg-[#0F172A] flex items-center overflow-hidden">

      <FloatingOrb className="w-[500px] h-[500px] bg-[#166534] opacity-25 -top-20 -left-32" delay={0} />
      <FloatingOrb className="w-[380px] h-[380px] bg-[#C49A38] opacity-[0.08] top-1/4 right-0" delay={4} />
      <FloatingOrb className="w-[300px] h-[300px] bg-[#166534] opacity-20 bottom-16 left-1/3" delay={8} />
      <FloatingOrb className="w-[350px] h-[350px] bg-[#C49A38] opacity-[0.06] -bottom-20 right-1/4" delay={2} />

      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0F172A] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-24 lg:pt-24 lg:pb-12 flex flex-col items-center text-center">

        {/* Main brand mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mb-10"
        >
          <div className="flex items-baseline leading-none justify-center">
            <span className="font-bold text-[#166534] text-[64px] sm:text-[86px] lg:text-[112px] tracking-tight drop-shadow-lg" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Growing</span>
            <span className="font-bold text-[#C49A38] text-[64px] sm:text-[86px] lg:text-[112px] tracking-tight drop-shadow-lg" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Edge</span>
          </div>
          <div className="flex items-center mt-2 overflow-hidden">
            <motion.div
              className="flex-1 h-[2px] bg-[#166534]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.75, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: 'left' }}
            />
            <motion.svg
              viewBox="0 0 10 10" className="w-[14px] h-[14px] ml-[3px] flex-shrink-0"
              fill="none" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              initial={{ x: -900 }} animate={{ x: 0 }}
              transition={{ duration: 0.9, delay: 0.75, ease: [0.4, 0, 0.2, 1] }}
            >
              <path d="M1 9 L9 1 M5 1 L9 1 L9 5" />
            </motion.svg>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug tracking-tight mb-4 max-w-2xl"
        >
          {t.hero.headline}{' '}
          <span className="text-[#C49A38]">{t.hero.headlineAccent}</span>
          {' '}{t.hero.headlineEnd}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.52 }}
          className="text-base sm:text-lg text-white/55 max-w-xl leading-relaxed mb-10"
        >
          {t.hero.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.64 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => scrollTo('services')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C49A38] text-white font-bold text-base rounded-xl hover:bg-[#B5891F] transition-all duration-200 hover:scale-[1.03] active:scale-100 shadow-lg shadow-[#C49A38]/25"
          >
            {t.hero.ctaPrimary}
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/25 text-white font-bold text-base rounded-xl hover:border-white/50 hover:bg-white/[0.05] transition-all duration-200"
          >
            <Users size={18} />
            {t.hero.ctaSecondary}
          </button>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.72 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#C49A38]/15 border border-[#C49A38]/25 rounded-full mt-6 mb-10"
        >
          <span className="w-2 h-2 bg-[#C49A38] rounded-full animate-pulse" />
          <span className="text-[#C49A38] text-sm font-semibold">{t.hero.badge}</span>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.78 }}
          className="flex flex-wrap justify-center gap-10 pt-8 border-t border-white/10 w-full max-w-lg"
        >
          {stats.map((s) => (
            <div key={s.key} className="text-center">
              <div className="text-3xl font-extrabold text-[#C49A38]">{s.value}</div>
              <div className="text-sm text-white/40 mt-0.5">{t.hero[s.key]}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} className="text-white/25">
          <ArrowDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  )
}
