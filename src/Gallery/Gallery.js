import React, {useState, useEffect} from 'react'
import PaginationGallery from './PaginationGallery'
import axios from 'axios'
import './Gallery.css'
import CardsGalleryView from './CardsGallery'
import {NavBar} from '../NavBar/NavBar'
import {SectionTitle} from '../StyledComponents/SectionTitle'

const Gallery = () => {
  const [CardsGallery, setCardsGallery] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsGalleryPerPage] = useState(4)

  useEffect(() => {
    const fetchCardsGallery = async () => {
      setLoading(true)
      const res = await axios.get('http://localhost:3000')
      setCardsGallery(res.data)
      setLoading(false)
    }

    fetchCardsGallery()
  }, [])

  // Get current cards
  const indexOfLastCardGallery = currentPage * cardsGalleryPerPage
  const indexOfFirstCardGallery = indexOfLastCardGallery - cardsGalleryPerPage
  const currentCardsGallery = CardsGallery.slice(
    indexOfFirstCardGallery,
    indexOfLastCardGallery
  )

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <NavBar />
      <SectionTitle title="GALERIA" />
      <div className="container mt-5">
        <CardsGalleryView posts={currentCardsGallery} loading={loading} />
        <PaginationGallery
          cardsGalleryPerPage={cardsGalleryPerPage}
          totalcardsGallery={12}
          paginate={paginate}
        />
      </div>
    </div>
  )
}

export default Gallery
