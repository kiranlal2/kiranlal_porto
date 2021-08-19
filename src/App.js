import React from 'react';
import ParticlesEff from './components/Particles/particles';
import Header from './components/Header/Header';
import MainBanner from './components/Main_banner/Main_bnr';
import About from './components/whoami/who_am_i';
import Skill from './components/Skills/skills';
import Skills from './components/Skills/skill';
import Myworks from './components/Projects/work';
import Experience from './components/Experience/experience';
import Footer from './components/Footer/footer';
import './App.css'

function App() {

  

  return (
    <>
      <Header />
      <ParticlesEff />
      <MainBanner />
      <About />
      <Skill />
      <Skills />
      <Myworks />
      <Experience />
      <Footer />
    </>
  )
}

export default App;
