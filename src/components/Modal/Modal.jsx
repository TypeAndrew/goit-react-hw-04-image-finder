import PropTypes from "prop-types";

export function Modal(props) { 

  const { largeImageURL } = props; 

    return (
            <div className="Overlay">
                <div className="Modal">
                    <img src={largeImageURL} alt="" />
                </div>
            </div>
        )
  
}

Modal.propTypes = {
    largeImageURL: PropTypes.string,
   
}