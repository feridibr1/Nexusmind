import { useState } from "react";
import { NavLink } from "react-router-dom";
import profil from '../../assets/images/profil-picture.jpg'
import logo from '../../assets/images/logo.png'
import './PsychologistNavbar.scss'

export default function PsychologistNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <aside className={`client-sidebar ${menuOpen ? "open" : ""}`}>
        
        {/* Logo */}
        <div className="csb-logo">
          <img src={logo} alt="logo" />
          <h2>NexusMind</h2>
        </div>

        {/* Menu */}
        <nav className="csb-menu">
            <NavLink to="/psychologist/dashboard">Dashboard</NavLink>
            <NavLink to="/psychologist/schedule">Cədvəl</NavLink>
            <NavLink to="/psychologist/patients">Pasiyentlər</NavLink>
            <NavLink to="/psychologist/chatbot">Mesajlar</NavLink>
            <NavLink to="/psychologist/contact">Əlaqə</NavLink>
        </nav>

        {/* Profile Box */}
        <div className="csb-profile">
          <img src={profil} alt="profil" />
          <div>
            <p className="name">Dr. Emily Carter</p>
            <p className="email">Psychologist</p>
          </div>
        </div>
      </aside>

      {/* Mobile Burger */}
      <div className="client-burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
