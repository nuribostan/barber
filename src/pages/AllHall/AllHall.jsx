import React, { useState } from "react";
import "./AllHall.css";
import HallsData from "../../data/HallsData";

const AllHall = () => {
  const [hall, setHall] = useState(HallsData);

  const filterHall = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filterHall = HallsData.filter((hall) => {
      return hall.name.toLowerCase().includes(searchValue);
    });
    setHall(filterHall);
  }

  return (
    <div className="all-hall-container">
      <div className="all-hall-content">
        <div className="all-hall-title">
          <h1>Salonlarımız</h1>
        </div>

        <div className="all-hall">
          <div className="all-hall-search">
            <input onKeyUp={filterHall} type="text" placeholder="Salon ara..." />
          </div>

          <div className="all-hall-list">
            {hall.map((hall) => (
              <div className="all-hall-card">
                <div className="all-hall-card-image">
                  <img src={hall.img} alt={hall.name} />
                </div>
                <div className="all-hall-card-content">
                  <h2>{hall.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllHall;
