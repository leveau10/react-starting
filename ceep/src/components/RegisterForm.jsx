import React, { Component } from "react";

class RegisterForm extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="title"/>
        <textarea placeholder="Your note"/>
        <button>Create Note</button>
      </form>
    );
  }
}

export default RegisterForm;
