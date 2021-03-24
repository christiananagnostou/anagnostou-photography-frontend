import { useState } from "react";

import styles from "../styles/Index.module.css";
import Meta from "../partials/seo-meta";
import ButtonLink from "../components/ButtonLink";
import SocialIcons from "../components/SocialIcons";
import Circle from "../components/SVGs/Circle";
import { LeftArrow, RightArrow } from "../components/SVGs/Arrows";

const textSections = [
  {
    title: "Perspective",
    paragraphs: [
      `I was born and raised in the Bay Area; the sort of place with smart cars carrying
    around even smarter people. Life moves faster and faster with every step, so taking
    moments to capture my unique experiences has become an essential part of how I see 
    this world and the beautiful people within it.`,
    ],
  },
  {
    title: "Storytelling",
    paragraphs: [
      `What would life look like if we could never capture a moment and share it? And I don't mean
       the horror of not having an Instagram.`,
      `Humans have been telling stories for centuries so that those who come after us can understand
       where we've been and, to me, photographs serve the same purpose in many ways. My story is best 
       shared through my photos because each one was taken with the intention of capturing a moment to pass on.`,
      `“Photography is the story I fail to put into words.” - Destin Sparks`,
    ],
  },
  {
    title: "Process",
    paragraphs: [
      `Usually, my proccess starts with taking my camera bag, a friend, and an IPA to some
    place in San Francisco. Sometimes it's for 30 minutes, sometimes it's all day, but
    no matter how long I'm out taking photos, my process is about experiencing something
    new every time.`,
      `I then upload all the pictures to Lightroom and start the process of
    editing. Ideally, the edits that I make are minimal and I try not to spend over 10
    minutes touching up and recoloring. There are days where I'll take 5 photos and all
    of them turn out to be "bangers" as we like to call them. And there are also days
    where I'll take 100+ and only 5 will turn out to make it into my collection. It's
    the best kind of hunting.`,
    ],
  },
  {
    title: "Gadgets",
    paragraphs: [
      `Well I suppose my iPhone started it all and honestly, I've taken far more pictures
    with it than any other camera I own. Many of which are on this site for you all to
    see.`,
      `As for my current gear, my main camera is a Fujifilm XT-2 strapped with a XF 35mm
    f/2.0 R WR. I also have a little Olympus Stylus Zoom 170 film camera to satisfy my
    vintage cravings.`,
      `"The best camera is the one you have with you" - Jay Maisel`,
    ],
  },
];

const about = () => {
  const [textSectionIndex, setTextSectionIndex] = useState(0);

  const handleArrowClick = (direction) => {
    switch (direction) {
      case "right":
        setTextSectionIndex(textSectionIndex < textSections.length - 1 ? textSectionIndex + 1 : 0);
        break;
      case "left":
        setTextSectionIndex(
          textSectionIndex === 0 ? textSections.length - 1 : textSectionIndex - 1
        );
        break;
    }
  };

  return (
    <>
      <Meta
        title="About - A Wild Christian"
        desc="Christian Anagnostou's about page to learn about him, his storytelling, his process, and his gadgets."
        canonical="https://awildchristian.com/about"
      />

      <main className={styles.main_container}>
        <div className={styles.left_main}>
          <h1>{textSections[textSectionIndex].title}</h1>
          {textSections[textSectionIndex].paragraphs.map((text, i) => (
            <h4 key={i} className={styles.about_h4}>
              {text}
            </h4>
          ))}

          <div className={styles.arrows}>
            <div onClick={() => handleArrowClick("left")}>
              <LeftArrow />
            </div>
            <div>
              <ButtonLink text="SEE ALBUMS" color="orange" route="/albums" />
            </div>
            <div onClick={() => handleArrowClick("right")}>
              <RightArrow />
            </div>
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

export default about;
