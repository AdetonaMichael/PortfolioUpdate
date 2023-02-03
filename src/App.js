import '../src/App.css';

import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import { Services } from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import { Testimonials } from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Certification from './components/certifications/Certification';

const App = () => {
  return (
      <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Certification/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
     </>
  );
}

export default App;

