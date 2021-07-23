import React, { Component } from "react";
import NotesList from "./components/NotesList";
import RegisterForm from "./components/RegisterForm";
import CategoryList from "./components/CategoryList";
import "./assets/App.css"
import "./assets/reset.css"
import Category from "./data/Category";
import NotesArray from "./data/Notes";

class App extends Component{

  constructor(){
    super();

    this.category = new Category();
    this.notes = new NotesArray();   
  }


  render(){
    return(
      <section className="content">
        <RegisterForm 
        category={this.category}
        createNote={this.notes.createNote.bind(this.notes) }/> 
        <main className="main-content">
          <CategoryList 
            createCategory={this.category.createCategory.bind(this.category)}
            category={this.category}/>
          <NotesList 
            deleteNote={this.notes.deleNote.bind(this.notes)}
            notes={this.notes }/> 
        </main>

      </section>
    ); 
  } 
}

export default App;
