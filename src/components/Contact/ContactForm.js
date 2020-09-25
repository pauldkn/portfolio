import React, { Component } from "react";
import ButtonSubmit from "../ButtonSubmit";

const initialState = {
  name: "",
  email: "",
  tel: "",
  message: "",
};

export default class ContactForm extends Component {
  state = initialState;

  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState(initialState, () => console.log(this.state));
  };

  render() {
    return (
      <form className="contact-form flex-col" onSubmit={this.handleSubmit}>
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
