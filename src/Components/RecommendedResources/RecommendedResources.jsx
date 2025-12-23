import React from "react";
import "./RecommendedResources.scss";
import mediation from '../../assets/images/pexels-photo-317157.jpeg'
import  cognitive from '../../assets/images/pexels-photo-268533.jpeg'

const RecommendedResources = () => {
  return (
    <div className="resources-card">
      <h3 className="resources-title">Tövsiyə olunan resurslar</h3>

      <div className="resource-item">
        <img
          src={mediation}
          alt="Meditation"
        />
        <p>Həyəcanı azaltmaq üçün yönləndirilmiş meditasiya</p>
      </div>

      <div className="resource-item">
        <img
          src={cognitive}
          alt="Cognitive Distortions"
        />
        <p>Məqalə: Koqnitiv təhrifləri anlamaq</p>
      </div>
    </div>
  );
};

export default RecommendedResources;
