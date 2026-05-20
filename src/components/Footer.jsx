import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

// ── Replace href="#" with your actual social profile URLs ──
const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter / X', href: '#' },
]

function Logo({ onClick }) {
  return (
    <button onClick={onClick} className="flex flex-col items-start mb-4">
      <div className="flex items-baseline leading-none">
        <span className="font-bold text-[#166534] text-[20px] tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Growing
        </span>
        <span className="font-bold text-[#C49A38] text-[20px] tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Edge
        </span>
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

const privacyLabel = { en: 'Privacy Policy', ru: 'Конфиденциальность', de: 'Datenschutz', es: 'Privacidad' }

export default function Footer({ onOpenPrivacy }) {
  const { t, lang } = useLanguage()
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const quickLinks = [
    { label: t.nav.services, id: 'services' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.howItWorks, id: 'how-it-works' },
    { label: t.nav.contact, id: 'contact' },
  ]

  return (
    <footer className="bg-[#0F172A] border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Logo onClick={() => scrollTo('hero')} />
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mt-2">
              {t.footer.description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.18em] mb-5">
              {t.footer.contactUs}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="https://mail.google.com/mail/?view=cm&to=den.koval404@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/40 hover:text-[#C49A38] text-sm transition-colors duration-200">
                  <Mail size={14} className="flex-shrink-0" />
                  <span>den.koval404@gmail.com</span>
                </a>
                <p className="text-white/20 text-xs mt-0.5 ml-5">Denys</p>
              </li>
              <li>
                <a href="https://mail.google.com/mail/?view=cm&to=sebastiangfell@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/40 hover:text-[#C49A38] text-sm transition-colors duration-200">
                  <Mail size={14} className="flex-shrink-0" />
                  <span>sebastiangfell@gmail.com</span>
                </a>
                <p className="text-white/20 text-xs mt-0.5 ml-5">Sebastian</p>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.18em] mb-5">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollTo(link.id)} className="text-white/40 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.18em] mb-5">
              {t.footer.followUs}
            </h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 border border-white/15 rounded-xl flex items-center justify-center text-white/35 hover:text-[#C49A38] hover:border-[#C49A38]/50 hover:bg-[#C49A38]/5 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-white/25 text-xs mt-5 leading-relaxed max-w-[200px]">
              {t.footer.followSub}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-white/25 text-sm">{t.footer.copyright}</p>
            <button onClick={onOpenPrivacy} className="text-white/25 hover:text-white/50 text-sm transition-colors duration-200">
              {privacyLabel[lang] || privacyLabel.en}
            </button>
          </div>
          <button onClick={() => scrollTo('contact')} className="text-[#C49A38]/60 hover:text-[#C49A38] text-sm font-medium transition-colors duration-200">
            {t.footer.footerCta}
          </button>
        </div>
      </div>
    </footer>
  )
}
