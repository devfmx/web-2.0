import React, {Component} from 'react';

class Result extends Component {

    constructor(props){
        super(props);
        this.state = {
            results:{
                7:{
                    name:"Executive Hacker",
                    image:"https://firebasestorage.googleapis.com/v0/b/devfkiller.appspot.com/o/programa-executive-hacker.png?alt=media&token=f503521e-7d83-4fbf-a1bf-867d55340069",
                    url:"https://devf.mx/cinta/mxroma/6"
                },
                8:{
                    name: "Cinta Blanca",
                    image: "https://firebasestorage.googleapis.com/v0/b/devfkiller.appspot.com/o/programa-cinta-blanca.png?alt=media&token=3356051b-7a5e-438f-aa7e-50b9d226b4ac",
                    url:"https://devf.mx/cinta/mxroma/1"
                },
                10:{
                    name: "UX Ninja",
                    image: "https://firebasestorage.googleapis.com/v0/b/devfkiller.appspot.com/o/programa-ux-ninja.png?alt=media&token=8e5a1154-3f95-439d-9b41-986b242dc97c",
                    url:"https://devf.mx/cinta/mxroma/4"

                },
                11:{
                    name: "Intro a Data Science",
                    image:"https://firebasestorage.googleapis.com/v0/b/devfkiller.appspot.com/o/programa-data-science.png?alt=media&token=5641fb4c-a226-4033-80b1-a047cbe600bd",
                    url:"https://devf.mx/cinta/mxroma/5"
                },
                14:{
                    name:"Cinta Roja",
                    image:"https://firebasestorage.googleapis.com/v0/b/devfkiller.appspot.com/o/programa-cinta-roja.png?alt=media&token=dd1ba463-29c6-410a-aaaa-9d20501173fd",
                    url:"https://devf.mx/cinta/mxroma/2"
                },
                15:{
                    name:"Cinta Negra",
                    image:"https://firebasestorage.googleapis.com/v0/b/devfkiller.appspot.com/o/programa-cinta-negra.png?alt=media&token=ba2b6587-c0ac-4775-a086-992a05c3fbe1",
                    url:"https://devf.mx/cinta/mxroma/3"
                }
            }
        }


    }



    render() {
        return (
            <div className="row row-result  justify-content-center animated fadeIn">
                <div className="col-md-10 col-lg-10 text-center">
                    <h4 style={{color:"#7B2781", fontSize:"22px"}}>Esta es tu mejor opción:</h4>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="card cinta-card" style={{height:"18rem"}}>
                        <div className="row">
                            <div className="col-md-12 col-lg-12 ">
                                <a href={this.state.results[this.props.level].url} className="cinta-detalle float-right">Ver detalle</a>
                            </div>
                        </div>

                        <img className="card-img-top rounded-circle cinta-imagen" src={this.state.results[this.props.level].image} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title cinta-title mb-2">{this.state.results[this.props.level].name}</h5>

                            <a href="https://pagos.devf.mx" className="btn btn-cinta">Inscríbete</a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


export default Result;
