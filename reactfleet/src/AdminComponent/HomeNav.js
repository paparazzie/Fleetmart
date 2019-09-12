import React, { Component } from 'react';
class HomeNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className = "Nav">
             <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="add_department">Add Department</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Add Product</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Logout</a>
                </li>
            </ul>

          </div>  
        );
    }
}

export default HomeNav;