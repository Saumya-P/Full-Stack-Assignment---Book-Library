import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookModal from './BookModal';
import './BookSingleCard.css'; // Ensure this CSS file is correctly imported

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="book-card">
      {/* Book Year */}
      <h2 className="book-year">{book.publishYear}</h2>
      <h4 className="book-id">{book._id}</h4>

      {/* Book Title */}
      <div className="book-info">
        <PiBookOpenTextLight className="book-icon" />
        <h2 className="book-title">{book.title}</h2>
      </div>

      {/* Book Author */}
      <div className="book-info">
        <BiUserCircle className="book-icon" />
        <h2 className="book-author">{book.author}</h2>
      </div>

      {/* Action Buttons */}
      <div className="book-actions">
        <BiShow
          className="action-icon show-icon"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="action-icon info-icon" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="action-icon edit-icon" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="action-icon delete-icon" />
        </Link>
      </div>

      {/* Modal */}
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
