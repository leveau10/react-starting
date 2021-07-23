import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./style.css";

/*This component show a list of notes;
1- Always import Rea  ct;
2- Create and export a default class and extends Component;
3- Write the JSX code inside the return of the render() method;
4- Import the component in App.js and use it*/

class NotesList extends Component {

  constructor(){
    super();
    this.state = {notes:[]}
    this._newNote = this._newNote.bind(this);
  }

  componentDidMount(){
    this.props.notes.subscribe(this._newNote);
  }

  componentWillUnmount(){
    this.props.notes.unsubscribe(this._newNote);
  }

  _newNote(notes){
    this.setState({...this.state, notes})
  }

  render() {
    return (
      <ul className="notes-list">
        {this.state.notes.map((note, index) => {
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
