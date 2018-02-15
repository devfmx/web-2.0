import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import People from './components/people/People';
import ROI from './components/ROI/ROI';
import Metodology from './components/methodology/Methodology';
import Community from './components/community/Community';
import FAQ from './components/FAQ/FAQ';
import Corporative from './components/corporative/Corporative';
import Cinta from './components/cinta/Cinta';
import { ScrollContext } from 'react-router-scroll-4';



import {
  BrowserRouter as Router,
  Route,

} from 'react-router-dom'




class App extends Component {
  render() {

    return (

     
          <Router>
            <ScrollContext>
            <main>
                <Route exact path="/" component={Home}/>
                <Route path="/nosotros" component={People}/>
                <Route path="/roi" component={ROI}/>
                <Route path="/metodologia" component={Metodology}/>
                <Route path="/comunidad" component={Community}/>
                <Route path="/faq" component={FAQ}/>
                <Route path="/corporativos" component={Corporative}/>
                <Route path="/cinta/:cityID/:cinta" component={Cinta}/>
            </main>
            </ScrollContext>
          </Router>
  
    );
  }
}

export default App;
