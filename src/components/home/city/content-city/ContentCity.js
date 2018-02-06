import React, {Component} from 'react';
import './style.css';
import CardCinta  from './cita-card/CintaCard'




class ContentCity extends  Component{



    render(){

        return(
            <div className="container" style={{paddingTop:"25px"}}>
                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <h4 className="sede-title">Programas en Roma-Condesa</h4>
                    </div>

                </div>
                <div className="row text-center">
                    <div className="col-md-12 col-lg-12 text-center">
                        <h5 className="sede-hours">Iniciamos el <span>lunes 14 de febrero </span>a las 19:00 hrs.</h5>
                    </div>

                </div>
                <div className="row text-center">
                     <div className="col-md-12 col-lg-12 text-center sede-prices">
                         <p>Todos nuestros cursos cuestan <span>$11,999</span> MXN ó <span>$999</span> pagando a 12 meses sin intereses</p>
                     </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-cinta">
                        <CardCinta/>
                    </div>
                    <div className="col-md-4 col-lg-4 col-cinta">
                        <CardCinta/>
                    </div>
                    <div className="col-md-4 col-lg-4 col-cinta">
                        <CardCinta/>
                    </div>
                    <div className="col-md-4 col-lg-4 col-cinta">
                        <CardCinta/>
                    </div>
                    <div className="col-md-4 col-lg-4 col-cinta">
                        <CardCinta/>
                    </div>
                    <div className="col-md-4 col-lg-4 col-cinta">
                        <CardCinta/>
                    </div>

                </div>

            </div>
        )


    }




}

export default ContentCity;