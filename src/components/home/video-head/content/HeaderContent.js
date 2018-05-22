import React, {Component} from 'react';
import "./style.css";
import scrollToComponent from 'react-scroll-to-component';
import Modal from 'react-bootstrap4-modal';
import Firebase  from '../../../Firebase';


class HeaderContent  extends  Component {

    constructor(props){
        super(props);
        this.state = {
            cities:{},
            city:window.location.href.split("/")[3],
            modal:false,
        };

        this.handleInterest = this.handleInterest.bind(this);
        this.handleVideo = this.handleVideo.bind(this);
        this.modalBackdropClicked = this.modalBackdropClicked.bind(this);
    }

    componentDidMount(){
        const cities = Firebase.database().ref().child('cities');
            cities.on('value',content => {
                console.log(content.val())
                this.setState({
                    cities: content.val(),
                });
            });


    }

    handleInterest(){
        var i = 10;
        var int = setInterval(function() {
            window.scrollTo(0, i);
            i += 25;
            if (i >= 750) clearInterval(int);
        }, 20);

    }


    handleVideo(){
        this.setState({
            modal:!this.state.modal
        })
    }

    selectedCity = (city) => {

        console.log(city)
        let cityO = this.state.cities[city];
        this.setState({
            city:cityO.slug
        });
        this.props.selectCity(city,cityO.id,cityO)
        this.handleInterest()
    };

    modalBackdropClicked(){
        this.setState({
            modal:!this.state.modal
        })
    }
    
    render () {

        const cities  = Object.keys(this.state.cities).map((city) => {
            return (
                <div className="col-xl-3 col-lg-3 col-md-3 text-center">
                    <button className={(this.state.city === this.state.cities[city].slug ) ? "btn btn-devf selected": "btn btn-devf"}
                            onClick={(e) => {this.selectedCity(city)}}>{this.state.cities[city].name}</button>
                </div>
            )
        });
       
        return(
            <div id="content-head">
                <div className="row justify-content-center ">
                    <div className="col-xl-9 ">
                        <h1 className="mb-5 title-devf">¡Hackea tu educación!</h1>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 col-md-8 ">
                        <p className="text-devf">
                            Con más de 1,700 participantes y 120 programas de experiencia,
                            Dev.f es la escuela ideal para que aprendas a programar y te conviertas en
                            un gran desarrollador de software rodeado de la comunidad hacker más inspiradora de México.
                        </p>
                    </div>
                </div>

                <div className="row row-devf-b justify-content-center">
                    <div className="col-md-10 col-lg-10 text-center">
                        <h4>CURSOS EN:</h4>
                    </div>
                </div>

                <div className="row row-devf-b justify-content-center">
                    {cities}
                </div>





        </div>


    
        );


    }


}

export default HeaderContent ;
