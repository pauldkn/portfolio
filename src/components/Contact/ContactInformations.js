import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactInformations() {
  return (
    <div className="contact-informations flex-col space-b">
      <div className="info mail">
        <h3>Vous n'aimez pas les formulaires?</h3>
        <p>N'hésitez pas à me contacter par email</p>
        <a href="mailto:pauldkn.code@gmail.com" className="link">
          <FontAwesomeIcon icon="envelope" size="2x" />
        </a>
      </div>
      <div className="info networks">
        <h3>Ou bien sur les réseaux sociaux</h3>
        {/* <p>Voici mes réseaux sociaux</p> */}
        <div className="all-networks flex">
          <a
            href="https://www.linkedin.com/in/paul-dickerson/"
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
          </a>
          <a
            href="https://github.com/pauldkn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
          </a>
        </div>
      </div>
      <div className="info resume">
        <h3>Vous souhaitez voir mon CV ?</h3>
        {/* <p>Cliquez ci-dessous</p> */}
        <a href="/">
          <FontAwesomeIcon icon="file-alt" size="2x" />
        </a>
      </div>
    </div>
  );
}
