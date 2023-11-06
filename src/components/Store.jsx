import React, { useEffect, useState } from "react";
import StoreData from "../data/Store";

const Store = () => {
  const [store, setStore] = useState(StoreData);
  const [startX, setStartX ] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {

    const storeItem = document.querySelector(".store-item");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    const handleNext = () => {
      storeItem.scrollLeft += 900;
    }

    const handlePrev = () => {
      storeItem.scrollLeft -= 900;
    }

    next.addEventListener("click", handleNext);
    prev.addEventListener("click", handlePrev);

    return () => {
      next.removeEventListener("click", handleNext);
      prev.removeEventListener("click", handlePrev);
    }
    
  }, [])

  useEffect(() => {
    const store = document.querySelector(".store-container");
    const title1 = document.querySelector(".store-title");
    const title2 = document.querySelector(".store-title2");
    const content = document.querySelector(".store-content");
    setHeight(store.getBoundingClientRect().top);

    const handleScroll = () => {
      if ( window.pageYOffset > height - 300 ) {
        title1.classList.add("store-title-active");
        title2.classList.add("store-title2-active");
      }

      if ( window.pageYOffset > height ) {
        content.classList.add("store-content-active");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [height])

  return (
    <div className="store-container">
      <div className="store-container-title-g">
      <h1 className="store-title">Kadir Alkan Store</h1>
      <h1 className="store-title2">Tüm mağazayı görmek için &#62; </h1>
      </div>
      <div className="store-content">
        <div className="store-item">
          {store.map((item) => {
            return (
              <div className="store-item-content">
                <div className="store-item-img">
                  <img src={item.img} alt="" />
                </div>

                <h4>Yeni</h4>

                <h1 className="store-item-name">
                    {item.name}
                </h1>

                <h3 className="store-item-price">
                    Ürün fiyatı : {item.price} TL
                </h3>

                <h3 className="more-detail"> <span>Ürün Hakkında </span>&#160;&#160; Daha fazla bilgi</h3>
              </div>
            );
          })}
        </div>

        <div className="store-button">
          <div className="prev">
            <img src="https://resmim.net/cdn/2023/11/03/Zfffv1.png" alt="" />
          </div>

          <div className="next">
            <img src="https://resmim.net/cdn/2023/11/03/Zffm3T.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
