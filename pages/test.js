import React from "react";
import Link from "next/link";

import styles from "../styles/Test.module.css";
import SocialLinks from "../components/SocialLinks";

const test = () => {
  return (
    <div class={styles.container}>
      <div class={styles.header}>
        <div class={styles.logo}>
          CA
          <span />
        </div>
        <button class={styles.contact}>
          <Link href="/contact">CONTACT</Link>
        </button>
      </div>
      <div class={styles.left_main}>
        <h1>
          Hi<span>.</span> I'm Christian
        </h1>
        <h4>
          I'm A Web Developer and Photographer obsessed with capturing and creating digital
          experiences of this world and the beautiful people within it.
        </h4>
        <div class={styles.buttons}>
          <button>
            <Link href="/about">ABOUT</Link>
          </button>
          <button>
            <Link href="/albums">ALBUMS</Link>
          </button>
        </div>
        <SocialLinks />
      </div>
      <div class={styles.right_main}>
        <div class={styles.circle} />
        <img src={"profile_img.png"} alt="" />
      </div>
    </div>
  );
};

export default test;
