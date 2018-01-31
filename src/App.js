import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home';
import People from './components/people/People';
import {
  BrowserRouter as Router,
  Route,

} from 'react-router-dom'

class App extends Component {
  render() {
    return (
     
          <Router>
            <main>
              <Route exact path="/" component={Home}/>
              <Route path="/nosotros" component={People}/>
            </main>
          </Router>
  
    );
  }
}

export default App;
