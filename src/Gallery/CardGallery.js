import React from "react";
import PropTypes from "prop-types";

import "./cardGallery.css";


function CardGallery({ imageSource, title }) {
  return (
    <div className="cardGallery text-center bg-pink animateanimated animatefadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="cardGallery-img-top" />
      </div>
      <div className="cardGallery-body text-dark">
        <h4 className="cardGallery-title">{title}</h4>
        
        
        
      </div>
    </div>
  );
}

CardGallery.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  imageSource: PropTypes.string
};

export default CardGallery;