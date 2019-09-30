import React, { Component } from 'react'
import HomeNav from './HomeNav'
import axios from 'axios'
class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { departments: [], selectedFile:null };
    }

    componentDidMount(){
        this.getDepartments()
    }
    
    onChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value 
            })
       
    }

    onUpload =(e)=>{
        this.setState({
            selectedFile:  e.target.files[0]
            })
    }

    getDepartments(){
        axios.get('http://localhost:4000/api/department').then(res=>{
            this.setState({
                departments: res.data
            })
        }).catch(error=>{
            
        })
    }

    handleSubmit = (e) => {
        e.persist();
        e.preventDefault();

        let data= new FormData();
          data.append("product_name", this.state.product_name)
          data.append("product_price", this.state.product_price)
          data.append("product_department", this.state.product_department)
          data.append("avatar", this.state.selectedFile)  
        
        axios.post('http://localhost:2000/api/product',data,{headers: {
            'Content-Type': 'multipart/form-data'
          }}).then(data=>{

        }).catch(error=>{
            console.log(error)
        })

        this.setState({
            product_name: '',
            product_price:'',
            product_department:'',
            selectedFile:''
        })
    }

    render() {
     const {departments} = this.state
     console.log(this.state)
     const departmentList = departments.length ? ( departments.map(departments =>{
        return(
            <option name = "product_department" onChange = {this.onChange} value={departments.department_name}>{departments.department_name}</option>
        )
        }) ): ( <div className="center">No departments yet</div>)
        return (
            
           <div class = "container">
               <HomeNav/>
                <form class = "m-5" enctype = "multipart/form-data"  onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <input type="text" class="form-control" value={this.state.product_name} name="product_name" onChange = {this.onChange} placeholder="Product Name"/>
                        
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" value={this.state.product_price} name="product_price" onChange = {this.onChange} placeholder="Product Price"/>   
                    </div>
                    <select name = "product_department" onChange = {this.onChange} value={departments.department_name} class="custom-select custom-select-lg mb-3">
                    <option selected>Select Product Department</option>
                    {departmentList}
                    </select>
                    <div class="custom-file form-group">
                        <input type="file" class="custom-file-input" name = "avatar"  onChange = {this.onUpload} id="files"/>
                        <label class="custom-file-label" for="customFile">Choose file</label>
                    </div>

                    <button type="submit" name = "submit" class="btn btn-primary">Submit</button>
                </form>
           </div> 
        );
    }
}

export default AddProduct;