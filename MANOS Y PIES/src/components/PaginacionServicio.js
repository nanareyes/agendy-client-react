import React from 'react';
import "./paginacionServicio.css";

const paginacionServicio = ({ cardsServicioPerPage, totalcardsServicio, paginate }) => {
const pageNumbers = [];
console.log(cardsServicioPerPage)
console.log(totalcardsServicio)
for (let i = 1; i <= Math.ceil(totalcardsServicio / cardsServicioPerPage); i++) {
    pageNumbers.push(i);
}

return (
    <nav id='paginacionServicio'>
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

export default paginacionServicio;