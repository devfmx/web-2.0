import React , {Component} from 'react';
import './style.css';



class CintaTest extends Component {

    constructor(props){
        super(props)
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(e){
        alert("Ciudad: "+this.props.city);
        this.props.updateGame(this.props.city,"game");
    }


    render() {
        return(
            <div className="row" style={{marginTop:"4rem"}}>
                <div className="col-md-12 col-lg-12 text-center test-block">
                    <p>
                        <i className="fa fa-question-circle"></i> ¿Cuál es el curso indicado para mí?
                        <button className="btn btn-test" onClick={this.onSelect}>Saber más</button>
                    </p>
                </div>
            </div>

        );
    }
}


export default CintaTest