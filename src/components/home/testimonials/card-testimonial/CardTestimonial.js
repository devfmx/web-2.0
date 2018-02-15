import React, {Component} from 'react';
import './style.css';
import Modal from 'react-bootstrap4-modal';
import alfredo from './images/Popop Bejarano.png';
import melina from './images/Popop Melina.png';
import ulises from './images/Popup Ulises.png';

class CardTestimonial extends Component{

    constructor(props){
        super(props)
        this.state = {
            modal:false,
            image:""
        };
        this.handleModal = this.handleModal.bind(this);
        this.modalBackdropClicked = this.modalBackdropClicked.bind(this);
    }


    handleModal(){
        this.setState({
            modal:!this.state.modal
        });
        switch(this.props.number){
            case 1 :
                this.setState({
                    image:alfredo
                });
                break;

            case 2 :
                this.setState({
                    image:melina
                });
                break;

            case 3 :
                this.setState({
                    image:ulises
                });
                break;

        }

    }

    modalBackdropClicked(){
        this.setState({
            modal:!this.state.modal
        })
    }

    render(){
        return(
            <div className="card card-testimonial" onClick={this.handleModal}>
                <img className="card-img-top" src={this.props.image} alt="Card image"/>
                    <div className="card-img-overlay image-overlay">
                        <img src={this.props.logo} alt="" className="image-logo-testimonial" align="right" style={{width:this.props.width}}/>
                    </div>
                <Modal visible={this.state.modal} onClickBackdrop={this.modalBackdropClicked} id="modal-video" >
                    <div className="modal-body">
                        <img src={this.state.image} alt=""/>
                    </div>
                </Modal>
            </div>

        );

    }


};

export default CardTestimonial;