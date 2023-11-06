import React from "react";
import "./franchise.css";

const Franchise = () => {
  return (
    <div className="franchise-container">
      <div className="franchise-content">
        <div className="franchise-title">
          <h1>Franchise</h1>
        </div>

        <div className="franchise-form">
          <div className="franchise-form-title">
            <h2>Franchise Başvuru Formu</h2>
          </div>
          <form action="">
            <div className="franchise-form-big-group">
              <div className="franchise-form-group">
                <label htmlFor="name">Adı</label>
                <input type="text" name="name" id="name" />
              </div>

              <div className="franchise-form-group">
                <label htmlFor="name">Soyadı</label>
                <input type="text" name="name" id="surname" />
              </div>
            </div>

            <div className="franchise-form-big-group">
              <div className="franchise-form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>

              <div className="franchise-form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone" id="phone" />
              </div>
            </div>

            <div className="franchise-form-big-group">
              <div className="franchise-form-group">
                <label htmlFor="phone">Şehir</label>
                <input type="tel" name="phone" id="city" />
              </div>

              <div className="franchise-form-group">
                <label htmlFor="phone">Ülke</label>
                <input type="tel" name="phone" id="country" />
              </div>
            </div>

            <div className="franchise-form-group">
              <label htmlFor="message">Ek Bilgi</label>
              <textarea
                onResize="false"
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="franchise-form-group">
              <button type="submit">Gönder</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Franchise;
