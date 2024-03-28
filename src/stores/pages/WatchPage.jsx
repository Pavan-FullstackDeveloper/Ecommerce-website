import React, { useState } from "react";
import { watchData } from "../data/watch";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const WatchPage = () => {
  const [selectedWatches, setSelectedWatches] = useState([]);
  const watchHandler = (watch) => {
    if (selectedWatches.includes(watch)) {
      const aj = selectedWatches.filter((item) => item !== watch);
      setSelectedWatches(aj);
    } else {
      setSelectedWatches([...selectedWatches, watch]);
    }
  };
  const filteredWatches =
    selectedWatches.length === 0
      ? watchData
      : watchData.filter((item) => selectedWatches.includes(item.brand));
  return (
    <>
      <Navbar />
      <div className="full-page">
        <div className="pro-selected">
          {watchData.map((watch) => {
            return (
              <div key={watch.id} className=" p-1 mt-1">
                <label className="label-styling p-2">
                  <input
                    type="checkbox"
                    checked={selectedWatches.includes(watch.brand)}
                    onChange={() => watchHandler(watch.brand)}
                  />
                  {watch.brand}
                </label>
              </div>
            );
          })}
        </div>
        <div className="product-section">
          {filteredWatches.map((item) => {
            return (
              <div className="pageImg-div shadow rounded" key={item.id}>
                <Link
                  to={`/watches/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img src={item.image} alt="watch" className="image-styling" />
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

export default WatchPage;
