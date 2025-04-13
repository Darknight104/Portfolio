import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Mywork from './components/Mywork/Mywork'
import Contact from './components/contact/contact'
import Footer from './components/footer/Footer'

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