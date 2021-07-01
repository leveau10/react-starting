import React, { Component } from "react";
import NoteCard from "./NoteCard";

/*This component show a list of notes;
1- Always import React;
2- Create and export a default class and extends Component;
3- Write the JSX code inside the return of the render() method;
4- Import the component in App.js and use it*/

class NotesList extends Component {
  render() {
    return (
      <ul>
        <li>
          <NoteCard />
        </li>
        <li>
          <NoteCard />
        </li>
        <li>
          <NoteCard />
        </li>
      </ul>
    );
  }
}

export default NotesList;
