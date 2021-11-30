import React from 'react';
import "./pagination.css";

const Pagination = ({ cardsPerPage, totalcards, paginate }) => {
const pageNumbers = [];
console.log(cardsPerPage)
console.log(totalcards)
for (let i = 1; i <= Math.ceil(totalcards / cardsPerPage); i++) {
    pageNumbers.push(i);
}

return (
    <nav id='pagination'>
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

export default Pagination;