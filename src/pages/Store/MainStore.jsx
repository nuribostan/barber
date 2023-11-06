import React, { useState } from "react";
import "./Store.css";
import Store from "../../data/Store";

const MainStore = () => {

  const [store, setStore] = useState(Store)

  return (
    <div className="main-store-container">
      <div className="main-store-content">
        <div className="main-store-title">
          <h1>Mağaza</h1>
        </div>

        <div className="main-store-body">
          <div className="main-store-top">
            <h1>45 ürün gösteriliyor</h1>
            <select name="select" id="">
              <option value=""><h1>Varsayılan sıralama</h1></option>
              <option value="">En çok incelenen</option>
              <option value="">En çok oy alan</option>
              <option value="">En yeni</option>
              <option value="">Fiyata göre sırala:</option>
              <option value="">Fiyata göre sırala:</option>
            </select>
          </div>

          <div className="main-store-bottom">
            {store.map((item) => {
              return(
                <div className="main-store-item">
                  <div className="main-store-item-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="main-store-item-title">
                    <h1>{item.name}</h1>
                  </div>
                  <div className="main-store-item-price">
                    <h1>{item.price} TL</h1>
                  </div>
                  <div className="main-store-item-button">
                    <button>Sepete Ekle</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainStore;
