import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage, LANGUAGES } from '../i18n/LanguageContext'

function Logo({ onClick }) {
  return (
    <button onClick={onClick} className="flex flex-col items-start group">
      <div className="flex items-baseline leading-none">
        <span className="font-bold text-[#166534] text-[22px] tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Growing</span>
        <span className="font-bold text-[#C49A38] text-[22px] tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Edge</span>
      </div>
      <div className="flex items-center w-full mt-[3px]">
        <div className="flex-1 h-px bg-[#166534]" />
        <svg viewBox="0 0 10 10" className="w-[10px] h-[10px] ml-[1px] flex-shrink-0" fill="none" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 9 L9 1 M5 1 L9 1 L9 5" />
        </svg>
      </div>
    </button>
  )
}

export default function Navbar() {
  const { t, lang, setLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: t.nav.home, id: 'hero' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.work, id: 'work' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.howItWorks, id: 'how-it-works' },
    { label: t.nav.contact, id: 'contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-[#0F172A]/85 border-b border-white/10 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          <Logo onClick={() => scrollTo('hero')} />

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side: language switcher + CTA + hamburger */}
          <div className="flex items-center gap-3">

            {/* Language switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-white/[0.06] border border-white/10 rounded-lg p-1">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2 py-1 text-xs font-bold rounded-md transition-all duration-200 ${
                    lang === l.code
                      ? 'bg-[#C49A38] text-white shadow-sm'
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#C49A38] text-white text-sm font-bold rounded-xl hover:bg-[#B5891F] transition-all duration-200 shadow-md shadow-[#C49A38]/20"
            >
              {t.nav.cta}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-[#0F172A]/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {/* Mobile language switcher */}
              <div className="flex items-center gap-1 mb-3 pb-3 border-b border-white/10">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 ${
                      lang === l.code
                        ? 'bg-[#C49A38] text-white'
                        : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>

              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-white/70 hover:text-white text-base font-medium text-left px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="mt-2 w-full px-4 py-3 bg-[#C49A38] text-white text-sm font-bold rounded-xl hover:bg-[#B5891F] transition-colors"
              >
                {t.nav.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
