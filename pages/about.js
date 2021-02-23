import Image from "next/image";
import { GiBookmarklet, GiBleedingEye, GiPhotoCamera } from "react-icons/gi";
import Meta from "../partials/seo-meta";

import styles from "../styles/About_Page.module.css";

const about = () => {
  return (
    <>
      <Meta
        title="About - A Wild Christian"
        desc="Christian Anagnostou's about page to learn about him, his storytelling, his process, and his gadgets."
        canonical="https://awildchristian.com/about"
      />

      <main>
        <section className={styles.about_img}>
          <Image src="/about_img.jpg" alt="About Me" layout="fill" />
          <div className={styles.about_text}>
            <p>
              <span>I</span> was born and raised in the Bay Area; the sort of place with smart cars
              carrying around even smarter people. Life moves faster and faster with every step, so
              taking moments to capture my unique experiences has become an essential part of how I
              see this world and the beautiful people within it.
            </p>
          </div>
        </section>
        <section className={styles.cols_container}>
          <div className={styles.col}>
            <div className={styles.col_title}>
              <GiBookmarklet />
              <h3>Storytelling</h3>
            </div>
            <div className={styles.col_body}>
              <p>
                What would life look like if we could never capture a moment and share it? And I
                don't mean the horror of not having an Instagram.
              </p>
              <p>
                Humans have been telling stories for centuries so that those who come after us can
                understand where we've been and, to me, photographs serve the same purpose in many
                ways. My story is best shared through my photos because each one was taken with the
                intention of capturing a moment to pass on.
              </p>
              <p>“Photography is the story I fail to put into words.” - Destin Sparks</p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.col_title}>
              <GiBleedingEye />
              <h3>My Process</h3>
            </div>
            <div className={styles.col_body}>
              <p>
                Usually, my proccess starts with taking my camera bag, a friend, and an IPA to some
                place in San Francisco. Sometimes it's for 30 minutes, sometimes it's all day, but
                no matter how long I'm out taking photos, my process is about experiencing something
                new every time.
              </p>
              <p>
                When I get home, I upload all the pictures to Lightroom and start the process of
                editing. Ideally, the edits that I make are minimal, so I try not to spend over 10
                minutes touching up and recoloring. There are days where I'll take 5 photos and all
                of them turn out to be "bangers" as we like to call them. And there are also days
                where I'll take 100+ and only 5 will turn out to make it into my collection. It's
                the best kind of hunting.
              </p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.col_title}>
              <GiPhotoCamera />
              <h3>Gadgets</h3>
            </div>
            <div className={styles.col_body}>
              <p>
                Well I suppose my iPhone started it all and honestly, I've taken far more pictures
                with it than any other camera I own. Many of which are on this site for you all to
                see.
              </p>
              <p>
                As for my current gear, my main camera is a Fujifilm XT-2 strapped with a XF 35mm
                f/2.0 R WR. I also have a little Olympus Stylus Zoom 170 film camera to satisfy my
                vintage cravings.
              </p>
              <p>"The best camera is the one you have with you" - Jay Maisel</p>
            </div>
          </div>
        </section>

        {/* <div className={styles.line} /> */}

        <figure className={styles.quote}>
          <q>It's not wise to violate rules until you know how to observe them.</q>
          <figcaption>
            <cite>&mdash; T. S. Eliot</cite>
          </figcaption>
        </figure>
      </main>
    </>
  );
};

export default about;
