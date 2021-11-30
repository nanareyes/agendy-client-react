import React from 'react'
import CardGallery from './CardGallery'

import image1 from '../assets/imagesgallery/decorado1.jpg'
import image2 from '../assets/imagesgallery/decorado5.jpg'
import image3 from '../assets/imagesgallery/decorado7.jpg'
import image4 from '../assets/imagesgallery/decorado14.jpg'
import image5 from '../assets/imagesgallery/decorado19.jpg'
import image6 from '../assets/imagesgallery/decorado17.jpg'
import image7 from '../assets/imagesgallery/decorado13.jpg'
import image8 from '../assets/imagesgallery/decorado22.jpg'
import image9 from '../assets/imagesgallery/decorado21.jpg'
import image10 from '../assets/imagesgallery/decorado12.jpg'
import image11 from '../assets/imagesgallery/decorado8.jpg'
import image12 from '../assets/imagesgallery/decorado3.jpg'

const cardsGallery = [
  {
    id: 1,
    title: 'Olas del Mar',
    image: image1,
  },
  {
    id: 2,
    title: 'Flor Blanca',
    image: image2,
  },
  {
    id: 3,
    title: 'Corazón',
    image: image3,
  },
  {
    id: 4,
    title: 'Tropical',
    image: image4,
  },
  {
    id: 5,
    title: 'Animal Print',
    image: image5,
  },
  {
    id: 6,
    title: 'Onda Rosa',
    image: image6,
  },
  {
    id: 7,
    title: 'Animal print 2',
    image: image7,
  },
  {
    id: 8,
    title: 'Morado- Pink',
    image: image8,
  },
  {
    id: 9,
    title: 'Negro_plate',
    image: image9,
  },
  {
    id: 10,
    title: 'Onda Rosa',
    image: image10,
  },
  {
    id: 11,
    title: 'Mixto',
    image: image11,
  },
  {
    id: 12,
    title: 'Mariposas',
    image: image12,
  },
]

function CardsGallery() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cardsGallery.map(({title, image, id}) => (
          <div className="col-md-4" key={id}>
            <CardGallery imageSource={image} title={title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardsGallery
