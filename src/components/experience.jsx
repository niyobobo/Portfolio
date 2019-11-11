import React from "react";

const Experience = ({ data }) => {
  const { title, company, description, location, from, to } = data;
  return (
    <div className="card">
      <div className="title">
        <h1 className="position">{`${title} | ${company}`}</h1>
        <p className="time">{`${from} - ${to}`}</p>
      </div>
      <p className="description">{description}</p>
      <p className="location">
        <i class="fas fa-map-marker-alt"></i>
        {location}
      </p>
    </div>
  );
};

export default Experience;
