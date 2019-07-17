import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js'
import Login from './Login.js'
import About from './About.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';



// componenent is for class componenets where as render is for functional componenets


ReactDOM.render((
  <Router>
    <React.Fragment> 
    <Route path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>
  ),
  document.getElementById('root')
);
