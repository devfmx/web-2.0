import React, {Component} from 'react';
import logo from './devf-logo.png';
import './nav.css'
import { Link } from 'react-router-dom'

class Navbar  extends  Component {


    render () {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-black ">
                <a className="navbar-brand" href="#">
                    <img src={logo}  className="d-inline-block align-top" alt=""/>                               
                </a>


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item">
                               <Link to="/nosotros" className="nav-link">Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Disabled</a>
                            </li>
                        </ul>
    
                </div>
            </nav>
        );


    }


}

export default Navbar;
