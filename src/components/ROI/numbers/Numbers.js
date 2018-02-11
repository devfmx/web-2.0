import React, {Component} from 'react';
import './style.css';

class Numbers extends Component {
    render() {
        return (
            <div>
                <div className="row numbers-div justify-content-center" style={{backgroundColor:"#311C33"}}>
                    <div className="col-md-1 col-lg-1 text-center mx-auto">
                        <p><span className="number-span">20</span> veces más <span className="loop-span">barato</span></p>
                    </div>
                    <div className="col-md-1 col-lg-1 text-center mx-auto">
                        <p><span className="number-span">8</span> veces más <span className="loop-span">rápido</span></p>
                    </div>
                    <div className="col-md-1 col-lg-1 text-center mx-auto">
                        <p><span className="number-span">&infin;</span> veces más <span className="loop-span">hacker</span></p>
                    </div>
                </div>

                <div className="row justify-content-center pb-4  pt-4 div-consider">
                    <div className="col-md-12 col-lg-12 text-center mt-3">
                        <h3>CONSIDERA ESTO</h3>
                    </div>
                    <div className="col-md-11 col-lg-11 text-center mt-3">
                        <p>Si consigues un trabajo que te pague <strong> $15,000 pesos</strong> mensuales al terminar tu Cinta Roja,
                            cuando ya estás listo para salir a la industria (toma en cuenta que el 80% de nuestros graduados de
                            cintas avanzadas que buscan trabajo lo ob enen), estarás recuperando tu inversión en <strong>menos de 6 meses.</strong></p>
                    </div>
                    <div className="col-md-12 col-lg-12 text-center mt-3">
                        <h4>Dev.f está hackeando la educación</h4>
                    </div>
                </div>

            </div>

        );
    }
}



export default Numbers;
