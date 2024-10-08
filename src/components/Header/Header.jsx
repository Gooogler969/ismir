import React from "react";
import { useTranslation } from "react-i18next";
import './Header.css';
import '../../i18n';



function Header() {

  const {t, i18n} = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <header>
      <a href="#" className="brand">ISMIR ETIKET</a>
      <div className="navigation">
        <a href="#main">{t('nav-about')}</a>
        <a href="#about">{t('nav-service')}</a>
        <a href="#skills">{t('nav-portfolio')}</a>
        <select onChange={(e) => changeLanguage(e.target.value)} className="change-lang btn-nav">
          <option value="en" selected>EN</option>
          <option value="ru">РУ</option>
        </select>
        <a href="#" className="btn-nav">{t('nav-btn')}</a>
      </div>
    </header>
  );
};


window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      header.classList.toggle("nav-hidden", window.scrollY > 0);
  });
});   


export default Header;

