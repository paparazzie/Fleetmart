import React, { Component } from 'react';
import HomeNav from './HomeNav'
import axios from 'axios'
class ViewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { product:[] };
    }

    componentDidMount(){
        this.getProducts()
    }

    getProducts(){
        axios.get('http://localhost:2000/api/product').then(res=>{
           this.setState({
               product:res.data
           })
        }).catch(error=>[
            console.log(error)
        ])
    }
   
    render() {
        const {product} = this.state;
        console.log(this.state)
        const productList = product.length ? ( product.map(products =>{
            return(
                <div class = "card-deck p-4">
                    <div class="card">
                        <img src={ products.avatar}  class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">{products.product_name}</h5>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">{products.product_price}</small>
                        </div>
                    </div>
                </div>
                
            )
            }) ): ( <div className="center">No Products yet</div>)
          
        return (
        <div class = "container">
            <HomeNav/>
            <div class="card-deck p-5">
               
                {productList}
                </div>
          </div>  
        );
    }
}

export default ViewProduct;