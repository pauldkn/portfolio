import React from "react";
import ContactForm from "./ContactForm";
import ContactInformations from './ContactInformations' ;

export default function ContactSection() {
  return (
    <section className="contact-section flex-col">
      <h1>Contact</h1>
      <div className="contact-options flex space-b">
        <ContactForm />
        <ContactInformations />
      </div>
    </section>
  );
}
