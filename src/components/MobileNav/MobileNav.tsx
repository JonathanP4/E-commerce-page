import closeIcon from "/images/icon-close.svg";
import "./MobileNav.scss";

export default function MobileNav(props: {
  showNav: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function hideMobileNav() {
    props.setState(false);
  }

  return (
    <>
      {props.showNav && (
        <div
          onClick={hideMobileNav}
          className="backdrop z-10 h-full w-full fixed top-0 bg-black opacity-70"
        ></div>
      )}
      <div
        className={`${
          props.showNav ? "" : "hide-nav"
        } mobile-nav shadow-2xl fixed bg-white top-0 w-2/3 h-full z-20 p-5`}
      >
        <img
          onClick={hideMobileNav}
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
