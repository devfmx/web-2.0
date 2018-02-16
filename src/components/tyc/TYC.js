import React, {Component} from 'react';
import Contacto from '../contactbar/ContactBar';
import Navbar from '../navbar/Navbar';
import Header from '../othersheader/OtherHead';
import Carousel from '../home/carousel/Carousel';
import Community from '../home/testimonials/Testimonials';
import Companies from'../home/companies/Companies';
import Footer from '../home/footer/Footer';

class TYC extends Component {
    render() {
        return (
            <div>
                <Contacto/>
                <Navbar/>
                <Header title={"Terminos y Condiciones"}/>
                <div className="container-fluid">
                    <div className="row mb-4 mt-4 justify-content-center">
                        <div className="col-md-10 col-lg-10 text-justify">

                            Los términos y Condiciones de Pago que a continuación se presentan constituyen el acuerdo entre Dev.f y cualquier cliente que haya efectivamente realizado un pago de inscripción a alguno de los programas ofrecidos por Dev.f.
                            <br/><br/>

                    Una vez que el cliente se haya inscrito a alguno de los programas, pagando el monto total de su costo, sólo en las 24 horas siguientes a que se realizó dicho pago podrá recibir un reembolso por el 100% del costo del programa. Lo anterior en caso de que éste quiera cancelar su inscripción.
                            <br/><br/>

        Transcurridas las primeras 24 horas, sólo podrá recibir un reembolso por el 70% del costo del programa si se realiza la cancelación de la inscripción antes de iniciar el curso.
                            <br/><br/>

    El cliente que se haya inscrito a alguno de los programas pagando el monto total de su costo, podrá cambiarse indistintamente de programa sólo en la primera semana del curso. Lo anterior, independientemente del perfil que éste haya elegido, lo cual significa que si el cliente decide cambiar de un programa del mismo perfil, es decir, de un programa de “Code Hacker” a otro de “Code Hacker”, o de “Startup Hacker” a otro de “Startup Hacker”, podrá hacerlo sin costo alguno. En el supuesto de que el cliente decida cambiar de un programa del perfil “Startup Hacker” a otro programa del perfil “Code Hacker” éste deberá cubrir el monto de la diferencia entre el costo de cada uno de los programas. Asimismo, si el cliente decide cambiar de un programa del perfil “Code Hacker” a uno del perfil “Startup Hacker” sólo le será devuelto el 50% del monto de la diferencia entre el costo de cada uno de los programas.
                            <br/><br/>

    En el supuesto de que el cliente quiera cancelar su inscripción una vez que el curso haya comenzado, sólo podrá hacerlo en días hábiles de la primera semana y se le reembolsará el 50% del costo del programa en el que se haya inscrito. Transcurrido ese tiempo no habrá devoluciones, únicamente se tendrá por pagado el curso y el cliente podrá inscribirse en próximas ediciones de los cursos. En caso de que el precio suba en las próximas ediciones de los cursos, el cliente tendrá que cubrir la diferencia del monto entre el costo del programa que se le tiene por pagado y el curso con la nueva tarifa.
                            <br/><br/>

    Los descuentos en programas seleccionados no son acumulables con otras promociones.
                            <br/><br/>

    Nota: La política de nuestras 3 condiciones anteriores, con respecto a la devolución de solamente un porcentaje de las cuotas totales correspondientes, tal y como se menciona con antelación en los puntos 1, 2 y 3, es debido a que Dev.f prepara la logística de sus programas con anticipación a su inicio y para ello debe comprometer gastos previo a su ejecución.

                            <br/><br/>

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


export default TYC;