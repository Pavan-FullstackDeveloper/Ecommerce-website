import React from "react";
import { acData } from "../data/ac";
import { Link } from "react-router-dom";
const Ac = () => {
  const firstFiveImages = acData.slice(0, 5);
  return (
    <>
      <h3 className="p-1 product-heading">Ac</h3>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="image-box  text-center pt-2 shadow " key={item.id}>
              <Link to="/ac">
                <img src={item.image} alt="ac-1-img" className="product" />
              </Link>

              <p className="item-name">{item.model}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Ac;
