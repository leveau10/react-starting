export default class Category {
    constructor(){
        this.category = [];
        this._subscribed = [];

    }

    subscribe(func){
        this._subscribed.push(func);
    }

    unsubscribe(func){
        console.log(this._subscribed);
        this._subscribed = this._subscribed.filter(f => f !== func)
        console.log(this._subscribed);
    }

    notify(){
        this._subscribed.forEach(func => {
            func(this.category);
        } );
    }

    createCategory(newCategory){
        this.category.push(newCategory);
        this.notify();
    }
}