import React from "react";
import "./ServiceCard.scss";

const ServiceCard = ({ icon, title, description, color }) => {
  return (
    <div className="service-card">
      <div className="service-card__icon" style={{ backgroundColor: color }}>
        {icon}
      </div>

      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>

      <a href="#" className="service-card__link">
        Daha Çox →
      </a>
    </div>
  );
};

export default ServiceCard;
