import React , {Component} from 'react';
import './style.css'


class ContactBar extends Component {



    render(){
        return(
            <div className="row contact-bar pb-2 pt-2">
                <div className="col-md-2 col-lg-2 contact-text text-right">
                    <span><i className="fa fa-phone"></i>&nbsp;55-3670-1339</span>
                </div>
                <div className="col-md-2 col-lg-2 contact-text">
                    <span><i className="fa fa-envelope "></i> &nbsp;hola@devf.mx</span>

                </div>

                <div className="col-md-6 col-lg-6 social-container">

                    <a href="https://twitter.com/devfmx?lang=es" target="_blank" className="social-icons pull-right" style={{padding:"2px 6px"}}>
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/devfmx/" target="_blank" className="social-icons pull-right" style={{padding:"2px 9px"}}>
                        <i className="fa fa-facebook "></i>

                    </a>
                </div>

            </div>
        );



}




}

 export default ContactBar;
