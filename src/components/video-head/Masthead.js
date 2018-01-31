import React, {Component} from 'react';
import './head.css';
import video from './video.mp4'



class Masthead  extends  Component {

    constructor(){
        super()
    }




    render () {
       
        return(
            <header className="masthead text-white text-center">
                <div className="overlay"></div>
                <div className="container">
                <video autoPlay loop id="video-background" muted plays-inline>
                    <source src={video} type="video/mp4"/>
                </video>
                </div>
            </header>
        );


    }


}

export default Masthead;
