import React from "react";
import { watchData } from "../data/watch";
import { Link } from "react-router-dom";
const Watch = () => {
  const firstFiveImages = watchData.slice(0, 5);
  return (
    <>
      <h3 className="p-1 product-heading">WATCHES</h3>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="image-box pt-2 text-center shadow" key={item.id}>
              <Link to="/watches">
                <img src={item.image} alt="watch-img" className="product" />
              </Link>
              <p className="item-name">{item.brand}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Watch;
