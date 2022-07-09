import { NavLink } from "react-router-dom";

function HeaderLinks() {
  return (
    <ul className="header-ul hidden md:flex flex-row gap-x-11 w-450 h-24 px-12 pt-9 bg-clrWhite lg:w-830 lg:pr-123 lg:pl-165 lg:top-10">
      <li className="">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link link-active" : "link")}
        >
          <span className="hidden lg:inline mr-2">00</span>
          HOME
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/destination"
          className={({ isActive }) => (isActive ? "link link-active" : "link")}
        >
          <span className="hidden lg:inline mr-2">01</span>
          DESTINATION
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/crew"
          className={({ isActive }) => (isActive ? "link link-active" : "link")}
        >
          <span className="hidden lg:inline mr-2">02</span>
          CREW
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/technology"
          className={({ isActive }) => (isActive ? "link link-active" : "link")}
        >
          <span className="hidden lg:inline mr-2">03</span>
          TECHNOLOGY
        </NavLink>
      </li>
    </ul>
  );
}

export default HeaderLinks;
