import NavLinks from "./components/NavLinks";
import creations from "./data/creations.json";

export default function Home() {
  return (
    <div>
      <NavLinks/>

      Immersive experiences that deliver

      The leader in interactive VR

      Founded in 2011, Loopstudios has been producing world-class virtual reality 
      projects for some of the best companies around the globe. Our award-winning 
      creations have transformed businesses through digital experiences that bind 
      to their brand.

      Our creations

      See all

      {creations.map(({title, image}) => <div key={title}>
        <div>{title}</div>
        
        <picture>
          <source srcSet={image.desktop} media="(min-width: calc(1440 / 16 * 1rem))" />
          <img src={image.mobile} alt={title} />
        </picture>
      </div>)}

      <NavLinks/>

      © 2021 Loopstudios. All rights reserved.      
    </div>
  )
}