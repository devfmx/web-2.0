import React, {Component} from 'react';
import Masthead from './video-head/Masthead';
import Navbar from '../navbar/Navbar';
import Cities from './cities/Cities';


class Home  extends  Component {


    render () {
       
        return(
            
            <div>
                <div>News</div>
                <Navbar/>
                <Masthead/>
                <Cities/>
            </div>
        );


    }


}

export default Home;
