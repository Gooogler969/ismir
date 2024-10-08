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
        <a href="#main">Company Introduction</a>
        <a href="#about">Service</a>
        <a href="#skills">Portfolio</a>
        <select onChange={(e) => changeLanguage(e.target.value)} className="change-lang btn-nav">
          <option value="en" selected>EN</option>
          <option value="ru">RU</option>
        </select>
          {/* <div><h1>{t('title')}</h1></div> */}
        <a href="#" className="btn-nav">Contact Us</a>
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

