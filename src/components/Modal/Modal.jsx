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

    render(){
        
    const { largeImageURL } = this.props; 
        
    return (
            <div className="Overlay">
                <div className="Modal" >
                    <img src={largeImageURL} alt="" />
                </div>
            </div>
        )
    }   
  
}

Modal.propTypes = {
    largeImageURL: PropTypes.string,
   
}