import React, { useEffect, useState } from "react";

const Reservation = () => {

  const [height, setHeight] = useState();

  useEffect(() => {
    const reservationContainer = document.querySelector(".reservation-container");
    const title = document.querySelector(".reservation-title");
    const button = document.querySelector(".reservation-button");
    setHeight(reservationContainer.getBoundingClientRect().top);

    const handleScroll = () => {
      if (window.scrollY > height - 500) {
        title.classList.add("reservation-title-active");
        button.classList.add("reservation-button-active");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [height]);

  return (
    <div className="reservation-container">
      <div className="reservation-content">
        <div className="reservation-title">
          <h1>
            Kendine özgü tarzını yarat <br /> Farklı açıdan bak, <br /> çünkü
            sen herkesten farklısın.
          </h1>
        </div>

        <div className="reservation-button">
          <div className="button-wrapper">
            <h1>randevu al</h1>
          </div>
          <div className="button-wrapper">
            <h1>randevu al</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
