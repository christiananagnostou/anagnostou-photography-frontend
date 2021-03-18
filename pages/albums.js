import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "../styles/Albums.module.css";
import SocialIcons from "../components/SocialIcons";
import { API_URL, fromImageToUrl } from "../utils/urls";
import Meta from "../partials/seo-meta";
import { LeftArrow, RightArrow } from "../components/SVGs/Arrows";
import Circle from "../components/SVGs/Circle";
import { useKeyPress } from "../hooks";

const albums = ({ albums, loaded = false }) => {
  // Reverse albums so that they are layered properly with position absolute stacking
  const [albumOrder, setAlbumOrder] = useState([...albums]);
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(1);

  // Rotates the albumOrder and tracks currentAlbumIndex
  const shiftAlbumView = (direction) => {
    switch (direction) {
      case "right":
        const first = albumOrder.shift();
        setAlbumOrder([...albumOrder, first]);

        setCurrentAlbumIndex(currentAlbumIndex < albums.length ? currentAlbumIndex + 1 : 1);
        break;
      case "left":
        const last = albumOrder.pop();
        setAlbumOrder([last, ...albumOrder]);

        setCurrentAlbumIndex(currentAlbumIndex === 1 ? albums.length : currentAlbumIndex - 1);
        break;
    }
  };

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
            <div
              className={styles.slider_num}
              style={{ top: `${(currentAlbumIndex - 1) * 30 + 5}px` }}
            >
              {currentAlbumIndex}
            </div>
            <div className={styles.slider_bar} style={{ height: `${albums.length * 30}px` }}>
              <div
                className={styles.slider_thumb}
                style={{ top: `${(currentAlbumIndex - 1) * 30}px` }}
              />
            </div>
          </div>
          <SocialIcons direction="column" />
        </aside>

        {loaded && (
          <section className={styles.album_container}>
            <div className={styles.album_controller}>
              <div onClick={() => shiftAlbumView("left")}>
                <LeftArrow color="#fff" />
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
                <RightArrow color="#fff" />
              </div>
            </div>
            <div className={styles.album_text}>
              <h1>{albumOrder[albums.length - 1].name}</h1>
              <p>{albumOrder[albums.length - 1].description}</p>
            </div>
          </section>
        )}
        <Circle styles={styles.circle} />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const album_res = await fetch(`${API_URL}/albums/`);
  const albums = await album_res.json();

  return { props: { albums, loaded: true } };
}

export default albums;
