import React , {Component} from 'react';
import './style.css';



class CintaTest extends Component {


    render() {

        return(
            <div className="row" style={{marginTop:"4rem"}}>
                <div className="col-md-12 col-lg-12 text-center test-block">
                    <p>
                        <i className="fa fa-question-circle"></i> ¿Cuál es el curso indicado para mí?
                        <a href="" className="btn btn-test">Saber más</a>
                    </p>
                </div>
            </div>

        );

    }


}


export default CintaTest