import React, {Component} from 'react';
import './style.css';
import CompanyCard from './CompanyCard/CompanyCard';
import logos from './ImportImages';

class Companies extends Component{




    render(){

        const companies = logos().map((logo,index) =>
            <div className="col-md-3 col-lg-3 logo-col">
                <CompanyCard key={index.toString()} logo={logo}/>
            </div>);

        return(
          <div className="div-companies">
              <div className="row">
                  <div className="col-md-12 col-lg-12 text-center">
                      <h3 className="title-companies">EMPRESAS QUE HAN CONTRATADO A NUESTROS EX-ALUMNOS</h3>
                  </div>

              </div>
              <div className="row companies-logos">
                  {companies}
              </div>

              <div className="row" style={{marginTop:"1.0rem"}}>
                  <div className="col-md-12 col-lg-12 text-center">
                      <h3 className="title-companies">¡Y más de 200 empresas y startups líderes de la industria!</h3>
                  </div>

              </div>

          </div>
        );
    }

}


export default Companies;