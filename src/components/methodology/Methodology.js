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
                <Header title={"METODOLOGÍA"} text={"Jelly-o apple pie sweet roll cake oat cake topping gingerbread fruitcake " +
                "lollipop. Tiramisu tootsie roll chocolate cake bear claw. Bear claw donut caramels chocolate bar brownie c" +
                "andy tart caramels marshmallow. Tiramisu tart macaroon. Cupcake sesame snaps marshmallow toffee pastry carrot cake pie."}/>
                <div className="container-fluid">
                    <div className="row div-figure pt-5">
                        <div className="col-md-12 col-lg-12 text-center">
                            <img src={hexagono} alt=""/>
                        </div>
                    </div>
                    <div className="row div-figure pt-5 justify-content-center">
                        <div className="col-md-10 col-lg-10 text-center">
                            <p>Si necesita otro texto jelly-o apple pie sweet roll cake oat cake topping gingerbread
                                fruitcake lollipop. Tiramisu tootsie roll chocolate cake bear claw. Bear claw donut
                                caramels chocolate bar brownie candy tart caramels marshmallow. Tiramisu tart macaroon.
                                Cupcake sesame snaps marshmallow toffee pastry carrot cake pie.</p>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}



export default Methodology;
