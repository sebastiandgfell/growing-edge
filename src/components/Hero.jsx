import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, Users } from 'lucide-react'

function FloatingOrb({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{
        x: [0, 25, -18, 8, 0],
        y: [0, -22, 18, -10, 0],
        scale: [1, 1.08, 0.94, 1.04, 1],
      }}
      transition={{ duration: 16, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

const stats = [
  { value: '50+', label: 'Clients Served' },
  { value: '3×', label: 'Average Revenue Growth' },
  { value: '20h+', label: 'Saved Per Week' },
]

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-screen bg-[#0F172A] flex items-center overflow-hidden">

      {/* Background orbs — forest green + gold */}
      <FloatingOrb className="w-[500px] h-[500px] bg-[#166534] opacity-25 -top-20 -left-32" delay={0} />
      <FloatingOrb className="w-[380px] h-[380px] bg-[#C49A38] opacity-[0.08] top-1/4 right-0" delay={4} />
      <FloatingOrb className="w-[300px] h-[300px] bg-[#166534] opacity-20 bottom-16 left-1/3" delay={8} />
      <FloatingOrb className="w-[350px] h-[350px] bg-[#C49A38] opacity-[0.06] -bottom-20 right-1/4" delay={2} />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0F172A] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-24 lg:pt-0 lg:pb-0">
        <div className="max-w-4xl">

          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#C49A38]/15 border border-[#C49A38]/25 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-[#C49A38] rounded-full animate-pulse" />
            <span className="text-[#C49A38] text-sm font-semibold">Business Growth Agency</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-extrabold text-white leading-[1.06] tracking-tight mb-6"
          >
            We Give Your{' '}
            <span className="text-[#C49A38]">Business</span>
            <br />
            Its Edge.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/55 max-w-2xl leading-relaxed mb-10"
          >
            Marketing, web design, and business management — all handled for you,
            so you can focus on what you do best.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.52 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollTo('services')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C49A38] text-white font-bold text-base rounded-xl hover:bg-[#B5891F] transition-all duration-200 hover:scale-[1.03] active:scale-100 shadow-lg shadow-[#C49A38]/25"
            >
              See What We Do
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/25 text-white font-bold text-base rounded-xl hover:border-white/50 hover:bg-white/[0.05] transition-all duration-200"
            >
              <Users size={18} />
              Meet the Team
            </button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.7 }}
            className="flex flex-wrap gap-10 mt-16 pt-8 border-t border-white/10"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-[#C49A38]">{s.value}</div>
                <div className="text-sm text-white/40 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/25"
        >
          <ArrowDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  )
}
