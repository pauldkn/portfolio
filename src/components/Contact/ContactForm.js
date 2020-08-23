import React from "react";

export default function FormContact() {
  return (
    <form className="form-contact">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
    </form>
  );
}
