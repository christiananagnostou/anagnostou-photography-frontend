import styles from "../styles/SocialIcons.module.css";

import GitHubLogo from "./SVGs/GitHubLogo";
import LinkedInLogo from "./SVGs/LinkedInLogo";
import InstagramLogo from "./SVGs/InstagramLogo";

const SocialIcons = ({ direction = "row" }) => {
  return (
    <div className={`${styles.social_icons} ${direction === "row" ? styles.row : styles.column}`}>
      <a
        href="https://github.com/ChristianAnagnostou"
        target="_blank"
        rel="noreferrer"
        aria-label="Github"
        aria-required="true"
      >
        <GitHubLogo />
      </a>
      <a
        href="https://www.linkedin.com/in/ChristianAnagnostou"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        aria-required="true"
      >
        <LinkedInLogo />
      </a>
      <a
        href="https://www.instagram.com/christian.anagnostou/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        aria-required="true"
      >
        <InstagramLogo />
      </a>
    </div>
  );
};

export default SocialIcons;
