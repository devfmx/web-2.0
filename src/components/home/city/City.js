import React, { Component } from 'react';
import './style.css';
import Discount from './discount/Discount'
import Content from './content-city/ContentCity'
import Test from './cinta-test/CintaTest';
import Direction from './direction/Direction';

class City extends  Component {

    constructor(props){
        super(props)

    }


    render(){
        return(
            <section className="bg-light text-center city-container" id={this.props.cityId} val={this.props.cityO.name}>
                <div className="container-fluid">
                    <Discount dvalue={this.props.cityO.discount.value} dcode={this.props.cityO.discount.coupon}/>
                    <Content city={this.props.cityO} ref="cinta"/>
                    <Test/>
                    <Direction loc={this.props.cityO.Location}/>
                </div>
            </section>
        );
    }


}

export default  City;