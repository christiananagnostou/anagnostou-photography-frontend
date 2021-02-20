import Head from "next/head";

import styles from "../styles/Gallery.module.css";
import { API_URL } from "../utils/urls";
import { InViewImage } from "../components/InViewImage";

const albums = ({ albums }) => {
  return (
    <>
      <Head>
        <title>Albums - Anagnostou Photography</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <div className={styles.product_container}>
        {albums.map((album) => (
          <div className={styles.album} key={album.name}>
            <InViewImage
              image={album.products[0].image}
              href={`/albums/${album.slug}`}
              imageStyles={styles.product_img}
              threshold={0.2}
            >
              <p className={styles.album_name}>{album.name}</p>
            </InViewImage>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const album_res = await fetch(`${API_URL}/albums/`);
  const albums = await album_res.json();

  return { props: { albums: albums.reverse() } };
}

export default albums;
