import React from "react";

export default function Project({ project }) {
  return (
    <div className="project-item flex-col">
      <img src={project.img} alt="Preview" className="img" />
      <div className="card-bottom flex-col space-b full-height center">
        <h3 className="title">{project.title}</h3>
        <p className="description">{project.description}</p>
        <p className="stack">
          {project.stack.map((techno, i) =>
            i !== project.stack.length - 1 ? `${techno} | ` : `${techno}`
          )}
        </p>
      </div>
    </div>
  );
}
