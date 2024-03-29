
export default class NotesArray{
    constructor(){
        this.notes = [];
        this._subscribed = [];
    }

    createNote(title, text, category){
        const newNote = new Note(title, text, category);
        this.notes.push(newNote);
        this.notify();
    }

    deleNote(index){
        this.notes.splice(index, 1);
        this.notify();
    }

    subscribe(func){
        this._subscribed.push(func);
    }

    unsubscribe(func){
        this._subscribed = this._subscribed.filter(f => f !== func)
    }
    
    notify(){
        this._subscribed.forEach(func => {
            func(this.notes)
        });
    }
};

class Note{
    constructor(title, text, category){
        this.title = title;
        this.text = text;
        this.category = category;
    }
};