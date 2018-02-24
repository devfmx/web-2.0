import React, {Component} from 'react';
import './style.css'
import LevelOne from './LevelOne';
import LevelTwo from './LevelTwo';



class Game extends Component {

    constructor(props){
        super(props);

        this.state = {
          optionOne:0,
          optionTwo:0,
          selectLevel:true,
        };

        this.selectOption = this.selectOption.bind(this);
        this.selectOption = this.selectOptionTwo.bind(this);
    }

    selectOption(option) {
        console.log(option);
        this.setState({
            optionOne:option,
            selectLevel:!this.state.selectLevel
        })

    }

    selectOptionTwo(option){
        console.log(option);
        this.setState({
            optionTwo:option,
            selectLevel:!this.state.selectLevel
        })
    }


    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-10 text-center mb-5">
                        <h3>¡Elije la opción con la que te sientas mas identificado!</h3>
                    </div>
                </div>

                {
                    (this.state.selectLevel) ? <LevelOne selectOption={this.selectOption} /> :
                        <LevelTwo selectOptionTwo={this.selectOptionTwo}/>
                }


            </div>
        );
    }
}



export default Game;
