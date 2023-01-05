import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

export function ImageGallery(props) {

    const { elements, status, handleToggle } = props;
    return (
            
        <ul className="ImageGallery" onClick={ handleToggle }>

            { elements.map(element =>
                <ImageGalleryItem key={element.id} element={element} status={status} />)}
        </ul>
            
    )
   
}

ImageGalleryItem.propTypes = {
    elements: PropTypes.object,
    status: PropTypes.string,
     handleToggle: PropTypes.func,   
    }
