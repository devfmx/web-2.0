import React, { Component } from 'react';
import CityCard from './CityCard/CityCard';

class Cities extends  Component {

    constructor(){
        super()

    }


    render(){
         return(
             <section className="bg-light text-center">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-9 col-lg-12">
                             <h2>Seleciona tu  Escuela</h2>

                             <p>Nuestros cursos son presenciales en las siguientes ciudades</p>
                         </div>
                     </div>
                     <div className="row">
                         <div className="col-md-12 col-lg-12">
                             <CityCard city={"CDMX Roma/condesa"} />
                             <CityCard city={"CDMX Santa Fe"} />
                             <CityCard city={"Guadalajara"} />
                         </div>

                     </div>
                 </div>
             </section>
         );
    }


}

export  default  Cities;