import React from "react";
import "./TeamSection.scss";
import pschologist1 from '../../../assets/images/pschologist-1.png'
import pschologist2 from '../../../assets/images/pschologist-2.png'
import pschologist3 from '../../../assets/images/pschologist-3.png'



const TeamSection = () => {
  const experts = [
    {
      name: "Dr. Alisha Grant",
      title: "Lisenziyalı Klinik Psixoloq",
      img: pschologist1,
      desc: "Anksiyete, KBT və mindful əsaslı stresin azaldılması üzrə ixtisaslaşmışdır. Dr. Grant müştərilərinə daxili sakitlik tapmaqda kömək etməyə həvəslidir."
    },
    {
      name: "Michael Chen",
      title: "Lisenziyalı Ailə və Evlilik Terapevti",
      img: pschologist2,
      desc: "10 ildən çox təcrübəyə sahib olan Michael, cütlüklərə və ailələrə münasibət dinamikalarını anlayış və aydınlıqla idarə etmələrində kömək edir."
    },
    {
      name: "Dr. Sarah Jenkins",
      title: "Uşaq və Yeniyetmə Psixoloqu",
      img: pschologist3,
      desc: "Dr. Jenkins gənc müştərilərin hisslərini araşdırıb sağlam başetmə bacarıqları inkişaf etdirə biləcəyi təhlükəsiz və oynaq bir mühit yaradır."
    }
  ];
 
  return (
    <section className="team">
      <h2 className="team__title">Mütəxəssis Komandamızla Tanış Olun</h2>
      <p className="team__subtitle">
        Lisenziyalı peşəkarlarımızdan ibarət komandamız müxtəlif ixtisaslaşmalar və
        sizin rifahınıza ortaq sadiqliklə sizi dəstəkləmək üçün buradadır.
      </p> 

      <div className="team__cards">
        {experts.map((ex, i) => (
          <div className="team__card" key={i}>
            <img src={ex.img} alt={ex.name} className="team__img" />
            <h3 className="team__name">{ex.name}</h3>
            <p className="team__role">{ex.title}</p>
            <p className="team__desc">{ex.desc}</p>

            <button className="team__btn">Tam Profili Gör</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
