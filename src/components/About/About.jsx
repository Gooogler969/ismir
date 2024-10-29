import React from 'react';
import './About.css'
import AboutImg from '../../images/photo1.jpeg'
import '../../i18n';
import { useTranslation } from 'react-i18next';

import Logo1 from '../../assets/logos/logo1.png'
// import Logo2 from '../../assets/logos/logo_2.png'
// import Logo3 from '../../assets/logos/logo_3.png'
// import Logo4 from '../../assets/logos/logo_4.png'
// import Logo5 from '../../assets/logos/logo_5.png'
// import Logo6 from '../../assets/logos/logo_6.png'
// import Logo7 from '../../assets/logos/logo_7.png'
// import Logo8 from '../../assets/logos/logo_8.png'
// import Logo9 from '../../assets/logos/logo_9.png'
// import Logo10 from '../../assets/logos/logo_10.png'  


function About() {
  const {t} = useTranslation()
  
  return (
    <section className="abot container" id="about">
      <div className="title">
        <div className="section-title">{t('about-title')}</div>
      </div>
      <div className="relative w-full flex justify-between mt-5">
        <div className="relative w-1/2 mr-6">
          <div className="relative w-full min-h-96">
            <img src={AboutImg  } alt="" />
          </div>
        </div>
        <div className="relative w-1/2 ml-6">
          <p className="text-black text-lg">{t('about-suptitle')}</p>
          <br />
          <p className="text-black text-lg">{t('about-suptitle')}</p>
        </div>
      </div>
      <div className="logos flex ">
        <div className="logo-corusel flex">
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
        </div>
      </div>
      <div className="logos-2 flex">
        <div className="logo-corusel-miror flex">
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
          <img src={Logo1} alt="" />
        </div>
        
      </div>
    </section>
  );
}


export default About;
