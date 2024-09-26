import { useState } from "react";
import NavToggler from "./NavToggler";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Nav () {
  const [showNav, setShowNav] = useState<boolean>(false);

  function handleShowNav () {
    setShowNav(!showNav);
  }

  return (
    <nav className="p-4">
      <div className="is-flex is-justify-content-space-between is-align-items-center">
        <Logo 
          src={`src/assets/images/logo.svg`}
          alt={`logo`}
        />

        <NavToggler
          onClick={handleShowNav}
          showNav={showNav}
        />

        <div className="nav-links-desktop">
          <NavLinks className={`is-flex is-gap-3`}/>      
        </div>        
      </div>


      <div className={`nav-links-mobile ${showNav ? "show" : ""}`}>
        <div className={`${showNav ? "" : "hide"} is-flex is-justify-content-space-between is-align-items-center p-4`}>
          <Logo
            src={`src/assets/images/logo.svg`}
            alt={`logo`}
          />

          <NavToggler
            onClick={handleShowNav}
            showNav={showNav}
          />
        </div>

        <NavLinks className={`is-flex is-flex-direction-column is-gap-2 `}/>
      </div>
    </nav>
  );
}
 
export default Nav;