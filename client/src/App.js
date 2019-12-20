import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch,  } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login";
import BubblePage from './components/BubblePage';

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute path="/protected" component={BubblePage} />
        <Route exact path="/" component={Login} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
