import React, {Component} from 'react';
import Masthead from './video-head/Masthead';
import Navbar from '../navbar/Navbar';
import Cities from './cities/Cities';
import City from './city/City'
import Contact from '../contactbar/ContactBar'
import jQuery from 'jquery';
window.jQuery = jQuery;


class Home  extends  Component {

    constructor(){
        super()
        jQuery.noConflict(true)
        this.updateCity = this.updateCity.bind(this)
        this.state = {city:"none",cityId:0}

    }

    updateCity(city,cityId){
        console.log("Ciudad selecionada");
        this.setState({city:city,cityId:cityId});
        let id = "#"+cityId;
        console.log(id);
    }

    updateComponentCity(){
        if(this.state.city == 'none'){
            return <div></div>
        }
        else{

            return <City city={this.state.city} cityId={this.state.cityId}/>
        }
    }

    render () {
       
        return(
            
            <div>
                <Contact/>
                <Navbar/>
                <Masthead/>
                <Cities changeCity={this.updateCity}/>
                {this.updateComponentCity()}


            </div>
        );


    }


}

export default Home;
