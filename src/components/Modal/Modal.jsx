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
        if (evt.currentTarget !== evt.target) {
            onClose(); 
        }   
    }
    
    render(){
        
    const { largeImageURL, onClose} = this.props; 
        
    return (
            <div className="Overlay" >
                <div className="Modal" onClick={this.handleIsModalClose}>
                <button style={{marginLeft: 'auto' }}type="button" onClick={ onClose}>X</button>
                <img src={largeImageURL} alt="" />
                
                </div>
            </div>
        )
    }   
  
}

Modal.propTypes = {
    largeImageURL: PropTypes.string,
   
}