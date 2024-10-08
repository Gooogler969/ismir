import React from 'react';
import './MainSection.css'
import MainBg from '../../images/1006.mov'
import '../../i18n';
import { useTranslation } from 'react-i18next';

function MainSection() {
    const {t} = useTranslation()

    return (
        <section className="main" id="main">
            <div className="blur"></div>
            <video className="main-video" autoPlay muted loop>
                <source src={ MainBg } type="video/mp4" />
            </video>
            <div className="content">
                <h2>{t('main-title')}</h2>
                <p>{t('main-suptitle')}</p>
                <a href="#" className="btn">Contact Us</a>
            </div>
        </section>
    );
}

export default MainSection;
