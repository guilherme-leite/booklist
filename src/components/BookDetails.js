import React, { useContext } from 'react';

const BookDetails = ({ books }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li>
      <div className="title">{ book.title }</div>
      <div className="author">{ book.author }</div>
    </li>
  );
}

export default BookDetails;
