import React, { useEffect, useState } from "react";
import HallsData from "../data/HallsData";

const Halls = () => {
  const [halls, setHalls] = useState(HallsData);
  const [currentHall, setCurrentHall] = useState(halls[0]);
  const [height, setHeight] = useState(0);

  const handleHall = (hall) => {
    setCurrentHall(hall);
    console.log(currentHall);
  };

  useEffect(() => {
    const hallContainer = document.querySelector(".hall-container");
    setHeight(hallContainer.getBoundingClientRect().top);

    const handleScroll = () => {
      if( window.pageYOffset > height - 400 ) {
        const hallTitle = document.querySelector(".hall-title");
        const allHall = document.querySelector(".go-hall");
  
        hallTitle.classList.add("hall-title-active");
        allHall.classList.add("go-hall-active");
      }
  
      if( window.pageYOffset > height) {
        const img = document.querySelector(".hall-slider-img");
        const sliderBottom = document.querySelector(".hall-slider-bottom");
        const h3 = document.querySelector(".hall-name");

        h3.classList.add("hall-name-active");
        sliderBottom.classList.add("hall-slider-bottom-active");
        img.classList.add("hall-slider-img-active");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [height]);

  return (
    <div className="hall-container">
      <div className="hall-content">
        <div className="hall-title">
          <h1>Salonlarımıza yakından bakış.</h1>
        </div>

        <h1 className="go-hall">tüm salonlara göz atın.</h1>

        <div className="hall-slider">
          <div className="hall-slider-img">
            <img src={currentHall.img} alt={currentHall.title} />
          </div>

          <h3 className="hall-name">{currentHall.name}</h3>
          <div className="hall-slider-bottom">
            {halls.map((halls) => {
              return (
                <div className="hall-slider-item">
                  <img
                    src={halls.img}
                    alt={halls.title}
                    onClick={() => handleHall(halls)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Halls;
