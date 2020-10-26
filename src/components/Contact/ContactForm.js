import React, { Component } from "react";
import ButtonSubmit from "../ButtonSubmit";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", tel: "", message: "" };
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <form
        name="contact"
        className="contact-form flex-col"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          required
          value={this.state.email}
          onChange={this.handleChange}
        />

        <label htmlFor="tel">Téléphone</label>
        <input
          type="tel"
          name="tel"
          id="tel"
          autoComplete="off"
          value={this.state.tel}
          onChange={this.handleChange}
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          required
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>

        <ButtonSubmit text={"Envoyer"} />
      </form>
    );
  }
}
