import React, {useState, useEffect} from 'react'
import Pagination from './Pagination'
import axios from 'axios'
import './Services.css'
import CardsView from './Cards'

const Services = () => {
  const [Cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(4)

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true)
      const res = await axios.get('http://localhost:3000')
      setCards(res.data)
      setLoading(false)
    }

    fetchCards()
  }, [])

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = Cards.slice(indexOfFirstCard, indexOfLastCard)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container mt-5">
      <h3 className="text-primary mb-1">MANOS Y PIES</h3>
      <CardsView posts={currentCards} loading={loading} />
      <Pagination
        cardsPerPage={cardsPerPage}
        totalcards={12}
        paginate={paginate}
      />
    </div>
  )
}

export default Services
