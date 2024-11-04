import React from 'react';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FadeIn } from '../utility/animation';

function Portfolio() {
  const {t} = useTranslation()
  
  return (
    <section className="portfolio" id="portfolio">
      <motion.div 
      variants={FadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      className="mb-5 text-center">
        <div className="section-title">{t('portfolio-title')}</div>
        <p>{t('portfolio-suptitle')}</p>
      </motion.div>
      <div className="container flex justify-center flex-row flex-wrap mt-5">
        <PortfolioCard imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV9kcIAyUrFOesLWFp7LJHHS8YxbOYwiQX_M5nOI3DO1lUdEXJgPK5GghC3PhxuprqjXQ&usqp=CAU" />
        <PortfolioCard imgSrc="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/101549501_169766781195878_3622668587619057664_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=rt-52_fymJAQ7kNvgEaXXe6&_nc_ht=scontent-nrt1-1.xx&_nc_gid=AujGBblJ3n9PjkgrDylN4IF&oh=00_AYCUezgACMW7SmRLfJcK9C1mDFeuBXEx1oAY5sTzgLzCCg&oe=672B330D" />
        <PortfolioCard imgSrc="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/100089062_163491381823418_3533025056714129408_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=e8nqYTKwUXoQ7kNvgFvgZ3s&_nc_ht=scontent-nrt1-1.xx&_nc_gid=AkgjGynIsZI4DUVv7duvb8X&oh=00_AYD5jAKifi5K1Szt42tr0nQ3ItgFlHXsUlJ0Cf7f5X45Xw&oe=672B2B2B" />
        <PortfolioCard imgSrc="https://scontent-nrt1-2.xx.fbcdn.net/v/t1.6435-9/98979205_160491342123422_513219940145168384_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=hkIGgFh6wacQ7kNvgErhFON&_nc_ht=scontent-nrt1-2.xx&_nc_gid=AVG6O8rucE3B-unPOD_0kKC&oh=00_AYB8_rwf_otCtJa7D7kdfMsXyXcv0aUzEylDUH77gkLzGg&oe=672B36C0" />
        <PortfolioCard imgSrc="https://scontent-nrt1-2.xx.fbcdn.net/v/t1.6435-9/97287914_159648308874392_6637551804810788864_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=FhbWvl7GTcMQ7kNvgHq4uLG&_nc_ht=scontent-nrt1-2.xx&_nc_gid=AoRGnMHipk1nlUTGfRC3639&oh=00_AYDSEyf6H5-9E8Sl1IY4lWGSLjjP1vD0_cglX8I9hCDZiA&oe=672B437F" />
        <PortfolioCard imgSrc="https://scontent-nrt1-2.xx.fbcdn.net/v/t1.6435-9/81627014_118383569667533_7977308351048450048_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=GMLtN86_iPoQ7kNvgFQ0c_d&_nc_ht=scontent-nrt1-2.xx&_nc_gid=Am-MEpsp946Ulhe1motD8jn&oh=00_AYB7uLdUYszdbmc3jOejMClTWziAQ2yqVYUlYiESqOUzEA&oe=672B47C0" />
        
      </div>
    </section>
  );
}

function PortfolioCard({ imgSrc }) {
  return (
    <div className="w-80 m-5">
      <div className="relative w-full h-60 overflow-hidden">
        <img className="absolute top-0 left-0 w-full h-full object-cover transition ease-in hover:scale-125" src={imgSrc} alt="" />
      </div>
    </div>
  );
}

export default Portfolio;
