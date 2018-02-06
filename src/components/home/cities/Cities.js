import React, { Component } from 'react';
import CityCard from './CityCard/CityCard';
import './styles.css'
class Cities extends  Component {

    constructor(props){
        super(props)

    }


    render(){
         return(
             <section className="bg-light-devf text-center">
                 <div className="container-fluid container-cities">
                     <div className="row">
                         <div className="col-md-9 col-lg-12">
                             <h2 className="sedes-title">Seleciona tu  Escuela</h2>

                             <p>Nuestros cursos son presenciales en las siguientes ciudades:</p>
                         </div>
                     </div>
                     <div className="row">
                         <div className="col-md-12 col-lg-12">
                             <CityCard city={"CDMX Roma/condesa"}
                                       changeCity={this.props.changeCity}
                                       cityId={1}
                                       imagenUrl={"http://cdn1.buuteeq.com/upload/2051945/la-condesa-mexico-city.jpg.1340x450_default.jpg"}
                             />
                             <CityCard city={"CDMX Santa Fe"}
                                       changeCity={this.props.changeCity}
                                       cityId={2}
                             imagenUrl={"http://blog.nationalgeographic.org/wp-content/uploads/2015/05/1X5A0837.jpg"}
                             />
                             <CityCard city={"Guadalajara"}
                                       changeCity={this.props.changeCity}
                                       cityId={3}
                                       imagenUrl={"http://www.demendoza.com.mx/site/assets/slides/index/slide_2.jpg"}
                             />
                         </div>

                     </div>
                 </div>
             </section>
         );
    }


}

export  default  Cities;