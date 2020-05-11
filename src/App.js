import React from 'react';

import  './App.css';
import { Switch, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dasboard/Dashboard';
import Admin from './Components/Admin/Admin';

const App = () => {
  return (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/admin" component={Admin} />
        <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
