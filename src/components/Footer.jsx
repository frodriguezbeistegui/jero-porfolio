import React from 'react'
import { useTranslation } from 'react-i18next'


export default function Footer() {

  const {t} = useTranslation(); 

  return (
    <footer className="footer" id="footer">
    <div className="footer__logo-box">

     
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item"><a href="#contact" className="footer__link">{t('company')}</a></li>
            <li className="footer__item"><a href="#contact" className="footer__link">{t('contactUs')}</a></li>
            <li className="footer__item"><a href="#contact" className="footer__link">{t('careers')}</a></li>
            <li className="footer__item"><a href="#footer" className="footer__link">{t('privacyPolicy')}</a></li>
            <li className="footer__item"><a href="#contact" className="footer__link">{t('terms')}</a></li>
          </ul>
        </div>
      </div>
      <div className="col-1-of-2">
        <p className="footer__copyright">
          {t('buildBy')} <a target="_blank" href="https://github.com/frodriguezbeistegui" className="footer__link">Facundo Rodriguez Beistegui</a>{t('copyRight')}
        </p>
      </div>
    </div>
  </footer>
  )
}
