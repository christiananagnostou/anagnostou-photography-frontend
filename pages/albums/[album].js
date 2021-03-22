import { useState } from "react";
import Link from "next/link";

import styles from "../../styles/AlbumSingle.module.css";
import SocialIcons from "../../components/SocialIcons";
import { LeftArrow, RightArrow } from "../../components/SVGs/Arrows";
import MouseIcon from "../../components/SVGs/MouseIcon";
import { API_URL } from "../../utils/urls";
import Meta from "../../partials/seo-meta";
import { fromImageToUrl } from "../../utils/urls";
import ButtonLink from "../../components/ButtonLink";
import Circle from "../../components/SVGs/Circle";
import { InViewImage } from "../../components/InViewImage";

const Album = ({ album }) => {
  const [viewState, setViewState] = useState("single");
  const [singleImageIndex, setSingleImageIndex] = useState(0);

  const shiftImageView = (direction) => {
    switch (direction) {
      case "left":
        setSingleImageIndex(
          singleImageIndex === 0 ? album.products.length - 1 : singleImageIndex - 1
        );
        break;
      case "right":
        console.log(direction, singleImageIndex);
        setSingleImageIndex(
          singleImageIndex < album.products.length - 1 ? singleImageIndex + 1 : 0
        );
        break;
    }
  };

  const singleImageDisplay = () => {
    const { name, meta_description, slug, image } = album.products[singleImageIndex];
    return (
      <div className={styles.display_container}>
        <div className={styles.image_info}>
          <h1>{name}</h1>
          <p>{meta_description}</p>
          <ButtonLink color="orange" text="BUY NOW" route={`/products/${slug}`} />
        </div>
        <div className={styles.image_controller_single}>
          <div onClick={() => shiftImageView("left")}>
            <LeftArrow />
          </div>
          <Link href={`/products/${slug}`}>
            <a>
              <img src={fromImageToUrl(image)} alt={name} className={styles.image_single} />
            </a>
          </Link>
          <div onClick={() => shiftImageView("right")}>
            <RightArrow />
          </div>
        </div>
      </div>
    );
  };

  const gridViewDisplay = () => {
    return (
      <>
        <div className={styles.display_container}>
          <div className={styles.image_controller_grid}>
            {album.products.map(({ image, slug, name }) => (
              <InViewImage
                threshold={0.3}
                image={image}
                href={`/products/${slug}`}
                imageStyles={styles.image_grid}
              >
                <h1>{name}</h1>
              </InViewImage>
            ))}
          </div>
        </div>
        <div className={styles.mouse_icon}>
          <MouseIcon />
        </div>
      </>
    );
  };

  return (
    <>
      <Meta
        title={`${album.name} - A Wild Christian`}
        desc={`${album.description}`}
        canonical={`https://awildchristian.com/albums${album.slug}`}
      />
      <main className={styles.main_container}>
        {viewState === "single" ? singleImageDisplay() : gridViewDisplay()}
        <aside className={styles.aside}>
          <div className={styles.left_aside}>
            <div className={styles.back_btn}>
              <Link href={"/albums"}>
                <a>BACK</a>
              </Link>
            </div>
            <div className={styles.view_switch}>
              <span
                className={viewState === "single" ? styles.highlight_text : undefined}
                onClick={() => setViewState("single")}
              >
                SINGLE
              </span>
              <span
                className={viewState === "grid" ? styles.highlight_text : undefined}
                onClick={() => setViewState("grid")}
              >
                GRID
              </span>
            </div>

            <div className={styles.slider}>
              <div
                className={styles.slider_num}
                style={{ left: `${singleImageIndex * 30 + 10}px` }}
              >
                {singleImageIndex + 1}
              </div>
              <div
                className={styles.slider_bar}
                style={{ width: `${album.products.length * 30}px` }}
              >
                <div
                  className={styles.slider_thumb}
                  style={{ left: `${singleImageIndex * 30}px` }}
                />
              </div>
            </div>
          </div>
          <SocialIcons direction="row" />
        </aside>
        <Circle styles={viewState === "single" ? styles.circle_single : styles.circle_grid} />
      </main>
    </>
  );
};

export async function getStaticProps({ params: { album } }) {
  const album_res = await fetch(`${API_URL}/albums/?slug=${album}`);
  const found = await album_res.json();

  return { props: { album: found[0] } };
}

export async function getStaticPaths() {
  const album_res = await fetch(`${API_URL}/albums/`);
  const albums = await album_res.json();

  return {
    paths: albums.map((album) => ({
      params: { album: String(album.slug) },
    })),
    fallback: false,
  };
}

export default Album;
