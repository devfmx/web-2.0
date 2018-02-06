import React, {Component} from 'react';
import cinta from './negra.png';
import './style.css';


class CintaCard extends Component{


    render(){
        return(

                <div className="card cinta-card">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 ">
                            <a href="#" className="cinta-detalle float-right">Ver detalle</a>
                        </div>
                    </div>

                    <img className="card-img-top rounded-circle cinta-imagen" src={cinta} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title cinta-title">Cinta Negra</h5>
                            <h6 className="cinta-subtitle">Programa avanzado</h6>
                            <div className="row">
                                <div className="offset-cinta col-md-7 col-lg-7 text-center">
                                    <p className="cinta-text">Estarás listo para par cipar en comunidades TECH y aprender por tu cuenta</p>
                                </div>
                            </div>
                            <a href="#" className="btn btn-cinta">Insicribete</a>
                        </div>
                </div>

        );
    }

}


export default CintaCard