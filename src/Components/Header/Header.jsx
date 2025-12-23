import "./_Header.scss";
import Container from "../Container/Container";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Container> 
        <div className="header__wrapper">
          {/* Logo */}
          <a href="#" className="header__logo">
            <img src={Logo} alt="Nexusmind Logo" />
          </a>

          {/* Burger button */}
          <div
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navigation */}
          <nav className={menuOpen ? "active" : ""}>
            <ul>
              <li><Link to='/'>Ana səhifə</Link></li>
              <li><Link to='/about'>Haqqımızda</Link></li>
              <li><Link to='/psychologists'>Psixoloqlar</Link></li>
              <li><Link to='/services'>Xidmətlər</Link></li>
              <li><Link to='/contact'>Əlaqə</Link></li>
              <li><Link to='/login'>Daxil ol</Link></li>
            </ul>
          </nav>

          {/* Right side button */}
          <div className="hero__buttons">
            <Link to="/login" className="btn secondary">Daxil ol</Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
