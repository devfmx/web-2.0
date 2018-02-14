import React, {Component} from 'react';
import './style.css';

class DoneCard extends Component {



    constructor(props){
        super(props);
    }



    render() {

        return (
            <div className="card done-card mx-auto" >
                <img className="card-img-top rounded-circle" src={this.props.face} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title text-center">{this.props.fullname}</h5>
                    <p className="card-text text-center">{this.props.biography}</p>
                    <div className="row" style={{marginTop:"2.5rem"}}>
                        <div className="col-md-12 col-lg-12 text-center done-mojo">
                            <p>{this.props.mojo}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default DoneCard;
