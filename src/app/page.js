import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import About from '../../components/About';
import Certifications from '../../components/Certifications';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';



export default function Home() {
  return (
      <main>
        <Header Header isPrivacyPage={false} /> 
        <Hero />
        <Services />
        <Certifications />
        <About />
        <Contact />
        <Footer />
      </main>
  )
}