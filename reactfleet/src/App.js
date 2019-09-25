import React from 'react';
import { BrowserRouter,Switch} from 'react-router-dom'
import { Route} from 'react-router';
import AdminHome from './AdminComponent/Home';
import AddDepartment from './AdminComponent/AddDepartment';
import ViewDepartment from './AdminComponent/ViewDepartment';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Switch>
       <Route exact path ="/" component = {AdminHome}/>
       <Route  path = "/add_department" component = {AddDepartment}/>
       <Route  path = "/view_department" component = {ViewDepartment}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
