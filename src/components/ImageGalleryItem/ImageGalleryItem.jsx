import { Component } from "react";
//import {Loader} from '../Loader/Loader'
//import { STATUS } from '../../constants/status.constants';
import { Modal } from "components/Modal/Modal";
import PropTypes from "prop-types";

export class ImageGalleryItem extends Component {
     
    state = {
        isModalOpen: false
    };

    handleIsModalOpen = (evt) => {
       
        this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
    }

   

    render() {
        const { element } = this.props;
        const { isModalOpen } = this.state; 
        return (
            <li className="ImageGalleryItem" onClick={this.handleIsModalOpen } >
                < img className="ImageGalleryItem-image"
                 src={element.webformatURL} alt={element.tags} /> 
                {isModalOpen && <Modal largeImageURL={element.largeImageURL} onClose={this.handleIsModalOpen } />}
            </li>
        )
    }
}

ImageGalleryItem.propTypes = {
    //status: PropTypes.string,
    element: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string,
    })
}