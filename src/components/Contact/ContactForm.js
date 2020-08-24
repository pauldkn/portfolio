import React from "react";

const handleSubmit = e => {
  e.PreventDefault();
  console.log('Form submitted!')
}

export default function FormContact() {
  return (
    <form className="form-contact flex-col">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />

      <label htmlFor="tel">Phone number</label>
      <input type="tel" name="tel" id="tel"/>

      <button type="submit" onClick={handleSubmit}></button>
    </form>
  );
}
