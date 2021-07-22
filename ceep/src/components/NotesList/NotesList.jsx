import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./style.css";

/*This component show a list of notes;
1- Always import Rea  ct;
2- Create and export a default class and extends Component;
3- Write the JSX code inside the return of the render() method;
4- Import the component in App.js and use it*/

class NotesList extends Component {

  render() {
    return (
      <ul className="notes-list">
        {this.props.notes.map((note, index, category) => {
          return (
            <li className="notes-list_item" key={index}>

              <NoteCard 
              index={index}
              deleteNote={this.props.deleteNote}
              title={note.title} 
              text={note.text}
              category={note.category}/>
              
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NotesList;
