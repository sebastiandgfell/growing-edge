import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

// ── Replace placeholder testimonials with real client quotes ──
const testimonials = [
  {
    quote:
      "Working with GrowingEdge completely transformed our online presence. Within 3 months, our website traffic doubled and we started getting consistent leads for the first time. I finally feel like my business has a real foundation.",
    name: 'Sarah M.',
    business: 'Local Restaurant Owner',
    initials: 'SM',
  },
  {
    quote:
      "I used to spend 20+ hours a week on admin work. GrowingEdge set up systems that handle 90% of that automatically. Now I spend that time with customers — and our revenue is up 40%.",
    name: 'James K.',
    business: 'E-commerce Store Owner',
    initials: 'JK',
  },
  {
    quote:
      "Their growth strategy was unlike anything I'd seen before. They didn't just run ads — they built a complete funnel that actually converts. Best investment I've made in my business.",
    name: 'Maria L.',
    business: 'Fitness Studio Owner',
    initials: 'ML',
  },
]

function StarRating() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#C49A38] text-[#C49A38]" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' })

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#166534]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="text-[#C49A38] font-semibold text-xs uppercase tracking-[0.18em] mb-4"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight"
          >
            What Our Clients{' '}
            <span className="text-[#C49A38]">Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-white/45 text-lg max-w-2xl mx-auto"
          >
            Real results from real businesses.
          </motion.p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-colors duration-300 flex flex-col"
            >
              <Quote size={28} className="text-[#C49A38]/30 mb-5 flex-shrink-0" />
              <StarRating />
              <p className="text-white/65 leading-relaxed text-[15px] mt-4 mb-8 flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#166534] flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-white">{t.initials}</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/35 text-xs mt-0.5">{t.business}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mt-14"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#C49A38]/40 text-[#C49A38] font-bold rounded-xl hover:bg-[#C49A38]/10 hover:border-[#C49A38]/70 transition-all duration-200"
          >
            Get Your Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}
