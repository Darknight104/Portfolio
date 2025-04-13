import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/hero/hero.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import Mywork from './components/Mywork/Mywork.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'

const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App