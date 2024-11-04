import React from 'react';
import MainBg from '../../images/11.mov'
import '../../i18n';
import { useTranslation } from 'react-i18next';

function MainSection() {
    const {t} = useTranslation()

    return (
        <section className="relative w-full min-h-screen flex justify-center items-center bg-cover bg-center" id="main">
            <div className="blur"></div>
            <video className="absolute right-0 bottom-0" autoPlay muted loop>
                <source src={ MainBg } type="video/mp4" />
            </video>
            <div className="z-10 max-w-3xl text-center">
                <h2 className="text-white text-6xl font-semibold">{t('main-title')}</h2>
                <p className="text-gray-2 text-lg mt-5">{t('main-suptitle')}</p>
                <a href="#contact" className="btn">{t('main-btn')}</a>
            </div>
        </section>
    );
}

export default MainSection;
