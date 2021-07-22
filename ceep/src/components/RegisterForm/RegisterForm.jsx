import React, { Component } from "react";
import "./style.css";

class RegisterForm extends Component {
  constructor(props) {
    // the props comes from createNote from App.js
    super(props); //this acess the father object
    this.title = "";
    this.texto = "";
    this.category="Sem categoria"
  }

  _handleChangeCategory(event){
    event.stopPropagation();
    this.category=event.target.value;
  }

  _handleChangeTitle(event) {
    //the "_" means that the methods are private
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleChangeText(event) {
    //the "_" means that the methods are private
    event.stopPropagation();
    this.text = event.target.value;
  }

  _createNote(event) {
    //the "_" means that the methods are private
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text, this.category);
  }

  render() {
    return (
      <form className="register-form" onSubmit={this._createNote.bind(this)}>
        <select 
        className="register-form_input"
        onChange={this._handleChangeCategory.bind(this)}>

          <option>Sem categoria</option>

          {this.props.category.map((category) => {
            return <option>{category}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="title"
          className="register-form_input"
          onChange={this._handleChangeTitle.bind(this)} //always use the bind when dealing with events
        />
        <textarea
          rows={15}
          placeholder="Your note"
          className="register-form_input"
          onChange={this._handleChangeText.bind(this)}
        />
        <button className="register-form_submit register-form_input">
          Create Note
        </button>
      </form>
    );
  }
}

export default RegisterForm;
