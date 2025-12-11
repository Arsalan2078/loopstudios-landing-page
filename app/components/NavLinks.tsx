import Link from "next/link";
import navLinks from "../data/navLinks.json";

export default function NavLinks() {
  return (
    <ul>
      {navLinks.map(({ text, url }, index) => (
        <li key={index}>
          <Link href={url}>{text}</Link>
        </li>
      ))}
    </ul>
  );
}
