import React, {Component} from 'react';
import './style.css';




class Game extends  Component{

    render(){
        return(
            <div className="container" style={{paddingTop:"25px"}}>
                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <h4 className="sede-title">Jueguito</h4>
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
                        <Game/>
                    </div>
                    <div className="col-md-4 col-lg-4 col-cinta">
                        <Game/>
                    </div>
                    <div className="col-md-4 col-lg-4 col-cinta">
                        <Game/>
                    </div>
                    <div className="col-md-4 col-lg-4 col-cinta">
                        <Game/>
                    </div>
                    <div className="col-md-4 col-lg-4 col-cinta">
                        <Game/>
                    </div>
                    <div className="col-md-4 col-lg-4 col-cinta">
                        <Game/>
                    </div>

                </div>

            </div>
        )


    }




}

export default Game;