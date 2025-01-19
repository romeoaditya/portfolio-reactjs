import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>toggleTab (1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>toggleTab (2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  Self Taught - Online Resources
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - Present
                  
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
                <h3 className="qualification__title">Game Developer</h3>
                <span className="qualification__subtitle">
                  Self Taught - Online Resources
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">WordPress Designer</h3>
                <span className="qualification__subtitle">Student - SMK Tunas Media</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - Present
                  
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
                <h3 className="qualification__title">Fullstack Developer</h3>
                <span className="qualification__subtitle">
                  Self Taught - Online Resources
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                  
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Fullstack Developer</h3>
                <span className="qualification__subtitle">
                  Ez Computer - ID
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2024
                  
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

{/*               <div>
                <h3 className="qualification__title">Fullstack Developer</h3>
                <span className="qualification__subtitle">Company - ID</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                  
                </div>
              </div> */}
            </div>

            <div className="qualification__data">
{/*               <div>
                <h3 className="qualification__title">Backend Developer</h3>
                <span className="qualification__subtitle">
                  Freelance - Online
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - Present
                  
                </div>
              </div> */}

              <div>
                <span className="span qualificatiion__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
