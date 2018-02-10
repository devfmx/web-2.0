import React, {Component} from 'react';
import './style.css';
import comunidad  from './comunidad-01.png'


class CardTestimonial extends Component{

    render(){
        const image = "https://vignette.wikia.nocookie.net/logopedia/images/9/9d/Google_logo_white_2015.svg/revision/latest?cb=20150901202125"
        return(
            <div className="card card-testimonial" >
                <img className="card-img-top" src={comunidad} alt="Card image"/>
                    <div className="card-img-overlay image-overlay">
                        <img src={image} alt="" className="image-logo-testimonial" align="right"/>
                    </div>
            </div>

        );

    }


};

export default CardTestimonial;