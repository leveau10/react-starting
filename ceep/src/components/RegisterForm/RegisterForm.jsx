import React, { Component } from "react";
import "./style.css"

class RegisterForm extends Component {
  render() {
    return (
      <form className="register-form">
        <input type="text" placeholder="title" className="register-form_input"/>
        <textarea placeholder="Your note" className="register-form_input"/>
        <button className="register-form_submit">Create Note</button>
      </form>
    );
  }
}

export default RegisterForm;
