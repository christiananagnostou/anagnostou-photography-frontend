import React from "react";
import styles from "../styles/Test.module.css";
import { AiFillInstagram, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const SocialLinks = () => {
  return (
    <div className={styles.social_links}>
      <a
        href="https://www.instagram.com/christian.anagnostou/"
        target="_blank"
        className={styles.social_link}
      >
        <AiFillInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/ChristianAnagnostou/"
        target="_blank"
        className={styles.social_link}
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/ChristianAnagnostou"
        target="_blank"
        className={styles.social_link}
      >
        <AiOutlineGithub />
      </a>
    </div>
  );
};

export default SocialLinks;
