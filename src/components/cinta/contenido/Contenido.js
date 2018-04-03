import React, {Component} from 'react';
import cinta from './programa-cinta-blanca.png';
import './style.css';



class Contenido extends Component {

    constructor(props){
        super(props);
    }


    render() {
        if(!this.props.objective){
            return (<div></div>);
        }
        else{
            let  temas = this.props.temas.map((tema) =>
                <li>
                    {tema}
                </li>
            );
            return (
                <div>
                    <div className="row justify-content-center pb-5" style={{backgroundColor:"#F9F9F9"}}>
                        <div className="col-md-12 col-lg-12 text-center">
                            <img src={this.props.img} alt="" className="rounded-circle cinta-image"/>
                            <div className="col-md-12 col-lg-12 text-center">
                                <h4 className="objective">Objetivos del programa</h4>
                            </div>
                            <div className="col-md-12 col-lg-12 text-center">
                                <p className="objective-text">{this.props.objective}</p>
                            </div>

                            <div className="col-md-10 col-lg-10 mx-auto" style={{backgroundColor:"#FFF"}}>
                                <div className="row justify-content-center pt-4 pb-4">
                                    <div className="col-md-12 col-lg-12 text-center pb-3"  style={{borderBottom:"solid #F9F9F9 2px"}}>
                                        <h5 className="objective">Contenido</h5>
                                    </div>
                                    <div className="col-md-12 col-lg-12 text-justify mt-3"  style={{borderBottom:"solid #F9F9F9 2px"}}>
                                        <ul className="cinta-list">
                                            {temas}
                                        </ul>
                                    </div>

                                    {/*
                                        <div className="col-md-12 col-lg-12 text-center pb-3 pt-3" style={{borderBottom:"solid #F9F9F9 2px"}}>
                                        <p className="info-text">
                                            Nuestra metodologia Hacker Path se divide en 2 etapas generales: Una primera etapa de Fundamentos teoricos
                                            (Teoria+Practica) y la segunda etapa de Creacion de producto (100% hands on) por
                                            lo que durante el programa, estaras expuesto a diferentes Sprints, procesos y
                                            herramientas con las que se trabaja en la industria, mientras aprendes desarrollando
                                            productos reales en equipo.

                                        </p>
                                    </div>

                                    */}

                                    <div className="col-md-12 col-lg-12 pt-4">
                                        <p className="cinta-time">
                                            Duración: 5 semanas | Inicia {this.props.precios.start} | Horario:
                                            { (this.props.program === "4") ? " Lunes y Miércoles " : (this.props.program === "5") ? " Martes y Jueves " :
                                                (this.props.program === "6" && this.props.city === "mxroma") ? " Lunes y Miercoles " :
                                                    (this.props.program === "6" && this.props.city === "mxsanta") ?" Martes y Jueves " : " Lunes y Viernes "}
                                            de {
                                            (this.props.city === "mxsanta") ? "18:00 a 21:00 hrs." : "19:00 a 22:00 hrs."
                                        }
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-10 col-lg-10 mt-5 mx-auto" style={{backgroundColor:"#FFF"}}>
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-10 pt-5">
                                        <p className="text-pago">
                                            Con la promoción actual sólo pagas ${this.props.precios.precio_month} MXN por mes ya que ofrecemos pagar en hasta en 12 mensualidades
                                            SIN intereses. Puedes pagar
                                            también de contado ${this.props.precios.precio} MXN.</p>
                                    </div>
                                    <div className="col-md-10 col-lg-10 text-center pb-5">
                                        <a href="https://pagos.devf.mx/" className="btn btn-buy-cinta"> INSCRÍBETE</a>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            );
        }




    }
}



export default Contenido;
