import React from 'react'
import Header from '../components/Header/Header'
import './style.css'
import About from '../components/About/About'
import MainBg from '../images/serviceMain.png'


function ServicePage() {
  return (
    <div>
        <Header />
      <section className="main">
        <div className="blur"></div>
        <div className="main-img">
          <img src={MainBg} />
        </div>
        <div className="content">
          <h1 className='main-title'>Company Introduction</h1>
        </div>
      </section>
        <About />
    </div>
  )
}

export default ServicePage