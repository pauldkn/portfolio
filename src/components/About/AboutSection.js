import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section">
      <h1>À propos</h1>
      <div className="about-paragraphs">
        <p className="about-text">
          J'ai toujours été attiré par l'informatique. Pour moi, c'est un outil
          de création quasiment sans limite.
        </p>
        <p className="about-text">
          C'est pourquoi, après un master en UX (expérience utilisateur), j'ai
          décidé de me lancer dans le développement web afin de pouvoir créer
          moi-même des
          <strong>
            {" "}
            sites web, applications mobiles, mini-jeux ou programmes{" "}
          </strong>
          en tout genre.
          <br /> C'est de loin, la meilleure décision que j'ai pu prendre durant
          mon parcours.
        </p>
        <p className="about-text">
          Aujourd'hui, j'ai trouvé un domaine qui me passionne et dans lequel je
          peux constamment apprendre.
          <br />
          En ce moment, je me forme à <strong>React-native </strong>pour créer
          des <strong>applications mobiles</strong> et je débute{" "}
          <strong>Three.js</strong> pour réaliser des{" "}
          <strong>animations 3D</strong>.
        </p>
      </div>
    </section>
  );
}
