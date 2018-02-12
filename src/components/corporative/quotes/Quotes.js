import React, {Component} from 'react';
import CardQuote from './quotecard/QuoteCard';
import image from './image-2018-02-12.png';

class Quotes extends Component {
    render() {
        return (
            <div>
                <div className="row mt-5">
                    <div className="col-md-12 col-lg-12 text-center">
                        <h3 style={{color:"#8A3490", fontSize:"1.3rem", fontWeight:"700"}}>¿Qué dicen las empresas de nosotros?</h3>
                    </div>
                </div>
                 <div className="row justify-content-center mt-4">
                     <div className="col-md-10 col-lg-10 mb-4 text-center">
                         <CardQuote foto={image}
                                    fullname={"Alonso Fernández"}
                                    job={"Strategic Partnerships Manager @ Facebook"}
                                    comment={"“México + América La na es una región importante para Facebook ya que  " +
                                    "tiene una de las comunidades de desarrolladores más creativas y vibrantes. " +
                                    "Trabajamos con Dev.F. porque aporta talento a dicha comunidad y cumple un rol " +
                                    "fundamental como catalizador de ideas y colaboración entre desarrolladores de muy distintos perfiles.”"}
                         />
                         <CardQuote foto={image}
                                    fullname={"Alonso Fernández"}
                                    job={"Strategic Partnerships Manager @ Facebook"}
                                    comment={"“México + América La na es una región importante para Facebook ya que  " +
                                    "tiene una de las comunidades de desarrolladores más creativas y vibrantes. " +
                                    "Trabajamos con Dev.F. porque aporta talento a dicha comunidad y cumple un rol " +
                                    "fundamental como catalizador de ideas y colaboración entre desarrolladores de muy distintos perfiles.”"}
                         />

                         <CardQuote foto={image}
                                    fullname={"Alonso Fernández"}
                                    job={"Strategic Partnerships Manager @ Facebook"}
                                    comment={"“México + América La na es una región importante para Facebook ya que  " +
                                    "tiene una de las comunidades de desarrolladores más creativas y vibrantes. " +
                                    "Trabajamos con Dev.F. porque aporta talento a dicha comunidad y cumple un rol " +
                                    "fundamental como catalizador de ideas y colaboración entre desarrolladores de muy distintos perfiles.”"}
                         />

                     </div>
                 </div>
            </div>
        );
    }
}



export default Quotes;
