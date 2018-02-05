import React, { Component } from 'react';
import CityCard from './CityCard/CityCard';
import './styles.css'
class Cities extends  Component {

    constructor(props){
        super(props)

    }


    render(){
         return(
             <section className="bg-light text-center">
                 <div className="container-fluid container-cities">
                     <div className="row">
                         <div className="col-md-9 col-lg-12">
                             <h2>Seleciona tu  Escuela</h2>

                             <p>Nuestros cursos son presenciales en las siguientes ciudades</p>
                         </div>
                     </div>
                     <div className="row">
                         <div className="col-md-12 col-lg-12">
                             <CityCard city={"CDMX Roma/condesa"} changeCity={this.props.changeCity} cityId={1}/>
                             <CityCard city={"CDMX Santa Fe"} changeCity={this.props.changeCity} cityId={2}/>
                             <CityCard city={"Guadalajara"} changeCity={this.props.changeCity} cityId={3}/>
                         </div>

                     </div>
                 </div>
             </section>
         );
    }


}

export  default  Cities;