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
      notes:[],
      category:[]
    }
  }

  createNote(title, text, category){ //this method is used below}
    const newNote = {title, text, category};
    const newNotesArray = [...this.state.notes, newNote]
    const newState = {
      notes:newNotesArray
    }
    this.setState(newState)
  }

  createCategory(categoryName){
    const newCategoryArray = [...this.state.category, categoryName]
    const newState = {
      category:newCategoryArray
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
        <RegisterForm 
        category={this.state.category}
        createNote={this.createNote.bind(this) }/> 
        <main className="main-content">
          <CategoryList 
            createCategory={this.createCategory.bind(this)}
            category={this.state.category}/>
          <NotesList 
            deleteNote={this.deleteNote.bind(this)}
            notes={this.state.notes }/> 
        </main>

      </section>
    ); 
  } 
}

export default App;
