import React, { useEffect, useState } from "react";

const Forms = () => {

  const [height, setHeight] = useState(0);

  useEffect(() => {
    const forms = document.querySelector(".forms-container");
    setHeight(forms.getBoundingClientRect().top);
    const formsTitle = document.querySelector(".forms-title");
    const worksForm = document.querySelector(".works-form");
    const educationForm = document.querySelector(".education-form");

    const handleScroll = () => {
      if ( window.pageYOffset > height - 400 ) {
        formsTitle.classList.add("forms-title-active");
      }

      if ( window.pageYOffset > height - 300 ) {
        worksForm.classList.add("works-form-active");
        educationForm.classList.add("education-form-active");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [height])

  return (
    <div className="forms-container">
        <div className="forms-title">
            <h1>Başvuru formu</h1>
        </div>
      <div className="forms-content">
        <div className="works-form">
          <div className="form-icon">
            <img src="https://resmim.net/cdn/2023/11/04/ZfwRw1.png" alt="" />
          </div>
          <div className="form-title">
            <h1>İş başvuru formu.</h1>
          </div>
          <div className="form-text">
            <p>
              Kadir Alkan salonlarında sizler de çalışıp kariyerinizde güzel bir
              kapı açmak ister misiniz ?
            </p>
          </div>
          <div className="form-detail">
            <img src="https://resmim.net/cdn/2023/11/04/ZfwiLL.png" alt="" />
          </div>
        </div>
        <div className="education-form">
          <div className="form-icon">
            <img src="https://resmim.net/cdn/2023/11/04/Zfws1T.png" alt="" />
          </div>
          <div className="form-title">
            <h1>Eğitim başvuru formu.</h1>
          </div>
          <div className="form-text">
            <p>
              Çalışacak her personelimiz öncelikle Kadir Alkan özel oryantasyon
              eğitimini alacaktır.
            </p>
          </div>
          <div className="form-detail">
          <img src="https://resmim.net/cdn/2023/11/04/ZfwiLL.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
