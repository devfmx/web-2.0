import React, {Component} from 'react';
import "./style.css";
import CardTestimonial from "./card-testimonial/CardTestimonial";



class Testimonials extends Component{



    render(){
        return(
            <div className="div-testimonials">
                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <h3 className="testimonials-title">Comunidad</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="offset-lg-1 offset-md-1 col-md-3 col-lg-3 text-center">
                        <CardTestimonial/>
                        <h5 className="name-testimonial">Jimena Varela Buenfin</h5>
                        <h6 className="job-testimonial">Co-Founder en Monsters INC</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 text-center">
                        <CardTestimonial/>
                        <h5 className="name-testimonial ">Jimena Varela Buenfin</h5>
                        <h6 className="job-testimonial">Co-Founder en Monsters INC</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 text-center">
                        <CardTestimonial/>
                        <h5 className="name-testimonial">Jimena Varela Buenfin</h5>
                        <h6 className="job-testimonial">Co-Founder en Monsters INC</h6>
                    </div>

                </div>
                
                <div className="row" style={{marginTop:"2rem"}}>
                    <div className="col-md-12 col-lg-12 text-center">
                        <a href="" className="btn btn-testimonial">Más Testimonios e historias</a>
                    </div>
                </div>

            </div>
        );
    }



}


export default Testimonials;
