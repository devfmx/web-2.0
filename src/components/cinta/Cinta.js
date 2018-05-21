import React, {Component} from 'react';
import Contacto from '../contactbar/ContactBar';
import Navbar from '../navbar/Navbar';
import Discount from '../home/city/discount/Discount'
import CintaHead from './cinta-head/CintaHeader'
import Contenido from './contenido/Contenido';
import Firebase from '../Firebase';
import Carousel from '../home/carousel/Carousel';
import Community from '../home/testimonials/Testimonials';
import Companies from'../home/companies/Companies';
import Footer from '../home/footer/Footer';

//


class Cinta extends Component {

    constructor(props){
        super(props);

        this.state = {cinta:"",precios:""}
    }


    componentDidMount(){
        const cinta = Firebase.database().ref().child('cintas').child(this.props.match.params.program);
        cinta.on('value',content => {
            console.log(content.val())
            this.setState({cinta:content.val()})
        });

        const precios = Firebase.database().ref().child('precios');
        precios.on('value',content => {
            console.log(content.val())
            this.setState({precios:content.val()})
        });

    }



    render() {
        if(this.state.precios) {
            return (
                <div>
                    <Contacto/>
                    <Navbar/>
                    {/*<Discount dvalue={this.state.precios.discount.cantidad} dcode={this.state.precios.discount.cupon}/>*/}
                    <CintaHead programa={this.state.cinta.name}/>
                    <div className="container-fluid">
                        <Contenido objective={this.state.cinta.objetivo}
                                   temas={this.state.cinta.temas}
                                   img={this.state.cinta.img}
                                   precios={this.state.precios}
                                   city={this.props.match.params.city}
                                   program={this.props.match.params.program}
                        />


                    </div>
                    <Carousel/>
                    <Community/>
                    <Companies/>
                    <Footer/>

                </div>
            );
        }else{
            return(<div>Cargando...</div>)
        }
    }
}



export default Cinta;
