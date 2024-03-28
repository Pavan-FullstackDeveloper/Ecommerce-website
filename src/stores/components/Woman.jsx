import React from "react";
import { womanData } from "../data/woman";
import { Link } from "react-router-dom";
const Woman = () => {
  const firstFiveImages = womanData.slice(0, 5);
  return (
    <>
      <h3 className="p-1 product-heading">Woman Clothing</h3>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="image-box pt-2 text-center shadow" key={item.id}>
              <Link to="/woman">
                <img src={item.image} alt="watch-img" className="product" />
              </Link>
              <p className="item-name">{item.product}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Woman;
