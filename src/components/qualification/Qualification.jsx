import React, {useState} from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Pendidikan</h2>
      <span className="section__subtitle">Perjalanan Belajar Saya</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Pendidikan
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Desain Web</h3>
                <span className="qualification__subtitle">
                  Mandiri - YouTube
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - Sekarang
                </div>
              </div>

              <div>
                <span className="span qualificatiion__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="span qualificatiion__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">WordPress Developer</h3>
                <span className="qualification__subtitle">SMK Tunas Media</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - 2025
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Fullstack Next.js</h3>
                <span className="qualification__subtitle">Kursus Online</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - Sekarang
                </div>
              </div>

              <div>
                <span className="span qualificatiion__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="span qualificatiion__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Backend Laravel 11</h3>
                <span className="qualification__subtitle">
                  Mandiri - Youtube
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
