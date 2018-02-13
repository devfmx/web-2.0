import React, { Component } from 'react';
import './style.css';



class Discount extends  Component {

    constructor(props){
        super(props)

    }


    render(){
        return(
            <div className="row discount-bar text-center">
                <p>Descuento Early bird <span className="discount-card">{this.props.dvalue}</span> utlizando el código <span className="discount-card">{this.props.dcode}</span></p>
            </div>
        );
    }


}

export default  Discount;