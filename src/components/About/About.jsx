import React from 'react';
import './About.css'
import AboutImg from '../../images/photo1.jpeg'
import '../../i18n';
import { useTranslation } from 'react-i18next';

function About() {
  const {t} = useTranslation()
  
  return (
    <section className="about" id="about">
      <div className="title">
        <div className="section-title">{t('about-title')}</div>
      </div>
      <div className="content">
        <div className="column col-left">
          <div className="img-card">
            <img src={AboutImg  } alt="" />
          </div>
        </div>
        <div className="column col-right">
          <p className="paragraph-text">{t('about-suptitle')}</p>
          <br />
          <p className="paragraph-text">{t('about-suptitle')}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
