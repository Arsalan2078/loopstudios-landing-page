import { ClassNameProps } from "../libs/types";

const NavLinks = ({className}: ClassNameProps) => {
  return (
    <ul className={className}>
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
  );
}
 
export default NavLinks;