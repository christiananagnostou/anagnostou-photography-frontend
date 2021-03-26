import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "../styles/Albums.module.css";
import SocialIcons from "../components/SocialIcons";
import { API_URL, fromImageToUrl } from "../utils/urls";
import Meta from "../partials/seo-meta";
import { LeftArrow, RightArrow } from "../components/SVGs/Arrows";
import Circle from "../components/SVGs/Circle";
import { useKeyPress } from "../hooks";

const albums = ({ albums }) => {
  const [albumOrder, setAlbumOrder] = useState([...albums]);
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);

  // Rotates the albumOrder and tracks currentAlbumIndex
  const shiftAlbumView = (direction) => {
    switch (direction) {
      case "right":
        setAlbumOrder((prevOrder) => [
          ...prevOrder.slice(1, prevOrder.length),
          ...prevOrder.slice(0, 1),
        ]);

        setCurrentAlbumIndex((prevIndex) =>
          prevIndex < albumOrder.length - 1 ? prevIndex + 1 : 0
        );

        break;
      case "left":
        setAlbumOrder((prevOrder) => [
          ...prevOrder.slice(-1),
          ...prevOrder.slice(0, prevOrder.length - 1),
        ]);

        setCurrentAlbumIndex((prevIndex) =>
          prevIndex === 0 ? albumOrder.length - 1 : prevIndex - 1
        );

        break;
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => shiftAlbumView("right"), 6000);
    return () => clearInterval(timeout);
  }, [currentAlbumIndex]);

  // Use arrows to navigate albums
  const rightKeyPress = useKeyPress("ArrowRight");
  const leftKeyPress = useKeyPress("ArrowLeft");

  useEffect(() => {
    rightKeyPress && shiftAlbumView("right");
    leftKeyPress && shiftAlbumView("left");
  }, [rightKeyPress, leftKeyPress]);

  return (
    <>
      <Meta
        title="Albums - A Wild Christian"
        desc="Browse all albums. Select an album to view more and purchase prints of Christian Anagnostou's favorite photographs."
        canonical="https://awildchristian.com/testAlbums"
      />

      <main className={styles.main_container}>
        <aside className={styles.aside}>
          <div className={styles.slider}>
            <div className={styles.slider_num} style={{ top: `${currentAlbumIndex * 30 + 5}px` }}>
              {currentAlbumIndex + 1}
            </div>
            <div className={styles.slider_bar} style={{ height: `${albums.length * 30}px` }}>
              <div className={styles.slider_thumb} style={{ top: `${currentAlbumIndex * 30}px` }} />
            </div>
          </div>
          <SocialIcons direction="column" />
        </aside>
        <section className={styles.album_container}>
          <div className={styles.album_controller}>
            <div onClick={() => shiftAlbumView("left")}>
              <LeftArrow />
            </div>

            <div className={styles.album_fan} style={{ transform: `rotate(${3 * 5}deg)` }}>
              {albumOrder.slice(albums.length - 4).map((album, i) => (
                <Link key={album.slug} href={`/albums/${album.slug}`}>
                  <img
                    src={fromImageToUrl(album.products[0].image)}
                    style={{ transform: `rotate(${-5 * i}deg)` }}
                  />
                </Link>
              ))}
            </div>

            <div onClick={() => shiftAlbumView("right")}>
              <RightArrow />
            </div>
          </div>
          <div className={styles.album_text}>
            <h1>{albumOrder[albums.length - 1].name}</h1>
            <p>{albumOrder[albums.length - 1].description}</p>
          </div>
        </section>

        <Circle styles={styles.circle} />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const album_res = await fetch(`${API_URL}/albums/`);
  const albums = await album_res.json();

  return { props: { albums } };
}

export default albums;
