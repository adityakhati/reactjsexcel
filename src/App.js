import './App.css';
import React, { Component } from 'react';
//import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Users from './components/Users';
class App extends Component {
  render() {
  return (

    // <Router >
    //   <Route path={"/"} component={Root}>
    //     <Route path={"user"} component={Users}/>
    //     <Route path={"home"} component={Home}/>
    //     <div><h1>Aditya</h1>
    //     </div>

    //   </Route>
    // </Router>
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
      <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
  }
}

export default App;
