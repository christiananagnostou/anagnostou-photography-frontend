import Link from "next/link";
import styles from "../styles/ButtonLink.module.css";

const ButtonLink = ({ text, color, route }) => {
  return (
    <Link href={route ? route : "#"}>
      <a className={`${styles.button} ${styles[color]}`}>{text}</a>
    </Link>
  );
};

export default ButtonLink;
