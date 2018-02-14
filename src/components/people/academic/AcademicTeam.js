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
            {name:"Enrique Díaz",img:k,bio:"Reconocido como Google Developer Expert y co-fundador de “Androidtitlan” " +
            "la comunidad de desarrolladores Android mas grande del mundo de habla hispana. \n" },
            {name:"Manuel Morató", img:e,bio:"Cercano al ecosistema hacker en México, “Eme” trabajó en BizDev en " +
            "Silicon Valley y Corea del Sur, así como en etapas tempranas de Codeando México y Kueski.\n"},
            {name:"Brian Salomaki", img:b,bio:"Estudió Symbolic Systems en la Universidad de Stanford y trabajó durante " +
            "9 años en Google (Mountain View, Dublin y CDMX). " +
            "Sus últimos años en Google los pasó en el equipo de Google for Education."}
        ];

       this.state = { profiles:perfiles}
    }

    render(){

        const profiles = this.state.profiles.map((profile,index) =>
            <div className="col-md-3 col-lg-3">
                <AcademicCard face={profile.img} fullname={profile.name} biography={profile.bio}
                              style={{paddingBottom:"25px"}}/>
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
                        <p>Responsables de coordinar a los equipos de Senseis y construir con ellos el contenido
                            educativo para que estudiantes puedan ingresar y/o crecer en el mundo de la tecnología.</p>
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