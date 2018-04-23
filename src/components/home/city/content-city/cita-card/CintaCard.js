import React, {Component} from 'react';
import cinta from './negra.png';
import './style.css';
import { Link } from 'react-router-dom'


class CintaCard extends Component{

    constructor(props){
        super(props);
    }


    render(){

        let level = "Programa para Principiantes";

        if(this.props.level == 0) {
            level = "Intro a data Science"
        }else if(this.props.level == 2 ){
            level = "Programa Intermedio"
        }else  if(this.props.level == 3){
            level = "Programa Avanzado"
        }


        return(

                <div className="card cinta-card">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 ">
                            <Link to={{ pathname: `cinta/${this.props.cityID}/${this.props.cinta}`}} className="cinta-detalle float-right">Ver detalle</Link>
                        </div>
                    </div>

                    <img className="card-img-top rounded-circle cinta-imagen" src={this.props.img} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title cinta-title">{this.props.fullName}</h5>
                            <h6 className="cinta-subtitle">
                                {level}
                            </h6>
                            <div className="row justify-content-center">
                                <div className=" col-md-7 col-lg-7 text-center">
                                    <p className="cinta-text">{this.props.text}</p>
                                </div>
                            </div>
                            <div className="row justify-content-center text-center">
                                <a href="https://pagos.devf.mx" className="btn btn-cinta">Inscríbete</a>
                            </div>

                        </div>
                </div>

        );
    }

}


export default CintaCard