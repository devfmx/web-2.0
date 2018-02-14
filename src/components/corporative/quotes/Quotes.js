import React, {Component} from 'react';
import CardQuote from './quotecard/QuoteCard';

class Quotes extends Component {
    render() {
        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
        }

        const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


        return (
            <div>
                <div className="row mt-5">
                    <div className="col-md-12 col-lg-12 text-center">
                        <h3 style={{color:"#8A3490", fontSize:"1.3rem", fontWeight:"700"}}>¿Qué dicen las empresas de nosotros?</h3>
                    </div>
                </div>
                 <div className="row justify-content-center mt-4">
                     <div className="col-md-10 col-lg-10 mb-4 text-center">
                         <CardQuote foto={images['equipo-alonso.jpg']}
                                    fullname={"Alonso Fernández"}
                                    job={" Strategic Partnerships Manager @ Facebook"}
                                    comment={"México + América Latina es una región importante para Facebook " +
                                    "ya que tiene una de las comunidades de desarrolladores más creativas y vibrantes. " +
                                    "Trabajamos con Dev.f porque aporta talento a dicha comunidad y cumple un rol fundamental como " +
                                    "catalizador de ideas y colaboración entre desarrolladores de muy distintos perfiles."}

                           />
                         <CardQuote foto={images['equipo-solsona.png']}
                                    fullname={"Francisco Solsona"}
                                    job={"Comunidades de Desarrolladores de Google LatAm"}
                                    comment={"Dev.f es la encarnación de la solución perfecta para el problema de " +
                                    "talento en tecnologías Google en la Ciudad de México."}
                         />

                         <CardQuote foto={images['equipo-charles.png']}
                                    fullname={"Gabriel Charles"}
                                    job={"Ex-Director de Wayra México"}
                                    comment={"Dev.f es fundamental para este momento de nuestro país y mundo en el " +
                                    "que nos encontramos. Abre infinitas posibilidades a personas acercando o " +
                                    "perfeccionando habilidades digitales para usarlas como herramientas para crear mejores " +
                                    "realidades. Inspiran, conectan y transforman mediante el código y la cultura hacker."}
                         />

                     </div>
                 </div>
            </div>
        );
    }
}



export default Quotes;
