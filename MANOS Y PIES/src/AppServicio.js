import React, { useState, useEffect } from 'react';
import PaginacionServicio from './components/PaginacionServicio';
import axios from 'axios';
import './AppServicio.css';
import CardsServicioView from './components/CardsServicio';

const AppServicio = () => {
  const [CardsServicio, setCardsServicio] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsServicioPerPage] = useState(4);

  useEffect(() => {
    const fetchCardsServicio = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:3000');
      setCardsServicio(res.data);
      setLoading(false);
    };

    fetchCardsServicio();
  }, []);

  // Get current cards
  const indexOfLastCardServicio = currentPage * cardsServicioPerPage;
  const indexOfFirstCardServicio = indexOfLastCardServicio - cardsServicioPerPage;
  const currentCardsServicio = CardsServicio.slice(indexOfFirstCardServicio, indexOfLastCardServicio);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h3 className='text-secondary mb-6'>MANOS Y PIES</h3>
      <CardsServicioView posts={currentCardsServicio} loading={loading} /> 
      <PaginacionServicio
        cardsServicioPerPage={cardsServicioPerPage}
        totalcardsServicio={12}
        paginate={paginate} 
      /> 
      
    </div>
  );
};

export default AppServicio;
