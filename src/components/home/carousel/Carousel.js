import React, {Component} from 'react';
import './style.css';
import OwlCarousel from 'react-owl-carousel';

import program from './progam.jpg'

class Carousel extends Component{



    render(){
        const options = {
            items: 3,
            nav: false,
            rewind: true,
            autoplay: true
        };
        return(
          <div className="div-carousel">
              <OwlCarousel
                  loop margin={0} autoplay={true} slideBy={3}
              >

                  <div className="item"><div className="overlay-carousel">
                  </div><img src={program} alt=""/></div>
                  <div className="item"><div className="overlay-carousel">
                  </div><img src={program} alt=""/></div>
                  <div className="item"><div className="overlay-carousel">
                  </div><img src={program} alt=""/></div>
                  <div className="item"><div className="overlay-carousel">
                  </div><img src={program} alt=""/></div>
                  <div className="item"><div className="overlay-carousel">
                  </div><img src={program} alt=""/></div>
                  <div className="item"><div className="overlay-carousel">
                  </div><img src={program} alt=""/></div>
                  <div className="item"><div className="overlay-carousel">
                  </div><img src={program} alt=""/></div>
                  <div className="item"><div className="overlay-carousel">
                  </div><img src={program} alt=""/></div>
                  <div className="item"><div className="overlay-carousel">
                  </div><img src={program} alt=""/></div>
                  <div className="item"><div className="overlay-carousel">
                  </div><img src={program} alt=""/></div>
                  <div className="item"><div className="overlay-carousel">
                  </div><img src={program} alt=""/></div>
                  <div className="item"><div className="overlay-carousel">
                  </div><img src={program} alt=""/></div>
              </OwlCarousel>

          </div>
        );
    }


}

export default Carousel;