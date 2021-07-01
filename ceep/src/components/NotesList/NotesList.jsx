import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard.jsx";
import "./style.css";

/*This component show a list of notes;
1- Always import React;
2- Create and export a default class and extends Component;
3- Write the JSX code inside the return of the render() method;
4- Import the component in App.js and use it*/

class NotesList extends Component {
  render() {
    return (
      <ul className="notes-list">
        {Array.of("Job", "Job", "Studies").map((category, index) => {
          return (
            <li className="notes-list_item" key={index}>
              <NoteCard />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NotesList;
