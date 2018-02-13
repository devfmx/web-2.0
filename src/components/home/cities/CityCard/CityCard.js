import React, { Component } from 'react';
import prueba from './prueba.svg';
import './style.css';
class CityCard extends  Component {


    constructor(props){
        super(props)
        this.state = {isHovered:true};
        this.onSelect = this.onSelect.bind(this);
        this.onHovered = this.onHovered.bind(this);

    }

    onHovered(e){
            this.setState({
                isHovered:!this.state.isHovered
            });
            console.log(this.state.isHovered)
    }

    onSelect(e){
        this.props.changeCity(this.props.city,this.props.cityId);
    }
    //TODO on Selected add class
    render(){
        const bounce = !this.state.isHovered ? "bounce-devf" : "";
        return(

            <div className="card cardStyle" onClick={this.onSelect} onMouseEnter={this.onHovered} onMouseLeave={this.onHovered}>
                <img className="card-img-top card-photo" src={this.props.imagenUrl} alt="Card image cap"/>
                <div className="card-img-overlay">
                    <h4>{this.props.city.split(" ")[0]}</h4>
                </div>
                    <div className="card-body">
                        <p className="card-text">{this.props.city}</p>
                        <i
                            className={bounce+" arrow-devf fa fa-angle-down"}>


                        </i>
                    </div>
            </div>
        );
    }


}

export default CityCard;