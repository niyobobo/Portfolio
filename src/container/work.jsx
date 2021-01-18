import React, { useState, useEffect } from "react";
import Experience from "../components/experience.jsx";
import data from "../data/info.json";

const WorkExperience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(data.work);
  }, []);

  return (
    <div className="content">
      <div className="welcome">
        <div className="section">
          <div className="row">
            <h1 className="heading">Work experience</h1>
            <a
              href="https://drive.google.com/file/d/1sW_jg5hYTiBX5KBqqx6qnDGG68LHUinw/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fas fa-download ml-2"></i>
              Download my CV
            </a>
          </div>
          <hr />
          {experiences.map(experience => {
            return <Experience key={experience.company} data={experience} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
