import React, {Component} from 'react';
import './style.css';


class CardTestimonial extends Component{

    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className="card card-testimonial" >
                <img className="card-img-top" src={this.props.image} alt="Card image"/>
                    <div className="card-img-overlay image-overlay">
                        <img src={this.props.logo} alt="" className="image-logo-testimonial" align="right" style={{width:this.props.width}}/>
                    </div>
            </div>

        );

    }


};

export default CardTestimonial;