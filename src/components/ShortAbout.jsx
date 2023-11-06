import React, { useEffect, useState } from "react";

const ShortAbout = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const shortAbout = document.querySelector(".short-about-container");
    const title = document.querySelector(".short-about-title");
    const text = document.querySelector(".short-about-text");
    const img = document.querySelectorAll(".short-about-img span");
    setHeight(shortAbout.getBoundingClientRect().top);

    const handleScroll = () => {
      if (window.pageYOffset > height - 300) {
        title.classList.add("short-about-title-active");
      }

      if (window.pageYOffset > height) {
        img.forEach((item, index) => {
          item.classList.add("short-about-img-active");
        });
      }

      if (window.pageYOffset > height + 500) {
        text.classList.add("short-about-text-active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [height]);

  return (
    <div className="short-about-container">
      <div className="short-about-content">
        <div className="short-about-title">
          <h1>
            Kimdir <br /> Kadir Alkan ?
          </h1>
        </div>

        <div className="short-about-group">
          <div className="short-about-text">
            <p>
              1982 yılı İstanbul doğumlu, 12 yaşındayken 1935 yılında dedesi ile
              başlayıp, babasıyla devam eden kuaförlük serüvenini sürdürmüş ama
              aynı zamanda eğitim hayatına devam etmiştir. Sonucunda Kocaeli
              Üni. Bilgisayar Programcılığı, Anadolu Üni. İşletme Fakültelerini
              ve Başkent Üniversitesi Eğitim Koçluğu bitirmiştir. Eğitim
              hayatında bir dönüm noktası belirleyip dede mesleği kuaförlük
              üzerine rotasını çizip bu işi de eğitimli, donanımlı bir şekilde
              yapmayı öngörmüştür. Bu düşünce akabinde, diksiyon eğitimi ve
              beden dili, yurt içi ve yurt dışı bir çok akademi ve eğitmenden
              teknik kesim, renklendirme ve ürün eğitimlerini tamamlamıştır.
              2015 te İtalya'da gerçekleşen organizasyonda Türk Ekibi üyesi
              olarak, ülkemize dünya ikinciliğini getirdi.
            </p>
          </div>

          <div className="short-about-img">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortAbout;
