import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import WhyChooseMe from './components/WhyChooseMe';
import SelectMe from './components/SelectMe';
import Footer from './components/Footer';

import './index.css'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <WhyChooseMe />
      <SelectMe />
      <Footer />
      
    </div>
  );
}

export default App;