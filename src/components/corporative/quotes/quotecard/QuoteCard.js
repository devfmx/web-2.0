import React, {Component} from 'react';
import "./style.css";

class QuoteCard extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <div className="card card-quotes">
                <img className="card-img-top rounded-circle" src={this.props.foto} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <span>{this.props.job}</span>
                        <p className="card-text">{this.props.comment}</p>
                    </div>
            </div>
        );
    }
}



export default QuoteCard;
