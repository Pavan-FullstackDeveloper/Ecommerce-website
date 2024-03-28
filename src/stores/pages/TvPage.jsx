import React, { useState } from "react";
import { tvData } from "../data/tv";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const TvPage = () => {
  const [selectedTv, setSelectedTv] = useState([]);
  const companyHandler = (tv) => {
    if (selectedTv.includes(tv)) {
      const aj = selectedTv.filter((item) => item !== tv);
      setSelectedTv(aj);
    } else {
      setSelectedTv([...selectedTv, tv]);
    }
  };
  const filteredTv =
    selectedTv.length === 0
      ? tvData
      : tvData.filter((item) => selectedTv.includes(item.brand));
  return (
    <>
      <Navbar />
      <div className="full-page">
        <div className="pro-selected">
          {tvData.map((tv) => {
            return (
              <div key={tv.id} className="p-2 mt-1">
                <label className="label-styling">
                  <input
                    type="checkbox"
                    checked={selectedTv.includes(tv.brand)}
                    onChange={() => companyHandler(tv.brand)}
                  />
                  {tv.brand}
                </label>
              </div>
            );
          })}
        </div>
        <div className="product-section">
          {filteredTv.map((item) => {
            return (
              <Link
                to={`/tv/${item.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="pageImg-div shadow rounded" key={item.id}>
                  <img src={item.image} alt="tv" className="image-styling" />
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

export default TvPage;
