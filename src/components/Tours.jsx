import React from 'react'
import { useTranslation } from 'react-i18next'


export default function Tours() {

  const { t } = useTranslation()

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
                <li>{t('yatch')}</li>
                <li>{t('catamaran')}</li>
                <li>{t('sailBoat')}</li>
                <li>{t('motorBoat')}</li>
                <li>{t('others')}</li>               
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-1">
            <div className="card__cta">
                <h3 className="card__cta__heading heading-tertiary">{t('includes')}</h3>
                <div className="card__details card__cta__details">
                <ul>
                  <li>{t('captainNCrew')}</li>
                  <li>{t('snorkel')}</li>
                  <li>{t('foodNDrink')}</li>
                  <li>{t('paddleBoard')}</li>
                </ul>
                </div>

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
                <li>{t('yatch')}</li>
                <li>{t('catamaran')}</li>
                <li>{t('sailBoat')}</li>
                <li>{t('motorBoat')}</li>
                <li>{t('others')}</li> 
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-2">
            <div className="card__cta">

            <h3 className="card__cta__heading heading-tertiary">{t('includes')}</h3>
            <div className="card__details card__cta__details">
                <ul>
                  <li>{t('qualifiedSkipper')}</li>
                  <li>{t('withCrew')}</li>
                  <li>{t('NMNavigated')}</li>
                  <li>{t('area')}</li>
                  <li>{t('optional')}</li>
                </ul>
            </div>
              
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
              <li>{t('yatch')}</li>
              <li>{t('catamaran')}</li>
              <li>{t('sailBoat')}</li>
              <li>{t('motorBoat')}</li>
              <li>{t('others')}</li> 
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-3">
          <div className="card__cta">

          <h3 className="card__cta__heading heading-tertiary">{t('includes')}</h3>
          <div className="card__details card__cta__details">
                <ul>
                  <li>{t('deckCleaning')}</li>
                  <li>{t('deepCleaning')}</li>
                  <li>{t('engineCheck')}</li>
                  <li>{t('generalFixes')}</li>
                  <li>{t('bilgeDrain')}</li>
                  <li>{t('others')}</li>
                </ul>
            </div>
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
