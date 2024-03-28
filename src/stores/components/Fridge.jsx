import React from "react";
import { fridgeData } from "../data/fridge";
import { Link } from "react-router-dom";
const Fridge = () => {
  const firstFiveImages = fridgeData.slice(0, 5);
  return (
    <>
      <h3 className="p-1 product-heading">Fridge</h3>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="image-box pt-2 text-center shadow" key={item.id}>
              <Link to="/fridge">
                <img src={item.image} alt="watch-img" className="product" />
              </Link>
              <p className="item-name">{item.model}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Fridge;
