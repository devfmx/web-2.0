import React, {Component} from 'react';





function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

class LevelThree extends Component {

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

    hoverOn(){
        this.setState({
            hover:true,
        })
    }

    hoverOff(){
        this.setState({
            hover:false,
        })

    }


    handleClick(element){
        this.props.selectLevel(element)
    }




    render() {
        return (
            <div className="row row-level-one  justify-content-center animated slideInRight">
                <div className="col-md-2 col-lg-2 option-test"
                     onMouseEnter={this.hoverOn}
                     onMouseLeave={this.hoverOff}
                >
                    <img src={images['icono-nivel-12.png']} alt=""
                         className={(this.state.hover)?"animated tada infinite":""}
                    />
                    <span>Enteindes y dominas variables, validaciones loops y funciones en JS</span>


                </div>

                <div className="col-md-12 col-lg-12">
                    <div className="row justify-content-center mt-4">
                        <div className="col-md-1 col-lg-1 mt-1">
                            <button className="btn btn-buy btn-game" onClick={() => {this.handleClick(13)}}>SI</button>
                        </div>
                        <div className="col-md-1 col-lg-1 mt-1">
                            <button className="btn btn-buy btn-game" onClick={() => {this.handleClick(8)}}>NO</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default LevelThree;
