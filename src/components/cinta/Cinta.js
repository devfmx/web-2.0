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

        this.state = {cinta:""}
    }


    componentDidMount(){
        const cities = Firebase.database().ref().child('programas').child(this.props.match.params.program);
        cities.on('value',content => {
            console.log(content.val())
            this.setState({cinta:content.val()})
        });

    }



    render() {
        console.log(this.state.cinta)
        return (
            <div>
                <Contacto/>
                <Navbar/>
                <Discount/>
                <CintaHead/>
                <div className="container-fluid">
                    <Contenido objective={this.state.cinta.objetivo}
                               temas={this.state.cinta.temas}
                    />


                </div>
                <Carousel/>
                <Community/>
                <Companies/>
                <Footer/>

            </div>
        );
    }
}



export default Cinta;
