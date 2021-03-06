import React from "react";
import allProjects from "./data-projects";
import Project from "../Projects/Project";

export default function ProjectList() {
  return (
    <section className="project-section flex-col full-width">
      <h1>Projets</h1>
      <div className="grid-container full-width">
        {allProjects.map((p, i) => (
            <Project project={p} key={i} index={i} />
        ))}
      </div>
    </section>
  );
}
