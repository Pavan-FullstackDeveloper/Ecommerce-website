import React from "react";
import { speakerData } from "../data/speaker";
import { Link } from "react-router-dom";
const Speaker = () => {
  const firstFiveImages = speakerData.slice(0, 5);
  return (
    <>
      <h3 className="p-1 product-heading">Speakers</h3>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="image-box pt-2 text-center shadow" key={item.id}>
              <Link to="/speakers">
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

export default Speaker;
