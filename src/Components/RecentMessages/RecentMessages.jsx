import React from "react";
import "./RecentMessages.scss";
import women from '../../assets/images/women.jpg'

const RecentMessages = () => {
  return (
    <div className="messages-card">
      <div className="messages-header">
        <h3>Son mesajlar</h3>
        <a href="#" className="view-all">Hamısına bax</a>
      </div>

      <div className="message-item">
        <img
          src={women}
          alt="Dr. Anya Sharma"
        />

        <div className="message-content">
          <p className="name">Dr. Anya Sharma</p>
          <p className="text">Bu, əla irəliləyişdir, gəlin müzakirə edək…</p>
        </div>

        <span className="time">2h ago</span>
      </div>
    </div>
  );
};

export default RecentMessages;
