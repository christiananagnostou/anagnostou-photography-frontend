import { useContext } from "react";
import Link from "next/link";

import AuthContext from "../context/AuthContext";
import styles from "../styles/Header.module.css";
import HeaderIcon from "./SVGs/HeaderIcon";
import ButtonLink from "./ButtonLink";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link href="/">
          <a>
            <HeaderIcon />
          </a>
        </Link>
      </div>

      <nav className={styles.nav}>
        <ButtonLink text="CONTACT" color="orange" route="/contact" />

        {user ? (
          <ButtonLink text="ORDERS" color="blue" route="/orders" />
        ) : (
          <ButtonLink text="LOGIN" color="blue" route="/login" />
        )}
      </nav>
    </header>
  );
};

export default Header;
