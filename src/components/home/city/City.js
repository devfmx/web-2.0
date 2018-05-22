import React, { Component } from 'react';
import './style.css';
import Discount from './discount/Discount'
import Content from './content-city/ContentCity'
import Test from './cinta-test/CintaTest';
import Direction from './direction/Direction';

class City extends  Component {

    constructor(props){
        super(props);
        this.state = {
            city:props.cityO
        }

    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps,"<-------city next")
        if(nextProps.cityO.id !== this.state.city.id){
            this.setState({
                city:nextProps.cityO
            });

            this.forceUpdate();
        }

    }

    render(){
        return(
            <section className="text-center city-container" id={this.props.cityId} val={this.props.cityO.name}>
                <div className="container-fluid">
                    {/*<Discount dvalue={this.props.cityO.discount.value} dcode={this.props.cityO.discount.coupon}/> */}
                    <Content city={this.state.city} ref="cinta"/>
                    <Direction loc={this.state.city.Location}/>
                </div>
            </section>
        );
    }


}

export default  City;