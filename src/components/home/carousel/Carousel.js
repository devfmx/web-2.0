import React, {Component} from 'react';
import './style.css';
import OwlCarousel from 'react-owl-carousel';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));



class Carousel extends Component{



    render(){
        const options = {
            items: 3,
            nav: false,
            rewind: true,
            autoplay: true
        };

        const responsive ={
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }

        console.log(images)
        let allImages = Object.keys(images).map((value) =>
            <div className="item"><div className="overlay-carousel">
            </div><img src={images[value]} className="images-carousel" alt=""/></div>
        );
        return(
           <div className="row">
               <div className="col-md-12 col-lg-12">
                   <div className="div-carousel">
                       <OwlCarousel
                           loop margin={0} autoplay={true} slideBy={3} responsive={responsive}
                       >
                           {allImages}
                       </OwlCarousel>

                   </div>
               </div>
           </div>

        );
    }


}

export default Carousel;