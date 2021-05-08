import Image from "next/image";

import styles from "../styles/Index.module.css";
import Circle from "../components/SVGs/Circle";
import ButtonLink from "../components/ButtonLink";
import SocialIcons from "../components/SocialIcons";
import Meta from "../partials/seo-meta";

const index = ({ homeImg }) => {
  return (
    <>
      <Meta
        title="A Wild Christian"
        desc="Christian Anagnostou Photography. View and purchase prints of Christian Anagnostou's favorite photographs."
        canonical="https://awildchristian.com/"
        image={"home_img.jpg"}
      />
      <main className={styles.main_container}>
        <div className={styles.left_main}>
          <h1>
            Hi<span>.</span> I'm Christian
          </h1>
          <h4>
            Whether I'm out roaming the streets of SF or camping in the desert with friends, I'm
            capturing the little moments to remember.
          </h4>
          <div>
            <ButtonLink text="ABOUT ME" color="blue" route="/about" />
            <ButtonLink text="MY ALBUMS" color="orange" route="/albums" />
          </div>
        </div>
        <div className={styles.social_icons}>
          <SocialIcons direction="row" />
        </div>
        <div className={styles.right_main}>
          <Image
            src={"/home_img.jpg"}
            alt="Ms. Poppins In Isolation"
            width={2}
            height={3}
            layout="responsive"
          />
        </div>
      </main>
      <Circle styles={styles.circle} />
    </>
  );
};

export default index;
