import React, { Component } from 'react';
import prueba from './prueba.svg';
import './style.css';
import scrollToComponent from 'react-scroll-to-component';



class CityCard extends  Component {


    constructor(props){
        super(props)
        this.state = {isHovered:true,div:"cdmx-roma"};
        this.onSelect = this.onSelect.bind(this);
        this.onHovered = this.onHovered.bind(this);
    }


    componentDidMount(){
        document.getElementById(this.state.div).className += " active";

    }

    onHovered(e){
            this.setState({
                isHovered:!this.state.isHovered
            });
            console.log(this.state.isHovered)
    }

    onSelect(id){
        console.log(id);
        document.getElementById(id).className += " active";
        console.log("------------------------> en try")
        console.log(this.state.div);
        console.log("-------------------->saliendo del try")
        console.log(document.getElementById(this.state.div));
        document.getElementById(this.state.div).className = document.getElementById(this.state.div).className.replace
                ( /(?:^|\s)active(?!\S)/g , '' );
        this.setState({div:id});

        console.log("----------------> en expecion")


        this.props.changeCity(this.props.city,this.props.cityId,this.props.cityObject);
        setTimeout(function() { console.log(this.refs.cinta) }.bind(this), 1500);
    }
    //TODO on Selected add class
    render(){
        const bounce = !this.state.isHovered ? "bounce-devf" : "";
        return(

            <div className="card cardStyle" onClick={(e) => this.onSelect(this.props.idDiv)} onMouseEnter={this.onHovered} onMouseLeave={this.onHovered} id={this.props.idDiv}>
                <img className="card-img-top card-photo" src={this.props.imagenUrl} alt="Card image cap"/>
                <div className="card-img-overlay">
                    <h4>{this.props.city.split(" ")[0]}</h4>
                </div>
                    <div className="card-body">
                        <p className="card-text">{this.props.city}</p>
                        <i
                            className={"animated infinite bounce arrow-devf fa fa-angle-down"}>


                        </i>
                    </div>
            </div>
        );
    }


}

export default CityCard;