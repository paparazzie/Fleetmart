import React, { Component } from 'react';
import HomeNav from './HomeNav';
import axios from 'axios';
class ViewDepartment extends Component {

    constructor(props) {
        super(props);
        this.state = { departments : [ ] };
    }
    componentDidMount(){

        this.getDepartments()
    
      }
    
      getDepartments(){
        axios.get('http://localhost:4000/api/department',)
        .then(res=>{
           this.setState({
               departments: res.data
           })
        }).catch(e=>{
            
        })
      }


    render() {
        const {departments} = this.state;
        console.log(this.state)
        const departmentList = departments.length ? ( departments.map(departments =>{
            return(
                <li key={departments._id} class="list-group-item"> {departments.department_name}</li>
            )
            }) ): ( <div className="center">No departments yet</div>)
          
        return (
            <div class = "container">
                <HomeNav/>
                <ul class="list-group p-5">
                    {departmentList}
                </ul>

            </div>
        );
    }
}

export default ViewDepartment;