import { OnClickProps } from "../libs/types";
import Icon from "./Icon";

interface ShowNavProp {
  showNav: boolean
}

function NavToggler ({onClick, showNav}: OnClickProps & ShowNavProp) {
  return (
    <button className="nav-toggler" onClick={onClick}>
      {
        showNav ? <Icon icon={`close`} /> : <Icon icon={`hamburger`} />
      }
    </button>
  );
}
 
export default NavToggler;