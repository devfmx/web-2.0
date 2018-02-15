import React, {Component} from 'react';
import "./style.css";
import CardTestimonial from "./card-testimonial/CardTestimonial";
import Modal from 'react-bootstrap4-modal';

import { Link } from 'react-router-dom'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

class Testimonials extends Component{


    handleClick(){
        console.log("Outside div")
    }

    render(){
        return(
            <div className="div-testimonials">
                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <h3 className="testimonials-title">Comunidad</h3>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className=" col-md-3 col-lg-3 text-center">
                        <CardTestimonial image={images['testimonio-bejarano.jpg']}
                                         logo={images['testimonio-bejarano-logo.png']} number={1}/>
                        <h5 className="name-testimonial">Alfredo Bejarano</h5>
                        <h6 className="job-testimonial">Software Engineer en Mercado Libre</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 text-center">
                        <CardTestimonial image={images['testimonio-melina.jpg']}
                                         logo={images['testimonio-melina-logo.png']}
                                         number={2}
                        />
                        <h5 className="name-testimonial ">Melina Cruz</h5>
                        <h6 className="job-testimonial">Co-Founder en JelpMi</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 text-center">
                        <CardTestimonial
                            image={images['testimonio-ulises.jpg']}
                            logo={images['testimonio-ulises-logo.png']}
                            number={3}
                            width={"4rem"}
                        />
                        <h5 className="name-testimonial">Ulises Bacilio</h5>
                        <h6 className="job-testimonial">Co-Founder en PTM</h6>
                    </div>

                </div>
                
                <div className="row" style={{marginTop:"2rem"}}>
                    <div className="col-md-12 col-lg-12 text-center">
                        <Link to="/comunidad" className="btn btn-testimonial">Más Testimonios e historias</Link>
                    </div>
                </div>



            </div>
        );
    }



}


export default Testimonials;
