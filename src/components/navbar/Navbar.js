import React, {Component} from 'react';
import logo from './devf-logo.png';
import './nav.css'

class Navbar  extends  Component {


    render () {
        return(
            <nav className="navbar navbar-dark bg-black ">
                <a className="navbar-brand" href="#">
                    <img src={logo}  className="d-inline-block align-top" alt=""/>
            
                </a>
            </nav>
        );


    }


}

export default Navbar;
