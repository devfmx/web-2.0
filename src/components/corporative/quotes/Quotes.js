import React, {Component} from 'react';
import CardQuote from './quotecard/QuoteCard';


class Quotes extends Component {
    render() {
        return (
            <div>
                <div className="row mt-5">
                    <div className="col-md-12 col-lg-12 text-center">
                        <h3 style={{color:"#8A3490", fontSize:"1.1rem"}}>¿Qué dicen las empresas de nosotros?</h3>
                    </div>
                </div>
                 <div className="row justify-content-center">
                     <div className="col-md-10 col-lg-10 mb-4">
                         <CardQuote/>
                     </div>
                 </div>
            </div>
        );
    }
}



export default Quotes;
