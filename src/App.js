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
import Privacidad from './components/privacidad/Privacidad';
import TYC from './components/tyc/TYC';
import Becas from './components/Becas';


import {
  BrowserRouter as Router,
  Route, Redirect

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
                <Route path="/empresas" component={Corporative}/>
                <Route path="/cinta/:city/:program" component={Cinta}/>
                <Route path="/privacidad" component={Privacidad}/>
                <Route path="/terminos" component={TYC}/>
                <Route path='/becas2018' component={() => <Becas loc="https://devf.typeform.com/to/vnXhG8"/> } />
                <Route path='/calendario' component={() => <Becas loc="https://goo.gl/q66pQu"/> } />
                <Route path='/slackCDMX' component={() => <Becas loc="https://join.slack.com/t/devfb20cdmx/shared_invite/enQtMzYzMTQ2ODU4MDMzLTg0ODc2ZGRmMTc0YTFiZjhmNjBjMzIxNWFhNjM4MjlkNzA0MDFmZDU5YmU4MWZhYzY1ZDY4MWEyYWY5M2VhOGI"/> } />
                <Route path='/slackGDL' component={() => <Becas loc="https://join.slack.com/t/devfb2gdl/shared_invite/enQtMzQzODk5Njc0MjU4LWNhOTBkMzA3MmIyNzMwNmNiMTlhNzA4NDVhYjkzNTJjMGFjNTJkYzY4MjQ3N2JiMjc0Yjg0NmU4ZjMzMDMyM2Y"/> } />
                <Route path='/feedback' component={() => <Becas loc="https://goo.gl/forms/UWrAR4vQTsBPLQrS2."/> } />
                <Route path='/mentoria' component={() => <Becas loc="http://bit.ly/2oBI7Js"/> } />
                <Route path='/registro' component={() => <Becas loc="https://docs.google.com/forms/d/e/1FAIpQLSer00gd4UP8Q4RfSYNqp-ObZ2Ob-AgE-xpNZ-8HCbcePW_k_A/viewform"/> } />







            </main>
            </ScrollContext>
          </Router>
  
    );
  }
}

export default App;
