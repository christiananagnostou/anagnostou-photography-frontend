import styles from "../styles/Index.module.css";
import Circle from "../components/SVGs/Circle";
import ButtonLink from "../components/ButtonLink";
import SocialIcons from "../components/SocialIcons";
import Meta from "../partials/seo-meta";

const test = () => {
  return (
    <>
      <Meta
        title="A Wild Christian"
        desc="Christian Anagnostou Photography. View and purchase prints of Christian Anagnostou's favorite photographs."
        canonical="https://awildchristian.com/"
        image={"profile_img.png"}
      />
      <main className={styles.main_container}>
        <div className={styles.left_main}>
          <h1>
            Hi<span>.</span> I'm Christian
          </h1>
          <h4>
            I'm a Web Developer and Photographer who's in love with capturing and creating digital
            experiences that inspire others.
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
          <img src={"profile_img.png"} alt="Christian Anagnostou" />
        </div>
      </main>
      <Circle styles={styles.circle} />
    </>
  );
};

export default test;
