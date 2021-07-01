import React, { Component } from "react";
import NotesList from "./components/NotesList/NotesList.jsx";
import RegisterForm from "./components/RegisterForm/RegisterForm.jsx";
import "./assets/App.css"
import "./assets/reset.css"

class App extends Component{
  render(){
    return(
      <section className="content">
        <RegisterForm />
        <NotesList />
      </section>
    ); 
  } 
}
export default App;
