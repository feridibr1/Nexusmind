import React from "react";
import "./UpcomingAppointments.scss";
import { IoVideocamOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";


const UpcomingAppointments = () => {
  return (
    <div className="upcoming-card">
      <h2>Qarşıdakı görüşlər</h2>

      {/* Appointment 1 */}
      <div className="appointment">
        <div className="left">
          <div className="icon video"><IoVideocamOutline className="video-icon"/></div>
          <div className="info">
            <h3>Dr. Anya Sharma ilə görüş</h3>
            <p>Virtual görüşünüz başlamaq üzrədir.</p>
            <span>Bu gün, 16:00 — 16:50</span>
          </div>
        </div>

        <button className="btn primary">Görüşə qoşul</button>
      </div>

      {/* Appointment 2 */}
      <div className="appointment">
        <div className="left">
          <div className="icon calendar"><FaRegCalendarAlt className="calendar-icon"/></div>
          <div className="info">
            <h3>Dr. Anya Sharma ilə görüş</h3>
            <span>Cümə, 10 noyabr, 11:00 — 11:50</span>
          </div>
        </div>

        <button className="btn link">Vaxtı dəyiş</button>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
