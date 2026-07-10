import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'

export default function App() {
  const isPrivacyPolicy = window.location.pathname === '/politica-de-privacidad'

  return (
    <>
      <Navbar />
      <main>
        {isPrivacyPolicy ? (
          <PrivacyPolicy />
        ) : (
          <>
            <Hero />
            <Features />
            <About />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
