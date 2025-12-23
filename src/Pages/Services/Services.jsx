import React from "react";
import "./Services.scss";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import Header from "../../Components/Header/Header";
import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";

import { RiRobot2Line } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";

const Services = () => {
  return (
    <>
      <Header />

      <Container>
        <section className="services">
          <h2 className="services__title">Xidmətlərimiz</h2>

          <p className="services__subtitle">
            Özünüz üçün ən uyğun dəstəyi tapın. Həyatın çətinliklərini dəf etməyinizə
            kömək etmək üçün hazırlanmış məxfi və fərdiləşdirilmiş xidmətlərimizi
            araşdırın.
          </p>

          <div className="services__cards">
            <ServiceCard
              title="AI Chat"
              description="Dəstək istənilən vaxt, 24/7 mövcuddur."
              color="#E7FBF4"
              icon={<RiRobot2Line />}
            />

            <ServiceCard
              title="VR Terapiya"
              description="Təhlükəsiz, virtual məkanda çətinliklərin öhdəsindən gəlin."
              color="#F2EDFF"
              icon={<GrGamepad />}
            />

            <ServiceCard
              title="Peşəkar Terapiya"
              description="Lisenziyalı bir psixoloqla əlaqə saxlayın."
              color="#FFECE7"
              icon={<IoPersonOutline />}
            />
          </div>
        </section>
      </Container>


      <Footer />
    </>
  );
};

export default Services;
