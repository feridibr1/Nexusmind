import { useState } from "react";
import { NavLink } from "react-router-dom";
import profil from '../../assets/images/profil-picture.jpg'
import logo from '../../assets/images/logo.png'
import './ClientNavbar.scss'

export default function ClientNavbar() {
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
          <NavLink to="/client/dashboard">Dashboard</NavLink>
          <NavLink to="/client/therapists">Psixoloqlar</NavLink>
          <NavLink to="/client/chatbot">Mesajlar</NavLink>
          <NavLink to="/">VR sessiya</NavLink>
          <NavLink to="/therapist-sign-up">Psixoloq ol</NavLink>
          <NavLink to="/client/contact">Əlaqə</NavLink>
        </nav>

        {/* Book Button */}
        <button className="csb-book-btn">Görüş bron et</button>

        {/* Profile Box */}
        <div className="csb-profile">
          <img src={profil} alt="profil" />
          <div>
            <p className="name">Maria Sanchez</p>
            <p className="email">maria.sanchez@email.com</p>
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
