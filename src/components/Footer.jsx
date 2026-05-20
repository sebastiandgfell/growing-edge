import { Instagram, Linkedin, Twitter } from 'lucide-react'

// ── Replace href="#" with your actual social profile URLs ──
const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter / X', href: '#' },
]

const quickLinks = [
  { label: 'Services', id: 'services' },
  { label: 'About Us', id: 'about' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Contact', id: 'contact' },
]

// Matches the actual GrowingEdge logo
function Logo({ onClick }) {
  return (
    <button onClick={onClick} className="flex flex-col items-start mb-4">
      <div className="flex items-baseline leading-none">
        <span
          className="font-bold text-[#166534] text-[20px] tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Growing
        </span>
        <span
          className="font-bold text-[#C49A38] text-[20px] tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Edge
        </span>
      </div>
      <div className="flex items-center w-full mt-[3px]">
        <div className="flex-1 h-px bg-[#166534]" />
        <svg
          viewBox="0 0 10 10"
          className="w-[10px] h-[10px] ml-[1px] flex-shrink-0"
          fill="none"
          stroke="#166534"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 9 L9 1 M5 1 L9 1 L9 5" />
        </svg>
      </div>
    </button>
  )
}

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-[#0F172A] border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <Logo onClick={() => scrollTo('hero')} />
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mt-2">
              We give your business its edge. Marketing, web design, and operations — handled for you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.18em] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.18em] mb-5">
              Follow Us
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
              Follow us for tips on growing your business smarter.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">© 2025 GrowingEdge. All rights reserved.</p>
          <button
            onClick={() => scrollTo('contact')}
            className="text-[#C49A38]/60 hover:text-[#C49A38] text-sm font-medium transition-colors duration-200"
          >
            Get a Free Consultation →
          </button>
        </div>
      </div>
    </footer>
  )
}
