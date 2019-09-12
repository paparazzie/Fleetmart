import React, { Component } from 'react'
import HomeNav from './HomeNav'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }


    render() {
        return (
          <div className = "container">
             <HomeNav/>
             <form class = "p-5">
                <div class="form-group">
                    <input type="text" class="form-control" id="product_name" placeholder="Product Name"/>
                    
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="product_price" placeholder="Product Price"/>
                </div>
                <div class = "form-row align-items-center form-group">
                    <div class="col-auto my-1">
                        <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                        <select class="custom-select mr-sm-2 " id="product_department">
                            <option selected>Choose Department</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>

                <div class="custom-file form-group">
                    <input type="file" class="custom-file-input" id="product_photo"/>
                    <label class="custom-file-label" for="customFile">Choose file</label>
                </div>
                

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>    
          </div>  
        );
    }
}

export default Home;