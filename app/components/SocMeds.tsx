import Link from "next/link";
import socMeds from "../data/socMeds.json";

export default function SocMeds() {
  return (
    <ul>
      {socMeds.map(({ name, url, image }) => (
        <li key={name}>
          <Link href={url}>
            <img src={image} alt={name} width="24" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
