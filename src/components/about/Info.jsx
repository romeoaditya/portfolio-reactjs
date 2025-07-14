import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-book about__icon"></i>
        <h3 className="about__title">Pendidikan</h3>
        <span className="about__subtitle">SMK Tunas Media</span>
      </div>
      <div className="about__box">
        <i class="bx bx-code-alt about__icon"></i>
        <h3 className="about__title">Proyek</h3>
        <span className="about__subtitle">15+ Proyek Pribadi</span>
      </div>
      <div className="about__box">
        <i class="bx bx-laptop about__icon"></i>
        <h3 className="about__title">Fokus</h3>
        <span className="about__subtitle">Web Development</span>
      </div>
    </div>
  );
};

export default Info;
