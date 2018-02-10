import React , {Component} from 'react';
import './style.css'


class ContactBar extends Component {



    render(){
        return(
            <div className="row contact-bar">
                <div className="offset-1 col-md-2 col-lg-2 contact-text">
                    <span><i className="fa fa-phone"></i>&nbsp;55-4046-6299</span>
                </div>
                <div className="col-md-2 col-lg-2 contact-text">
                    <span><i className="fa fa-envelope "></i> &nbsp;hola@devf.mx</span>

                </div>

                <div className="col-md-6 col-lg-6 social-container">
                    <a href="" className="social-icons pull-right ">
                        <i className="fa fa-whatsapp"></i>
                    </a>
                    <a href="" className="social-icons pull-right">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="" className="social-icons pull-right">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="" className="social-icons pull-right">
                        <i className="fa fa-facebook "></i>

                    </a>
                </div>

            </div>
        );



}




}

 export default ContactBar;
