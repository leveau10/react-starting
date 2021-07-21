import React, { Component } from 'react';
import "./style.css"

class CategoryList extends Component {
    state = {  }
    render() { 
        return (
            <section className="category-list"> 
                <ul className="category-list_list">
                    <li className="category-list_item">Category</li>
                    <li className="category-list_item">Category</li>
                    <li className="category-list_item">Category</li>
                    <li className="category-list_item">Category</li>
                </ul>
                <input type="text" className="category-list_input" />
            </section>
         );
    }
}
 
export default CategoryList;