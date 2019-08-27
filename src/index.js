import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./home"
import About from "./about"
import Login from "./login"





ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </React.Fragment>
  </Router>
),
  document.getElementById('root')
);
