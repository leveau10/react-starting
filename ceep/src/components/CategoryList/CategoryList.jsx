import React, { Component } from 'react';

import "./style.css"

class CategoryList extends Component {

    _handlerEventInput(event){
        if(event.key === "Enter"){
            event.stopPropagation();
            let categoryValue = event.target.value;
            this.props.createCategory(categoryValue);
        }
    }

    render() { 
        return (
            <section className="category-list"> 
                <ul className="category-list_list">
                    {this.props.category.map((category, index) => {
                        return(
                            <li className="category-list_item" key={index}>

                                {category}

                            </li>
                        )

                    })}
                </ul>
                <input type="text" 
                className="category-list_input" 
                placeholder="add category"
                onKeyUp={this._handlerEventInput.bind(this)}/>
            </section>
         );
    }
}
 
export default CategoryList;