import PropTypes from "prop-types";
import { Component } from "react";

export class Modal extends Component { 

    
    componentDidMount() {
        const { onClose } = this.props;
        window.addEventListener('keydown', onClose)
    }

    componentWillUnmount() {
        const { onClose } = this.props;
        window.removeEventListener('keydown',onClose)
    }

    handleIsModalClose = (evt) => {
        const { onClose } = this.props;
        if (evt.currentTarget === evt.target) {
            onClose(); 
        }   
    }
    
    render(){
        
    const { largeImageURL, onClose} = this.props; 
        
    return (
            <div className="Overlay" onClick={this.handleIsModalClose}>
                <div className="Modal" >
                <img src={largeImageURL} alt="" />
                <button type="button" onClick={ onClose}>X</button>
                </div>
            </div>
        )
    }   
  
}

Modal.propTypes = {
    largeImageURL: PropTypes.string,
   
}