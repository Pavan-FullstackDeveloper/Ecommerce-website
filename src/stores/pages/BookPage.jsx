import React, { useState } from "react";
import { booksData } from "../data/books";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const BookPage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const booksHandler = (title) => {
    if (selectedProducts.includes(title)) {
      const del = selectedProducts.filter((item) => item !== title);
      setSelectedProducts(del);
    } else {
      setSelectedProducts([...selectedProducts, title]);
    }
  };

  const filteredBooks =
    selectedProducts.length === 0
      ? booksData
      : booksData.filter((book) => selectedProducts.includes(book.title));

  return (
    <>
      <Navbar />
      <div className="full-page">
        <div className="pro-selected w-50">
          {booksData.map((book) => {
            return (
              <div className=" p-1 mt-1">
                <label className="book-label-styling">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(book.title)}
                    onChange={() => booksHandler(book.title)}
                  />
                  {book.title}
                </label>
              </div>
            );
          })}
        </div>
        <div className="product-section">
          {filteredBooks.map((item) => {
            return (
              <div className="pageImg-div shadow rounded" key={item.id}>
                <Link
                  to={`/books/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img src={item.image} alt="book" className="image-styling" />
                  <p>
                    {item.author},{item.category}
                  </p>
                  <h6>Rs.{item.price}</h6>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BookPage;
