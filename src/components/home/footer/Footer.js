import React,{Component} from 'react';
import './style.css';
import forbes from './reconocimiento-forbes-blanco.png';
import gifted from './reconocimiento-gifted-citizen-blanco.png';
import redbox from './reconocimiento-redbox-blanco.png';
import {Link} from 'react-router-dom';


class Footer extends Component{



    render(){
        return(
            <footer>
                <div className="row row-footer justify-content-center">
                    <div className=" col-md-3 col-lg-3">
                        <div className="row">
                            <div className=" col-md-12 div col-lg-12">
                                <h5>Misión</h5>
                            </div>
                        </div>
                        <div className="row row-mision">
                            <div className="col-md-12 div col-lg-12">
                               <p>Dev.f existe para acelerar el desarrollo socio-económico de América Latina a
                                   través de educación de tecnología de alta calidad, de forma incluyente y accesible.
                               </p>

                            </div>
                        </div>

                        <div className="row row-news pt-3" >
                            <div className="col-md-12 col-lg-12">
                                <h5 className="news-title">¿Quieres recibir nuestras noticias?</h5>
                            </div>

                        </div>
                        <div className="row pb-4" >
                            <div className="col-md-12 col-lg-12 mt-2">
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
                    <div className="col-md-3 col-lg-3 div-rewards" >
                        <div className="row">
                            <div className="col-md-12 col-lg-12 text-center">
                                <img src={forbes} alt=""/>
                                <p>Reconocidos por Forbes como una de las 30 empresas sociales promesa de México</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-12 text-center">
                                <img src={gifted} alt="" style={{width:"50%"}}/>
                                <p>Premiados por la Ciudad de las Ideas con el
                                    reconocimiento internacional Gifted Citizen</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-12 text-center">
                                <img src={redbox} alt="" style={{width:"50%"}} />
                                <p>Reconocidos con el Premio Redbox como la Startup mas Innovadora de México en el 2017</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 col-lg-3 div-corporativo" >
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

                                    <a href="https://twitter.com/devfmx?lang=es"  target="_blank" className="social-icons pull-left" style={{padding:"2px 6px"}}>
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="https://www.facebook.com/devfmx/" target="_blank" className="social-icons pull-left" style={{padding:"2px 9px"}}>
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
                    <div className="col-md-6 col-lg-6 text-right">
                        <Link to="/privacidad">Aviso de Privacidad </Link> | <Link to="/terminos">Términos y Condiciones</Link>
                    </div>
                </div>

            </footer>
        );
    }


}

export default Footer;
