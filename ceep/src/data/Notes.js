
export default class NotesArray{
    constructor(){
        this.notes = [];
        this._registered = [];
    }

    createNote(title, text, category){
        const newNote = new Note(title, text, category);
        this.notes.push(newNote);
    }

    deleNote(index){
        this.notes.splice(index, 1);
    }

    register(func){
        this._registered.push(func);
    }

    notify(){
        this._registered.forEach(func => func(this.category));
    }
};

class Note{
    constructor(title, text, category){
        this.title = title;
        this.text = text;
        this.category = category;
    }
};