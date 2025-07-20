import React, {useState} from "react";
import "./achievements.css";
import JavaScript from "../../assets/certificate/javascript.png";
import HTML from "../../assets/certificate/html.png";
import CSS from "../../assets/certificate/css.png";
import PHP from "../../assets/certificate/php.png";
import Wordpress from "../../assets/certificate/wordpress.jpg";
import GraphicDesign from "../../assets/certificate/graphic design.jpg";
import WebDev from "../../assets/certificate/webdev.jpg";

const certificates = [
  {
    id: 1,
    image: GraphicDesign,
    title: "Graphic Design Photoshop",
    date: "2025",
    source: "SMK Tunas Media",
    link: "https://www.smktunasmedia.sch.id/v4/",
  },
  {
    id: 2,
    image: Wordpress,
    title: "Web CMS Wordpress",
    date: "2025",
    source: "SMK Tunas Media",
    link: "https://www.smktunasmedia.sch.id/v4/",
  },
  {
    id: 3,
    image: WebDev,
    title: "Web Development",
    date: "2025",
    source: "Sololearn",
    link: "https://www.sololearn.com/certificates/CC-HBOS1LII",
  },
  {
    id: 3,
    image: PHP,
    title: "PHP Dasar",
    date: "2022",
    source: "Sololearn",
    link: "https://www.sololearn.com/certificates/CT-SPIAULFE",
  },
  {
    id: 4,
    image: JavaScript,
    title: "JavaScript Dasar",
    date: "2022",
    source: "Sololearn",
    link: "https://www.sololearn.com/certificates/CT-111LYND9",
  },
  {
    id: 5,
    image: HTML,
    title: "HTML Certificate",
    date: "2022",
    source: "Sololearn",
    link: "https://www.sololearn.com/certificates/CT-RKJEDDSL",
  },
  {
    id: 6,
    image: CSS,
    title: "CSS Certifiacate",
    date: "2022",
    source: "Sololearn",
    link: "https://www.sololearn.com/certificates/CT-P5FPM0LF",
  },
];

const Achievements = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="achievement__section" id="sertifikat">
      <h2 className="section__title">Pencapaian</h2>
      <span className="section__subtitle">
        Hasil Pelatihan & Sertifikasi Keahlian
      </span>

      <div className="achievement__grid">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="cert__card"
            onClick={() => setSelected(cert)}
          >
            <img src={cert.image} alt={cert.title} className="cert__img" />
            <div className="cert__info">
              <p className="cert__title">{cert.title}</p>
              <p className="cert__meta">{cert.source}</p>
              <p className="cert__meta">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="cert__modal" onClick={() => setSelected(null)}>
          <div
            className="cert__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selected.image} alt={selected.title} />
            <h3>{selected.title}</h3>
            <a href={selected.link} target="_blank" rel="noopener noreferrer">
              <button className="button button--flex cert__source-button">
                <i class="uil uil-link icon"></i>
                Lihat Sumber Sertifikat
              </button>
            </a>
            <button className="cert__close" onClick={() => setSelected(null)}>
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
