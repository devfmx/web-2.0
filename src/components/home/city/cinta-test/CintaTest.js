import React , {Component} from 'react';
import './style.css';



class CintaTest extends Component {

    constructor(props){
        super(props);

        this.handleGameActive = this.handleGameActive.bind(this);
    }

    handleGameActive(e){
        this.props.gameActive()
    }


    render() {

        return(
            <div className="row" style={{marginTop:"4rem"}}>
                <div className="col-md-12 col-lg-12 text-center test-block">
                    <p>
                        <i className="fa fa-question-circle"></i> ¿Cuál es el curso indicado para mí?
                        <button onClick={this.handleGameActive} className="btn btn-test">Saber más</button>
                    </p>
                </div>
            </div>

        );

    }


}


export default CintaTest