import React, {Component} from 'react';
import './style.css';
import DoneCard from './donecard/DoneCard';
import u from './doneAssets/ulises.png'

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
                        <p>Este equipo es el responsable de áreas opera vas y actividades relacionadas con tecnología,
                            marketing y todo tipo de procesos que requiere dev.f para lograr nuestra misión.</p>
                    </div>
                    <div className="col-md-2 col-lg-2">

                    </div>
                </div>

                <div className="row justify-content-center" style={{marginTop:"3rem"}}>



                    <div className="col-md-4 col-lg-4 ">
                        <DoneCard face={u} fullname={"Elías"} biography={"Miembro ac vo de diversas comunidades y\n" +
                        "proyectos de innovación, Elias ha sido co-director del hackathón StartupBus México"}
                                  mojo={"Oat cake carrot cake chocolate candy oat cake. Tiramisu biscuit pie."}/>
                    </div>

                    <div className="col-md-4 col-lg-4 ">
                        <DoneCard face={u} fullname={"Elías"} biography={"Miembro ac vo de diversas comunidades y\n" +
                        "proyectos de innovación, Elias ha sido co-director del hackathón StartupBus México"}
                                  mojo={"Oat cake carrot cake chocolate candy oat cake. Tiramisu biscuit pie."}/>
                    </div>

                    <div className="col-md-4 col-lg-4 ">
                        <DoneCard face={u} fullname={"Elías"} biography={"Miembro ac vo de diversas comunidades y\n" +
                        "proyectos de innovación, Elias ha sido co-director del hackathón StartupBus México"}
                                  mojo={"Oat cake carrot cake chocolate candy oat cake. Tiramisu biscuit pie."}/>
                    </div>


                </div>


            </section>
        );
    }
}


export default DoneTeam;
