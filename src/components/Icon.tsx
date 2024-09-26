import { IconProps } from "../libs/types";


function Icon ({icon}: IconProps) {
  function renderIcon () {
    switch (icon) {
      case "hamburger":
        return <img src="src/assets/images/icon-hamburger.svg" alt="hamburger" />;
      case "close":
        return <img src="src/assets/images/icon-close.svg" alt="close" />
    }
  }

  return (
   <>
    {renderIcon()}
   </>
  );
}
 
export default Icon;