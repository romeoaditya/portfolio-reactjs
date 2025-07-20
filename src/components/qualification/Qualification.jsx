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
                <h3 className="qualification__title">
                  Web Design (HTML, CSS, JavaScript)
                </h3>
                <span className="qualification__subtitle">Sololearn</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022
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
                <h3 className="qualification__title">Web CMS Wordpress</h3>
                <span className="qualification__subtitle">SMK Tunas Media</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Graphic Design</h3>
                <span className="qualification__subtitle">SMK Tunas Media</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2025
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
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Sololearn</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2025
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
