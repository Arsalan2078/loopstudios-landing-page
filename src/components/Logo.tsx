import { ImageProps } from "../libs/types";

function Logo ({src, alt}: ImageProps) {
  return (
    <a href="#">
      <img 
        src={src} 
        alt={alt} 
      />
    </a>
  );
}

export default Logo;