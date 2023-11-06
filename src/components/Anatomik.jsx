import React, { useEffect, useState } from "react";

const Anatomik = () => {

  const [height, setHeight] = useState(0);

  useEffect(() => {
    const anatomikContainer = document.querySelector(".anatomik-container");
    setHeight(anatomikContainer.getBoundingClientRect().top);

    const handleScroll = () => {
      if( window.pageYOffset > height - 400 ) {
        const anatomikImage1 = document.querySelector(".anatomik-image-1");
        const anatomikImage2 = document.querySelector(".anatomik-image-2");

        anatomikImage1.classList.add("anatomik-image-1-active");
        anatomikImage2.classList.add("anatomik-image-2-active");
      }

      if( window.pageYOffset > height + 400 ) {
        const anatomikTitle = document.querySelector(".anatomik-title");
        anatomikTitle.classList.add("anatomik-title-active");
      }

      if( window.pageYOffset > height + 800 ) {
        const anatomikText = document.querySelector(".anatomik-text");
        anatomikText.classList.add("anatomik-text-active");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [height]);

  return (
    <div className="anatomik-container">
      <div className="anatomik-content">
        <div className="anatomik-image">
          <div className="anatomik-image-1">
            <img src="https://resmim.net/cdn/2023/10/30/ZScsYj.jpg" alt="" />
          </div>
          <div className="anatomik-image-2">
            <img src="https://resmim.net/cdn/2023/11/01/ZZ3h68.jpg" alt="" />
          </div>
        </div>

        <div className="anatomik-text-area">
          <div className="anatomik-title">
            <h1>anatomik saç kesimi</h1>
            <h1>
              Kendinize özgü bir tarz, <br /> Altın methodu
            </h1>
          </div>

          <div className="anatomik-text">
            <p>
              Anatomik saç kesimi bir saç modeli değildir öncelikle bundan
              bahsetmek gereklidir. Anatomik saç kesimi Kadir Alkan tarafından
              bulunan, kuaförlerin misafirlerinin istedikleri saç modellerinin
              kafa ve yüz kemiklerinin altın oran kuralıyla hesaplanmasıyla
              ,istenilen saç modelinin kişilere özel bir saç modeli haline
              gelmesine imkan veren bir methoddur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anatomik;
