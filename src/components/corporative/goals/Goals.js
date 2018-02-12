import React, {Component} from 'react';
import './style.css';



class Goals extends Component {
    render() {
        return (
            <div>
                <div className="row justify-content-center pt-5 pb-5 main-goals">
                    <div className="col-md-11 col-lg-11 text-center">
                        <p>Nuestro objetivo es educar a personas con contenido de alta calidad, de forma rápida y
                            accesible, para apoyar a cubrir la demanda de capital humano, al mismo  empo que apoyamos
                            (a través de nuestra educación) a que cualquier persona inteligente, motivada y trabajadora
                            pueda acceder a nuevas oportunidades laborales.</p>
                        <div className="row justify-content-center second-goals pb-3">
                            <div className="col-md-11 col-lg-11 pt-4 text-justify">
                                <p> Los servicios que actualmente tenemos con empresas están descritos abajo. Si no encuentras lo que requieres por favor
                                    escríbenos, nos adaptamos rápido.</p>
                            </div>
                            <div className="col-md-11 col-lg-11 text-justify">
                                <ul className="custom-ul">
                                    <li>Programas de becas para estudiantes.
                                        <ul className="custom-ul">
                                            <li style={{borderBottom:"0px"}}>
                                                Previamente hemos otorgado Beca Facebook, Beca Bosch y
                                                Beca Gentera a nuestros estudiantes.
                                            </li>
                                        </ul>

                                    </li>
                                    <li>
                                        Programas de créditos para acceso a educación.
                                    </li>
                                    <li>
                                        Capacitaciones a la medida para proyectos específicos de una empresa/organización.
                                    </li>
                                    <li>
                                        Capacitaciones de personal en nuestros cursos presenciales.
                                    </li>
                                    <li>
                                        Reclutamiento y bolsa de trabajo.
                                    </li>
                                    <li>
                                        Apertura de nuevas sedes con apoyo ins tucional/empresarial.
                                    </li>
                                    <li>
                                        Alianzas comerciales y de comunicación.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-11 col-lg-11 info-div text-justify">
                                Para más información de estos y otros servicios contacta a Orly al mail <a
                                href="mailto:corporativos@devf.mx">corporativos@devf.mx</a> o algo así.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Goals;
