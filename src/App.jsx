import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import PrivacyModal from './components/PrivacyModal'

function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false)

  return (
    <main className="overflow-x-hidden">
      <Navbar onOpenPrivacy={() => setPrivacyOpen(true)} />
      <Hero />
      <Services />
      <Portfolio />
      <HowItWorks />
      <About />
      <Testimonials />
      <Contact />
      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
      <CookieBanner onOpenPrivacy={() => setPrivacyOpen(true)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </main>
  )
}

export default App
