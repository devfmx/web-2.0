import React, {Component} from 'react';
import Contacto from '../contactbar/ContactBar';
import Navbar from '../navbar/Navbar';
import Header from '../othersheader/OtherHead';
import Path from './hackerpath/Path';
import Numbers from './numbers/Numbers'
import Carousel from '../home/carousel/Carousel';
import Community from '../home/testimonials/Testimonials';
import Companies from'../home/companies/Companies';
import Footer from '../home/footer/Footer';

class ROI extends Component {
    render() {
        return (
            <div>
                <Contacto/>
                <Navbar/>
                <Header title={"RECUPERA TU INVERSIÓN"}/>
                <div className="container-fluid">
                    <Path/>
                    <Numbers/>
                </div>
                <Carousel/>
                <Community/>
                <Companies/>
                <Footer/>
            </div>
        );
    }
}


export default ROI;
