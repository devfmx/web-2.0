import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import Contact from '../contactbar/ContactBar';
import Header from '../othersheader/OtherHead';
import Goals from './goals/Goals';
import Quotes from './quotes/Quotes';
import Carousel from '../home/carousel/Carousel';
import Community from '../home/testimonials/Testimonials';
import Companies from'../home/companies/Companies';
import Footer from '../home/footer/Footer';

class Corporative extends Component {
    render() {
        return (
            <div>
                <Contact/>
                <Navbar/>
                <Header title={"CORPORATIVOS"} text={"“El software se está comiendo al mundo”  y el sector privado necesita " +
                "más talento que nunca en las áreas de TI y programación. "} />

                <div className="container-fluid">
                    <Goals/>
                    <Quotes/>
                </div>
                <Carousel/>
                <Community/>
                <Companies/>
                <Footer/>

            </div>
        );
    }
}


export default Corporative;
