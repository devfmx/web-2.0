import React, {Component} from 'react';




class HeaderContent  extends  Component {

    
    render () {
       
        return(
            <div id="content-head">
                <div className="row">
                    <div className="col-xl-9 mx-auto">
                        <h1 className="mb-5">Hackea tu futuro</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-9 mx-auto">
                        <p> Con mas de 1,600 participantes y 120 programas de experiencia. 
                            Dev.F es la escuela perfecta para que cambies tu realidad mientras cambias el mundo. </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-4 mx-auto">
                       <button className="btn btn-primary">Inscribete</button>
                    </div>
                    <div className="col-xl-4 mx-auto">
                       <button className="btn btn-warning">Ver Video</button>
                    </div>
                </div>
        </div>        
    
        );


    }


}

export default HeaderContent ;
