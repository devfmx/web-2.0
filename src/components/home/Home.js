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


import jQuery from 'jquery';
window.jQuery = jQuery;


class Home  extends  Component {

    constructor(){
        super()
        jQuery.noConflict(true)
        this.updateCity = this.updateCity.bind(this)
        this.state = {city:"none",cityId:0,cityO:null}

    }

    updateCity(city,cityId,cityO){
        console.log("Ciudad selecionada");
        this.setState({city:city,cityId:cityId,cityO:cityO});
        let id = "#"+cityId;
        console.log(id);
    }

    updateComponentCity(){
        if(this.state.city == 'none'){
            return <div></div>
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
