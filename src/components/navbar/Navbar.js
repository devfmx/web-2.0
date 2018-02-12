import React, {Component} from 'react';
import logo from './devf-logo.png';
import './nav.css'
import { Link } from 'react-router-dom'

class Navbar  extends  Component {


    render () {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-devf sticky-top ">
                <a className="navbar-brand" href="#">
                    <img src={logo}  className="d-inline-block align-top" alt=""/>                               
                </a>


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item">
                               <Link to="/nosotros" className="nav-link link-nav">Somos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/roi" className="nav-link link-nav" >ROI</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/metodologia" className="nav-link link-nav" href="#">Metodología</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/faq" className="nav-link link-nav" href="#">FAQ</Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/corporativos" className="nav-link link-nav" href="#">Corporativos</Link>
                            </li>
                            <li className="nav-item" style={{marginTop:"5px"}}>
                                <a className="nav-link btn btn-buy" href="#" >Inscríbite</a>
                            </li>
                        </ul>
    
                </div>
            </nav>
        );


    }


}

export default Navbar;
