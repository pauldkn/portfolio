import React, { Component } from "react";
import ButtonSubmit from "../ButtonSubmit";

export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    tel: "",
    object: "",
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
        <input type="text" name="name" id="name" autoComplete="off" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" autoComplete="off" />

        <label htmlFor="tel">Phone number</label>
        <input type="tel" name="tel" id="tel" autoComplete="off" />

        <label htmlFor="object">Object</label>
        <input type="text" name="object" id="object" />

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="5"></textarea>

        <ButtonSubmit text={"Send message"} />
      </form>
    );
  }
}
