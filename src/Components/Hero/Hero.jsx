import React from "react";
import "./Hero.scss";
import Container from "../Container/Container";
import heroImg from "../../assets/images/output-onlinepngtools.png";

import { FiPlayCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Container>
      <div className="hero">

        {/* Particles */}
        <div className="particles"></div>

        {/* Blur Glow */}
        <div className="blur blur-1"></div>
        <div className="blur blur-2"></div>

        <div className="hero__content">
          <h1 className="fade-up">
            Yenilikçi psixoloji dəstək <br /> platforması ilə balanslı həyat
          </h1>

          <p className="delay-1">
            Duyğularını anla, düşüncəni gücləndir
          </p> 

          <div className="hero__buttons delay-2">
            <Link to={"/login"} className="btn primary pulse">
               Elə indi başla
            </Link>

            <button className="btn secondary">
              <FiPlayCircle size={20} />
              Təlimat videosu
            </button>
          </div>

          <div className="trust delay-3">
            <span> 30+ peşəkar psixoloq</span>
            <span> 24/7 AI dəstək</span>
            <span> Tam məxfilik</span>
          </div>
        </div>

        <div className="hero__image fade-up delay-2">
          <img src={heroImg} alt="AI therapy" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
