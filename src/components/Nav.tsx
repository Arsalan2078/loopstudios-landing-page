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
      
      <div className={`nav-links-desktop`}>
        <ul>
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
      </div>

      <div className={`nav-links-mobile ${showNav ? "show" : ""}`}>
        <div className={`${showNav ? "" : "hide"}`}>
          <Logo
            src={`src/assets/images/logo.svg`}
            alt={`logo`}
          />

          <NavToggler 
            onClick={handleShowNav} 
          />
        </div>

        <ul>
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
      </div>
    </nav>
  );
}
 
export default Nav;