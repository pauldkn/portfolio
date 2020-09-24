import React from "react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="contact-section flex-col">
      <h1>Contact</h1>
      <p>Paul Dickerson</p>
      <a href="mailto:pauldkn.code@gmail.com">Email</a>
      <ul>
        <li><a href="/">LinkedIn</a> </li>
        <li><a href="/">Github</a> </li>
        <li><a href="/">Resume</a> </li>
      </ul>
      {/* <ContactForm /> */}
    </section>
  );
}
