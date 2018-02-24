import React, { Component } from 'react';
import './style.css';
import Discount from './discount/Discount'
import Content from './content-city/ContentCity'
import Test from './cinta-test/CintaTest';
import Direction from './direction/Direction';
import Game from './game/Game';


class City extends  Component {

    constructor(props){
        super(props);

        this.state = {
          gameActive:false,
        };

        this.activateGame = this.activateGame.bind(this);

    }


    activateGame(){
        this.setState({gameActive:!this.state.gameActive});
    }


    render(){
        return(
            <section className="text-center city-container" id={this.props.cityId} val={this.props.cityO.name}>
                <div className="container-fluid">
                    <Discount dvalue={this.props.cityO.discount.value} dcode={this.props.cityO.discount.coupon}/>
                    <Content city={this.props.cityO} ref="cinta"/>
                    <Test  gameActive={this.activateGame}/>
                    {(this.state.gameActive)? <Game/> : <div></div>}
                    <Direction loc={this.props.cityO.Location}/>
                </div>
            </section>
        );
    }


}

export default  City;