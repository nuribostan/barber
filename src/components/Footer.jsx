import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-col-1">
          <h1>Lokasyon</h1>
          <h3>Nisbetiye caddesi</h3>
          <h3>Peker sokak</h3>
          <h3>No: 52</h3>
          <h3>Beşiktaş/İstanbul</h3>
          <h3>+90 535 256 3636</h3>
        </div>

        <div className="footer-col-2">
          <h1>Sosyal medya</h1>
          <h3>Instagram</h3>
          <h3>Facebook</h3>
          <h3>Twitter</h3>
          <h3>Whatsapp</h3>
        </div>

        <div className="footer-signature">
          <p>© 2023 Kadir Alkan. Tüm hakları saklıdır.</p>
          <p>Bu web sitesi nuribostan.com tarafından tasarlanmıştır.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
