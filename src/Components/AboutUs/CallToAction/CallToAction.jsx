import React from "react";
import "./CallToAction.scss";

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="cta__box">
       <h2 className="cta__title">Növbəti Addımı Atmağa Hazırsınız?</h2>

        <p className="cta__text">
          Sizin psixi sağlamlıq yolunuz unikaldır və biz hər addımda sizi dəstəkləmək üçün buradayıq.
          Məşvərəti planlaşdırmaq və sizə necə kömək edə biləcəyimizi kəşf etmək üçün bizimlə əlaqə saxlayın.
        </p> 


      <button className="cta__btn">Ödənişsiz Konsultasiya</button>
      </div>
    </section>
  );
}; 

export default CallToAction;
