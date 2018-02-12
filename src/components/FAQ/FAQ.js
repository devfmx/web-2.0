import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import Contact from '../contactbar/ContactBar';
import Header from '../othersheader/OtherHead';
import Collapsible from 'react-collapsible';
import "./style.css";

//TODO Hacer un componente para cada seccion
class FAQ extends Component {
    render() {
        return (
            <div>
                <Contact/>
                <Navbar/>
                <Header title={"FAQ"}/>
                <div className="container-fluid">
                    <div className="row mt-5">
                    <div className="col-md-12 col-lg-12 text-center">
                        <h3 className="faq-title">Niveles de nuestros programas</h3>
                    </div>
                </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-md-10 col-lg-10">
                            <Collapsible trigger=" ¿No sé nada de programación ¿puedo entrar a sus programas?">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                            <Collapsible trigger="¿Qué se ve en Cinta Roja?">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                            <Collapsible trigger=" ¿No sé si entrar a Cinta Roja o a Cinta Negra">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </div>
                    </div>



                    <div className="row mt-5">
                        <div className="col-md-12 col-lg-12 text-center">
                            <h3 className="faq-title">Glosario</h3>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-md-10 col-lg-10">
                            <Collapsible trigger="Hackathon">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                            <Collapsible trigger="Batch">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                            <Collapsible trigger="Sensei">
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                        </div>
                    </div>





                </div>
            </div>
        );
    }
}



export default FAQ;
