import React, { Component } from 'react';
import './style.css';
import Discount from './discount/Discount'
import Content from './content-city/ContentCity'
import Test from './cinta-test/CintaTest';
import Direction from './direction/Direction';
import jQuery from "jquery";
import Game from "./game/Game";
window.jQuery = jQuery;


class City extends  Component {

    constructor(props){
        super(props)
        jQuery.noConflict(true)
        this.updateGame = this.updateGame.bind(this)
        this.state = {game:"none",cityId:0}
    }


    componentDidUpdate(){
        console.log("Update: ", this.state.game)
    }

    updateGame(cityId,game){
        console.log(game)
        console.log("Ciudad selecionada");
        this.setState({game:game});
        let id = "#"+cityId;
        console.log(id);
    }

    updateComponentGame(){
        if(this.state.game == "none"){
            return <div></div>
        }
        else{
            return <h4>Hola</h4>
        }
    }




    render(){
        return(
            <section className="bg-light text-center city-container" id={this.props.cityId}>
                <div className="container-fluid">
                    <Discount/>
                    <Content/>
                    <Test updateGame={this.updateGame} city={this.props.cityId}/>
                    {this.updateComponentGame()}
                    <Direction/>
                </div>
            </section>
        );
    }


}

export default  City;