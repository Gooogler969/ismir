import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Header.css";
import "../../i18n";

function Header() {
  const { t, i18n } = useTranslation();
  const [isHidden, setIsHidden] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isHidden ? "nav-hidden" : "hidden md:flex"}>
      <a href="/" className="brand">
        ISMIR ETIKET
      </a>
      <div className="navigation">
        <Link to="/about">{t("nav-about")}</Link>
        <Link to="/service">{t("nav-service")}</Link>
        <Link to="/portfolio">{t("nav-portfolio")}</Link>

        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className="text-sm p-1.5 underline-none transition duration-500 border border-white border-solid"
        >
          <option value="en">EN</option>
          <option value="ru">РУ</option>
        </select>
        <a
          href="#contact"
          className="text-sm p-1.5 underline transition duration-500 border border-white border-solid"
        >
          {t("nav-btn")}
        </a>
      </div>
    </header>
  );
}

export default Header;
