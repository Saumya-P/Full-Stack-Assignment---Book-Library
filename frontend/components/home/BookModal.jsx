import React from 'react';
import './BookModal.css';

const BookModal = ({ book, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>X</button>
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Published Year: {book.publishYear}</p>
        <p>ID: {book._id}</p>
      </div>
    </div>
  );
};

export default BookModal;
