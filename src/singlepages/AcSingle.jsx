import React from "react";
import { useParams } from "react-router-dom";
import { acData } from "../stores/data/ac";
import Navbar from "../stores/components/Navbar";
import { useCart } from "../stores/context/CartContext";

const AcSingle = () => {
  const { id } = useParams();
  const { addCart, cartItems } = useCart();

  const product = acData.find((item) => item.id === id);
  const HandleCart = () => {
    addCart(product);
  };
  return (
    <>
      <Navbar />
      <div className="single-product-main-div">
        <div className="product-div">
          <div className="product-img-div">
            <img src={product.image} alt="ac-image" />
            <p>{product.description}</p>
          </div>

          <div className="product-description">
            <p>
              Product: <span>{product.product}</span>
            </p>
            <p>
              Company: <span>{product.company}</span>
            </p>

            <p>
              Model: <span>{product.model}</span>
            </p>
            <p>
              Category: <span>{product.category}</span>
            </p>
            <p>
              Rs. <span>{product.price}</span>
            </p>
            <button
              className={`${
                cartItems.includes(product) ? "d-none" : "clickable-button"
              }`}
              onClick={HandleCart}
            >
              Add cart
            </button>
            {cartItems.includes(product) && (
              <div className="successful-added-cart text-dark">
                congralutaions <br /> successfully <br /> added to cart
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AcSingle;
