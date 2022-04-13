import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../img/jero-1.jpeg";
import img2 from "../img/jero-2.jpg";
import img3 from "../img/jero-3.jpeg";

const About = () => {

  const { t } = useTranslation();

  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">{t('aboutMe')}</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">{t('whoAmI')}</h3>
          <p className="paragraph">
           {t('whoText')}
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">{t('myExperience')}</h3>
          <p className="paragraph">
            {t('experienceText')}            
          </p>
          {/* <a href="#" className="btn-text">
            Learn more &rarr;
          </a> */}
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={img1}
              alt="jero with friends"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={img2}
              alt="jero "
              className="composition__photo composition__photo--p2"
            />
            <img
              src={img3}
              alt="a boats race"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
