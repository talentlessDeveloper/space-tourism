import React, { useState } from "react";

import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import closeBtn from "../../assets/shared/icon-close.svg";

import HeaderLinks from "./HeaderLinks";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleMenuButton = () => {
    setActiveMenu((active) => !active);
  };
  return (
    <header className="header">
      <nav className="flex justify-between relative">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 absolute top-6 left-6 md:w-12 md:h-12 md:left-10 lg:top-16 "
        />

        <HeaderLinks />
        <button className="md:hidden z-20 " onClick={handleMenuButton}>
          <img
            src={hamburger}
            alt="open-menu"
            className={`w-6 h-5 absolute top-8 right-8 transition-all duration-700 ${
              activeMenu ? "invisible opacity-0" : "visible opacity-100"
            }`}
          />
          <img
            src={closeBtn}
            alt="close-menu"
            className={`w-[19px] h-[19px] absolute top-8 right-8 transition-all duration-700 ${
              activeMenu ? "visible opacity-100" : "invisible opacity-0"
            }`}
          />
        </button>
      </nav>

      <HeaderMenu menu={activeMenu} handleMenu={handleMenuButton} />
    </header>
  );
}

export default Header;
