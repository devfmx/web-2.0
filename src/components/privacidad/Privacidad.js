import React, {Component} from 'react';
import Contacto from '../contactbar/ContactBar';
import Navbar from '../navbar/Navbar';
import Header from '../othersheader/OtherHead';
import Carousel from '../home/carousel/Carousel';
import Community from '../home/testimonials/Testimonials';
import Companies from'../home/companies/Companies';
import Footer from '../home/footer/Footer';

class Privacidad extends Component {
    render() {
        return (
            <div>
                <Contacto/>
                <Navbar/>
                <Header title={"Aviso de privacidad"}/>
                <div className="container-fluid">
                    <div className="row mb-4 mt-4 justify-content-center">
                        <div className="col-md-10 col-lg-10 text-justify">

                        <p>
                            Este aviso explica todo lo que debe saber en relación a como <strong>DEVF LABS, S.A. DE C.V. (Dev.f)</strong>  protege sus datos personales y los derechos con los que usted cuenta en relación con los mismos.
                        </p>

                            <br/><br/>
                        <p>
                            Dev.f con domicilio para oír y recibir notificaciones en la calle Ometusco num. 25 Col. Hipódromo CP 06100 Del. Cuauhtemoc, Ciudad de México, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
                        </p>
                            <br/><br/>

        Sus datos personales serán utilizados para las siguientes finalidades:
                            <ul>
                                <li>Proveer de los servicios requeridos por clientes.</li>
                                <li>Informar sobre los cambios o nuevos productos o servicios que estén relacionados con nuestros clientes.</li>
                                <li>Dar cumplimiento a obligaciones contraídas con nuestros clientes.</li>
                                <li>Evaluar la calidad del servicio.</li>
                                <li>Realizar estudios internos sobre hábitos de clientes.</li>
                                <li>Enviar información promocional sobre los servicios.</li>
                                <li>Identificación, administración y creación de cuentas de alumnos y empleados.</li>
                                <li>Consideración a candidatos a empleados.</li>
                                <li>Información de pagos.</li>
                                <li>Estadísticas, investigaciones y acciones relativas a estudio de mercado.</li>

                            </ul>
                            <br/><br/>

    Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos personales de distintas formas; cuando usted nos los proporcione de manera directa; cuando vista nuestro sitio de internet o utiliza nuestros servicios en línea, y cuando obtenemos información a través de otras fuentes que están permitidas por la ley.
                            <br/><br/>
    Los datos que obtenemos por este medio pueden ser, entre otros:

    + Nombre.
    + Edad.
    + Nivel de Escolaridad.
    + Domicilio.
    + Teléfono.
    + Correo Electrónico.
                            <br/><br/>

    Sus datos personales serán tratados bajo las más estrictas medidas de seguridad que garanticen su confidencialidad.

                            <br/><br/>
    Usted tiene derecho de acceder a sus datos personales y a los detalles del tratamiento de los mismos, así como a rectificarlos en caso de ser inexactos o incompletos; cancelarlos cuando considere que no se requieren para alguna de las finalidades señaladas en el presente aviso de privacidad, estén siendo utilizados para finalidades no consentidas o haya finalizado la relación contractual o de servicio, o bien, oponerse al tratamiento de los mismos para fines específicos. A estos derechos se les denominará en lo sucesivo ARCO. (ACCESO, RECTIFICACIÓN, CANCELACIÓN Y OPOCISIÓN.)
                            <br/><br/>
    Si tiene alguna pregunta en relación con el presente aviso de privacidad o protección de datos personales, por favor contáctenos hola@devf.mx escribiendo DERECHOS ARCO sobre la línea asunto.
                            <br/><br/>
    Cualquier cambio que se pueda hacer en el futuro a <strong>“como Dev.f protege sus datos personales”</strong> o lo aquí establecido se publicará en esta página.
                            <br/><br/>
    Este aviso de privacidad es vigente a partir de enero 1 de 2016.


                            <br/>


                    </div>
                    </div>
                </div>
                <Carousel/>
                <Community/>
                <Companies/>
                <Footer/>
            </div>
        );
    }
}


export default Privacidad;