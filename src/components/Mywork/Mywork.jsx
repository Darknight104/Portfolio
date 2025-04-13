import React, { useState } from "react";
import "./Mywork.css";
import myproj from "../../assets/myproject";

const Mywork = () => {
  const [visibleProjects, setVisibleProjects] = useState(3); // Initially show 3 projects

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3); // Load 3 more projects each time
  };

  const showLessProjects = () => {
    setVisibleProjects(3); // Reset to show only 3 projects
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Projects</h1>
      </div>

      <div className="mywork-container">
        {myproj.slice(0, visibleProjects).map((work, index) => (
          <img key={index} src={work.w_image} alt={`Project ${index + 1}`} />
        ))}
      </div>

      <div className="mywork-buttons">
        {visibleProjects < myproj.length && (
          <button className="mywork-showmore" onClick={showMoreProjects}>
            Show More
          </button>
        )}

        {visibleProjects > 3 && (
          <button className="mywork-showless" onClick={showLessProjects}>
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Mywork;
