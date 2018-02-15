import React, {Component} from 'react';
import './style.css';



class Direction extends Component{

    constructor(props){
        super(props)
    }



    render(){
        return(
            <div className="card-direction pb-4">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <p> <span className="direction-span">{this.props.loc.city}: </span>{this.props.loc.dir}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <a href={this.props.loc.map} target="_blank" className="direction-map"><i className="fa fa-map-marker"></i> &nbsp; Ver mapa</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <p className="direction-hours">Las clases se llevan a cabo en las oficinas de nuestros aliados de {this.props.loc.venue}. De las 19 a 22 hrs.</p>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <img src={this.props.loc.logo} alt="" className="logo-venue"/>
                    </div>
                </div>

            </div>

        );
    }


}export default Direction;