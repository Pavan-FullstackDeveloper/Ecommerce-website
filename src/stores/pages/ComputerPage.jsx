import React, { useState } from "react";
import { computerData } from "../data/computers";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ComputerPage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const computerHandle = (computer) => {
    if (selectedProducts.includes(computer)) {
      const aj = selectedProducts.filter((item) => item !== computer);
      setSelectedProducts(aj);
    } else {
      setSelectedProducts([...selectedProducts, computer]);
    }
  };

  const filterComputersData =
    selectedProducts.length === 0
      ? computerData
      : computerData.filter((item) => selectedProducts.includes(item.company));

  return (
    <>
      <Navbar />
      <div className="full-page">
        <div className="pro-selected">
          {computerData.map((computer) => {
            return (
              <div key={computer.id}>
                <label className="label-styling p-2 mt-1">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(computer.company)}
                    onChange={() => computerHandle(computer.company)}
                  />
                  {computer.company}
                </label>
              </div>
            );
          })}
        </div>
        <div className="product-section">
          {filterComputersData.map((item) => {
            return (
              <div className="pageImg-div shadow rounded" key={item.id}>
                <Link
                  to={`/computers/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    src={item.image}
                    alt="computer"
                    className="image-styling"
                  />
                  <p>
                    {item.model},{item.company}
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

export default ComputerPage;
