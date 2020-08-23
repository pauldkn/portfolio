import React from "react";

export default function Project({ project }) {
  return (
    <div className="project-item">
      <img src={project.img} alt="Preview" />
      <h2 className="title">{project.title}</h2>
      <p className="description">{project.description}</p>
      <ul className="stack">
        {project.stack.map((techno, i) => (
          <li className="techno" key={i}>
            {techno}
          </li>
        ))}
      </ul>
    </div>
  );
}
