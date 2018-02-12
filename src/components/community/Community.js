import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import Contact from '../contactbar/ContactBar';
import Header from '../othersheader/OtherHead';
import CCard from './community-card/CommunityCard';

class Community extends Component {
    render() {
        return (
            <div>
                <Contact/>
                <Navbar/>
                <Header title={"COMUNIDAD"}/>
                <div className="container-fluid">
                    <div className="row justify-content-center mt-5 pb-5">
                        <div className="col-md-10 col-lg-10 mt-5">
                            <CCard fullname={"Ruth Gómez Hidalgo"} job={"Telmex"} text={"Desde un principio lo ví como una " +
                            "inversión, me la jugué y al final me retornó muchísimo.. conocimiento, experiencias, amigos y 4 veces mi sueldo original"} />
                        </div>
                        <div className="col-md-10 col-lg-10 mt-5">
                            <CCard fullname={"José Gustavo Meoño"} job={"Facultad de Medicina UNAM/AMIR México"} text={"Dev.F cumple perfectamente con su función de ser una Des-escuela. " +
                            "Como persona que trabaja directamente en el ambito escolar, el mayor beneficio que tuve de Dev.F fue el cambio de ac tud y " +
                            "de la forma de pensar al momento de trabajar, codear, educar y vivir. Un excelente lugar para obtener conocimientos, " +
                            "pero una aun mayor oportunidad para desarrollarte como persona"} />
                        </div>
                        <div className="col-md-10 col-lg-10 mt-5">
                            <CCard fullname={"Germán Sánchez Vázquez"} job={"Kueski"} text={"Dev.f es sin duda la mejor escuela de hackers de México. " +
                            "La forma en la que aprendes es dinámica y entretenida y los senseis son otro nivel. " +
                            "Estoy muy contento de formar parte de la comunidad de dev.f :D"} />
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}



export default Community;
