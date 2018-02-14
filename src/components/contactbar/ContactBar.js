import React , {Component} from 'react';
import './style.css'


class ContactBar extends Component {



    render(){
        return(
            <div className="row contact-bar pb-2 pt-2">
                <div className="col-md-2 col-lg-2 contact-text text-right">
                    <span><i className="fa fa-phone"></i>&nbsp;55-4046-6299</span>
                </div>
                <div className="col-md-2 col-lg-2 contact-text">
                    <span><i className="fa fa-envelope "></i> &nbsp;hola@devf.mx</span>

                </div>

                <div className="col-md-6 col-lg-6 social-container">
                    <a href="" className="social-icons pull-right " style={{padding:"2px 6px"}}>
                        <i className="fa fa-whatsapp"></i>
                    </a>
                    <a href="" className="social-icons pull-right " style={{padding:"2px 6px"}}>
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="" className="social-icons pull-right" style={{padding:"2px 6px"}}>
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="" className="social-icons pull-right" style={{padding:"2px 9px"}}>
                        <i className="fa fa-facebook "></i>

                    </a>
                </div>

            </div>
        );



}




}

 export default ContactBar;
