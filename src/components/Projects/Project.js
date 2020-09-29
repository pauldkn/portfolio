import React from "react";
// import projectImage from './project-images/bg-project.jpg'

export default function Project({ project }) {
  return (
    <div className="project-item flex-col">
      <a href={project.url} target="blank" rel="noopener noreferrer">
        <div className="card-top">
          <img src={project.img} alt="Projet" className="img" />
        </div>
      </a>
      <div className="card-bottom flex-col space-b full-height">
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
