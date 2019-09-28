import React, { Component } from 'react';
import HomeNav from './HomeNav'
import axios from 'axios';
class AddDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    onChange = (e)=>{
        this.setState({[e.target.name]: e.target.value })
    }
    
        handleSubmit = (e) => {
        e.persist();
        e.preventDefault();
         
        
        
        axios.post('http://localhost:4000/api/department ',{
            "department_name":this.state.department_name
            },{headers: {
                        "Content-Type": "application/json",  
                    }})
          .then(res=>{
          if(res.status === 200){
            }else{
              if(res.status === 403 || res.status === 401){  
                console.log(res)
              }
          }      
          },err=>{
          console.log(err)
          })

        this.setState({
            department_name : ''
        })
       
      }


    render() {
        console.log(this.state)
        return (

            <div class = "container">
                <HomeNav/>
                <form class = "m-5" onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <input type="text" class="form-control" value={this.state.department_name} name="department_name" onChange = {this.onChange} placeholder="Department Name"/>                     
                    </div>
                    <button type="submit" name = "submit" class="btn btn-primary">Submit</button>
                </form>
                 
            </div>
           
        );
    }
}

export default AddDepartment;