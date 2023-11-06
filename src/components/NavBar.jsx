import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const button = document.querySelectorAll(".nav-top-menu-button span");
  const logo = document.querySelector(".nav-top-logo h1");
  const navLeftItem = document.querySelectorAll(".nav-left-item h1");

  const navigate = useNavigate();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    navLeftItem.forEach((item, index) => {
      item.style.animationDelay = `${2 + index * 0.1}s`;
    });

    if (isMenuOpen === true) {
      button.forEach((item) => {
        item.classList.add("nav-top-menu-button-active");
        logo.classList.add("nav-top-logo-active");
      });
      navLeftItem.forEach((item) => {
        item.style.display = "block";
      });
    }
  }, [isMenuOpen]);

  if (isMenuOpen === false) {
    button.forEach((item) => {
      item.classList.remove("nav-top-menu-button-active");
      logo.classList.remove("nav-top-logo-active");
    });

    setTimeout(() => {
      navLeftItem.forEach((item) => {
        item.style.display = "none";
      });
    }, 2000);
  }

  const handleAbout = () => {
    navigate("/hakkımızda");
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const handleServices = () => {
    navigate("/hizmetlerimiz");
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const handleSalons = () => {
    navigate("/salonlarımız");
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const handleStore = () => {
    navigate("/mağaza");
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const handleContact = () => {
    navigate("/iletişim");
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const handleFranchise = () => {
    navigate("/franchise");
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const handleHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const handleRandevu = () => {
    setIsMenuOpen(false);
  }

  return (
    <div className="nav-container">
      <section className="nav-top">
        <div className="nav-top-menu-button" onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="nav-top-logo">
          <h1>kadir alkan</h1>
        </div>
      </section>

      <section
        className={`nav-left ${
          isMenuOpen ? "nav-left-active" : "nav-left-deActive"
        }`}
      >
        <div className="nav-left-bg">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>

          <div className="nav-left-content">
            <ul>
              <li className="nav-left-item" onClick={handleHome}>
                <h1>Ana Sayfa</h1>
              </li>
              <li className="nav-left-item" onClick={handleAbout}>
                <h1>hakkımızda</h1>
              </li>
              <li className="nav-left-item" onClick={handleServices}>
                <h1>hizmetlerimiz</h1>
              </li>
              <li className="nav-left-item" onClick={handleSalons}>
                <h1>salonlar</h1>
              </li>
              <li className="nav-left-item" onClick={handleRandevu}>
                <a href="https://kuaforumyanimda.com/salon/#DsJTCVXovTS21DUFJGQXwDEFaYGcGOgo" target="_blank">
                  <h1>randevu</h1>
                </a>
              </li>
              <li className="nav-left-item" onClick={handleStore}>
                <h1>store</h1>
              </li>
              <li className="nav-left-item" onClick={handleContact}>
                <h1>iletişim</h1>
              </li>
              <li className="nav-left-item" onClick={handleFranchise}>
                <h1>franchise</h1>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
