import React from "react";
import "./AboutHero.scss";
import Brain from '../../../assets/images/brain.gif'

const AboutHero = () => {
  return (
    <section className="about-hero">
        <div className="about-hero__content">
            <h1>
                <span>Bizim Hekayəmiz: </span> Zehni Sağlamlığınıza <br /> zəmanətdir
            </h1>

            <p>
                Platformamızın arxasındakı ürəyi və şəfqətli, əlçatan psixoloji dəstək göstərməyə olan sədaqətimizi kəşf edin.
            </p>
        </div>
        <div className="brain_image">
          <img src={Brain} alt="brain image" width={'400px'} />
        </div>
    </section> 
  );
};

export default AboutHero;