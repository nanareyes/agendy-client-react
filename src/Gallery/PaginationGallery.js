import React from 'react'
import './paginationGallery.css'

const paginationGallery = ({
  cardsGalleryPerPage,
  totalcardsGallery,
  paginate,
}) => {
  const pageNumbers = []
  for (
    let i = 1;
    i <= Math.ceil(totalcardsGallery / cardsGalleryPerPage);
    i++
  ) {
    pageNumbers.push(i)
  }

  return (
    <nav id="paginationGallery">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default paginationGallery
