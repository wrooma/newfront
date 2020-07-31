import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import Plan from './Plan.js';
import AddPlan from './AddPlan.js';
import DeletePlan from './DeletePlan.js';
import MainPage from './MainPage.js';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from './context/auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AuthContext.Provider value={true}>
      <Router>
        <div className="App">
          <Nav />  
          <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <PrivateRoute path="/plan" component={Plan}/>
            <PrivateRoute path="/addplan" component={AddPlan}/>
            <PrivateRoute path="/deleteplan" component={DeletePlan}/>
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
