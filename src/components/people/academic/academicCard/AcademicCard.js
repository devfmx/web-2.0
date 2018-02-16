import React, {Component} from 'react';
import './style.css';




class AcademicCard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="card academic-card mt-5" >
                <img className="card-img-top rounded-circle" src={this.props.face} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{this.props.fullname}</h5>
                        <p className="card-text text-center">{this.props.biography}</p>
                    </div>
            </div>
        );
    }
}



export default AcademicCard;
