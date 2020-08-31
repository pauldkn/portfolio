import React from "react";
import Greetings from "../Greetings";
import ProjectList from "../Projects/ProjectList";
import ContactSection from "../Contact/ContactSection";

import "../../styles/App.scss";
import "../../styles/home.scss";

export default function Home() {
  return (
    <div className="home-page flex-col space-b full-width">
      <Greetings />
      <ProjectList />
      <ContactSection />
    </div>
  );
}
