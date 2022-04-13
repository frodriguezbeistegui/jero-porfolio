import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Header() {

  const { t } = useTranslation();

  return (
    <header className="header">
    {/* <div className="header__logo-box">
      <img src='src/img/logo-white.png' alt="Logo" className="header__logo" />
    </div> */}
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">Jero Bados</span>
        <span className="heading-primary--sub">{t('yachtSkipper')}</span>
      </h1>
      <a href="#contact" className="btn btn--white btn--animated">{t('contact')}</a>
    </div>
  </header>
  )
}
