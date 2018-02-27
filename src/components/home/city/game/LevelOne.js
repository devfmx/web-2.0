import React, {Component} from 'react';



function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

class LevelOne extends Component {

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


    handleClick(){
        this.props.selectLevel(2)
    }



    render() {
        return (
            <div className="row row-level-one animated slideInRight">
                <div className="col-md-2 col-lg-2 option-test"
                     onMouseEnter={() => {this.hoverOn(1)}}
                     onMouseLeave={this.hoverOff}
                     onClick={this.handleClick}
                >
                    <img src={images['icono-nivel-01.png']} alt=""
                         className={(this.state.hover && this.state.element===1)?"animated tada infinite":""}
                    />
                    <span>Quiero Obtener mi primer trabajo</span>
                </div>
                <div className="col-md-2 col-lg-2 text-center option-test"
                     onMouseEnter={() => {this.hoverOn(2)}}
                     onMouseLeave={this.hoverOff}
                     onClick={this.handleClick}
                >
                    <img src={images['icono-nivel-02.png']} alt="" className={(this.state.hover && this.state.element===2)?"animated tada infinite":""}/>
                    <span>Quiero Crecer en mi trabajo actual</span>
                </div>
                <div className="col-md-2 col-lg-2 text-center option-test"
                     onMouseEnter={() => {this.hoverOn(3)}}
                     onMouseLeave={this.hoverOff}
                     onClick={this.handleClick}
                >
                    <img src={images['icono-nivel-03.png']} alt="" className={(this.state.hover && this.state.element===3)?"animated tada infinite":""}/>
                    <span>Quiero Cambiarme de Trabajo</span>
                </div>
                <div className="col-md-2 col-lg-2 text-center option-test"
                     onMouseEnter={() => {this.hoverOn(4)}}
                     onMouseLeave={this.hoverOff}
                     onClick={this.handleClick}
                >
                    <img src={images['icono-nivel-04.png']} alt="" className={(this.state.hover && this.state.element===4)?"animated tada infinite":""}/>
                    <span>Quiero Emprender en mi propio Startup</span>
                </div>
                <div className="col-md-2 col-lg-2 text-center option-test"
                     onMouseEnter={() => {this.hoverOn(5)}}
                     onMouseLeave={this.hoverOff}
                     onClick={this.handleClick}
                >
                    <img src={images['icono-nivel-05.png']} alt="" className={(this.state.hover && this.state.element===5)?"animated tada infinite":""}/>
                    <span>Quiero Integrarme a la comunidad hacker de dev.f</span>
                </div>
                <div className="col-md-2 col-lg-2 text-center option-test"
                     onMouseEnter={() => {this.hoverOn(6)}}
                     onMouseLeave={this.hoverOff}
                     onClick={this.handleClick}
                >
                    <img src={images['icono-nivel-06.png']} alt="" className={(this.state.hover && this.state.element===6)?"animated tada infinite":""}/>
                    <span>Quiero aprender una nueva habilidad porque #nerd</span>
                </div>
            </div>
        );
    }
}



export default LevelOne;
