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
        category={this.category.category}
        createNote={this.notes.createNote }/> 
        <main className="main-content">
          <CategoryList 
            createCategory={this.category.createCategory}
            category={this.category.category}/>
          <NotesList 
            deleteNote={this.notes.deleNote}
            notes={this.notes.notes }/> 
        </main>

      </section>
    ); 
  } 
}

export default App;
