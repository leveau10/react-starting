import React, { Component } from "react";

import "./style.css";

class CategoryList extends Component {

    constructor(){
      super();
      this.state = {category:[]}
      this._newCategory = this._newCategory.bind(this)
    }

  componentDidMount(){
    this.props.category.subscribe(this._newCategory);
  }

  componentWillUnmount(){
    this.props.category.unsubscribe(this._newCategory);
  }

  _newCategory(category){
    this.setState({...this.state, category})
  }

  _handlerEventInput(event) {
    if (event.key === "Enter") {
      event.stopPropagation();
      let categoryValue = event.target.value;
      this.props.createCategory(categoryValue);
    }
  }

  render() {
    return (
      <section className="category-list">
        <ul className="category-list_list">
          {this.state.category.map((category, index) => {
            return (
              <li className="category-list_item" key={index}>
                {category}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="category-list_input"
          placeholder="add category"
          onKeyUp={this._handlerEventInput.bind(this)}
        />
      </section>
    );
  }
}

export default CategoryList;
