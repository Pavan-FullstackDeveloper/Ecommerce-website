import React, { useState } from "react";
import { fridgeData } from "../data/fridge";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Fridge from "../components/Fridge";
const FridgePage = () => {
  const [selectedFridge, setSelectedFridge] = useState([]);
  const companyHandler = (fridge) => {
    if (selectedFridge.includes(fridge)) {
      setSelectedFridge(selectedFridge.filter((item) => item !== fridge));
    } else {
      setSelectedFridge([...selectedFridge, fridge]);
    }
  };

  const filteredFridge =
    selectedFridge.length === 0
      ? fridgeData
      : fridgeData.filter((item) => selectedFridge.includes(item.brand));

  return (
    <>
      <Navbar />
      <div className="full-page">
        <div className="pro-selected">
          {fridgeData.map((fridge) => {
            return (
              <div key={fridge.id} className="p-2 mt-1">
                <label className="label-styling">
                  <input
                    type="checkbox"
                    checked={selectedFridge.includes(fridge.brand)}
                    // checked={selectedproducts.includes(ac.company)}
                    onChange={() => companyHandler(fridge.brand)}
                  />

                  {fridge.brand}
                </label>
              </div>
            );
          })}
        </div>
        <div className="product-section">
          {filteredFridge.map((item) => {
            return (
              <div className="pageImg-div shadow rounded" key={item.id}>
                <Link
                  to={`/fridge/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    src={item.image}
                    alt="fridge"
                    className="image-styling"
                  />
                  <p>
                    {item.model},{item.brand}
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

export default FridgePage;
