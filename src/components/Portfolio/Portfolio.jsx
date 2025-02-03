import React from "react";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FadeIn } from "../utility/animation";
import img1 from "../../images/portfolio/1.webp";
import img2 from "../../images/portfolio/2.webp";
import img3 from "../../images/portfolio/3.webp";
import img4 from "../../images/portfolio/4.webp";
import img5 from "../../images/portfolio/5.webp";
import img6 from "../../images/portfolio/6.webp";

function Portfolio() {
  const { t } = useTranslation();

  return (
    <section className="portfolio" id="portfolio">
      <motion.div
        variants={FadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        className="mb-5 text-center"
      >
        <div className="section-title">{t("portfolio-title")}</div>
        <p>{t("portfolio-suptitle")}</p>
      </motion.div>
      <div className="container flex justify-center flex-row flex-wrap mt-5">
        <PortfolioCard imgSrc={img1} />
        <PortfolioCard imgSrc={img2} />
        <PortfolioCard imgSrc={img3} />
        <PortfolioCard imgSrc={img4} />
        <PortfolioCard imgSrc={img5} />
        <PortfolioCard imgSrc={img6} />
      </div>
    </section>
  );
}

function PortfolioCard({ imgSrc }) {
  return (
    <div className="w-80 m-5">
      <div className="relative w-full h-60 overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover transition ease-in hover:scale-125"
          src={imgSrc}
          alt=""
        />
      </div>
    </div>
  );
}

export default Portfolio;
