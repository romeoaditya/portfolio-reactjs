import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Romeo</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Tentang Saya
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Proyek
            </a>
          </li>
          <li>
            <a href="#sertifikat" className="footer__link">
              Sertifikat
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/romeoadity_/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/romeo-aditya-0b8b1833b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://t.me/oemmorr"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-telegram"></i>
          </a>
        </div>
        <span className="footer__copy">
          <p>© {new Date().getFullYear()} Romeoaditya.</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
