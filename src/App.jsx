import React from 'react'
import Header from './components/Header.jsx'
import './css/styles.css';
import About from './components/About.jsx'
import Stories from './components/Stories.jsx';
import Tours from './components/Tours.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { IconContext } from 'react-icons/lib';
import Changelanguage from './components/ChangeLanguaje.jsx';
export default function App() {
  return (
    <IconContext.Provider value={{size: "2.5em"}}>
    <Changelanguage />
    <Header />
    <main>
    <About />
    <Stories />
    <Tours />
    <Contact />
    </main>
    <Footer />
    </IconContext.Provider>

  )
}
