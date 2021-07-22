export default class Category {
    constructor(){
        this.category = [];
        this._registered = [];

    }

    register(func){
        this._registered.push(func);
    }

    notify(){
        this._registered.forEach(func => func(this.category));
    }

    createCategory(newCategory){
        this.category.push(newCategory)
    }
}