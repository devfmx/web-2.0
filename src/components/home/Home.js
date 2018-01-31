import React, {Component} from 'react';
import Masthead from './video-head/Masthead';
import Navbar from '../navbar/Navbar';

class Home  extends  Component {


    render () {
       
        return(
            
            <div>
                <div>News</div>
                <Navbar/>
                <Masthead/>
            </div>
        );


    }


}

export default Home;
