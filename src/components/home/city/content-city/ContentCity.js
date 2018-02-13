import React, {Component} from 'react';
import './style.css';
import CardCinta  from './cita-card/CintaCard'




class ContentCity extends  Component{
    constructor(props){
        super(props)
    }


    render(){
        let cintas = Object.keys(this.props.city.cintas).map((key,i) =>
            <div className="col-md-4 col-lg-4 col-cinta">
                <CardCinta
                    img={this.props.city.cintas[key].img}
                    level={this.props.city.cintas[key].level}
                    fullName={this.props.city.cintas[key].name}
                    text={this.props.city.cintas[key].text}
                />
            </div>
        )


        return(
            <div className="container" style={{paddingTop:"25px"}}>
                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <h4 className="sede-title">Programas en {this.props.city.name}</h4>
                    </div>

                </div>
                <div className="row text-center">
                    <div className="col-md-12 col-lg-12 text-center">
                        <h5 className="sede-hours">Iniciamos el <span>{this.props.city.start}</span> a las {this.props.city.hour} hrs.</h5>
                    </div>

                </div>
                <div className="row text-center">
                     <div className="col-md-12 col-lg-12 text-center sede-prices">
                         <p>Todos nuestros cursos cuestan <span>${this.props.city.price}</span> MXN ó <span>$999</span> pagando a 12 meses sin intereses</p>
                     </div>
                </div>
                <div className="row justify-content-center">
                    {cintas}

                </div>

            </div>
        )


    }




}

export default ContentCity;