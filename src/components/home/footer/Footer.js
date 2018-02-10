import React,{Component} from 'react';
import './style.css';
import forbes from './reconocimiento-forbes.png';
import gifted from './reconocimiento-gifted-citizen.png';
import redbox from './reconocimiento-redbox.png';

class Footer extends Component{



    render(){
        return(
            <footer>
                <div className="row row-footer">
                    <div className="offset-md-1 col-md-3 col-lg-3">
                        <div className="row">
                            <div className=" col-md-12 div col-lg-12">
                                <h5>Misión</h5>
                            </div>
                        </div>
                        <div className="row row-mision">
                            <div className="col-md-12 div col-lg-12">
                               <p>En Dev.F aceleramos el desarrollo socioeconómico de nuestro país con programas de
                                   educación en tecnología de calidad, incluyentes y accesibles.
                               </p>

                                <p>En base a la metodología hackatón, diseñamos programas
                                    de EdTech que son <strong>30x más baratos y 10x más rápidos</strong> que
                                    las Universidades.</p>
                            </div>
                        </div>

                        <div className="row" style={{borderTop:"solid grey 1px", paddingTop:"5px"}}>
                            <div className="col-md-12 col-lg-12">
                                <h5 className="news-title">¿Quieres recibir nuestras noticias?</h5>
                            </div>

                        </div>
                        <div className="row" >
                            <div className="col-md-12 col-lg-12">
                                <form className="form-inline">

                                    <div className="form-group mx-sm-0 mb-0">
                                        <input type="email" className="form-control input-news" id="email"
                                               placeholder="email@ejemplo.com"/>
                                    </div>
                                    <button type="submit" className="btn btn-news mb-0">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 div-rewards" style={{borderLeft:"solid grey 1px"}}>
                        <div className="row">
                            <div className="col-md-12 col-lg-12 text-center">
                                <img src={forbes} alt=""/>
                                <p>Reconocidos por Forbes como una de las 30 empresas sociales promesa de México</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-12 text-center">
                                <img src={gifted} alt=""/>
                                <p>Reconocidos por Ciudad de las Ideas con el
                                    reconocimiento internacional Gifted Citizen</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-12 text-center">
                                <img src={redbox} alt=""/>
                                <p>Reconocidos con el Premio Redbox como la Startup mas Innovadora de México en el 2017</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 col-lg-3 div-corporativo" style={{borderLeft:"solid grey 1px"}}>
                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <h5>Corporativo</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <p> <i className="fa fa-map-marker"></i> Ciudad de México, sede Roma: Avenida Álvaro Obregón 168, Roma Norte,
                                    C.P. 06700, Ciudad de México. </p>
                                <p><i className="fa fa-phone"></i> Teléfono: 55-4046-6299</p>
                                <p><i className="fa fa-envelope"></i> E-mail: hola@devf.mx</p>
                                <p><i className="fa fa-clock-o"></i> Horario: Lunes a viernes de 10:00 hrs a 19:00 hrs.</p>
                                <div className="col-md-12 col-lg-12 social-container">
                                    <a href="" className="social-icons  ">
                                        <i className="fa fa-whatsapp"></i>
                                    </a>
                                    <a href="" className="social-icons ">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a href="" className="social-icons ">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="" className="social-icons ">
                                        <i className="fa fa-facebook "></i>

                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="row div-rights" >
                    <div className="col-md-6 col-lg-6">
                        <p>® 2018 Dev.F. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <a href="">Aviso de Privacidad </a> | <a href="">Términos y Condiciones</a>
                    </div>
                </div>

            </footer>
        );
    }


}

export default Footer;
