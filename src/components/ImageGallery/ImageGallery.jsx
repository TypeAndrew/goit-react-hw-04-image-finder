import { Component } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {
    state = {
    
    }



    render() {
        const { elements, status } = this.props;
        return (
            
            <ul className="ImageGallery">

                { elements.map(element =>
                    <ImageGalleryItem key={element.id} element={element} status={ status } />)}
            </ul>
            
        )
    }
}

