import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const STORAGE_KEY = 'ge_cookie_consent'

const copy = {
  en: {
    text: 'We use cookies to improve your experience and analyze site traffic.',
    accept: 'Accept All',
    decline: 'Decline',
    policy: 'Privacy Policy',
  },
  ru: {
    text: 'Мы используем файлы cookie для улучшения работы сайта и анализа трафика.',
    accept: 'Принять',
    decline: 'Отклонить',
    policy: 'Политика конфиденциальности',
  },
  de: {
    text: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und den Website-Traffic zu analysieren.',
    accept: 'Alle akzeptieren',
    decline: 'Ablehnen',
    policy: 'Datenschutz',
  },
  es: {
    text: 'Usamos cookies para mejorar tu experiencia y analizar el tráfico del sitio.',
    accept: 'Aceptar todo',
    decline: 'Rechazar',
    policy: 'Política de privacidad',
  },
}

export default function CookieBanner({ onOpenPrivacy }) {
  const { lang } = useLanguage()
  const [visible, setVisible] = useState(false)
  const c = copy[lang] || copy.en

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-2xl"
        >
          <div className="bg-[#0F172A] border border-white/10 rounded-2xl shadow-2xl shadow-black/40 px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <Cookie size={20} className="text-[#C49A38] flex-shrink-0 mt-0.5" />
              <p className="text-white/60 text-sm leading-relaxed">
                {c.text}{' '}
                <button
                  onClick={onOpenPrivacy}
                  className="text-[#C49A38] hover:underline font-medium"
                >
                  {c.policy}
                </button>
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={decline}
                className="px-4 py-2 text-sm font-semibold text-white/40 hover:text-white/70 transition-colors duration-200"
              >
                {c.decline}
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 bg-[#C49A38] text-white text-sm font-bold rounded-lg hover:bg-[#B5891F] transition-colors duration-200"
              >
                {c.accept}
              </button>
              <button
                onClick={decline}
                aria-label="Close"
                className="ml-1 text-white/25 hover:text-white/50 transition-colors duration-200"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
