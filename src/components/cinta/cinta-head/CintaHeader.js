import React, {Component} from 'react';
import fondo from './showcase-video.jpg';
import './style.css';

class CintaHeader extends Component {
    constructor(props){
        super(props)
    }

    render() {
        if(this.props.programa){
            return (
                <header className="masthead text-white text-center cinta-head" style={{backgroundImage:`url(${fondo})`}}>
                    <div className="overlay" style={{backgroundColor:"#590463"}}></div>
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="mb-2 title-devf cinta-title2">Programa {this.props.programa}</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5 mx-auto mb-5">
                            <p className="text-devf text-cinta"> El sendero hacia la cultura hacker</p>
                        </div>
                    </div>
                </header>
            );

        }else{
            return(<div></div>)
        }


    }
}



export default CintaHeader;
