import React from "react";
import ContactForm from "./ContactForm"

export default function ContactSection() {
  return (
    <section className="contact-section flex-col full-width">
      <h1>Contact</h1>
      <ContactForm />
    </section>
  );
}
