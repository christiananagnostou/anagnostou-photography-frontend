import Head from "next/head";
import Link from "next/link";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

import styles from "../styles/Index_Page.module.css";
import { API_URL, fromImageToUrl } from "../utils/urls";

export default function Home({ product }) {
  return (
    <div>
      <Head>
        <title>Anagnostou Photography</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.main_text}>
          <h1 className={styles.glow}>Christian Anagnostou</h1>
          <h3>Capturing life through a lens</h3>
          <Link href="/about">
            <a className={styles.bouncy_borders}>about</a>
          </Link>
          <Link href="/albums">
            <a className={styles.bouncy_borders} style={{ animationDelay: "0.1s" }}>
              albums
            </a>
          </Link>
          <div className={styles.social_links_container}>
            <Link href="/contact">
              <a className={styles.social_link}>
                <AiOutlineMail />
              </a>
            </Link>
            <a
              href="https://www.instagram.com/christian.anagnostou/"
              target="_blank"
              className={styles.social_link}
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/ChristianAnagnostou/"
              target="_blank"
              className={styles.social_link}
            >
              <AiOutlineLinkedin />
            </a>
            <a
              href="https://github.com/ChristianAnagnostou"
              target="_blank"
              className={styles.social_link}
            >
              <AiOutlineGithub />
            </a>
          </div>
        </div>
        <div className={styles.image_container}>
          <img className={styles.image} src={fromImageToUrl(product.image)} alt={product.name} />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const product_res = await fetch(`${API_URL}/products/?name=De-Escalator`);
  const product = await product_res.json();

  return { props: { product: product[0] } };
}
