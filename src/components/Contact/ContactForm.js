import React, { Component } from "react";
import ButtonSubmit from "../ButtonSubmit";

export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    tel: "",
    message: "",
  };

  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form
        className="form-contact flex-col"
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" autoComplete="off" required />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          required
        />

        <label htmlFor="tel">Phone number</label>
        <input type="tel" name="tel" id="tel" autoComplete="off" />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          required
        ></textarea>

        <ButtonSubmit text={"Envoyer"} />
      </form>
    );
  }
}
