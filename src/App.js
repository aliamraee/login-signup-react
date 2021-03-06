import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="container">
            <Switch>
              <Route exact path="/" component={SignUp} />
              <Route exact path="/SignIn" component={SignIn} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
