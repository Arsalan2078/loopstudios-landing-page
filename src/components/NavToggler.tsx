import { OnClickProps } from "../libs/types";

function NavToggler ({onClick}: OnClickProps) {
  return (
    <button className="nav-toggler" onClick={onClick}>
      Nav Toggler
    </button>
  );
}
 
export default NavToggler;