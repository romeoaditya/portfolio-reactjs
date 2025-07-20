import React from "react";

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} className="work__img" alt={item.title} />

      <h3 className="work__title">{item.title}</h3>

      {/* ✅ Tambahkan deskripsi */}
      <p style={{fontSize: "1rem", marginBottom: "0.5rem", color: "#aaa"}}>
        {item.description}
      </p>

      {/* ✅ Tambahkan techstack */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem",
          marginBottom: "1rem",
        }}
      >
        {item.techstack.map((tech, index) => (
          <span
            key={index}
            style={{
              backgroundColor: "#1e1e2f",
              padding: "0.25rem 0.5rem",
              borderRadius: "999px",
              fontSize: "0.65rem",
              color: "#fff",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={item.link}
        className="work__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kunjungi Link
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorksItems;
