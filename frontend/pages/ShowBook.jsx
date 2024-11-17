import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import './ShowBook.css';  // Import the custom CSS file

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="show-book-container">
      <BackButton />
      <h1 className="page-title">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="book-details">
          <div className="book-info">
            <span className="info-label">Id</span>
            <span>{book._id}</span>
          </div>
          <div className="book-info">
            <span className="info-label">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="book-info">
            <span className="info-label">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="book-info">
            <span className="info-label">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="book-info">
            <span className="info-label">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="book-info">
            <span className="info-label">Last Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
