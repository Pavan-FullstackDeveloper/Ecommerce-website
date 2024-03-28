import React, { useState } from "react";
import { womanData } from "../data/woman";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const WomanPage = () => {
  const [selectedDress, setSelectedDress] = useState([]);

  const companyHandler = (dress) => {
    if (selectedDress.includes(dress)) {
      const aj = selectedDress.filter((item) => item !== dress);
      setSelectedDress(aj);
    } else {
      setSelectedDress([...selectedDress, dress]);
    }
  };

  const filteredDress =
    selectedDress.length === 0
      ? womanData
      : womanData.filter((dress) => selectedDress.includes(dress.brand));

  return (
    <>
      <Navbar />
      <div className="full-page">
        <div className="pro-selected">
          {womanData.map((dress) => {
            return (
              <div key={dress.id} className="p-2 mt-1">
                <label className="label-styling">
                  <input
                    type="checkbox"
                    checked={selectedDress.includes(dress.brand)}
                    // checked={selectedproducts.includes(ac.company)}
                    onChange={() => companyHandler(dress.brand)}
                  />

                  {dress.brand}
                </label>
              </div>
            );
          })}
        </div>
        <div className="product-section">
          {filteredDress.map((item) => {
            return (
              <div className="pageImg-div shadow rounded" key={item.id}>
                <Link
                  to={`/woman/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img src={item.image} alt="" className="image-styling" />
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

export default WomanPage;
