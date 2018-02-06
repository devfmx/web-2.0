import React, { Component } from 'react';
import './style.css';
import Discount from './discount/Discount'
import Content from './content-city/ContentCity'

class City extends  Component {

    constructor(props){
        super(props)

    }


    render(){
        return(
            <section className="bg-light text-center city-container" id={this.props.cityId}>
                <div className="container-fluid">
                    <Discount/>
                    <Content/>
                </div>
            </section>
        );
    }


}

export default  City;