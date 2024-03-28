import React from "react";
import { computerData } from "../data/computers";
import { Link } from "react-router-dom";
const Computers = () => {
  const firstFiveImages = computerData.slice(0, 5);
  return (
    <>
      <h3 className="p-1 product-heading">Computers</h3>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="image-box pt-2 text-center shadow" key={item.id}>
              <Link to="/computers">
                <img src={item.image} alt="Mobile-img" className="product" />
              </Link>
              <p className="item-name">{item.model}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Computers;
