import React, { Component } from 'react';
import './style.css';
import Discount from './discount/Discount'


class City extends  Component {

    constructor(props){
        super(props)

    }


    render(){
        return(
            <section className="bg-light text-center city-container" id={this.props.cityId}>
                <div className="container-fluid">
                    <Discount/>
                </div>
            </section>
        );
    }


}

export default  City;