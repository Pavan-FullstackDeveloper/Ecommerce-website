import React from "react";
import { booksData } from "../data/books";
import { Link } from "react-router-dom";
const Book = () => {
  const firstFiveImages = booksData.slice(0, 5);
  return (
    <>
      <h3 className="p-1 product-heading">Books</h3>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="image-box pt-2 text-center shadow" key={item.id}>
              <Link to="/books">
                <img src={item.image} alt="Mobile-img" className="product" />
              </Link>
              <p className="item-name">{item.author}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Book;
