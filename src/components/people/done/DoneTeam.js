import React, {Component} from 'react';
import './style.css';
import DoneCard from './donecard/DoneCard';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./doneAssets', false, /\.(png|jpe?g|svg)$/));

class DoneTeam extends Component {




    render() {
        return (
            <section className="done-sec">
                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <h3>Get Shit Done team</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-lg-2">

                    </div>
                    <div className="col-md-8 col-lg-8 text-center" style={{marginTop:"2.5rem"}}>
                        <p>Responsables de áreas operativas y actividades relacionadas con tecnología, marketing y
                            otros procesos que requiere Dev.f para lograr nuestra misión.
                        </p>
                    </div>
                    <div className="col-md-2 col-lg-2">

                    </div>
                </div>

                <div className="row justify-content-center" style={{marginTop:"3rem"}}>



                    <div className="col-md-4 col-lg-4 mb-4">
                        <DoneCard face={images['equipo-elias.png']} fullname={"Elías Shuchleib"} biography={"Miembro activo de diversas " +
                        "comunidades y proyectos de innovación, Elias ha sido co-director del hackathon StartupBus " +
                        "México y hoy es el CGSDO (Chief Get Shit Done Officer) en Dev.f."}
                        />
                    </div>

                    <div className="col-md-4 col-lg-4 mb-4 ">
                        <DoneCard face={images['equipo-orly.jpg']} fullname={"Orly Goldsmith"}
                                  biography={"Graduada de London School of Economics and Political " +
                                  "Science, Orly tiene un especial interés por la inclusión educativa " +
                                  "así como la vinculación de talento, habiendo trabajado en organizaciones " +
                                  "como el Institute of International Education, la Organización Internacional " +
                                  "del Trabajo y Empleos Verdes"}
                                  />
                    </div>

                    <div className="col-md-4 col-lg-4 mb-4">
                        <DoneCard face={images['equipo-brian-chico.jpg']} fullname={"Brian Ortiz"}
                                  biography={"Además de ser un apasionado diseñador, Brian estudió el programa de UX " +
                                  "en Dev.f y actualmente está encargado de que toda la logística de nuestros espacios " +
                                  "para que las clases puedan darse con la magia necesaria. "}
                                  />
                    </div>

                    <div className="col-md-4 col-lg-4 mb-4">
                        <DoneCard face={images['equipo-raul.jpg']} fullname={"Raúl Amador"}
                                  biography={"Raúl es nuestro Ex-Campeón Nacional de Ajedrez así como Co-Fundador de la " +
                                  "comunidad BOTS Latam. Ha trabajado en diversas Startups logrando ser CTO de “Liberty”."}
                        />
                    </div>

                    <div className="col-md-4 col-lg-4 mb-4">
                        <DoneCard face={images['equipo-edwin.jpg']} fullname={"Edwin Salgado"}
                                  biography={"Fundador de la comunidad de desarrolladores Backs to de Future, Edwin ha " +
                                  "sido CISO de la Startup Fintech “Flink” y " +
                                  "6 veces Sensei y Batch Master en diferentes programas de Dev.f."}
                        />
                    </div>

                    <div className="col-md-4 col-lg-4 mb-4">
                        <DoneCard face={images['equipo-murillo.jpg']} fullname={"Adrian Murillo"}
                                  biography={"Graduado del TEC de Monterrey, Adrián es nuestro experto en temas legales " +
                                  "además de director de la ONG “Dream In Mexico”. Antes de unirse a Dev.f, Adrian formó " +
                                  "parte del equipo legal en una prestigiosa firma de consultoría fiscal."}
                        />
                    </div>

                    <div className="col-md-4 col-lg-4 mb-4">
                        <DoneCard face={images['equipo-noe.jpg']} fullname={"Noé Luna"}
                                  biography={"Apasionado por la natación y el deporte extremo, Noé siempre busca cumplir " +
                                  "nuevos retos. De igual manera en el ámbito laboral, Graduado de la Universidad de Essex " +
                                  "en Inglaterra, Noé es un profesional del Marketing y las relaciones entre clientes y empresas."}
                        />
                    </div>

                    <div className="col-md-4 col-lg-4 mb-4">
                        <DoneCard face={images['equipo-aldo.jpg']} fullname={"Aldo Ledesma"}
                                  biography={"El diseñador del equipo, Aldo estudió en la Escuela Nacional de " +
                                  "Artes Plásticas (ENAP) y tiene un gran portafolio en temas de diseño gráfico " +
                                  "para todo tipo de proyectos, entre ellos esta página Web."}

                        />
                    </div>

                    <div className="col-md-4 col-lg-4 mb-4">
                        <DoneCard face={images['equipo-benita.jpg']} fullname={"Benita"}
                                  biography={"Guau guau guau Hacker guau…"}

                        />
                    </div>



                </div>


            </section>
        );
    }
}


export default DoneTeam;
