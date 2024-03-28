import React, { useEffect, useState } from "react";
import { useCart } from "./context/CartContext";
import Navbar from "./components/Navbar";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const UserCart = () => {
  const { cartItems, removeCart, addCart, quantityDecrease } = useCart();

  const filtered = cartItems.filter(
    (item, index) => cartItems.indexOf(item) === index
  );

  const quantityFind = (product) => {
    let quantity = 0;
    cartItems.map((item) => {
      if (item.id === product.id) {
        quantity += 1;
      }
    });
    return quantity;
  };

  const pavan =
    cartItems.length === 0 ? (
      <div>
        <Navbar />
        <h1 className="empty-cart text-center">Your Cart Is Empty</h1>
      </div>
    ) : (
      <div>
        <div>
          <Navbar />
          {filtered.map((product) => {
            return (
              <div className="cart-product-main-div" key={product.id}>
                <div className="product-div">
                  <div className="product-img-div">
                    <img src={product.image} alt="ac-image" />
                    <p>{product.description}</p>
                    <div className="d-flex quantity-div">
                      <button onClick={() => quantityDecrease(product)}>
                        {quantityFind(product) > 1 ? (
                          <FaMinus />
                        ) : (
                          <AiOutlineDelete />
                        )}
                      </button>
                      <h1 className="quantity">
                        Qty:
                        <span className="num">{quantityFind(product)}</span>
                      </h1>
                      <button onClick={() => addCart(product)}>
                        <FaPlus />
                      </button>
                    </div>
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

                    <button className="btn btn btn-outline-warning bg-warning text-white mb-2">
                      Proceed to Buy ({quantityFind(product)} items)
                    </button>
                    <br />
                    <button
                      type="button"
                      className="btn btn-outline-dark w-100 mt-2 "
                      onClick={() => removeCart(product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        ;
      </div>
    );
  return pavan;
};

export default UserCart;
