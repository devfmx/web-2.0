import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Contact from '../contactbar/ContactBar';
import Header from '../othersheader/OtherHead';
import Academic from './academic/AcademicTeam';
import Done from './done/DoneTeam';
import Carousel from '../home/carousel/Carousel';
import Community from '../home/testimonials/Testimonials';
import Companies from'../home/companies/Companies';
import Footer from '../home/footer/Footer';

class People extends Component {
  render() {
    return (
        <div>
          <Contact/>
          <Navbar/>
          <Header title={"SOMOS"} text={["Nuestro equipo se integra de líderes y expertos que están cambiando la cara de " +
          "México desde la trinchera tecnológica. Todos tenemos una pasión en común: el empoderamiento " +
          "de las personas a través de la educación.", <br/>, <br/>,"Conoce al equipo detrás de  Dev.f:"]
          }/>

          <div className="container-fluid">
            <Academic/>
            <Done/>
          </div>
            <Carousel/>
            <Community/>
            <Companies/>
            <Footer/>

        </div>
    );
  }
}

export default People;
