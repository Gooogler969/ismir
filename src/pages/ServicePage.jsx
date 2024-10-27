import React from 'react'
import Header from '../components/Header/Header'
import Service from '../components/Services/Service'
import './style.css'
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
          <h1 className='main-title'>Our Services</h1>
        </div>
      </section>
      <Service />
    </div>
  )
}

export default ServicePage