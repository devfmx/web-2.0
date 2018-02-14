import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import Contact from '../contactbar/ContactBar';
import Header from '../othersheader/OtherHead';
import Goals from './goals/Goals';
import Quotes from './quotes/Quotes';

class Corporative extends Component {
    render() {
        return (
            <div>
                <Contact/>
                <Navbar/>
                <Header title={"CORPORATIVOS"} text={"“El software se esta comiendo al mundo”  y el sector privado necesita " +
                "más talento que nunca en las áreas de TI y programación. "} />

                <div className="container-fluid">
                    <Goals/>
                    <Quotes/>
                </div>

            </div>
        );
    }
}


export default Corporative;
