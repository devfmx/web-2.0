import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import Contact from '../contactbar/ContactBar';
import Header from '../othersheader/OtherHead';
import hexagono from './metodologia.png';
import './style.css';


class Methodology extends Component {
    render() {
        return (
            <div>
                <Contact/>
                <Navbar/>
                <Header title={"METODOLOGÍA"} text={"La educación más útil es aquella que te da las herramientas para " +
                "que puedas constantemente aprender y participar en: 1) temas para los que eres bueno/a, 2) que te apasionan," +
                " 3) puedes sostenerte económicamente de ellos. Idealmente todo esto se mezcla con algún problema o " +
                "necesidad que tenga el mundo."}/>
                    <div className="container-fluid">
                        <div className="row div-figure pt-5">
                            <div className="col-md-12 col-lg-12 text-center">
                                <img src={hexagono} alt=""/>
                            </div>
                        </div>

                        <div className="row div-figure justify-content-center pt-4">
                            <div className="col-md-10 col-lg-10 text-justify">
                                <ol className="ol-topics">
                                    <li>
                                        <h5>Exposición(Exposure):</h5>
                                        <p>

                                            Participas en eventos, comunidades, clases, etc. en temas que no conocías. Empiezas a pensar que no eres el/la único/a loco/a y te nace un interés de involucrarte más.

                                        </p>
                                    </li>
                                    <li>
                                        <h5>Modelo a Seguir (Role Model):</h5>
                                        <p>
                                            Conoces a personas que te inspiran. Quieres seguir sus pasos y que te apoyen a identificar qué es lo que quieres hacer y cuáles son tus fortalezas personales y profesionales.
                                        </p>
                                    </li>
                                    <li>
                                        <h5>
                                            Esto es lo mío(A-ha Moment!):
                                        </h5>
                                        <p>
                                            Te emocionas y te empiezas a involucrar. La energía para hacerlo nace de un interés personal genuino.
                                        </p>
                                    </li>
                                    <li>
                                        <h5>
                                            Iniciativa(Resoucefulness):
                                        </h5>
                                        <p>

                                            Empiezas a leer libros, tomar clases especializadas,
                                            involucrarte más a profundidad en el tema. Entiendes dónde buscar y en cuáles puertas tocar.

                                        </p>

                                    </li>
                                    <li>
                                        <h5>
                                            Redes(Network):
                                        </h5>
                                        <p>
                                            Te involucras con redes y empresas con las que puedes trabajar y crecer. Te vuelves parte del movimiento y tu red crece de manera natural.
                                        </p>

                                    </li>
                                    <li>
                                        <h5>
                                            Empodramiento:
                                        </h5>

                                        <p>

                                            Te vuelves el modelo a seguir. Empiezas tu empresa. Consigues un trabajo que te encanta. Sigues aprendiendo.Transformas tu entorno y el de personas cercanas que te rodean.

                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="row div-figure pt-5 justify-content-center">
                            <div className="col-md-10 col-lg-10 text-center">
                                <p>En Dev.f hemos observado (a través de experiencia propia) que esta educación es aquella
                                    que pasa por un proceso cognitivo y experimental descrito a continuación.
                                    Este proceso, mezclado con Senseis (instructores) y contenido de alta calidad y relevancia,
                                    es el que buscamos emular en nuestros programas: </p>
                            </div>
                        </div>


                    </div>
                </div>

        );
    }
}



export default Methodology;
