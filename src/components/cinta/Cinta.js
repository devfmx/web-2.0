import React, {Component} from 'react';
import Contacto from '../contactbar/ContactBar';
import Navbar from '../navbar/Navbar';
import Discount from '../home/city/discount/Discount'
import CintaHead from './cinta-head/CintaHeader'
import Contenido from './contenido/Contenido';


const params = new URLSearchParams();


class Cinta extends Component {

    constructor(){
        super();
        const foo = params.get('foo');
        console.log()

    }


    render() {
        return (
            <div>
                <Contacto/>
                <Navbar/>
                <Discount/>
                <CintaHead/>
                <div className="container-fluid">
                    <Contenido/>


                </div>
            </div>
        );
    }
}



export default Cinta;
