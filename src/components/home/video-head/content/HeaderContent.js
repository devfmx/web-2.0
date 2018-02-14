import React, {Component} from 'react';
import "./style.css";
import Modal from 'react-bootstrap4-modal';



class HeaderContent  extends  Component {

    
    render () {
       
        return(
            <div id="content-head">
                <div className="row justify-content-center ">
                    <div className="col-xl-9 ">
                        <h1 className="mb-5 title-devf">¡Hackea tu educación!</h1>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 col-md-8 ">
                        <p className="text-devf">
                            Con más de 1,700 participantes y 120 programas de experiencia,
                            Dev.f es la escuela ideal para que aprendas a programar y te conviertas en
                            un gran desarrollador de software rodeado de la comunidad hacker más inspiradora de México.
                        </p>
                    </div>
                </div>

                <div className="row row-devf-b justify-content-center">
                    <div className="col-xl-3 col-lg-3 col-md-3 text-center">
                       <button className="btn btn-devf">Me interesa</button>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3  text-center">
                        <button className="btn btn-devf-video"> <i className="fa fa-play"></i>&nbsp; Ver Video</button>
                    </div>
                </div>
        </div>        
    
        );


    }


}

export default HeaderContent ;
