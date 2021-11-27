import React from 'react';
import "./paginacion.css";

const Paginacion = ({ cardsPerPage, totalcards, paginate }) => {
const pageNumbers = [];
console.log(cardsPerPage)
console.log(totalcards)
for (let i = 1; i <= Math.ceil(totalcards / cardsPerPage); i++) {
    pageNumbers.push(i);
}

return (
    <nav id='paginacion'>
    <ul>
        {pageNumbers.map(number => (
        <li key={number}>
            <a onClick={() => paginate(number)} href='!#'>
            {number}
            </a>
        </li>
        ))}
    </ul>
    </nav>
);
};

export default Paginacion;