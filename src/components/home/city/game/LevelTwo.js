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
        this.props.selectOptionTwo(element)
    }



    render() {
        return (
            <div className="row row-level-one  justify-content-center animated slideInRight">
                <div className="col-md-2 col-lg-2 option-test"
                     onMouseEnter={() => {this.hoverOn(1)}}
                     onMouseLeave={this.hoverOff}
                     onClick={() => {this.handleClick(1) }}
                >
                    <img src={images['icono-nivel-07.png']} alt=""
                         className={(this.state.hover && this.state.element===1)?"animated tada infinite":""}
                    />
                    <span>Quiero entender el mundo de la tecnologia para liderar equipos aunque yo no sea tecnico</span>
                </div>
                <div className="col-md-2 col-lg-2 text-center option-test"
                     onMouseEnter={() => {this.hoverOn(2)}}
                     onMouseLeave={this.hoverOff}
                     onClick={() => {this.handleClick(2) }}
                >
                    <img src={images['icono-nivel-08.png']} alt="" className={(this.state.hover && this.state.element===2)?"animated tada infinite":""}/>
                    <span>Quiero aprender a programar desde cero</span>
                </div>
                <div className="col-md-2 col-lg-2 text-center option-test"
                     onMouseEnter={() => {this.hoverOn(3)}}
                     onMouseLeave={this.hoverOff}
                     onClick={() => {this.handleClick(3) }}
                >
                    <img src={images['icono-nivel-09.png']} alt="" className={(this.state.hover && this.state.element===3)?"animated tada infinite":""}/>
                    <span>Quiero mejorar mis habilidades de programacion</span>
                </div>
                <div className="col-md-2 col-lg-2 text-center option-test"
                     onMouseEnter={() => {this.hoverOn(4)}}
                     onMouseLeave={this.hoverOff}
                     onClick={() => {this.handleClick(4) }}
                >
                    <img src={images['icono-nivel-10.png']} alt="" className={(this.state.hover && this.state.element===4)?"animated tada infinite":""}/>
                    <span>Quiero diseñar productos tecnologicos entendiendo a mis usuarios</span>
                </div>
                <div className="col-md-2 col-lg-2 text-center option-test"
                     onMouseEnter={() => {this.hoverOn(5)}}
                     onMouseLeave={this.hoverOff}
                     onClick={() => {this.handleClick(5) }}
                >
                    <img src={images['icono-nivel-11.png']} alt="" className={(this.state.hover && this.state.element===5)?"animated tada infinite":""}/>
                    <span>Quiero encontrar patrones de comportamiento en un set de datos</span>
                </div>
            </div>
        );
    }
}



export default LevelTwo;
