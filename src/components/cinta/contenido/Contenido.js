import React, {Component} from 'react';
import cinta from './programa-cinta-blanca.png';
import './style.css';



class Contenido extends Component {
    render() {
        return (
           <div>
               <div className="row justify-content-center" style={{backgroundColor:"#F9F9F9"}}>
                   <div className="col-md-12 col-lg-12 text-center">
                       <img src={cinta} alt="" className="rounded-circle cinta-image"/>
                       <div className="col-md-12 col-lg-12 text-center">
                           <h4 className="objective">Objetivos del programa</h4>
                       </div>
                       <div className="col-md-12 col-lg-12 text-center">
                           <p className="objective-text">Aprender a construir un si o web con HTML5 + CSS3 + Javascript y conocer los fundamentos de la lógica
                               de programación.</p>
                       </div>

                       <div className="col-md-10 col-lg-10 mx-auto" style={{backgroundColor:"#FFF"}}>
                           <div className="row justify-content-center pt-4 pb-4">
                               <div className="col-md-12 col-lg-12 text-center pb-3"  style={{borderBottom:"solid #F9F9F9 2px"}}>
                                   <h5 className="objective">Contenido</h5>
                               </div>
                               <div className="col-md-12 col-lg-12 text-justify mt-3"  style={{borderBottom:"solid #F9F9F9 2px"}}>
                                   <ul className="cinta-list">
                                       <li>
                                           HTML5, CSS3
                                           <span>Construye tu primer si o web.</span>
                                       </li>
                                       <li>
                                           Estructuras de control
                                           <span>Entiende cómo piensa una computadora.</span>
                                       </li>
                                       <li>
                                           Funciones
                                           <span>Aprende a descomponer problemas en partes más pequeñas.</span>
                                       </li>
                                       <li>
                                           Arreglos
                                           <span>Aprende los fundamentos para el almacenamiento de datos.</span>
                                       </li>
                                       <li>
                                           Objetos
                                           <span>Optimiza tu forma de pensar al momento de atacar problemas.</span>
                                       </li>
                                       <li>
                                           Desarrolla tu propio proyecto
                                           <span>Aplica las tecnologías aprendidas en un proyecto web personal.</span>
                                       </li>
                                   </ul>
                               </div>
                               <div className="col-md-12 col-lg-12 text-center pb-3 pt-3" style={{borderBottom:"solid #F9F9F9 2px"}}>
                                   <p className="info-text">
                                       Nuestra metodologia Hacker Path se divide en 2 etapas generales: Una primera etapa de Fundamentos teoricos
                                       (Teoria+Prac ca) y la segunda etapa de Creacion de producto (100% hands on) por
                                       lo que durante el programa, estaras expuesto a diferentes Sprints, procesos y
                                       herramientas con las que se trabaja en la industria, mientras aprendes desarrollando
                                       productos reales en equipo.

                                   </p>
                               </div>
                               <div className="col-md-12 col-lg-12 pt-4">
                                   <p className="cinta-time">
                                       Duración: 8 semanas | Inicia Lunes 3 de Abril de 2018 | Horario: de Lunes a Viernes de 7pm a 10pm
                                   </p>
                               </div>

                           </div>
                       </div>

                       <div className="col-md-10 col-lg-10 mt-5 mx-auto" style={{backgroundColor:"#FFF"}}>
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-10 pt-5">
                                    <p className="text-pago">
                                        Sólo pagas $2,100 MXN. por mes ya que ofrecemos pagar en hasta en 12 mensualidades
                                        SIN intereses. Puedes pagar
                                        también de contado $25,000 MXN.</p>
                                </div>
                                <div className="col-md-10 col-lg-10 text-center pb-5">
                                    <a href="#" className="btn btn-buy-cinta"> INSCRÍBETE</a>

                                </div>
                            </div>
                       </div>


                   </div>
               </div>
           </div>
        );
    }
}



export default Contenido;