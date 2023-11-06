import React from "react";
import ShortAbout from "../components/ShortAbout";
import Reservation from "../components/Reservation";
import Anatomik from "../components/Anatomik";
import Halls from "../components/Halls";
import Store from "../components/Store";
import Forms from "../components/Forms";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <section className="main-section">
        <div className="main-video-container">
          <video className="main-video" autoPlay loop muted>
            <source src="https://demo.bravisthemes.com/blaxcut/wp-content/uploads/2023/09/local-video-1.mp4"></source>
          </video>
        </div>

        <div className="main-title">
            <h1>saç, sakal</h1>
            <h1>erkeğin</h1>
            <h1>makyajıdır</h1>
            <h4>kadir alkan</h4>
        </div>
      </section>

      <section className="reservation-section">
        <Reservation />
      </section>

      <section className="anatomik-section">
        <Anatomik />
      </section>

      <section className="halls-section">
        <Halls />
      </section>

      <section className="about-section">
        <ShortAbout />
      </section>

      <section className="store-section">
        <Store />
      </section>

      <section className="forms-section">
        <Forms />
      </section>

      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
