import React from 'react';
import './Contact.css'
import '../../i18n';
import { useTranslation } from 'react-i18next';
import '../../i18n';

function Contact() {
    const {t} = useTranslation()

  return (
    <section className="contact" id="contact">
      <div className="title">
        <div className="section-title">{t('contact-title')}</div>
      </div>

      <div className="container">
        <div className="contact-form column col-left">
          <div className="contact-form-card">
            <h4 className="contact-title">{t('contact-suptitle_1')}</h4>
            <form action="">
              <div className="form-group">
                <input className="form-control" type="text" placeholder={t('placeholder_name')} required />
              </div>
              <div className="form-group">
                <input className="form-control" type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder= {t('placeholder_message')} rows="7" required></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="form-control send-btn">{t('contact_btn')}</button>
              </div>
            </form>
          </div>
        </div>

        <div className="contact-info column col-right">
          <h4 className="contact-title">{t('contact-suptitle_2')}</h4>
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
    <div className="card">
      <div className="card-icon">
        <i className={`fas ${icon}`}></i>
      </div>
      <div className="card-text">
        <h6>{title}</h6>
        <span>{content}</span>
      </div>
    </div>
  );
}

export default Contact;
