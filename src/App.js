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
import Privacidad from './components/privacidad/Privacidad';
import TYC from './components/tyc/TYC';


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
                <Route path="/comunidad" component={Community}/>
                <Route path="/faq" component={FAQ}/>
                <Route path="/empresas" component={Corporative}/>
                <Route path="/cinta/:city/:program" component={Cinta}/>
                <Route path="/privacidad" component={Privacidad}/>
                <Route path="/terminos" component={TYC}/>
                <Route path='/becas2018' component={() => window.location = 'https://devf.typeform.com/to/LpZqcv'}/>


            </main>
          </Router>
  
    );
  }
}

export default App;
