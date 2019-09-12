import React from 'react';
import { BrowserRouter,Switch,Link} from 'react-router-dom'
import { Router, Route} from 'react-router';
import AdminHome from './AdminComponent/Home';
import AddDepartment from './AdminComponent/AddDepartment';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Switch>
       <Route exact path ="/" component = {AdminHome}/>
       <Route  path = "/add_department" component = {AddDepartment}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
