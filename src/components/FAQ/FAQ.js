import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import Contact from '../contactbar/ContactBar';
import Header from '../othersheader/OtherHead';
import Collapsible from 'react-collapsible';
import "./style.css";

//TODO Hacer un componente para cada seccion
class FAQ extends Component {
    render() {
        return (
            <div>
                <Contact/>
                <Navbar/>
                <Header title={"FAQ"}/>
                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col-md-12 col-lg-12 text-center">
                            <h3 className="faq-title">Dudas de nuestros programas</h3>
                        </div>
                    </div>

                        <div className="row justify-content-center mt-5">
                            <div className="col-md-10 col-lg-10">
                                <Collapsible trigger=" No sé nada de programación ¿puedo entrar a sus programas?">
                                    <p>Sí. No necesitas tener experiencia previa en programación para entrar a nuestros
                                        programas, ya que varios de ellos están diseñados para principiantes o personas
                                        que no tienen un perfil profesional relacionado a tecnología.</p>
                                </Collapsible>

                                <Collapsible trigger="¿Cuáles son sus programas para principiantes?">
                                        <p>
                                            Tenemos cuatro programas que pueden cursar personas sin experiencia en programación:
                                            Cinta Blanca, Executive Hacker, Intro a Data Science y UX Ninja.
                                            (Integrar links a la descripción de cada programa).
                                        </p>
                                </Collapsible>

                                <Collapsible trigger="¿Qué se ve en Cinta Blanca?">
                                    <p>En Cinta Blanca aprendemos los conceptos fundamentales de cómo funciona la programación orientada a objetos.</p>
                                </Collapsible>


                                <Collapsible trigger="¿Qué se ve en Cinta Roja?">
                                    <p>Es un programa de nivel intermedio y se requiere entregar un exámen diagnóstico para participar en el programa. Necesitas tener experiencia en CSS, html y conocimientos de programación orientada a objetos con JavaScript.</p>
                                    <p>En Cinta Roja se aprende a crear una aplicación web que esté conectada a una base de datos. El estudiante comienza a ver fundamentos de ciencias computacionales como algoritmos, estructuras de datos, arquitecturas cliente - servidor, entre otros temas.</p>
                                </Collapsible>

                                <Collapsible trigger="¿Qué se ve en Cinta Negra?">
                                    <p>Es un programa de nivel avanzado y se requiere entregar un exámen diagnóstico para participar en el programa. Necesitas tener experiencia en CSS, HTML, Git, conocimientos de programación orientada a objetos con JavaScript, algoritmos, estructuras de datos y la arquitectura cliente - servidor.</p>
                                    <p>En Cinta Negra desarrollaremos 4 proyectos en React o Express utilizando las mejores prácticas como el uso de arquitecturas como clean code, SOLID y patrones de diseño. Además aplicaremos principios de ingeniería de software modernos que utilizan empresas como Airbnb, Uber y Google.</p>
                                </Collapsible>

                                <Collapsible trigger="¿Cuál es la diferencia entre Executive Hacker y Cinta Blanca?">
                                    <p>El programa Cinta Blanca está dirigido a personas que quieran entender el mundo del internet y de la programación desde el punto de vista de un programador; es decir, van a aprender los fundamentos prácticos para poder desarrollar habilidades o una carrera como programadores. En Executive Hacker los participantes entienden el mundo de internet y la programación pero desde la perspectiva de un profesional que trabaja de cerca (o quiere estar cerca) con tecnología, programadores o temas de innovación.</p>
                                </Collapsible>

                                <Collapsible trigger="No sé si entrar a Cinta Roja o a Cinta Negra.">
                                    <p>En nuestra página principal puedes encontrar un pequeño examen para evaluar si necesitas tomar cinta roja o cinta negra.  Si después de este todavía no estás seguro te tenemos varias alternativas: </p>
                                    <p>1. Regístrate para la cinta que sientas que te queda mejor, el primer día haremos un examen diagnóstico en el que evaluaremos más a profundidad tus competencias y te recomendaremos si es mejor para ti estar en otro nivel.</p>
                                    <p>2. Todos nuestros programas cuestan lo mismo y son a la misma hora, así que si en tus primeras clases sientes que el nivel que estás es el equivocado, te puedes cambiar a otra cinta.</p>
                                    <p>3. Escríbenos a hola@devf.mx o a nuestro chat para que te pongamos en contacto con alguno de nuestros Senseis.</p>
                                </Collapsible>

                                <Collapsible trigger="¿Me dan algún reconocimiento al final?">
                                    <p>Cuando terminas el programa te otorgamos un diploma que certifica la terminación completa y exitosa del programa educativo. Para recibir este diploma el estudiante tiene que asistir como mínimo al 80% de las sesiones.</p>
                                </Collapsible>

                                <Collapsible trigger="¿Me dan algún reconocimiento al final?">
                                    <p>
                                        Cuando terminas el programa te otorgamos un diploma que certifica la terminación
                                        completa y exitosa del programa educativo. Para recibir este diploma el estudiante
                                        tiene que asistir como mínimo al 80% de las sesiones.

                                    </p>
                                </Collapsible>

                            </div>
                    </div>



                    <div className="row mt-5">
                        <div className="col-md-12 col-lg-12 text-center">
                            <h3 className="faq-title">Dudas de Logística</h3>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-md-10 col-lg-10">
                            <Collapsible trigger="¿Tienen programas en línea?">
                                <p>No, por el momento todos nuestros programas son presenciales</p>
                            </Collapsible>
                            <Collapsible trigger="¿Tienen programas en las mañanas?">
                                <p>
                                    No. Nuestras clases son en las noches para que cualquier persona que estudia
                                    o trabaja pueda asistir.
                                </p>
                            </Collapsible>
                            <Collapsible trigger="¿Tienen clases los fines de semana?">
                                <p>Las Cintas Blanca, Roja y Negra duran 5 semanas y las clases son de lunes a viernes
                                    de 7:00pm a 10:00pm.</p>
                                <p>
                                    Los programas Executive Hacker, UX y Data Science también duran 5 semanas,
                                    pero son únicamente dos días a la semana de 7:00pm a 10:00pm.
                                </p>
                            </Collapsible>
                            <Collapsible trigger="¿Tienen clases en mi ciudad?">
                                <p>
                                    Por el momento contamos con cursos en la Ciudad de México
                                    (Col. Roma y Santa Fe) y Guadalajara. Sin embargo estaremos
                                    abriendo sedes en otras ciudades durante el año. Si quieres que vayamos a tu
                                    ciudad por favor déjanos los datos aquí (https://devf.typeform.com/to/ZP8xrk).


                                </p>
                            </Collapsible>

                            <Collapsible trigger="¿Tienen todos los programas en todas las sedes?">
                                <p>
                                    No, en cada sede tenemos distintos programas. Por favor consulta la sede aquí para
                                    ver qué programas ofrecemos ahí.

                                </p>
                            </Collapsible>



                        </div>
                    </div>


                    <div className="row mt-5">
                        <div className="col-md-12 col-lg-12 text-center">
                            <h3 className="faq-title">Dudas de pagos</h3>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-md-10 col-lg-10">
                            <Collapsible trigger="¿Cómo puedo pagar mi programa?">
                                <p>
                                    Nuestras formas de pago son: Cualquier tarjeta de crédito
                                    (hasta a 12 meses SIN intereses), transferencia bancaria, depósito bancario u Oxxo Pay.

                                </p>
                            </Collapsible>
                            <Collapsible trigger="¿El costo del programa incluye IVA?">
                                <p>Sí, todos nuestros precios ya incluyen IVA.</p>
                            </Collapsible>
                            <Collapsible trigger="¿Me pueden dar factura?">
                                <p>
                                    Sí, en cuanto tu pago quede registrado (nos ayuda mucho que nos envíes tu comprobante de pago)
                                    mándanos tus datos y nosotros te generamos tu factura lo más pronto posible.
                                </p>
                            </Collapsible>
                            <Collapsible trigger="¿Me pueden dar factura?">
                                <p>
                                    Sí, tenemos un paquete en el que puedes pagar Cinta Blanca, Roja y Negra al mismo
                                    tiempo. Así te puedes ahorrar 30% del precio.
                                </p>
                            </Collapsible>
                        </div>
                    </div>


                    <div className="row mt-5">
                        <div className="col-md-12 col-lg-12 text-center">
                            <h3 className="faq-title">Dudas de Becas</h3>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-md-10 col-lg-10 text-justify">
                            <Collapsible trigger="¿Cómo puedo aplicar a una beca?">
                               <p>
                                   La solicitud a nuestras becas se encuentran aquí. Es un cuestionario que personas
                                   interesadas deben de llenar hasta el sábado antes de que comience el Batch.
                                   Es importante indicar que las becas funcionan como concurso, ya que es mucho mayor
                                   cantidad de aplicantes que las becas que podemos ofrecer por ahora, así que el aplicar
                                   para una beca no garantiza que la vayas a obtener. De todos modos te recomendamos que
                                   te prepares como si sí la fueras a obtener, para que en caso de una respuesta favorable,
                                   puedas incorporarte al programa educativo.

                               </p>
                            </Collapsible>
                            <Collapsible trigger="¿Qué requisitos necesito para aplicar a una beca?">
                                <p>
                                    No tenemos requisitos específicos. Sin embargo los aplicantes deben de explicar
                                    por qué necesitan la beca, para qué quieren aprovechar su aprendizaje,
                                    y se deben de comprometer a: terminar y a aprovechar mucho el programa,
                                    pagar el % del programa que no reciban de beca y responder a encuestas/entrevistas
                                    de seguimiento después de que termine el programa.

                                </p>
                            </Collapsible>
                            <Collapsible trigger="¿Todas las becas son iguales?">
                                <p>
                                    No. Varias empresas son patrocinadoras de algunas de las becas y cada empresa tiene
                                    la alternativa de tener criterios específicos para sus becas.
                                    Estos criterios son comunicados en las convocatorias para que quienes aplican estén
                                    al tanto de estas particularidades.
                                </p>
                            </Collapsible>

                            <Collapsible trigger="¿Cuánto cubre la beca?">
                                <p>
                                    Las becas pueden cubrir 25%, 50% o 75% del precio del programa.
                                    Cuando se otorga la beca a un candidato se le informa de la cantidad de beca que recibió.
                                </p>
                            </Collapsible>

                            <Collapsible trigger="¿Seguro me toca beca?">
                                <p>
                                    Muchas personas solicitan a becas para nuestros programas,
                                    por lo que no podemos otorgar becas a todos, solo a los candidatos
                                    con las mejores aplicaciones.

                                </p>
                            </Collapsible>

                        </div>
                    </div>





                    <div className="row mt-5">
                        <div className="col-md-12 col-lg-12 text-center">
                            <h3 className="faq-title">Glosario</h3>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-md-10 col-lg-10 text-justify">
                            <Collapsible trigger="Batch:">
                                <p>
                                    Cada una de las generaciones de estudiantes que se lanzan en Dev.f
                                    cada 5 semanas. Un batch incluye cada uno de los grupos
                                    de los diferentes programas educativos (Cinta Blanca, Roja y Negra,
                                    así como Executive Hacker, UX Ninja e Intro a Data Science, si están activos en esa sede).

                                </p>
                            </Collapsible>
                            <Collapsible trigger="Batch Master:">
                                <p>
                                    Es la persona responsable de que la experiencia de Dev.f sea la mejor posible en cada batch.
                                    Generalmente es algún o alguna Sensei o alguien del equipo operativo de Dev.f.
                                </p>
                            </Collapsible>
                            <Collapsible trigger="Code Hacker:">
                                <p>
                                    Son los programas educativos de Dev.f que tienen que ver con aprender programación
                                    y desarrollo de Software, las Cintas Blanca, Roja y Negra.

                                </p>
                            </Collapsible>

                            <Collapsible trigger="Cinta:">
                                <p>
                                    Dev.f no funciona como una escuela tradicional, sino más bien
                                    como un dojo de artes marciales. Por lo mismo, llamamos a nuestros
                                    programas educativos de código Cintas, como las insignias que se obtienen al
                                    avanzar en la práctica de un arte marcial.

                                </p>
                            </Collapsible>


                            <Collapsible trigger="Día 0:">
                                <p>
                                    Es el primer día de un nuevo batch en Dev.f.
                                    Aprovechamos este día para dar una pequeña inducción
                                    sobre cómo funciona Dev.f, para resolver dudas de las y los
                                    nuevos estudiantes y para que se empiecen a conocer todas las personas participantes.


                                </p>
                            </Collapsible>


                            <Collapsible trigger="Early Bird:">
                                <p>
                                    The Early Bird catches the  worm, dice el dicho. Es la promoción que ofrecemos a
                                    personas que se anticipan con su inscripción a nuestros programas educativos.
                                    Revisa nuestras fechas para enterarte de cuándo habrá promoción Early Bird.
                                </p>
                            </Collapsible>


                            <Collapsible trigger="Hackathon">
                                <p>
                                    Es una competencia en la cual el objetivo es resolver un problema de la forma
                                    más ingeniosa, ágil y creativa posible, generalmente usando tecnología.
                                    Parece magia, pero pasa que en un hackathon a veces se crea tecnología que
                                    genuinamente resuelve una problemática o necesidad en tan sólo un par de días.
                                    Por esto amamos los hackathons y por todo lo que se aprende en ellos sobre desarrollo
                                    de nuevos productos tecnológicos.

                                </p>
                            </Collapsible>

                            <Collapsible trigger="Hacker:">
                                <p>
                                    Nuestra definición (que coincide con la de lugares como MIT o Silicon Valley):
                                    una persona con curiosidad intelectual, quien no se conforma con sólo observar
                                    pasivamente problemas a su alrededor y por lo tanto sin pedir permiso se pone a
                                    resolverlos creativamente, usualmente aprovechando el poder de la tecnología.

                                </p>
                            </Collapsible>


                            <Collapsible trigger="Sensei:">
                                <p>
                                    Es cada uno de los instructores en Dev.f. Un Sensei no es un profesor,
                                    sino más bien un o una guía que te acompaña en tu largo camino de aprendizaje,
                                    compartiendo contigo sus experiencias, sus conocimientos y su amistad.

                                </p>
                            </Collapsible>

                            <Collapsible trigger="Startup Hacker:">
                                <p>
                                    Son nuestros programas educativos que tienen que ver más con desarrollo
                                    de nuevos productos de software y no tanto con programación.
                                    Quien los cursa no busca convertirse en programador o desarrollador de software,
                                    sino más bien obtener herramientas para poder participar en la creación de un nuevo
                                    producto o servicio digital. Los programas de Startup Hacker incluyen Executive Hacker,
                                    UX Ninja e Intro a Data Science.
                                </p>
                            </Collapsible>

                        </div>
                    </div>





                </div>
            </div>
        );
    }
}



export default FAQ;
