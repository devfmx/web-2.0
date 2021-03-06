import React, {Component} from 'react';
import './style.css';
import blanca from './pathAssest/programa-cinta-blanca.png';
import roja from './pathAssest/programa-cinta-roja.png';
import negra from './pathAssest/programa-cinta-negra.png';

class Path extends Component {
    render() {
        return (
            <div className="path-sec ">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-9 text-center">
                        <h3>Aprende a programar desde cero <strong>(Cinta Blanca)</strong>, únete a un programa más avanzado <strong>(Cinta Roja o Negra)</strong>, o
                            recorre todo el camino <strong>(desde Cinta Blanca hasta Cinta Negra)</strong> en <strong>Dev.f</strong> con nuestros diferentes cursos de programación. </h3>
                    </div>
                </div>

                <div className="row justify-content-center mt-4">
                    <div className="col-md-2 col-lg-3 text-center">
                        <img src={blanca} className="rounded-circle" alt=""/>
                    </div>
                    <div className="col-md-2 col-lg-3 text-center">
                        <img src={roja} className="rounded-circle" alt=""/>
                    </div>
                    <div className="col-md-2 col-lg-3 text-center">
                        <img src={negra} className="rounded-circle" alt=""/>
                    </div>
                </div>

                <div className="row mt-5 mb-5" >
                    <div className="col-md-12 col-lg-12">
                        <hr/>
                    </div>
                    <div className="col-md-12 col-lg-12 text-center mt-3 ">
                        <p style={{color:"#000000",fontSize:"20px"}}>
                            Al cursar los tres programas obtendrás  <strong>10%</strong> de descuento en Cinta Roja y  <strong>20% </strong>
                             en Cinta Negra.</p>
                    </div>
                </div>
                <div className="row mt-4 justify-content-center pb-5" style={{backgroundColor:"#F9F9F9"}}>
                    <div className="col-md-12 col-lg-12">
                        <div className="rounded-circle path-circle mx-auto text-center " >
                            <span><i className="fa fa-dollar"></i></span>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-12 text-center">
                        <p style={{color:"#000000",fontSize:"20px"}}>
                            Esto representa una inversión total de <strong>$40,500 pesos. </strong>
                        </p>
                    </div>
                    <div className="col-md-8 col-lg-8 text-center">
                        <p style={{color:"#A69DA7",fontSize:"16px"}}>
                            (Esto equivale a menos de un solo semestre de las principales universidades privadas).
                            Además puedes diferirlo a meses sin intereses.
                        </p>
                    </div>
                </div>



            </div>

        );
    }
}



export default Path;
