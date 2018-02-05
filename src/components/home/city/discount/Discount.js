import React, { Component } from 'react';
import './style.css';



class Discount extends  Component {

    constructor(props){
        super(props)

    }


    render(){
        return(
            <div className="row discount-bar text-center">
                <p>Descuento del 10 %</p>
            </div>
        );
    }


}

export default  Discount;