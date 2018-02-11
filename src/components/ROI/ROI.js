import React, {Component} from 'react';
import Contacto from '../contactbar/ContactBar';
import Navbar from '../navbar/Navbar';
import Header from '../othersheader/OtherHead';
import Path from './hackerpath/Path';
import Numbers from './numbers/Numbers'

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
            </div>
        );
    }
}


export default ROI;
