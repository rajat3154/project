import React from 'react'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Features from './components/Features'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Features/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
