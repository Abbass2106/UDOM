import React from 'react'

// import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/programs'
import Title from './components/Title/title'
import About from './components/About/about'
import Campus from './components/Campus/campus'
import Testimonials from './components/Testimonials/testimonials'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Programs' title='What we offer..'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' title='Campus photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What our students say..'/>
      <Testimonials/>
      <Title title='Feel free to send us a message..' subTitle='Contact Us'/>
      <Contact/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default App
