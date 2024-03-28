import React from "react";
import { furnitureData } from "../data/furniture";
import { Link } from "react-router-dom";
const Furnitures = () => {
  const firstFiveImages = furnitureData.slice(0, 5);
  return (
    <>
      <h3 className="p-1 product-heading">Furnitures</h3>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="image-box pt-2 text-center shadow" key={item.id}>
              <Link to="/furniture">
                <img src={item.image} alt="Mobile-img" className="product" />
              </Link>
              <p className="item-name">{item.brand}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Furnitures;
