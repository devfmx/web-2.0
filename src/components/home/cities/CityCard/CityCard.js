import React, { Component } from 'react';
import prueba from './prueba.svg';
import './style.css';
import scrollToComponent from 'react-scroll-to-component';



class CityCard extends  Component {


    constructor(props){
        super(props);
        this.state = {isHovered:true,div:false};
        this.onSelect = this.onSelect.bind(this);
        this.onHovered = this.onHovered.bind(this);
    }


    componentWillMount(){

        this.setState(
            {div:this.props.idDiv === this.props.selDiv}
        )
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.selDiv !== this.props.selDiv){
            this.setState(
                {div:this.props.idDiv === nextProps.selDiv}
            )
        }


    }




    onHovered(e){
            this.setState({
                isHovered:!this.state.isHovered
            });
    }

    onSelect = (id) =>{

        this.props.div(id);
        this.props.changeCity(this.props.city,this.props.cityId,this.props.cityObject);

    };
    //TODO on Selected add class
    render(){
        const card = this.state.div ? "card cardStyle active" : "card cardStyle";
        return(
            <div className={card} onClick={(e) => this.onSelect(this.props.idDiv)} onMouseEnter={this.onHovered} onMouseLeave={this.onHovered} id={this.props.idDiv}>
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