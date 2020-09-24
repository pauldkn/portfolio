import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactInformations() {
  return (
    <div className="contact-informations flex-col space-b">
      <div className="mail">
        <h3>Vous n'aimez pas les formulaires?</h3>
        <p>N'hésitez pas à me contacter par email</p>
        <a href="mailto:pauldkn.code@gmail.com" className="link">
          <FontAwesomeIcon icon="envelope" size='2x' />
        </a>
      </div>
      <div className="networks">
        <h3>Vous n'aimez pas les mails?</h3>
        <p>Voici mes réseaux sociaux</p>
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
      <div className="resume">
        <h3>Vous êtes difficile.</h3>
        <p>Voici mon CV</p>
        <a href="/">
          <FontAwesomeIcon icon="file-alt" size="2x" />
        </a>
      </div>
    </div>
  );
}
