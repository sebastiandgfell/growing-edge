import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const content = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: May 2026',
    sections: [
      {
        heading: 'Who we are',
        body: 'GrowingEdge is a business growth agency operated by Denys Koval and Sebastian Fell. We provide marketing, web design, and business operations services to small businesses.',
      },
      {
        heading: 'What data we collect',
        body: 'When you submit our contact form, we collect your name, email address, business name, and the message you provide. This data is transmitted via EmailJS and used solely to respond to your enquiry.',
      },
      {
        heading: 'Cookies',
        body: 'We use cookies to understand how visitors interact with our site (analytics). We use Google Analytics 4 for this purpose. You can decline cookies at any time using the banner at the bottom of this page. Declining will not affect your ability to use the site.',
      },
      {
        heading: 'How we use your data',
        body: 'Your contact details are used only to respond to your enquiry and schedule a consultation. We do not sell, rent, or share your personal data with third parties for marketing purposes.',
      },
      {
        heading: 'Data retention',
        body: 'Form submissions are retained for up to 12 months, after which they are deleted. You may request deletion at any time by emailing us.',
      },
      {
        heading: 'Your rights (GDPR)',
        body: 'If you are located in the EU/EEA, you have the right to access, correct, or delete your personal data. To exercise these rights, contact us at den.koval404@gmail.com.',
      },
      {
        heading: 'Contact',
        body: 'For any privacy-related questions, email: den.koval404@gmail.com',
      },
    ],
  },
  ru: {
    title: 'Политика конфиденциальности',
    updated: 'Последнее обновление: май 2026',
    sections: [
      {
        heading: 'О нас',
        body: 'GrowingEdge — агентство роста бизнеса, управляемое Денисом Ковалем и Себастьяном Феллом. Мы предоставляем услуги по маркетингу, веб-дизайну и операционному управлению для малого бизнеса.',
      },
      {
        heading: 'Какие данные мы собираем',
        body: 'При отправке формы обратной связи мы собираем ваше имя, email, название компании и сообщение. Данные передаются через EmailJS и используются исключительно для ответа на ваш запрос.',
      },
      {
        heading: 'Файлы cookie',
        body: 'Мы используем cookie для анализа посещаемости сайта через Google Analytics 4. Вы можете отказаться от cookie в баннере внизу страницы в любое время. Отказ не влияет на работу сайта.',
      },
      {
        heading: 'Как мы используем ваши данные',
        body: 'Контактные данные используются только для ответа на ваш запрос и назначения консультации. Мы не продаём и не передаём ваши данные третьим лицам в маркетинговых целях.',
      },
      {
        heading: 'Хранение данных',
        body: 'Заявки хранятся до 12 месяцев, после чего удаляются. Вы можете запросить удаление в любое время, написав нам.',
      },
      {
        heading: 'Ваши права (GDPR)',
        body: 'Если вы находитесь в ЕС/ЕЭЗ, вы имеете право на доступ, исправление или удаление своих персональных данных. Для этого свяжитесь с нами: den.koval404@gmail.com',
      },
      {
        heading: 'Контакт',
        body: 'По вопросам конфиденциальности: den.koval404@gmail.com',
      },
    ],
  },
  de: {
    title: 'Datenschutzerklärung',
    updated: 'Zuletzt aktualisiert: Mai 2026',
    sections: [
      {
        heading: 'Wer wir sind',
        body: 'GrowingEdge ist eine Business-Wachstums-Agentur, betrieben von Denys Koval und Sebastian Fell. Wir bieten Marketing-, Webdesign- und Betriebsdienstleistungen für kleine Unternehmen an.',
      },
      {
        heading: 'Welche Daten wir erfassen',
        body: 'Wenn Sie unser Kontaktformular absenden, erfassen wir Ihren Namen, Ihre E-Mail-Adresse, Ihren Unternehmensnamen und Ihre Nachricht. Die Daten werden über EmailJS übertragen und ausschließlich zur Beantwortung Ihrer Anfrage verwendet.',
      },
      {
        heading: 'Cookies',
        body: 'Wir verwenden Cookies, um zu verstehen, wie Besucher mit unserer Website interagieren (Google Analytics 4). Sie können Cookies jederzeit über das Banner am unteren Rand ablehnen.',
      },
      {
        heading: 'Wie wir Ihre Daten verwenden',
        body: 'Ihre Kontaktdaten werden nur zur Beantwortung Ihrer Anfrage und zur Vereinbarung einer Beratung verwendet. Wir verkaufen oder teilen Ihre persönlichen Daten nicht mit Dritten zu Marketingzwecken.',
      },
      {
        heading: 'Datenspeicherung',
        body: 'Formularanfragen werden bis zu 12 Monate aufbewahrt. Sie können jederzeit die Löschung beantragen.',
      },
      {
        heading: 'Ihre Rechte (DSGVO)',
        body: 'Wenn Sie sich in der EU/dem EWR befinden, haben Sie das Recht auf Auskunft, Berichtigung oder Löschung Ihrer personenbezogenen Daten. Kontaktieren Sie uns unter: den.koval404@gmail.com',
      },
      {
        heading: 'Kontakt',
        body: 'Für datenschutzbezogene Fragen: den.koval404@gmail.com',
      },
    ],
  },
  es: {
    title: 'Política de Privacidad',
    updated: 'Última actualización: mayo 2026',
    sections: [
      {
        heading: 'Quiénes somos',
        body: 'GrowingEdge es una agencia de crecimiento empresarial operada por Denys Koval y Sebastian Fell. Ofrecemos servicios de marketing, diseño web y gestión operativa para pequeñas empresas.',
      },
      {
        heading: 'Qué datos recopilamos',
        body: 'Cuando envías nuestro formulario de contacto, recopilamos tu nombre, correo electrónico, nombre de empresa y mensaje. Los datos se transmiten a través de EmailJS y se usan únicamente para responder a tu consulta.',
      },
      {
        heading: 'Cookies',
        body: 'Usamos cookies para analizar cómo los visitantes interactúan con nuestro sitio (Google Analytics 4). Puedes rechazar las cookies en cualquier momento usando el banner en la parte inferior de la página.',
      },
      {
        heading: 'Cómo usamos tus datos',
        body: 'Tus datos de contacto se usan únicamente para responder a tu consulta y programar una consulta. No vendemos ni compartimos tus datos personales con terceros con fines de marketing.',
      },
      {
        heading: 'Retención de datos',
        body: 'Los envíos de formularios se conservan hasta 12 meses. Puedes solicitar la eliminación en cualquier momento escribiéndonos.',
      },
      {
        heading: 'Tus derechos (RGPD)',
        body: 'Si estás en la UE/EEE, tienes derecho a acceder, corregir o eliminar tus datos personales. Para ejercer estos derechos: den.koval404@gmail.com',
      },
      {
        heading: 'Contacto',
        body: 'Para preguntas sobre privacidad: den.koval404@gmail.com',
      },
    ],
  },
}

export default function PrivacyModal({ open, onClose }) {
  const { lang } = useLanguage()
  const c = content[lang] || content.en

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-x-4 top-[5vh] bottom-[5vh] sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-2xl z-[210] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-gray-100 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center">
                  <Shield size={18} className="text-[#166534]" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900">{c.title}</h2>
                  <p className="text-xs text-gray-400">{c.updated}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto flex-1 px-7 py-6 space-y-6">
              {c.sections.map((s) => (
                <div key={s.heading}>
                  <h3 className="text-sm font-bold text-gray-900 mb-1.5">{s.heading}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-7 py-4 border-t border-gray-100 flex-shrink-0">
              <button
                onClick={onClose}
                className="w-full py-3 bg-[#166534] text-white text-sm font-bold rounded-xl hover:bg-[#15803d] transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
