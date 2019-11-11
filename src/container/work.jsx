import React, { useState, useEffect } from "react";
import data from "../data/info.json";
import Experience from "../components/experience.jsx";

const WorkExperience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(data.work);
  }, []);

  return (
    <div className="content">
      <div className="welcome">
        <div className="section col-2">
        {experiences.map(experience => {
          return <Experience key={experience.company} data={experience} />;
        })}
      </div>
      </div>
    </div>
  );
};

export default WorkExperience;
