import { useState } from "react";
import "./FilterBar.scss";
import { IoSearchOutline } from "react-icons/io5";

export default function FilterBar({ filters, setFilters }) {
  const update = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearAll = () => {
    setFilters({
      search: "",
      specialization: "",
      availability: "",
      language: "",
    });
  };

  return (
    <div className="filter-bar">

      {/* Search Input */}
      <div className="search-box">
        <IoSearchOutline className="icon" />
        <input
          type="text"
          placeholder="Search by name, specialization, or keyword..."
          value={filters.search}
          onChange={(e) => update("search", e.target.value)}
        />
      </div>

      {/* Dropdowns */}
      <div className="filters-row">
        <select
          value={filters.specialization}
          onChange={(e) => update("specialization", e.target.value)}
        >
          <option value="">Specialization</option>
          <option value="Depressiya">Depressiya</option>
          <option value="Anksiyete">Anksiyete</option>
          <option value="Travma">Travma</option>
          <option value="Münasibət problemləri">Münasibət problemləri</option>
        </select>

        <select
          value={filters.availability}
          onChange={(e) => update("availability", e.target.value)}
        >
          <option value="">Availability</option>
          <option value="This Week">This Week</option>
          <option value="Next Week">Next Week</option>
          <option value="Flexible">Flexible</option>
        </select>

        <select
          value={filters.language}
          onChange={(e) => update("language", e.target.value)}
        >
          <option value="">Language</option>
          <option value="Azerbaijani">Azerbaijani</option>
          <option value="English">English</option>
          <option value="Russian">Russian</option>
        </select>

        <button className="clear-btn" onClick={clearAll}>
          Clear Filters ✕
        </button>
      </div>
    </div>
  );
}
