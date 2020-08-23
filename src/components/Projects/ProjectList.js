import React from "react";
import allProjects from "../../Projects.json";
import Project from "../Projects/Project";

export default function ProjectList() {
  return (
    <div className="project-list">
      {allProjects.map((p, i) => (
        <Project project={p} key={i} index={i} />
      ))}
    </div>
  );
}
