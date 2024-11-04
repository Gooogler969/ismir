import React from 'react';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { motion } from 'framer-motion';
import { FadeIn } from '../utility/animation';

function Contact() {
    const {t} = useTranslation()

  return (
    <section className="contact" id="contact">
      <motion.div 
      variants={FadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      className="title">
        <div className="section-title">{t('contact-title')}</div>
      </motion.div>

      <div className="container relative w-full flex justify-center">
        <div className="relative w-3/5">
          <div className="contact-form-card">
            <h4 className="text-2xl font-light pb-5">{t('contact-suptitle_1')}</h4>
            <form action="">
              <div className="relative w-full mb-5">
                <input className="w-full p-3 text-sm outline-none border-solid border rounded-md resize-none" type="text" placeholder={t('placeholder_name')} required />
              </div>
              <div className="relative w-full mb-5">
                <input className="w-full p-3 text-sm outline-none border-solid border rounded-md resize-none" type="email" placeholder="Email" required />
              </div>
              <div className="relative w-full mb-5">
                <textarea className="w-full p-3 text-sm outline-none border-solid border rounded-md resize-none" placeholder= {t('placeholder_message')} rows="7" required></textarea>
              </div>
              <div className="relative w-full mb-5">
                <button type="submit" className="send-btn">{t('contact_btn')}</button>
              </div>
            </form>
          </div>
        </div>

        <div className="contact-info column relative w-2/5 pl-24">
          <h4 className="text-2xl font-light pb-5">{t('contact-suptitle_2')}</h4>
          <ContactInfoCard icon="fa-phone" title={t('phone')} content="+998 90 123 45 67" />
          <ContactInfoCard icon="fa-envelope" title="Email" content="ismiretiket@gmail.com" />
          <ContactInfoCard icon="fa-map-marker-alt" title={t('adress')} content= {t('adress_info')} />
          <ContactInfoCard icon="fa-clock" title={t('time')} content= {t('time_info')} />
        </div>
      </div>
    </section>
  );
}

function ContactInfoCard({ icon, title, content }) {
  return (
    <div className="w-80 p-3 flex items-center rounded-md mb-7 bg-gray">
      <div className="text-black text-4xl">
        <i className={`fas ${icon}`}></i>
      </div>
      <div className="ml-5">
        <h6 className="text-sm font-bold">{title}</h6>
        <span className="text-lg font-light">{content}</span>
      </div>
    </div>
  );
}

export default Contact;
