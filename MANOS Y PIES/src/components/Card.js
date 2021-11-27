import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function Card({ imageSource, title, description, price, agendy }) {
  return (
  /*  <div className="card text-center bg-dark animateanimated animatefadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        
        
        
      </div>
    </div>
 */

<div class="card mb-6">
  <div class="row no-gutters">
          <div class="col-md-5">
      <img src={imageSource} class="card-img" alt="imagen producto" className="card-img-top"/>
    </div>
    <div class="col-md-6">
          <div class="card-body">
        <h4 class="card-title"><b>{title}</b></h4>
        <p class="card-text"><h6>{description}</h6></p>
        <p class="card-text"><h4>{price}</h4></p>
        </div>
    </div>
    <div class="col-md-1">
    <img src={agendy} class="agendy" alt="boton agendar"/>
      </div>
  </div>
</div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  imageSource: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  agendy: PropTypes.string,
};

export default Card;
