import React from "react";
import "./TherapistCard.scss";

export default function TherapistCard({ therapist }) {
  return (
    <div className="therapist-card">
      <img src={therapist.image} alt={therapist.name} />
      <h3>{therapist.name}</h3>

      <span className="tag">{therapist.specialization}</span>

      <p className="desc">{therapist.description}</p>

      <button className="btn">View Profile</button>
    </div>
  );
}
