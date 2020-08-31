import React from "react";
import allProjects from "../../Projects.json";
import Project from "../Projects/Project";

export default function ProjectList() {
  return (
    <section className="project-section flex-col full-width">
      <h1>Projects</h1>
      <div className="grid-container full-width">
        {allProjects.map((p, i) => (
          <Project project={p} key={i} index={i} />
        ))}
      </div>
    </section>
  );
}
