import React ,{Component} from'react';
import "./style.css";
import background from './hexagon-pattern.png';


class OtherHead extends Component{

    constructor(props){
        super(props)
    }



    render(){

        return(

            <header className="masthead text-white text-center other-head" style={{backgroundImage:`url(${background})`}} >
                <div className="row justify-content-center">
                    <div className="col-md-4 col-lg-4">
                        <hr/>
                    </div>
                    <div className="col-md-3 col-lg-3">
                        <h2>{this.props.title}</h2>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <hr/>
                    </div>
                </div>
                <div className="row justify-content-center">

                    <div className="col-md-8 col-lg-8">
                        <p>{this.props.text}</p>
                    </div>

                </div>


            </header>


        );
    }



}


export default OtherHead;