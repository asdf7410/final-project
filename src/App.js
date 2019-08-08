import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Profile from './Pages/Profile.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Profile}/>
        </div>
      </Router>
    );
  }
}

export default App;