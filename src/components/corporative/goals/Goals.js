import React, {Component} from 'react';
import './style.css';



class Goals extends Component {
    render() {
        return (
            <div>
                <div className="row justify-content-center pt-5 pb-5 main-goals">
                    <div className="col-md-11 col-lg-11 text-center">
                        <p>Nuestro objetivo es educar a personas con contenido de alta calidad y relevancia, de forma
                            ágil y accesible con un doble objetivo. 1. Ser parte de la solución en desarrollar
                            el talento humano requerido para la demanda laboral actual; 2. Ofrecer programas educativos
                            para que cualquier persona inteligente, motivada y trabajadora pueda acceder a nuevas oportunidades
                            laborales. </p>
                        <div className="row justify-content-center second-goals pb-3">
                            <div className="col-md-11 col-lg-11 pt-4 text-justify">
                                <p> Los servicios que actualmente tenemos con empresas están descritos a continuación.
                                    Si no encuentras lo que requieres escríbenos directamente.</p>
                            </div>
                            <div className="col-md-11 col-lg-11 text-justify">
                                <ul className="custom-ul">
                                    <li>Programas de becas para estudiantes.
                                        <ul className="custom-ul">
                                            <li style={{borderBottom:"0px"}}>
                                                En el pasado hemos lanzado programas de becas con empresas como Facebook,
                                                Bosch y otras empresas.
                                            </li>
                                        </ul>

                                    </li>
                                    <li>
                                        Programas de créditos para acceso a educación.
                                    </li>
                                    <li>
                                        Capacitaciones a la medida para proyectos específicos de una empresa/organización.
                                    </li>
                                    <li>
                                        Capacitaciones de personal en nuestros cursos presenciales.
                                    </li>
                                    <li>
                                        Reclutamiento y bolsa de trabajo.
                                    </li>
                                    <li>
                                        Apertura de nuevas sedes / nuevas ciudades con apoyo institucional/empresarial.
                                    </li>
                                    <li>
                                        Alianzas comerciales y de comunicación.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-11 col-lg-11 info-div text-justify">
                                Para más información de estos y otros servicios contacta a Orly Goldsmith en <a
                                href="mailto:empresas@devf.mx">empresas@devf.mx</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Goals;
