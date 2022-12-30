import { Component } from "react";
import {Loader} from '../Loader/Loader'
import { STATUS } from '../../constants/status.constants';
export class ImageGalleryItem extends Component {
    state = {
    
    }

    render() {
        const { element, status } = this.props;
        return (
            <li className="ImageGalleryItem">
                {status === STATUS.loading ? <Loader />:< img className="ImageGalleryItem-image"
                src={element.largeImageURL} alt={element.tags} /> }
                
            </li>
        )
    }
}