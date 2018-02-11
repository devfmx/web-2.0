import React ,{Component} from 'react';
import './style.css';
import AcademicCard from './academicCard/AcademicCard';
import k from './academicAssets/kike.png';
import e from './academicAssets/eme.jpg';
import b from './academicAssets/brian.png';



class AcademicTeam extends Component{

    constructor(props){
        super(props)
        const  perfiles = [
            {name:"Enrique Díaz",img:k,bio:"Reconocido como Google Developer Expert y\n" +
            "co-fundador de “Android tlan” la comunidad\n" +
            "de desarrolladores Android mas grande del mundo de habla hispana."},
            {name:"Manuel Morató", img:e,bio:"Uno de los pioneros del ecosistema hacker en\n" +
            "México, “Eme” trabajó como biz dev en Silicon\n" +
            "Valley y Corea del Sur, así como en Codeando México y Kueski en etapas clave para estas organizaciones."},
            {name:"Brian Salomaki", img:b,bio:"Brian estudió Symbolic Systems en la Univer- sidad de Stanford y " +
            "trabajó durante 9 años en Google (Mountain View, Dublin y CDMX). Sus úl mos años en Google los pasó en el " +
            "equipo de Google for Educa on."}
        ];

       this.state = { profiles:perfiles}
    }

    render(){

        const profiles = this.state.profiles.map((profile,index) =>
            <div className="col-md-3 col-lg-3">
                <AcademicCard face={profile.img} fullname={profile.name} biography={profile.bio}/>
            </div>
        );


        return(
            <section className="sec-academic">
                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <h3>Academic Team</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-lg-2">

                    </div>
                    <div className="col-md-8 col-lg-8 text-center" style={{marginTop:"2.5rem"}}>
                        <p>Responsables de coordinar a los equipos de Senseis, así como de construir con ellos los
                            contenidos educa vos para que las y los estudiantes puedan ingresar o crecer en el mundo de la tecnología.</p>
                    </div>
                    <div className="col-md-2 col-lg-2">

                    </div>
                </div>

                <div className="row" style={{marginTop:"2.5rem"}}>
                    <div className="col-md-2 col-lg-2"></div>
                    {profiles}
                </div>

            </section>

        );
    }



}

export default AcademicTeam;