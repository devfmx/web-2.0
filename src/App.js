import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import People from './components/people/People';
import ROI from './components/ROI/ROI';
import Metodology from './components/methodology/Methodology';

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
                <Route path="/roi" component={ROI}/>
                <Route path="/metodologia" component={Metodology}/>
            </main>
          </Router>
  
    );
  }
}

export default App;
