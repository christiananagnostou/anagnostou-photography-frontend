import Head from "next/head";

import styles from "../../styles/Gallery.module.css";
import Gallery from "../../components/Gallery";
import { API_URL } from "../../utils/urls";

const Album = ({ album }) => {
  return (
    <>
      <Head>
        <title>{album.name} - Anagnostou Photography</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <div>
        <div className={styles.album_info}>
          <h2>{album.name}</h2>
          <p>{album.description}</p>
        </div>
        <Gallery products={album.products} />
      </div>
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
