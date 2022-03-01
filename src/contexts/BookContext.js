import React, { createContext, useState } from 'react';
import { v1 as uuid } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [ books, setBooks ] = useState([
    {title: 'Name of the wind', author: 'Patrick Ruthfuss', id: 1},
    {title: 'The final empire', author: 'Brandon Sanderson', id: 2},
  ]);
  const addBook = (title, author) => {
    setBooks([...books, {title: title, author: author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };
  
  return(
    <BookContext.Provider value={{  books, addBook, removeBook }}>
      { props.children }
    </BookContext.Provider>
  )
};

export default BookContextProvider;