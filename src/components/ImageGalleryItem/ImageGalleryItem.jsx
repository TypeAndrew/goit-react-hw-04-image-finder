import { useState } from "react";
import { Modal } from "components/Modal/Modal";
import PropTypes from "prop-types";

export const ImageGalleryItem = (props) => {
     
    const [isModalOpen, setIsModalOpen] = useState(false); 
  

    const handleIsModalOpen = () => {
       
        setIsModalOpen(prevState => ( !prevState ));
    }

        const { element } = props;
      
        return (
            <li className="ImageGalleryItem" onClick={handleIsModalOpen } >
                < img className="ImageGalleryItem-image"
                 src={element.webformatURL} alt={element.tags} /> 
                {isModalOpen && <Modal largeImageURL={element.largeImageURL} onClose={handleIsModalOpen } />}
            </li>
        )
   
}

ImageGalleryItem.propTypes = {
    //status: PropTypes.string,
    element: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string,
    })
}