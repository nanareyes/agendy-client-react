import React from "react";
import CardServicio from "./CardServicio";

import image1 from "../assets/tradicional.jpg";
import image2 from '../assets/gel.jpg';
import image3 from '../assets/permanente.jpg';
import image4 from '../assets/acrilicas.png';
import image5 from '../assets/iconoagenda.jpg';

const cardsServicio = [
  {
    id: 1,
    title: "Manicure tradicional",
    image: image2,
    description:"Es el arreglo de  manos y uñas tradicional,y apesar de durar menos no maltrata tanto las capas superficiales de la uña.",
    price: '$ 20.000',
    agendy: image5, 

    },
  {
    id: 2,
    title: "Uñas en Gel",
    image: image2,
    description:"Las uñas en Gel por lo general consiste cepillar capas de esmalte en las uñas naturales y se curan con una lámpara UV",
    price: '$ 65.000',
    agendy: image5,
    },
  {
    id: 3,
    title: "Maquillaje Semi-Permanente",
    image: image4,
    description:"la manicura semi-permanente es un maquillaje en uñas con un esmaltado de larga duración,el cual puede ser aplicado en uñas naturales o artifuciales.",
    price: '$ 38.000',
    agendy: image5,
    },
  {
      id: 4,
      title: "Uñas Acrilicas",
      image: image4,
      description:"las uñas acrilicas son una mezcla de polvo y monómero liquido que se combina en una masa,se da forma a las uñas con un cepillo y luego se secan al aire libre.es una forma artificial de extender tus uñas,agregar fuerza y grosor.",
    price: '$ 80.000',
    agendy: image5,
    },
];

function CardsServicio() {
  return (

    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cardsServicio.map(({ title, image, id, description, price, agendy}) => (
          <div className="col-md-6" key={id}>
            <CardServicio imageSource={image} title={title} description={description} price={price} agendy={agendy}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsServicio;
