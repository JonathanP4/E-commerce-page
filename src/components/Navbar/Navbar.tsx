import "./Navbar.scss";

import menuIcon from "/images/icon-menu.svg";
import logo from "/images/logo.svg";
import avatarImg from "/images/image-avatar.png";
import MobileNav from "../MobileNav/MobileNav";
import Cart from "../Cart/Cart";
import DesktopNav from "../DesktopNav/DesktopNav";

import { cartContext } from "../../context/cart-context";
import { useContext, useState } from "react";

export default function Navbar() {
  const ctx = useContext(cartContext);

  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const io = new ResizeObserver((el) => {
    const [element] = el;
    const width = element.contentBoxSize[0].inlineSize;

    if (width > 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  });
  io.observe(document.body);

  function showMobileNav() {
    setShowNav(true);
  }

  function showCartHandler() {
    setShowCart((state) => !state);
  }

  return (
    <>
      {showCart && <Cart />}
      {isMobile && <MobileNav setState={setShowNav} showNav={showNav} />}
      <nav className="nav px-4 md:px-5 flex items-center justify-between">
        <div className="flex items-center">
          {isMobile && (
            <img
              className="mr-4"
              onClick={showMobileNav}
              src={menuIcon}
              alt="menu"
            />
          )}
          <a className="py-5 mb-2" href="#">
            <img src={logo} alt="sneakers logo" />
          </a>
          {!isMobile && <DesktopNav />}
        </div>
        <div className="flex items-center">
          <div
            onClick={showCartHandler}
            className="cart-icon-container mr-4 relative"
          >
            {ctx.items.length > 0 && (
              <span className="bg-orange-500 rounded-full text-white">
                {ctx.items.length}
              </span>
            )}
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="currentColor"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <img
            className="avatar w-10 md:w-14 md:ml-4"
            src={avatarImg}
            alt="avatar"
          />
        </div>
      </nav>
    </>
  );
}
