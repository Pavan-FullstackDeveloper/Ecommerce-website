import React, { useState } from "react";
import { acData } from "../data/ac";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const AcPage = () => {
  const [selectedproducts, setSelectedProducts] = useState([]);

  const companyHandler = (company) => {
    if (selectedproducts.includes(company)) {
      const aj = selectedproducts.filter((item) => item !== company);
      setSelectedProducts(aj);
    } else {
      setSelectedProducts([...selectedproducts, company]);
    }
  };

  const filteredProduct =
    selectedproducts.length === 0
      ? acData
      : acData.filter((items) => selectedproducts.includes(items.company));
  return (
    <>
      <Navbar />
      <div className="full-page">
        <div className="pro-selected">
          {acData.map((ac) => {
            return (
              <div key={`${ac.id}-label`} className="p-2 mt-1">
                <label className="label-styling">
                  <input
                    type="checkbox"
                    checked={selectedproducts.includes(ac.company)}
                    // checked={selectedproducts.includes(ac.company)}
                    onChange={() => companyHandler(ac.company)}
                  />

                  {ac.company}
                </label>
              </div>
            );
          })}
        </div>
        <div className="product-section">
          {filteredProduct.map((item) => {
            return (
              <div className="pageImg-div shadow rounded" key={item.id}>
                <Link
                  to={`/ac/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img src={item.image} alt="book" className="image-styling" />
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

export default AcPage;
