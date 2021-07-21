import React, { Component } from "react";
import NotesList from "./components/NotesList";
import RegisterForm from "./components/RegisterForm";
import CategoryList from "./components/CategoryList";
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

  deleteNote(index){
    let arrayNotes = this.state.notes;
    arrayNotes.splice(index, 1);
    this.setState({notes:arrayNotes});
  }

  render(){
    return(
      <section className="content">
        <RegisterForm createNote={this.createNote.bind(this) /*this form only works with the params of createNote*/}/> 
        <main className="main-content">
          <CategoryList />
          <NotesList 
            deleteNote={this.deleteNote.bind(this)}
            notes={this.state.notes }/> 
        </main>

      </section>
    ); 
  } 
}

export default App;
