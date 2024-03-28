import React, { useState } from "react";
import { furnitureData } from "../data/furniture";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const FurniturePage = () => {
  const [selectedFurniture, setSelectedProducts] = useState([]);
  const furnitureHandle = (furniture) => {
    if (selectedFurniture.includes(furniture)) {
      setSelectedProducts(
        selectedFurniture.filter((item) => item !== furniture)
      );
    } else {
      setSelectedProducts([...selectedFurniture, furniture]);
    }
  };

  const filteredFurniture =
    selectedFurniture.length === 0
      ? furnitureData
      : furnitureData.filter((product) =>
          selectedFurniture.includes(product.brand)
        );
  return (
    <>
      <Navbar />
      <div className="full-page">
        <div className="pro-selected">
          {furnitureData.map((furniture) => {
            return (
              <div key={furniture.id} className="p-2 mt-1">
                <label className="label-styling p-1">
                  <input
                    type="checkbox"
                    checked={selectedFurniture.includes(furniture.brand)}
                    onChange={() => furnitureHandle(furniture.brand)}
                  />
                  {furniture.brand}
                </label>
              </div>
            );
          })}
        </div>
        <div className="product-section">
          {filteredFurniture.map((item) => {
            return (
              <Link
                to={`/furniture/${item.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="pageImg-div shadow rounded" key={item.id}>
                  <img
                    src={item.image}
                    alt="furniture"
                    className="image-styling"
                  />
                  <p>
                    {item.model},{item.brand}
                  </p>
                  <h6>Rs.{item.price}</h6>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FurniturePage;
