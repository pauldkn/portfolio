import React from "react";

export default function StackContainer({ title, stack }) {
  return (
    <div className="stack-container">
      <h3>{title}</h3>
      <div className="stack-logos flex wrap full-width">
      {stack.map((techno, i) => (
        <div className="stack-item flex-col" key={i} >
          <img src={techno.img} alt={techno.name} className='logo' />
          <p>{techno.name}</p>
        </div>
      ))}
      </div>
    </div>
  );
}
