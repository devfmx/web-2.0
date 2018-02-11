import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Contact from '../contactbar/ContactBar';
import Header from '../othersheader/OtherHead';
import Academic from './academic/AcademicTeam';
import Done from './done/DoneTeam';

class People extends Component {
  render() {
    return (
        <div>
          <Contact/>
          <Navbar/>
          <Header title={"SOMOS"} text={"Nuestro gran equípo se integra de líderes y expertos que están " +
          "cambiando la cara de México desde la trinchera tecnológica, todos tenemos una pasión en común. El " +
          "Empoderamiento de las personas. Aquí un poquito del pasado de cada quien antes de haberse integrado a Dev.F."}/>

          <div className="container-fluid">
            <Academic/>
            <Done/>
          </div>

        </div>
    );
  }
}

export default People;
