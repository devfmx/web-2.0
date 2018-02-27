import React, {Component} from 'react';



function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

class LevelTwo extends Component {

    constructor(props){
        super(props);
        this.state ={
            hover:false,
            element:0
        };

        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    hoverOn(element){
        this.setState({
            hover:true,
            element:element
        })
    }

    hoverOff(){
        this.setState({
            hover:false,
            element:0
        })

    }


    handleClick(element){
        this.props.selectLevel(element)
    }



    render() {
        return (
            <div className="row row-level-one  justify-content-center animated slideInRight">
                <div className="col-md-2 col-lg-2 option-test"
                     onMouseEnter={() => {this.hoverOn(7)}}
                     onMouseLeave={this.hoverOff}
                     onClick={() => {this.handleClick(7) }}
                >
                    <img src={images['icono-nivel-07.png']} alt=""
                         className={(this.state.hover && this.state.element===7)?"animated tada infinite":""}
                    />
                    <span>Quiero entender el mundo de la tecnologia para liderar equipos aunque yo no sea tecnico</span>
                </div>
                <div className="col-md-2 col-lg-2 text-center option-test"
                     onMouseEnter={() => {this.hoverOn(8)}}
                     onMouseLeave={this.hoverOff}
                     onClick={() => {this.handleClick(8) }}
                >
                    <img src={images['icono-nivel-08.png']} alt="" className={(this.state.hover && this.state.element===8)?"animated tada infinite":""}/>
                    <span>Quiero aprender a programar desde cero</span>
                </div>
                <div className="col-md-2 col-lg-2 text-center option-test"
                     onMouseEnter={() => {this.hoverOn(9)}}
                     onMouseLeave={this.hoverOff}
                     onClick={() => {this.handleClick(9) }}
                >
                    <img src={images['icono-nivel-09.png']} alt="" className={(this.state.hover && this.state.element===9)?"animated tada infinite":""}/>
                    <span>Quiero mejorar mis habilidades de programacion</span>
                </div>
                <div className="col-md-2 col-lg-2 text-center option-test"
                     onMouseEnter={() => {this.hoverOn(10)}}
                     onMouseLeave={this.hoverOff}
                     onClick={() => {this.handleClick(10) }}
                >
                    <img src={images['icono-nivel-10.png']} alt="" className={(this.state.hover && this.state.element===10)?"animated tada infinite":""}/>
                    <span>Quiero diseñar productos tecnologicos entendiendo a mis usuarios</span>
                </div>
                <div className="col-md-2 col-lg-2 text-center option-test"
                     onMouseEnter={() => {this.hoverOn(11)}}
                     onMouseLeave={this.hoverOff}
                     onClick={() => {this.handleClick(11) }}
                >
                    <img src={images['icono-nivel-11.png']} alt="" className={(this.state.hover && this.state.element===11)?"animated tada infinite":""}/>
                    <span>Quiero encontrar patrones de comportamiento en un set de datos</span>
                </div>
            </div>
        );
    }
}



export default LevelTwo;
