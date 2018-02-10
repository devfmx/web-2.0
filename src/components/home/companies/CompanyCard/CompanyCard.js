import React, {Component} from 'react';
import './style.css';
import empresa from './empresas-google.jpg';



class CompanyCard extends Component{

    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className="div-company">
                <img src={this.props.logo} alt="" className="company-logo"/>
            </div>
        );
    }

}


export default CompanyCard;