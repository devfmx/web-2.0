import React, {Component} from 'react';
import Masthead from './video-head/Masthead';
import Navbar from '../navbar/Navbar';
import Cities from './cities/Cities';
import City from './city/City';
import Contact from '../contactbar/ContactBar';
import Carousel from './carousel/Carousel';
import Testimonials from './testimonials/Testimonials';
import Companies from './companies/Companies';
import Footer from './footer/Footer';
import Firebase from '../Firebase';

import jQuery from 'jquery';
window.jQuery = jQuery;


class Home  extends  Component {

    constructor(props){
        super(props);
        jQuery.noConflict(true);
        console.log(props.city);
        this.updateCity = this.updateCity.bind(this);
        this.state = {city:"none",
            cityId:0,
            cityO:null,
            defecto: props.city || "CDMX-ROMA",
            prueba:1
            }

    }




    componentDidMount(){
        const cities = Firebase.database().ref().child('cities');
        cities.on('value',content => {
            let ciudad = content.val()[this.state.defecto];
            this.setState({
                city:this.state.defecto,
                cityId: ciudad.id,
                cityO: ciudad
            });
        });
    }



    updateCity(city,cityId,cityO){
        console.log("Ciudad selecionada");
        this.setState({city:city,cityId:cityId,cityO:cityO,prueba:3});
        let id = "#"+cityId;
    }

    updateComponentCity(){
        console.log(this.state.city)
        if(this.state.city === 'none'){
            return <div>{this.state.prueba}</div>
        }
        else{
            return <City city={this.state.city} cityId={this.state.cityId} cityO={this.state.cityO}/>
        }
    }

    render () {
       
        return(
            
            <div>
                <Contact/>
                <Navbar/>

                    <Masthead/>
                    <Cities changeCity={this.updateCity} ref="cities"/>
                    {this.updateComponentCity()}

                    <Carousel/>
                    <Testimonials/>
                    <Companies/>
                    <Footer/>



            </div>
        );


    }


}

export default Home;
