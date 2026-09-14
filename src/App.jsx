import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import NeighborExperience from './components/NeighborExperience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import Survey from './components/Survey'

export default function App() {
  const path = window.location.pathname

  if (path === '/survey') {
    return <Survey />
  }

  const isPrivacyPolicy = path === '/politica-de-privacidad'

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
            <NeighborExperience />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
