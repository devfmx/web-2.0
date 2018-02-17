import React, { Component } from 'react';
import './style.css';



class Discount extends  Component {

    constructor(props){
        super(props)

    }


    render(){
        return(
            <div className="row discount-bar text-center">
                <div className="col-md-12 col-lg-12">
                    <p>Aprovecha el descuento <span className="discount-card">Early Bird</span> hasta <span className="discount-card">Domingo 18 de Marzo</span> </p>
                </div>
            </div>
        );
    }


}

export default  Discount;