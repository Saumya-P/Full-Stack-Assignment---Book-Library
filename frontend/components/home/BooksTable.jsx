import React from 'react';
import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import './BooksTable.css'; // Import the custom CSS

const BooksTable = ({ books }) => {
  return (
    <div className="table-container">
      <table className="books-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th className="author-column">Author</th>
            <th className="year-column">Publish Year</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td className="author-column">{book.author}</td>
              <td className="year-column">{book.publishYear}</td>
              <td>
                <div className="operations">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="operation-icon info" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="operation-icon edit" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="operation-icon delete" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
