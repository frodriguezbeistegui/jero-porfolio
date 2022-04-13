import { t } from 'i18next'
import React from 'react'


export default function Tours() {
  return (
    <section className="section-tours" id="section-tours">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">{t('services')}</h2>
    </div>
    <div className="row">
        <div className="col-1-of-3">
        <div className="card">
          <div className="card__side card__side--front card__side--front-1">
            <div className="card__picture card__picture--1">
              &nbsp;
            </div>
            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--1">
                {t('caribeanTour')}
              </span>
            </h4>
            <div className="card__details">
              <ul>
                <li>3 day tour</li>
                <li>Up to 30 people</li>
                <li>2 tour guides</li>
                <li>Sleep in cozy hotels</li>
                <li>Difficulty: easy</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-1">
            <div className="card__cta">
              <div className="card__price-box">
                {/* <p className="card__price-only">Only</p>
                <p className="card__price-value">$297</p> */}
              </div>
              {/* <a href="#popup" className="btn btn--white">Book now!</a> */}
            </div>
          </div>
        </div>
        </div>
        <div className="col-1-of-3">
        <div className="card">
          <div className="card__side card__side--front card__side--front-2">
            <div className="card__picture card__picture--2">
              &nbsp;
            </div>
            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--2">
              {t('boatDelivery')}
              </span>
            </h4>
            <div className="card__details">
              <ul>
                <li>7 day tour</li>
                <li>Up to 40 people</li>
                <li>6 tour guides</li>
                <li>Sleep in provided tents</li>
                <li>Difficulty: medium</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-2">
            <div className="card__cta">
              {/* <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$497</p>
              </div> */}
              {/* <a href="#popup" className="btn btn--white">Book now!</a> */}
            </div>
          </div>
        </div>
        </div>
        <div className="col-1-of-3">
      <div className="card">
        <div className="card__side card__side--front card__side--front-3">
          <div className="card__picture card__picture--3">
            &nbsp;
          </div>
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span--3">
              {t('boatMaintenance')}
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li>5 day tours</li>
              <li>Up to 15 people</li>
              <li>3 tour guides</li>
              <li>Sleep in provided tents</li>
              <li>Difficulty: hard</li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-3">
          <div className="card__cta">
            {/* <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">$897</p>
            </div> */}
            {/* <a href="#contact" className="btn btn--white">Book now!</a> */}
          </div>
        </div>
      </div>
        </div>
    </div>
    <div className="u-center-text u-margin-bottom-huge">
      <a href="#contact" className="btn btn--green">{t('contact')}</a>
    </div>
  </section>
  )
}
