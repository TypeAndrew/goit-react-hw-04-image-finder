import PropTypes from "prop-types";
import { useEffect } from "react";

export const Modal = ({ largeImageURL, onClose }) => { 

    useEffect(() => {
        const handleKeyClose = event => {
        console.log('in handleKeyClose');
        if (event.code === 'Escape') {
            onClose();
        }
        };
        
        window.addEventListener('keydown', handleKeyClose)
        return () => {
            
            window.removeEventListener('keydown',handleKeyClose)
        };
  }, [onClose]);
   

    const handleIsModalClose = (evt) => {
       
        if (evt.currentTarget !== evt.target) {
            onClose(); 
        }   
    }
    
   
    return (
            <div className="Overlay" >
                <div className="Modal" onClick={handleIsModalClose}>
                <button style={{marginLeft: 'auto' }}type="button" onClick={ onClose}>X</button>
                <img src={largeImageURL} alt="" />
                
                </div>
            </div>
        )
   
  
}

Modal.propTypes = {
    largeImageURL: PropTypes.string,
   
}