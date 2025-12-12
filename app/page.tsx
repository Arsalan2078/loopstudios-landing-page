import css from "./page.module.scss";
import Link from "next/link";
import NavLinks from "./components/NavLinks";
import creations from "./data/creations.json";
import Logo from "./components/Logo";
import SocMeds from "./components/SocMeds";

export default function Home() {
  return (
    <div className={css.page}>
      <header>
        <nav>
          <Logo />
          <NavLinks />
        </nav>

        <h1>Immersive experiences that deliver</h1>
      </header>

      <main>
        <section>
          <picture>
            <source
              srcSet="/images/desktop/image-interactive.jpg"
              media="(min-width: calc(1440 / 16 * 1rem))"
            />
            <img src="/images/mobile/image-interactive.jpg" alt="" />
          </picture>

          <div>
            <h2>The leader in interactive VR</h2>

            <p className="opacity-50">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </section>

        <section>
          <h2>Our creations</h2>

          <ul>
            {creations.map(({ title, image }) => (
              <li key={title}>
                <div>{title}</div>

                <picture>
                  <source
                    srcSet={image.desktop}
                    media="(min-width: calc(1440 / 16 * 1rem))"
                  />
                  <img src={image.mobile} alt={title} />
                </picture>
              </li>
            ))}
          </ul>

          <Link href="/">See all</Link>
        </section>
      </main>

      <footer>
        <nav>
          <Logo />
          <NavLinks />
        </nav>

        <div>
          <SocMeds />

          <div className="opacity-50">
            © 2021 Loopstudios. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
