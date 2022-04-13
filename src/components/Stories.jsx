import React from 'react';
import bgVideo from '../img/video.mp4'
// import bgVideoWeb from '../img/video.webm'
import person1 from '../img/nat-8.jpg'
import person2 from '../img/nat-9.jpg'
import { t } from 'i18next';

const Stories = () => {
    return (
        <section className="section-stories">

      <div className="bg-video">
        <video className="bg-video__content" id='video' autoplay muted loop>
          <source src={bgVideo} type="video/mp4" />
          {/* <source src={bgVideoWeb} /> */}
          Your browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
              {t('someTestimonies')}
          </h2>
      </div>

      <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src={person1} alt="Person on a tour" className="story__img" />
              <figcaption className="story__caption">Marry smith</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                I had the best week with my family
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem vero deleniti nobis accusantium, quisquam rem placeat repudiandae. Consequuntur, nostrum vel? Voluptas totam natus recusandae, ducimus blanditiis dicta eveniet ullam nostrum?
              </p>
            </div>
          </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={person2} alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              WOW! My life is completly different now!
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem vero deleniti nobis accusantium, quisquam rem placeat repudiandae. Consequuntur, nostrum vel? Voluptas totam natus recusandae, ducimus blanditiis dicta eveniet ullam nostrum?
            </p>
          </div>
        </div>
    </div>
    
    </section>
    );
}

export default Stories;
