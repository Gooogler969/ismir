import React from 'react';
import './index.css';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import About from './components/About/About';
import Service from './components/Services/Service';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <MainSection />
      <About />
      <Service />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
