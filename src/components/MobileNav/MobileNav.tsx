import closeIcon from "/images/icon-close.svg";
import "./MobileNav.scss";
import { useRef, useState } from "react";

export default function MobileNav(props: { clickEvent: () => void }) {
  const [showBackDrop, setShowBackdrop] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

  function hideNav() {
    setShowBackdrop(false);
  }
  return (
    <>
      {showBackDrop && (
        <div className="backdrop z-10 h-full w-full fixed top-0 bg-black opacity-70"></div>
      )}
      <div
        ref={menuRef}
        className="show mobile-nav shadow-2xl fixed bg-white top-0 w-2/3 h-full z-20 p-5"
      >
        <img
          onClick={hideNav}
          className="cursor-pointer"
          src={closeIcon}
          alt="close sidenav"
        />
        <ul className=" mt-10 grid gap-4 list-none font-bold">
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
