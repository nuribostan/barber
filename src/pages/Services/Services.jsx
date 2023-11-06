import React, { useEffect, useState } from "react";
import "./services.css";

const Services = () => {

  const [height, setHeight] = useState(0);
  const [height2, setHeight2] = useState(0);


  return (
    <div className="services-container">
      <div className="services-content">
        <div className="services-title">
          <h1>Hizmetlerimiz.</h1>
        </div>

        <div className="space"></div>
        <img className="service-img" src="https://resmim.net/cdn/2023/11/05/ZfrNU1.png" alt="" />
        <div className="man-services">
          <h1 className="man-services-title">Erkek <br />Bölümü <br />Hizmetlerimiz</h1>

          <div className="man-group">
            <ul>
              <li className="man-item">
                <h2>Saç Tasarımı</h2>
              </li>
              <li className="man-item">
                <h2>Saç düzleştirme</h2>
              </li>
              <li className="man-item">
                <h2>Saç botoksu</h2>
              </li>
              <li className="man-item">
                <h2>Kaş tasarımı</h2>
              </li>
              <li className="man-item">
                <h2>Cilt bakımı</h2>
              </li>
              <li className="man-item">
                <h2>Manikür</h2>
              </li>
              <li className="man-item">
                <h2>Pedikür</h2>
              </li>
              <li className="man-item">
                <h2>Damat traşı</h2>
              </li>
            </ul>
          </div>
        </div>

        <div className="woman-services">
          <h1>Kadın <br />Bölümü <br />Hizmetlerimiz</h1>
          <div className="woman-group">
            <ul>
              <li className="woman-item">
                <h2>Saç Tasarımı</h2>
              </li>
              <li className="woman-item">
                <h2>Saç düzleştirme</h2>
              </li>
              <li className="woman-item">
                <h2>Saç botoksu</h2>
              </li>
              <li className="woman-item">
                <h2>Kaş tasarımı</h2>
              </li>
              <li className="woman-item">
                <h2>Cilt bakımı</h2>
              </li>
              <li className="woman-item">
                <h2>Manikür</h2>
              </li>
              <li className="woman-item">
                <h2>Pedikür</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
