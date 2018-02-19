import React, { Component } from 'react';
import CityCard from './CityCard/CityCard';
import './styles.css';
import Firebase from '../../Firebase';

class Cities extends  Component {

    constructor(props){
        super(props);
        this.state = {cities:[],prueba:"Prueba"}
    }

    componentDidMount(){
        const cities = Firebase.database().ref().child('cities');
        cities.on('value',content => {
            console.log(content.val())
            this.setState({
                cities: content.val(),
            });
        });
    }


    render(){
            if(!this.state.cities){
                console.log(this.state.prueba)
                return null;
            }

            const cities = Object.keys(this.state.cities).map((key,i) =>

                <CityCard city={this.state.cities[key].name}
                          changeCity={this.props.changeCity}
                          cityId={i}
                          cityObject={this.state.cities[key]}
                          imagenUrl={this.state.cities[key].img}
                />
            );

            console.log(cities)



         return(
             <section className="bg-light-devf text-center">
                 <div className="container-fluid container-cities">
                     <div className="row">
                         <div className="col-md-12 col-lg-12 text-center">
                             <h2 className="sedes-title">Selecciona tu  Escuela</h2>

                             <p>Todos nuestros cursos son presenciales. Nos encontramos en las siguientes ciudades:</p>
                         </div>
                     </div>
                     <div className="row content-justify-center">
                         <div className="col-md-12 col-lg-12 text-center">

                             {cities}
                         </div>

                     </div>
                 </div>
             </section>
         );
    }


}

export  default  Cities;