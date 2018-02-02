import React, { Component } from 'react';
import prueba from './prueba.svg';
import './style.css';
class CityCard extends  Component {


    constructor(props){
        super(props)
        this.onSelect = this.onSelect.bind(this)
    }


    onSelect(e){
        alert("Selecionaste:"+this.props.city)
    }

    render(){
        return(
            <div className="card cardStyle" onClick={this.onSelect}>
                <img className="card-img-top card-photo" src={prueba} alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text">{this.props.city}</p>
                    </div>
            </div>
        );
    }


}

export default CityCard;