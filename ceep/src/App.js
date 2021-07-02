import React, { Component } from "react";
import NotesList from "./components/NotesList";
import RegisterForm from "./components/RegisterForm";
import "./assets/App.css"
import "./assets/reset.css"

class App extends Component{

  constructor(){
    super();
    this.state = {
      notes:[]
    }
  }

  createNote(title, text){ //this method is used below}
    const newNote = {title, text};
    const newNotesArray = [...this.state.notes, newNote]
    const newState = {
      notes:newNotesArray
    }
    this.setState(newState)
  }

  render(){
    return(
      <section className="content">
        <RegisterForm createNote={this.createNote.bind(this) /*this form only works with the params of createNote*/}/> 
        <NotesList notes={this.state.notes /*the first 'notes' is the prop from noteslist. the second one is from the constructor above*/}/> 
      </section>
    ); 
  } 
}
export default App;
