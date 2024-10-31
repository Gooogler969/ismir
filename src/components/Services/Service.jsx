import React from 'react';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FadeIn } from '../utility/animation';

function Service() {
  const {t} = useTranslation()

  return (
    <section className="container" id="service">
      <motion.div 
      variants={FadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}} 
      className="mb-5">
        <div className="section-title">{t('service-title')}</div>
      </motion.div>

      <div className="max-w-7xl my-0 mx-auto px-20 flex flex-wrap justify-around">
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
    <div className="cursor-pointer w-72 h-96 m-5 p-5 text-center border-black border-solid border rounded-sm transition-all duration-300 hover:scale-105">
      <div className="text-6xl w-max my-0 mx-auto pt-10 ease-linear duration-300">
        <i className={`fa ${icon}`}></i>
      </div>
      <h3 className='text-2xl font-normal text-center uppercase pt-14'>{title}</h3>
      <p className="text-sm text-slate-500">{description}</p>
      <a href="/" className="block text-black no-underline pt-10"> {t('service-btn')} </a>
    </div>
  );
}

export default Service;
