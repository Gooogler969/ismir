import React from 'react'
import Header from '../components/Header/Header'
import Portfolio from '../components/Portfolio/Portfolio'
import './style.css'
import MainBg from '../images/serviceMain.png'

function PortfolioPage() {
  return (
    <div>
        <Header />
      <section className="main">
        <div className="blur"></div>
        <div className="main-img">
          <img src={MainBg} alt="img" />
        </div>
        <div className="content">
          <h1 className='main-title'>Portfolio</h1>
        </div>
      </section>
      <Portfolio />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/lightgallery.min.js" integrity="sha512-jEJ0OA9fwz5wUn6rVfGhAXiiCSGrjYCwtQRUwI/wRGEuWRZxrnxoeDoNc+Pnhx8qwKVHs2BRQrVR9RE6T4UHBg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/css/lightgallery.min.css" integrity="sha512-F2E+YYE1gkt0T5TVajAslgDfTEUQKtlu4ralVq78ViNxhKXQLrgQLLie8u1tVdG2vWnB3ute4hcdbiBtvJQh0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </div>
  )
}

export default PortfolioPage