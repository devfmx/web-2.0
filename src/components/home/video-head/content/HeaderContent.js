import React, {Component} from 'react';
import "./style.css";



class HeaderContent  extends  Component {

    
    render () {
       
        return(
            <div id="content-head">
                <div className="row">
                    <div className="col-xl-9 mx-auto">
                        <h1 className="mb-5 title-devf">Hackea tu futuro</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-5 mx-auto">
                        <p className="text-devf"> Dev.f es la escuela perfecta para que cambies tu realidad mientras cambias el mundo </p>
                    </div>
                </div>

                <div className="row row-devf-b">
                    <div className="col-xl-4 col-lg-4 col-md-4 mx-auto">
                       <button className="btn btn-devf">Me interesa</button>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 mx-auto">
                        <button className="btn btn-devf-video"> <i className="fa fa-play"></i>&nbsp; Ver Video</button>
                    </div>
                </div>
        </div>        
    
        );


    }


}

export default HeaderContent ;
