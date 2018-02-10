import React, {Component} from 'react';
import './style.css';



class Direction extends Component{


    render(){
        return(
            <div className="card-direction">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <p> <span className="direction-span">Guadalajara:</span> Avenida Mariano Otero 408, Jardines del Sol, C.P. 45050, Zapopan, Jalisco.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <p> <span className="direction-span">Telefono:</span> 555.434.5778</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <a href="" className="direction-map"><i className="fa fa-map-marker"></i> &nbsp; Ver mapa</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <p className="direction-hours">Las clases se llevan a cabo en las oficinas de nuestros aliados de Google Zapopan. De las 19 a 22 hrs.</p>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2000px-Google_2015_logo.svg.png" alt="" className="logo-venue"/>
                    </div>
                </div>

            </div>

        );
    }


}export default Direction;