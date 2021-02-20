import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import AuthContext from "../context/AuthContext";
import styles from "../styles/Header.module.css";
import NavLinks from "./NavLinks";

const Header = () => {
  const { user } = useContext(AuthContext);

  const router = useRouter();

  const [mobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = (e) => {
    setMobileNavActive(!mobileNavActive);
  };

  useEffect(() => {
    setMobileNavActive(false);
  }, [router]);

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link href="/">
          <a>
            <h1>Christian Anagnostou</h1>
          </a>
        </Link>
      </div>
      <div className={styles.bars} onClick={toggleMobileNav}>
        <div className={`${styles.line} ${mobileNavActive && styles.active_line1}`} />
        <div className={`${styles.line} ${mobileNavActive && styles.active_line2}`} />
        <div className={`${styles.line} ${mobileNavActive && styles.active_line3}`} />
      </div>
      <nav className={`${styles.nav} ${mobileNavActive && styles.showNav}`}>
        <div className={styles.shadow} onClick={() => setMobileNavActive(false)} />
        <NavLinks />
        <div className={styles.auth}>
          {user ? (
            <Link href="/account">
              <a>
                <img src="/user_avatar.png" alt={user.email} />
              </a>
            </Link>
          ) : (
            <Link href="/login">
              <a className={`${styles.login} ${router.route === "/login" && styles.highlight}`}>
                Log in
              </a>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
