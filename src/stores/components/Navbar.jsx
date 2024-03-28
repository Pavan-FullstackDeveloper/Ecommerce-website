import React, { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { TbSquareRoundedLetterP } from "react-icons/tb";
import { GiClothes } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { CgShoppingCart } from "react-icons/cg";
const Navbar = () => {
  const { cartItems } = useCart();
  const location = useLocation();
  const currentPath = location.pathname;

  //   I apologize for the inconvenience. Let's simplify the approach and ensure the correct handling of the active state in the `Navbar` component. In the `Navbar` component, we'll use `useLocation` from `react-router-dom` to determine the active page based on the current URL.

  // Here's how you can modify your `Navbar` component:

  // ```jsx
  // import React from "react";
  // import { FaCartPlus } from "react-icons/fa";
  // import { GiClothes } from "react-icons/gi";
  // import { Link, useLocation } from "react-router-dom";

  // const Navbar = () => {
  //   const location = useLocation();

  //   // Extract the pathname from the current location
  //   const currentPath = location.pathname;

  //   return (
  //     <>
  //       <div className="top-section">
  //         {/* ... your existing Navbar code ... */}
  //         <div className="sub-menu">
  //           <ul>
  //             <li className={currentPath === "/ac" ? "active" : ""}>
  //               <Link to="/ac" style={{ textDecoration: "none" }}>
  //                 Ac
  //               </Link>
  //             </li>
  //             {/* Add more menu items for other pages */}
  //           </ul>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };

  // export default Navbar;
  // ```

  // In this version, we use the `useLocation` hook to get the current location. We extract the `pathname` from the location and compare it with the paths of the menu items. If the current path matches the path of a menu item, we apply the "active" class to that menu item.

  // Make sure that your route paths in the `Route` components and the `Link` components match. If you still encounter issues, please ensure that your routing setup is correct and that there are no conflicting styles affecting the rendering of the active indicator.

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="top-section">
        <nav className="nav-div">
          <Link to="/" style={{ textDecorationLine: "none" }}>
            <div className="section-1">
              <h1 className="logo">
                <GiClothes className="m-1" />
                LIFE STYLE
              </h1>
            </div>
          </Link>
          <div className="section-2">
            <input type="text" placeholder="search" />
          </div>
          <div className="section-3">
            <div>
              <p>Sign In</p>
            </div>

            <div>
              <p>Sing out </p>
              <p className="text-dark">{windowSize.width}</p>
            </div>
          </div>
          <div className="section-4 ">
            <h1 className=" cart-h">{cartItems.length}</h1>
            <Link to="/cart">
              <CgShoppingCart className="text-dark icon-styling" />
            </Link>
          </div>
        </nav>
        <div className="sub-menu">
          <ul>
            <li>
              <Link
                to="/ac"
                className={currentPath === "/ac" ? "active" : "in-active"}
              >
                Ac
              </Link>
            </li>
            <li>
              <Link
                to="/watches"
                className={currentPath === "/watches" ? "active" : "in-active"}
              >
                Watches
              </Link>
            </li>
            <li>
              <Link
                to="/woman"
                className={currentPath === "/woman" ? "active" : "in-active"}
              >
                Woman
              </Link>
            </li>
            <li>
              <Link
                to="/fridge"
                className={currentPath === "/fridge" ? "active" : "in-active"}
              >
                Fridge
              </Link>
            </li>
            <li>
              <Link
                to="/books"
                className={currentPath === "/books" ? "active" : "in-active"}
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                to="/computers"
                className={
                  currentPath === "/computers" ? "active" : "in-active"
                }
              >
                Computers
              </Link>
            </li>
            <li>
              <Link
                to="/speakers"
                className={currentPath === "/speakers" ? "active" : "in-active"}
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                to="/furniture"
                className={
                  currentPath === "/furniture" ? "active" : "in-active"
                }
              >
                Furnitures
              </Link>
            </li>
            <li className={currentPath === "/tv" ? "active" : "in-active"}>
              <Link
                to="/tv"
                className={currentPath === "/tv" ? "active" : "in-active"}
              >
                Tv's
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
