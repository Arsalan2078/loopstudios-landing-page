import { useState } from "react";
import NavToggler from "./NavToggler";
import Logo from "./Logo";

function Nav () {
  const [showNav, setShowNav] = useState<boolean>(false);

  function handleShowNav () {
    setShowNav(!showNav);
  }

  return (
    <nav className="nav">
      <Logo
        src={`src/assets/images/logo.svg`}
        alt={`logo`}
      />

      <NavToggler 
        onClick={handleShowNav} 
      />

      <ul className={`nav-links ${showNav ? "show" : ""}`}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Carrers</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </nav>
  );
}
 
export default Nav;