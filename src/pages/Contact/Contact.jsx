import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-title">
          <h1>İletişim</h1>
        </div>

        <div className="contact">
          <div className="contact-form">
            <h1>Bizimle iletşime geçin</h1>
            <p>
              Her türlü öneri, görüş, şikayet ve istekleriniz için bize
              yazabilirsiniz.
            </p>
            <form>
              <div className="contact-form-name">
                <input type="text" placeholder="Adınız" autoComplete="false" />
              </div>
              <div className="contact-form-email">
                <input
                  type="email"
                  placeholder="E-posta"
                  autoComplete="false"
                />
              </div>
              <div className="contact-form-message">
                <textarea placeholder="Mesajınız"></textarea>
              </div>
              <div className="contact-form-button">
                <button type="submit">Gönder</button>
              </div>
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-info-item">
              <h1>Merkez Salon</h1>
              <small>Etiler, Nispetiye caddesi,</small>
              <small>Peker Sk. no:52,</small>
              <small>34340 </small>
              <small>Beşiktaş</small>
            </div>

            <div className="contact-info-item">
              <small>info@kadiralkan.com.tr</small>
              <small>0535 256 36 36</small>
            </div>

            <div className="contact-info-item">
              <h1>Merkez Salon</h1>
              <small>0850 303 5377</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
