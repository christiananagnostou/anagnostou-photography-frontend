import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/Header.module.css";

const navListItems = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  {
    name: "Albums",
    route: "/albums",
    dropdownItems: [
      { name: "The Elements", href: "/albums/the-elements" },
      { name: "San Fran", href: "/albums/san-fran" },
      { name: "Shadow Play", href: "/albums/shadow-play" },
      { name: "On Wheels", href: "/albums/on-wheels" },
      { name: "Snowy", href: "/albums/snowy" },
      { name: "B&W", href: "/albums/b-and-w" },
    ],
  },
  { name: "Contact", route: "/contact" },
];

export default function NavLinks() {
  const router = useRouter();

  const isOnRoute = (route) => router.route === route;

  return (
    <ul className={styles.nav_links}>
      {navListItems.map((item) => (
        <li className={isOnRoute(item.route) ? styles.highlight : ""} key={item.name}>
          <Link href={item.route}>
            <a>{item.name}</a>
          </Link>
          {item.dropdownItems && <Dropdown items={item.dropdownItems} />}
        </li>
      ))}
    </ul>
  );
}

const Dropdown = ({ items }) => {
  return (
    <ul className={styles.dropdown}>
      {items.map(({ name, href }) => (
        <Link href={href} key={name}>
          <a>
            <li>{name}</li>
          </a>
        </Link>
      ))}
    </ul>
  );
};
