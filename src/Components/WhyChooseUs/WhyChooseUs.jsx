import { useEffect } from "react";
import Container from "../Container/Container";
import "./_WhyChooseUs.scss";
import AI from '../../assets/images/AI.jpg'
import Meditation from '../../assets/images/meditation.png'
import VR from '../../assets/images/vr.jpg'
import SectionHeader from "../SectionHeader/SectionHeader";

function WhyChooseUs() {
    useEffect(() => {
        const cards = document.querySelectorAll(".choose-card");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = [...entry.target.parentNode.children].indexOf(entry.target);

                    entry.target.style.transitionDelay = `${index * 0.20}s`; // delay только для ПОЯВЛЕНИЯ
                    entry.target.classList.add("show");

                    // После появления удаляем delay — hover будет мгновенным
                    setTimeout(() => {
                        entry.target.style.transitionDelay = "0s";
                    }, 800);
                }
            });
        }, { threshold: 0.3 }); 

        cards.forEach(c => observer.observe(c));
    }, []);



    return (
        <section className="why-choose-us">
           <div className="header">
                        <p className="first">Niyə bizi</p>
                        <p>seçməlisiniz?</p>
                </div>
                <SectionHeader subtitle='Niyə bizi'  title='seçməlisiniz?'/>

            <Container> 
                <div className="why-choose-us-wrapper">
                    



                    <div className="choose-card">
                        <div className="choose_card-desc">
                            <h3>AI Dəstəklı Yardım</h3>
                            <p>Hər zaman yanındayıq — emosional dəstək və rahat ünsiyyət.</p>
                        </div>
                        <img src={AI} alt="card img" />



                        
                    </div>

                    <div className="choose-card">
                        <div className="choose_card-desc">
                            <h3>Meditasiya və Səs Təlimləri</h3>
                            <p>Zehni rahatlıq üçün xüsusi hazırlanmış səs proqramları.</p>
                        </div>
                        <img src={Meditation} alt="card img" />
                    </div>

                    <div className="choose-card">
                        <div className="choose_card-desc">
                            <h3>VR Terapiya</h3>
                            <p>Rahat virtual mühitdə stressdən uzaqlaş.</p>
                        </div>
                        <img src={VR} alt="card img" />
                    </div>

                </div>

            </Container>
        </section>
    );
}

export default WhyChooseUs;
