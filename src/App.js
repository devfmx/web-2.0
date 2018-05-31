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
import Becas from './components/Becas';
import Firebase from './components/Firebase';
import 'babel-polyfill'


import {
  BrowserRouter as Router,
  Route, Redirect,Switch

} from 'react-router-dom'




class App extends Component {

    constructor(){
        super()
        this.state = {
            cities:null
        }
    }

    componentWillMount(){
        const cities = Firebase.database().ref().child('cities');
        cities.on('value',content => {
            console.log(content.val(),"<-")

            this.setState({
                cities:content.val()
            });
        });

    }

    updateRoutes = () => {
        if(this.state.cities === null){
            return <div></div>
        }else {
            return Object.keys(this.state.cities).map((city) => {

                return <Route exact path={`/${this.state.cities[city].slug}`}
                              component={Home}/>

            });
        }
    };



  render() {




    return (

     
          <Router>
            <main>
                    <Route exact path="/"
                           component={Home}/>
                    {this.updateRoutes()}

                    <Route path="/nosotros" component={People}/>
                    <Route path="/roi" component={ROI}/>
                    <Route path="/metodologia" component={Metodology}/>
                    <Route path="/comunidad" component={Community}/>
                    <Route path="/faq" component={FAQ}/>
                    <Route path="/empresas" component={Corporative}/>
                    <Route path="/:city/:program" component={Cinta}/>
                    <Route path="/privacidad" component={Privacidad}/>
                    <Route path="/terminos" component={TYC}/>
                    <Route path='/becas2018' component={() => <Becas loc="https://devf.typeform.com/to/LpZqcv"/> } />
                    <Route path='/calendario' component={() => <Becas loc="https://goo.gl/q66pQu"/> } />
                    <Route path='/slackCDMX' component={() => <Becas loc="https://join.slack.com/t/devfb20cdmx/shared_invite/enQtMzYzMTQ2ODU4MDMzLTg0ODc2ZGRmMTc0YTFiZjhmNjBjMzIxNWFhNjM4MjlkNzA0MDFmZDU5YmU4MWZhYzY1ZDY4MWEyYWY5M2VhOGI"/> } />
                    <Route path='/slackGDL' component={() => <Becas loc="https://join.slack.com/t/devfb3gdl/shared_invite/enQtMzcyNDExMzk3MzM0LTY4NTA1Mjk4MGIyZWY1N2VlYTY2ZmNlODY5ZjRmYTdlMWI3NmUxMTcyZWM4NmYzMmY5ZDRhYjY2YmFhZmJkMGE"/> } />
                    <Route path='/slackHMO' component={() => <Becas loc="https://join.slack.com/t/devfb0hmo/shared_invite/enQtMzcxNDE3Njg1MTIzLTQwNGQ2YjhiZjljNTU5ZWQyY2JkZGM0YzU1YzkyMDZhOTQ0OTc3MmVmNTlkYzQxMWYzMzNjMjc2OWZiM2Y1ZGY"/> } />
                     <Route path='/feedback' component={() => <Becas loc="https://goo.gl/forms/UWrAR4vQTsBPLQrS2."/> } />
                    <Route path='/mentoria' component={() => <Becas loc="http://bit.ly/2oBI7Js"/> } />
                    <Route path='/ingles' component={() => <Becas loc="https://devf.typeform.com/to/umLpuE"/> } />

            </main>
          </Router>
  
    );
  }
}

export default App;
