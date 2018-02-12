import React, {Component} from 'react';
import "./style.css";

class QuoteCard extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <div className="card card-quotes mt-4">
                <img className="card-img-top rounded-circle" src={this.props.foto} alt="Card image cap"/>
                    <div className="card-body mt-4">
                        <h5 className="card-title">{this.props.fullname}</h5>
                        <span >{this.props.job}</span>
                        <div className="row justify-content-center pb-4">
                            <div className="col-md-11 col-lg-11">
                                <p className="card-text mt-3">{this.props.comment}</p>
                            </div>
                        </div>

                    </div>
            </div>
        );
    }
}



export default QuoteCard;
