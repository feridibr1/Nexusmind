import React from "react";
import "./Filters.scss";
import TherapistPage from '../../Pages/Therapists/TherapistsPage'

export default function Filters({ filters, setFilters }) {
  const toggle = (key, value) => {
    const arr = filters[key];
    const updated = arr.includes(value)
      ? arr.filter((v) => v !== value)
      : [...arr, value];

    setFilters({ ...filters, [key]: updated });
  };

  const clearAll = () =>
    setFilters({ specialization: [], years: [], search: "" });

  return (
    <div className="filters">
      <div className="filters-header">
        <h3>Filtr</h3>
        <button onClick={clearAll} className="clear-btn">
          Filtrləri sil
        </button>
      </div>

      <div className="section">
        <h4>İxtisas</h4>
        {[
          "Anksiyete",
          "Depressiya",
          "Travma",
          "Münasibət problemləri",
          "Kədər və itki",
        ].map((s) => (
          <label key={s}>
            <input
              type="checkbox"
              checked={filters.specialization.includes(s)}
              onChange={() => toggle("specialization", s)}
            />
            {s}
          </label>
        ))}
      </div>

      <div className="section">
        <h4>Təcrübə illəri</h4>
        {["1-5", "5-10", "10+"].map((y) => (
          <label key={y}>
            <input
              type="checkbox"
              checked={filters.years.includes(y)}
              onChange={() => toggle("years", y)}
            />
            {y} il
          </label>
        ))}
      </div>
    </div>
  );
}
