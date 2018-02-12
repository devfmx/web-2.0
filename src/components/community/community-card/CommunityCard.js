import React, {Component} from 'react';
import './style.css';


class CommunityCard extends Component {
    
    constructor(props){
        super(props);
    }
    
    
    render() {
        return (
            <div className="card cc-card">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-10 text-center">
                        <span className="cc-quotes"><i class="fa fa-quote-right" aria-hidden="true"></i></span>
                    </div>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title card-name ">{this.props.fullname}</h5>
                    <span className="card-job">{this.props.job}</span>
                    <div className="row justify-content-center mt-4">
                        <div className="col-md-9 col-lg-9">
                            <p className="card-text card-cita">{this.props.text}</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}



export default CommunityCard;
