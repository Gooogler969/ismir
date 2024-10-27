import React from 'react';
import './Services.css'
import '../../i18n';
import { useTranslation } from 'react-i18next';

function Service() {
  const {t} = useTranslation()

  return (
    <section className="service" id="service">
      <div className="title">
        <div className="section-title">{t('service-title')}</div>
      </div>

      <div className="services-container">
        <ServiceCard icon="fa-paint-brush" title={t('service-card-title_1')} description={t('service-card-suptitle_1')} />
        <ServiceCard icon="fa-tag" title={t('service-card-title_2')} description={t('service-card-suptitle_2')} />
        <ServiceCard icon="fa-bookmark" title={t('service-card-title_3')} description={t('service-card-suptitle_3')} />
        <ServiceCard icon="fa-ticket" title={t('service-card-title_4')} description={t('service-card-suptitle_4')} />
        <ServiceCard icon="fa-stop-circle" title={t('service-card-title_5')} description={t('service-card-suptitle_5')} />
        <ServiceCard icon="fa-user" title={t('service-card-title_6')} description={t('service-card-suptitle_6')} />
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }) {
  const {t} = useTranslation()
  
  return (
    <div className="service-card">
      <div className="icon-container">
        <i className={`fa ${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="/" className="button"> {t('service-btn')} </a>
    </div>
  );
}

export default Service;
