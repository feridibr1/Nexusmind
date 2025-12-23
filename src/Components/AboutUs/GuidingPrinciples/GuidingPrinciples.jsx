import React from "react";
import "./GuidingPrinciples.scss";
import OurValues from '../../../assets/images/deyerlerimiz.jpg';
import OurAim from '../../../assets/images/missiya.jpg';
import Vision from '../../../assets/images/vizyon.jpg';

const GuidingPrinciples = () => {
  const items = [
    {
      icon: <img className="obj__img" src={OurAim} alt="missiyamiz image"  />,
      title: "Missiyamız",
      text: "Hər kəsin həyat çətinliklərini aşmasına və psixi sağlamlığını gücləndirməsinə kömək edən əlçatan və yüksək keyfiyyətli psixoloji dəstək təqdim etmək."
    },
    { 
      icon: <img className="obj__img" src={Vision} alt="vizyonumuz image"  />,
      title: "Vizyonumuz",
      text: "Hər kəsin stiqmadan uzaq şəkildə psixoloji və emosional balans əldə etmək üçün lazım olan alətlərə və dəstəyə sahib olduğu bir dünya."
    },
    {
      icon: <img className="obj__img" src={OurValues} alt="deyerlerimiz image"  />,
      title: "Dəyərlərimiz",
      text: "Hər bir qarşılıqlı əlaqədə ən yüksək məxfilik, empatiya və sübuta əsaslanan praktika standartlarına sadiq qalırıq."
    }
  ]; 

  return (
    <section className="guiding">

      <div className="blur blur-1"></div>
      <div className="blur blur-2"></div>
      <div className="blur blur-3"></div>
      <div className="blur blur-4"></div>

      <h2 className="guiding__title">Rəhbər Prinsiplərimiz</h2>
      <p className="guiding__subtitle">
        Öhdəliyimiz sizi empatiya, peşəkarlıq və insan təcrübəsini dərindən 
        anlama ilə yönləndirməkdir. Biz hər kəsin inam və hörmət mühiti içində 
        keyfiyyətli psixi sağlamlıq xidmətinə çıxış haqqına sahib olduğu inancı 
        ilə qurulmuşuq.
      </p>

      <div className="guiding__cards">
        {items.map((item, i) => (
          <div className="guiding__card" key={i}>
            <div className="guiding__icon">{item.icon}</div>
            <h3 className="guiding__card-title">{item.title}</h3>
            <p className="guiding__card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default GuidingPrinciples;
