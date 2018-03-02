import React, {Component} from 'react';
import './style.css'
import LevelOne from './LevelOne';
import LevelTwo from './LevelTwo';
import LevelThree from './LevelThree';
import LevelFour from './LevelFour';
import Result from './Result';







class Game extends Component {

    constructor(props){
        super(props);

        this.state = {

          selectLevel:1,
        };

        this.selectLevel = this.selectLevel.bind(this);
    }



    selectLevel(option){
        console.log(option);
        this.setState({
            selectLevel:option
        })
    }



    render() {
        return (
            <div>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-10 col-lg-10 text-center mb-2">
                        <h3>¡Elije la opción con la que te sientas mas identificado!</h3>
                    </div>
                </div>

                <div className="row  justify-content-center mb-5">
                    <div className="col-md-10 col-lg-10">
                        {
                            (this.state.selectLevel === 1) ?
                                <LevelOne selectLevel={this.selectLevel} /> :
                                (this.state.selectLevel === 2) ?
                                    <LevelTwo selectLevel={this.selectLevel}/>:
                                    (this.state.selectLevel === 9) ?
                                        <LevelThree selectLevel={this.selectLevel} />:
                                        (this.state.selectLevel === 13) ?
                                            <LevelFour selectLevel={this.selectLevel} />:
                                            <Result level={this.state.selectLevel} selectLevel={this.selectLevel}/>
                        }


                    </div>
                </div>



            </div>
        );
    }
}



export default Game;
